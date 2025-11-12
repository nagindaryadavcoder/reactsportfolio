import React from "react";

const Footer = () => (
  <footer>
    <p>© {new Date().getFullYear()} De Jovicz. Built with clarity.</p>
    <div>
      <a href="https://github.com/nagindaryadavcoder" target="_blank" rel="noopener noreferrer">GitHub</a> | 
      <a href="https://www.linkedin.com/in/nagindaryadav/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
      <a href="https://wa.me/7099625948" target="_blank" rel="noopener noreferrer">WhatsApp</a>
    </div>
  </footer>
);

export default Footer;