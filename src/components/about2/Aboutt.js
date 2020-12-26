import React from "react";
import img from "../../assets/img-2.jpg";
import './about2.css'
function Aboutt() {
  return (
    <section id="about2" class="about2 container" style={{background:"white"}} >
      <div class="about2-info">
        <h1 class="about2-info-heading">about2 Me</h1>
        <p class="about2-info-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          suscipit quidem ullam voluptates repellendus explicabo placeat,
          expedita ratione saepe eaque dolorum sed deleniti, odit numquam,
          nostrum tempore quos corrupti rem.
        </p>
        <a href="#" type="button" class="about2-info-button">
          Download Resume
        </a>
      </div>
      <div class="about2-img">
        <div class="about2-img-wrapper">
          <img src={img} alt="image" />
        </div>
      </div>
    </section>
  );
}

export default Aboutt;
