import React from "react";

import './footer.css'
function Footer() {
  return (
    <div>
      <section id="footer">
        <div class="footer container">
          
          <h2 data-aos="fade-top">Developed and designed by</h2>
          <div class="brand" style={{fontSize:"35px!important"}}>
            <h1 data-aos="fade-down" data-aos-delay="500">
              <span>V</span>aibhav <span>T</span>iwari
            </h1>
          </div>
          <div class="social-icon"  >
            <div class="social-item"  >
              <a href="https://www.linkedin.com/in/vaibhav-tiwari-8043b6175/" target="_blank">
                <img src="https://img.icons8.com/dusk/64/ffffff/linked-mailbox.png" />
              </a>
            </div>
            <div class="social-item"  >
            <a href="https://www.hackerrank.com/vaibhavtiwari101" target="_blank"> 

                <img src="https://img.icons8.com/windows/32/ffffff/hackerrank.png" />
              </a>
            </div>
            <div class="social-item" >
              <a href="https://github.com/Vaibhav10sept" target="_blank"> 
                <img src="https://img.icons8.com/bubbles/50/000000/github.png" />
              </a>
            </div>

          </div>
          <p >Copyright © 2021 Vaibhav. All rights reserved</p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
