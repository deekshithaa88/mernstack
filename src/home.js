import React from 'react';

function Home() {
  return (
    <div className="container py-5 text-center">
      <img
        src="C:\Users\saisu\Downloads\dees.jpg" // Replace with your actual image URL
        alt="Deekshithaa"
        className="rounded-circle mb-3"
      />
      <h1 className="fw-bold">Deekshithaa S.V</h1>
      <p>Phone: 7904767424 | Email: deekshithaa.sv2023aiml@sece.ac.in</p>
      <div>
        <a href="https://github.com/deekshithaa88" className="btn btn-primary mx-2">
          GitHub
        </a>
        <a href="#" className="btn btn-secondary mx-2">
          LinkedIn
        </a>
        <a
          href="C:\Users\saisu\Downloads\DEEKSHITHAA_RESUME (2).docx"
          download
          className="btn btn-outline-dark mx-2"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Home;
