import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">UEI - Unique Educational Trust</h3>
            <p className="footer-text">
              Empowering education with excellence since 2025. We are committed to guiding students to a brighter future.
            </p>
            <p className="footer-text">
              <strong>Founder:</strong> G. Panneer Selvam, B.E.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Us</h4>
            <p><a href="tel:+919944849924">📞 +91-9944849924</a></p>
            <p><a href="mailto:Uniqueedutrust@gmail.com">📧 Uniqueedutrust@gmail.com</a></p>
      <p>🏠 145A, Madurai Agricultural Market Committee, Anna Nagar, Madurai – 625020</p>
     

          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          &copy; 2025 Unique Educational Trust. All rights reserved.
        </div>
      </footer>

      <style>
        {`
          .footer-container {
            background-color: rgb(148, 255, 173);
            color: #000000;
            font-size: 0.9rem;
            padding: 2rem 1rem;
            margin-top: auto;
          }

          hr {
            border: none;
            border-top: 2px solid #000000;
            margin: 2rem auto;
            width: 90%;
          }

          p {
            color: #000000;
            margin: 0.5rem 0;
          }
            .footer-section p {
  line-height: 1.5;
}


          .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            max-width: 1100px;
            margin: 0 auto;
          }

          .footer-section {
            display: flex;
            flex-direction: column;
          }

          .footer-title {
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            color: #000000;
          }

          .footer-subtitle {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #000000;
          }

          .footer-text {
            line-height: 1.6;
            color: #000000;
          }

          .footer-links {
            list-style: none;
            padding: 0;
          }

          .footer-links li {
            margin: 0.3rem 0;
          }

          .footer-links a,
          .footer-section a {
            color: #000000;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .footer-links a:hover,
          .footer-section a:hover {
            color: #2e7d32;
          }

          .footer-bottom {
            margin-top: 2rem;
            text-align: center;
            padding-top: 1rem;
            font-size: 0.85rem;
            color: #000000;
          }
        `}
      </style>
    </>
  );
}
