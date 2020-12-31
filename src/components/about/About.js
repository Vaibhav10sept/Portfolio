import React from 'react'
import './about.css'
import work from "../../../src/assets/work3.jpg";
function About(props) {
    return (
        <div>
            <section id="about" ref={props.aboutRef}>
                <div class="about-text">
                    <h1 className="about__subtitle" >About Us</h1>
                    <h2 className="about__profession">FreeLancing FrontEnd Developer</h2>
                    <p className="about__text">Enjoy the ultimate web design editor. Divi is like Photoshop or Sketch for the web. It brings an advanced design interface to WordPress that both beginners and experts will fall in love with. It's incredibly smart, super flexible, amazingly powerful and visual by nature. This is how designing for the web is meant to be done.</p>
                    <button className="about__social-icon">View More Details</button>
                </div>
                <div class="about-model">
                    <img class="imagecard" src={work} alt="model" />
                </div>


            </section>
        </div>
    )
}

export default About
