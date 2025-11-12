import React from 'react';

const projects = [
  {
    title: "Dejovicz Homepage",
    description: "Clarity-first landing page with WhatsApp button and chatbot integration.",
    link: "https://dejovicz.netlify.app"
  },
  {
    title: "React Portfolio",
    description: "Modular, animated portfolio built with React and Vite.",
    link: "https://nagindaryadav.netlify.app"
  }
];

const Projects = () => (
  <section style={{ padding: '2rem' }}>
    <h2>🚀 Projects</h2>
    {projects.map((proj, i) => (
      <div key={i} style={{ marginBottom: '1rem' }}>
        <h3>{proj.title}</h3>
        <p>{proj.description}</p>
        <a href={proj.link} target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    ))}
  </section>
);

export default Projects;