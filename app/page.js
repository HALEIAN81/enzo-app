import './page.css';
import Image from 'next/image';
import nurseImage from '../public/nurse_tp_img.png'; // Replace with your image

export default function Home() {
  return (
    <div className="container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">🩺 ENZO</div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <div className="dropdown">
            <button>Services ▾</button>
            <div className="dropdown-content">
              <a href="#">Telehealth</a>
              <a href="#">AI Insights</a>
            </div>
          </div>
          <a href="#">About Us</a>
          <a href="#">Products</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </nav>
        <div className="search-contact">
          <input type="text" placeholder="Search" />
          <button>Contact Us</button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-text">
          <p className="tagline">⚡ Online Platforms offer loans</p>
          <h1>Smarter AI Healthcare Starts <br /> With <span className="highlight">Enzo</span></h1>
          <p className="description">
            Enzo is an AI-powered medical platform built to transform complex healthcare data into clear, actionable insights.
          </p>
          <div className="cta-buttons">
            <button className="primary">Book a Free Consultation</button>
            <button className="secondary">▶ Watch a Demo</button>
          </div>
        </div>

        <div className="hero-image">
          <Image src={nurseImage} alt="Healthcare Professional" width={350} height={480} />
          <div className="dashboard-card">
            <h3>Dashboard Report</h3>
            <div className="graph-placeholder">[Graph Placeholder]</div>
          </div>
          <div className="progress-card">
            <h4>Your Daily Progress</h4>
            <div className="progress-info">
              <div className="progress-circle">
                <div className="number">65</div>
                <div className="denominator">/10,370</div>
              </div>
              <div>
                <p>💜 Heart Pts: <strong>120</strong></p>
                <p>🦶 Steps: <strong>3,570</strong></p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Partners */}
      <footer className="partners">
        {/* <span></span>
        <span>infinitum</span>
        <span>Dräger</span>
        <span>IKA</span>
        <span>MOLDEX</span>
        <span>ABX</span> */}
      </footer>
    </div>
  );
}
