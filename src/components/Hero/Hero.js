import React from "react";

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
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
