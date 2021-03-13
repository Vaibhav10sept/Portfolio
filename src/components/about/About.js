import React from 'react'
import './about.css'
import work from "../../../src/assets/work3.jpg";
import { useLocation, withRouter, Link, useHistory } from "react-router-dom";

function About(props) {
    return (
        <div data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="10"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center">
            <section id="about" ref={props.aboutRef}>
                <div class="about-text">
                    <h1 className="about__subtitle" >Know Me</h1>
                    {/* <h2 className="about__profession">FreeLancing FrontEnd Developer</h2> */}
                    <p className="about__text">I am a BE final year computer science student. Computer has always been my favourite subject, during my college internship period I have developed many projects(you will find in the section below). I am also skilled in C, C++, PYTHON, JAVASCRIPT, JAVA.
                    I have also worked tirelessly on my communication, team working skills. Over the year, I have acquired relevant skills and experience. On the other hand, I am a self motivated person. Being a fast learner, I quickly pick up business knowledge related to my projects. Lastly I would like to add that I work both as an individual contributor and also as a team member.
                    </p>
                  <button className="about__social-icon">   <Link to="/files/LOR-vaibhav tiwari.pdf" target="_blank" download>Download LOR</Link></button>

                </div>
                <div class="about-model" data-aos="flip-up">
                    <img class="imagecard" src={work} alt="model" />
                </div>


            </section>
        </div>
    )
}

export default About
