"use client";

import { useEffect, useState } from "react";

export default function WelcomingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2500);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3200);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        className={`welcome-screen ${isExiting ? "welcome-screen-exit" : ""}`}
      >
        <div className="welcome-content">
          <p className="welcome-label">WELCOME TO MY PORTFOLIO</p>

          <h1 className="welcome-name">
            HELLO, I'M <span>GIBRAN.</span>
          </h1>

          <p className="welcome-profession">
            UI/UX DESIGNER & FRONT END DEVELOPER
          </p>

          <div className="welcome-loader">
            <div className="welcome-loader-info">
              <span>LOADING PORTFOLIO</span>
              <span>100%</span>
            </div>

            <div className="welcome-loader-track">
              <div className="welcome-loader-progress" />
            </div>
          </div>

          <p className="welcome-footer">DESIGNED WITH PASSION</p>
        </div>
      </div>

      <style jsx>{`
        .welcome-screen {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: #eaffc8;
          opacity: 1;
          visibility: visible;
          transition:
            opacity 0.7s ease,
            visibility 0.7s ease;
        }

        .welcome-screen-exit {
          opacity: 0;
          visibility: hidden;
        }

        .welcome-content {
          width: 100%;
          max-width: 650px;
          text-align: center;
        }

        .welcome-label {
          margin-bottom: 20px;
          color: #568e50;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 4px;
          animation: welcomeFadeUp 0.8s ease both;
        }

        .welcome-name {
          color: #17633f;
          font-size: clamp(38px, 8vw, 76px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -3px;
          animation: welcomeFadeUp 0.8s ease 0.2s both;
        }

        .welcome-name span {
          background: linear-gradient(90deg, #006b3c, #399764, #8abf45);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: welcomeGradient 3s linear infinite;
        }

        .welcome-profession {
          margin-top: 20px;
          color: #42634c;
          font-size: clamp(10px, 2vw, 13px);
          font-weight: 600;
          letter-spacing: 2px;
          line-height: 1.8;
          animation: welcomeFadeUp 0.8s ease 0.4s both;
        }

        .welcome-loader {
          width: 100%;
          max-width: 300px;
          margin: 55px auto 0;
          animation: welcomeFadeUp 0.8s ease 0.6s both;
        }

        .welcome-loader-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          color: #17633f;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .welcome-loader-track {
          width: 100%;
          height: 5px;
          overflow: hidden;
          border-radius: 20px;
          background: #c9dfa9;
        }

        .welcome-loader-progress {
          width: 0;
          height: 100%;
          border-radius: 20px;
          background: #568e50;
          animation: welcomeLoading 2.3s ease forwards;
        }

        .welcome-footer {
          margin-top: 25px;
          color: #568e50;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 3px;
          animation: welcomeFadeUp 0.8s ease 0.8s both;
        }

        @keyframes welcomeFadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes welcomeLoading {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes welcomeGradient {
          to {
            background-position: 200% center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .welcome-content *,
          .welcome-name span,
          .welcome-loader-progress {
            animation: none !important;
          }

          .welcome-loader-progress {
            width: 100%;
          }

          .welcome-screen {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
