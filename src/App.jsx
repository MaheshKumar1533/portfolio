import { useEffect } from 'react'
import './App.css'
import { initAnimations } from './scrollAnimations.js'

function App() {
  useEffect(() => {
    initAnimations();
  }, []);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">Mahesh Kumar</div>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#achievements">Achievements</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="hero">
        <div className="container">
          <div className="hero-content fade-in">
            <h1>Vaileti Mahesh Kumar</h1>
            <p className="tagline">Full Stack Developer & Software Engineer</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Agraharam, Badvel, Kadapa</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+91 9398983918</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>vailetimaheshkumar1@gmail.com</span>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="social-link" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>

            <button onClick={() => window.open('/resume.pdf', '_blank')}>Download Resume</button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title fade-in">Technical Skills</h2>
          <div className="skills-grid">
            <div className="card skill-category fade-in">
              <h3><i className="fas fa-code"></i> Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">C</span>
              </div>
            </div>
            
            <div className="card skill-category fade-in">
              <h3><i className="fas fa-layer-group"></i> Frameworks & Libraries</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">Flask</span>
              </div>
            </div>
            
            <div className="card skill-category fade-in">
              <h3><i className="fas fa-database"></i> Databases</h3>
              <div className="skill-tags">
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">SQLite3</span>
              </div>
            </div>
            
            <div className="card skill-category fade-in">
              <h3><i className="fas fa-desktop"></i> Operating Systems</h3>
              <div className="skill-tags">
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">Windows</span>
                <span className="skill-tag">Ubuntu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section" style={{background: 'var(--bg-secondary)'}}>
        <div className="container">
          <h2 className="section-title fade-in">Education</h2>
          <div className="education-timeline">
            <div className="education-item slide-in-left">
              <h3>Bachelor of Technology in Computer Science Engineering</h3>
              <div className="education-meta">
                <strong>Madanapalle Institute of Technology & Science</strong> | 2022-2026 | CGPA: 9.13
              </div>
              <p>Kadiri Road, Andhra Pradesh</p>
            </div>
            
            <div className="education-item slide-in-left">
              <h3>Intermediate (CBSE)</h3>
              <div className="education-meta">
                <strong>Jawahar Navodaya Vidyalaya Kadapa</strong> | 2020-2022 | 89%
              </div>
              <p>N R Palli, Rajampet, Kadapa, Andhra Pradesh</p>
            </div>
            
            <div className="education-item slide-in-left">
              <h3>Matriculation (CBSE)</h3>
              <div className="education-meta">
                <strong>Jawahar Navodaya Vidyalaya Kadapa</strong> | 2019-2020 | 89%
              </div>
              <p>N R Palli, Rajampet, Kadapa, Andhra Pradesh</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title fade-in">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card scale-in">
              <div className="project-image">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="project-content">
                <h3 className="project-title">MITS FLEX</h3>
                <p><strong>Project Lead</strong> | 3 Months | Team of 3</p>
                <p>A comprehensive students' performance tracker helping faculty monitor 500+ students, deployed on internal network using nginx and gunicorn.</p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">HTML/CSS</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Nginx</span>
                </div>
              </div>
            </div>

            <div className="project-card scale-in">
              <div className="project-image">
                <i className="fas fa-comments"></i>
              </div>
              <div className="project-content">
                <h3 className="project-title">Realtime Chat Application</h3>
                <p><strong>Full Stack Developer</strong> | 40 Days | Team of 2</p>
                <p>Real-time chat application using Django, Daphne, and Web Sockets, providing fast, secure messaging with instant updates.</p>
                <div className="project-tech">
                  <span className="tech-tag">Django</span>
                  <span className="tech-tag">WebSockets</span>
                  <span className="tech-tag">SQLite3</span>
                  <span className="tech-tag">JavaScript</span>
                </div>
              </div>
            </div>

            <div className="project-card scale-in">
              <div className="project-image">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="project-content">
                <h3 className="project-title">EventSync</h3>
                <p><strong>Full Stack Developer</strong> | 2 Months | Team of 2</p>
                <p>Event management webapp with real-time updates, pass generation, QR code verification, registration filtering, and multi-role access.</p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">QR Codes</span>
                  <span className="tech-tag">JavaScript</span>
                </div>
              </div>
            </div>

            <div className="project-card scale-in">
              <div className="project-image">
                <i className="fas fa-school"></i>
              </div>
              <div className="project-content">
                <h3 className="project-title">Green Valley-IMS</h3>
                <p><strong>Full Stack Developer</strong> | 1 Month | Team of 6</p>
                <p>Smart institutional management system with multi-role access, feedback, attendance, and leave request features.</p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">HTML/CSS</span>
                  <span className="tech-tag">JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section" style={{background: 'var(--bg-secondary)'}}>
        <div className="container">
          <h2 className="section-title fade-in">Achievements & Certifications</h2>
          <div className="achievements-grid">
            <div className="achievement-card card scale-in">
              <div className="achievement-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h3>GATE 2025 Qualified</h3>
              <p>Score: 426 | AIR: 12,156</p>
            </div>
            
            <div className="achievement-card card scale-in">
              <div className="achievement-icon">
                <i className="fas fa-medal"></i>
              </div>
              <h3>NPTEL Top 1%</h3>
              <p>Introduction to Programming in C - 96% Score</p>
            </div>
            
            <div className="achievement-card card scale-in">
              <div className="achievement-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>SIH Hackathon Winner</h3>
              <p>1st Position in Internal Hackathon 2024 at MITS</p>
            </div>
            
            <div className="achievement-card card scale-in">
              <div className="achievement-icon">
                <i className="fas fa-crown"></i>
              </div>
              <h3>Vice President CSE</h3>
              <p>Department Leadership at MITS (2024-25)</p>
            </div>
            
            <div className="achievement-card card scale-in">
              <div className="achievement-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>WebClub Coordinator</h3>
              <p>MITS WebClub 2024-25</p>
            </div>
            
            <div className="achievement-card card scale-in">
              <div className="achievement-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>InnoSpark Organizer</h3>
              <p>National Level Hackathon in association with CSI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <h2 className="section-title fade-in">Let's Connect</h2>
          <div className="social-links fade-in">
            <a href="#" className="social-link" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-link" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:vailetimaheshkumar1@gmail.com" className="social-link" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="tel:+919398983918" className="social-link" aria-label="Phone">
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
