import React from 'react';
import './App.css';

function App() {
  const tags = ["#CyberSecurity", "#Docker", "#OpenWrt", "#React", "#MusicProduction"];

  return (
    <div className="page-wrapper">
      {/* 背景裝飾圓形 */}
      <div className="circle circle-top"></div>
      <div className="circle circle-bottom"></div>

      <div className="container-panel">
        <header className="profile-header">
          <h1 className="name-title">鍾秉宸</h1>
          <div className="nickname-tag">
            Noctis 
          </div>
        </header>

        <main className="intro-card">
          <p className="status-line"> &gt; ACCESSING PROFILE... </p>
          <p className="bio-text">
            Hello! I am a <span className="highlight">Computer Science</span> student from Taiwan with a deep interest in building secure and efficient systems. 
            I specialize in <span className="highlight">network security</span> and <span className="highlight">containerization</span>, often experimenting with OpenWrt and Docker environments. 
            Beyond coding, I'm a music enthusiast who loves <span className="highlight">music production</span> and exploring the art of sampling. 
            My goal is to master cloud infrastructure and contribute to the future of cybersecurity.
          </p>
        </main>

        <div className="tag-group">
          {tags.map((tag) => (
            <span key={tag} className="skill-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="action-area">
          <a href="mailto:your-email@example.com" className="connect-btn">
            Establish Connection
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;