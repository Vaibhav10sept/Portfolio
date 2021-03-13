import React from "react";
import {  Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import red from "../../assets/red.png";


import "./hero.css";

function Hero(props) {
  return (
    <div style={{position:"relative",top:"-0px"}} ref={props.homeRef}   data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
      <section id="hero">
        <div class="hero containerhero">
          <div>
            <h1>
              Hello, <span></span>
            </h1>
            <h1>
              My Name is <span></span>
            </h1>
            <h1>
              Vaibhav Tiwari <span></span>
            </h1>
            <img src={arrow} className="arrow"/>
              <button className="buttondownload about__social-icon"><Link to="/files/VAIBHAV TIWARI(resume).pdf" target="_blank" download>Click To Download Resume</Link></button>
          </div>
        
        </div>
        

      </section>
    </div>
  );
}

export default Hero;
