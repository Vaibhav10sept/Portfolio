import React from "react";
import {  Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import red from "../../assets/red.png";


import "./hero.css";

function Hero(props) {
  return (
    <div style={{position:"relative",top:"-0px"}} ref={props.homeRef}>
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
              Sanskar Sachan <span></span>
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
