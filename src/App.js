import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            Deekshithaa S.V
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#certifications">
                  Certifications
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <div id="home" className="container py-5 text-center">
        <img
          src="C:\Users\saisu\Downloads\dees.jpg" // Replace with your actual image URL
          alt="Deekshithaa"
          className="rounded-circle mb-3"
        />
        <h1 className="fw-bold">Deekshithaa S.V</h1>
        <p>Phone: 7904767424 | Email: deekshithaa.sv2023aiml@sece.ac.in</p>
        <div>
          <a href="#" className="btn btn-primary mx-2">
            GitHub
          </a>
          <a href="#" className="btn btn-secondary mx-2">
            LinkedIn
          </a>
          <a
            href="/DEEKSHITHAA_RESUME WORD.docx"
            download
            className="btn btn-outline-dark mx-2"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Education Section */}
      <section id="education" className="container mb-5">
        <h2 className="fw-bold">Education</h2>
        <ul className="list-group">
          <li className="list-group-item">
            B.E CSE (AIML) - Sri Eshwar College of Engineering (2023-2027)
          </li>
          <li className="list-group-item">
            HSC - Vishwadeepthi School (76.6%) (2021-2023)
          </li>
          <li className="list-group-item">
            SSLC - Shaanthi School (100%) (2017-2021)
          </li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mb-5">
        <h2 className="fw-bold">Projects</h2>
        <div>
          <h5 className="fw-bold">Voice Vision (Gen AI)</h5>
          <p>
            A technology for blind people that provides accessibility through
            audio-based assistance, including text-to-speech, voice commands,
            object recognition, and real-time navigation. <br />
            <strong>Technologies:</strong> Python
          </p>
        </div>
        <div>
          <h5 className="fw-bold">AutoCorrector</h5>
          <p>
            An NLP-based project for correcting spelling and grammatical errors
            in real-time using tokenization, part-of-speech tagging, and
            contextual analysis. <br />
            <strong>Technologies:</strong> Python
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mb-5">
        <h2 className="fw-bold">Skills</h2>
        <ul className="list-group">
          <li className="list-group-item">
            Programming Languages: C, C++, Python
          </li>
          <li className="list-group-item">
            Web Technologies: HTML, CSS, JavaScript (Beginner)
          </li>
          <li className="list-group-item">
            Tools: VSCode, Canva, GitHub, PowerPoint, JupyterNotebook
          </li>
          <li className="list-group-item">Core: Data Structures (Beginner)</li>
        </ul>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="container mb-5">
        <h2 className="fw-bold">Certifications & Achievements</h2>
        <ul className="list-group">
          <li className="list-group-item">Learn C | CodeChef (2023)</li>
          <li className="list-group-item">
            Python Fundamentals for Beginners | GreatLearning (2023)
          </li>
          <li className="list-group-item">
            Unsupervised Machine Learning with K-means | GreatLearning (2023)
          </li>
          <li className="list-group-item">Learn Python | CodeChef (2024)</li>
          <li className="list-group-item">Learn C++ | CodeChef (2024)</li>
          <li className="list-group-item">Winner of Freshathon (2024)</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mb-5">
        <h2 className="fw-bold">Contact</h2>
        <form
          action="mailto:deekshithaa.sv2023aiml@sece.ac.in"
          method="post"
          encType="text/plain"
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;