import React from "react";

import './footer.css'
function Footer() {
  return (
    <div>
      <section id="footer">
        <div class="footer container">
          
          <h2>Developed and designed by</h2>
          <div class="brand" style={{fontSize:"35px!important"}}>
            <h1 >
              <span>V</span>aibhav <span>T</span>iwari
            </h1>
          </div>
          <div class="social-icon">
            <div class="social-item">
              <a href="#">
                <img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" />
              </a>
            </div>
            <div class="social-item">
              <a href="#">
                <img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" />
              </a>
            </div>
            <div class="social-item">
              <a href="#">
                <img src="https://img.icons8.com/bubbles/100/000000/twitter.png" />
              </a>
            </div>
            <div class="social-item">
              <a href="#">
                <img src="https://img.icons8.com/bubbles/100/000000/behance.png" />
              </a>
            </div>
          </div>
          <p>Copyright © 2020 Vaibhav. All rights reserved</p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
