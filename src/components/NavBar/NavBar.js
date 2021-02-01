import React from 'react';
import './NavBar.css';

export default function NavBar() {
    return (
        <div className="footer-nav-bar">
            <div className="start">
                <h3>Start at the bottom</h3>
            </div>
          <div className="logo">
              <img className="bottom-img" src="images/bottomUp.png" alt=""></img>
          </div>
          <div className="social-link">
              <a className="samuel" href="https://www.samueltrahan.com" target="_blank" rel="noreferrer">Find Me</a>
          </div>
        </div>
    )
}
