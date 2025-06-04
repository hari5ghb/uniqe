import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animate.json'; // your Lottie file

export default function Body() {
  return (
    <>
      <div className="body-container">
        <div className="animation-wrapper">
          <Lottie animationData={animationData} loop={true} style={{ width: 500, height: 500 }} />
        </div>

        <h1>Website Under Construction</h1>
        <p>
          We are working hard to bring you a better experience.<br />
          Please check back soon.
        </p>
      </div>

      <style>{`
        .body-container {
          height: 80vh;
          background-color: rgb(255, 255, 255);
          text-align: center;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 6rem; /* Added margin bottom to create space before footer */
        }

        .animation-wrapper {
          margin-bottom: 1.5rem;
          width: 550px;
          height: 650px;
        }

        h1 {
          font-size: 2.25rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #0f1e40;
        }

        p {
          font-size: 1.125rem;
          color: #475569;
          line-height: 1.5;
          max-width: 400px;
        }

        @media (max-width: 480px) {
          .animation-wrapper {
            margin-bottom: 1rem;
          }

          h1 {
            font-size: 1.75rem;
          }

          p {
            font-size: 1rem;
            max-width: 90%;
          }
        }
      `}</style>
    </>
  );
}
