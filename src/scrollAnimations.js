// Scroll animations for portfolio
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll(
    '.fade-in, .slide-in-left, .slide-in-right, .scale-in'
  );

  animatedElements.forEach(el => {
    observer.observe(el);
  });

  // Add stagger effect to grid items
  const gridContainers = document.querySelectorAll('.skills-grid, .projects-grid, .achievements-grid');
  gridContainers.forEach(container => {
    const items = container.children;
    Array.from(items).forEach((item, index) => {
      item.classList.add('fade-in', 'stagger-animation');
      item.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(item);
    });
  });

  // Add animation to timeline items
  const timelineItems = document.querySelectorAll('.education-item');
  timelineItems.forEach((item, index) => {
    item.classList.add('slide-in-left', 'stagger-animation');
    item.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(item);
  });
};

// Smooth scroll for navigation links
export const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
};

// Initialize all animations when DOM is loaded
export const initAnimations = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initScrollAnimations();
      initSmoothScroll();
    });
  } else {
    initScrollAnimations();
    initSmoothScroll();
  }
};
