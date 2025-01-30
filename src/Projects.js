import React from 'react';

function Projects() {
  return (
    <div className="container mb-5">
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
    </div>
  );
}

export default Projects;
