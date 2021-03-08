import React from 'react'
import './service.css'
import work from "../../../src/assets/work3.jpg";
import byte from "../../../src/assets/bytesplex.png";
import prop from "../../../src/assets/props.png";
import mahesh from "../../../src/assets/mahesh.png";


function Service(props) {
    return (

        <section id="services" ref={props.servicesRef}>
            <div class="s-heading">
                <h1>Internships</h1>
                <p>Here Is Some Of The Internships That I Have Done.</p>
            </div>
            <div class="b-container">
                <div class="s-box">
                    <div class="s-b-img">
                        <div class="s-type">BytesPlex</div>
                        <img src={byte} />
                    </div>
                    <div class="s-b-text">
                       <div className="s-b-text-box"> With Divi, every part of your website is customizable. You have complete freedom to create the perfect website for you or your clients. Easily change colors, fonts and text styles. Apply stunning animations.</div>
                    </div>
                </div>
                <div class="s-box">
                    <div class="s-b-img">
                        <div class="s-type">PropsReturn</div>
                        <img src={prop} />
                    </div>
                    <div class="s-b-text">
                       <div className="s-b-text-box"> With Divi, every part of your website is customizable. You have complete freedom to create the perfect website for you or your clients. Easily change colors, fonts and text styles. Apply stunning animations.</div>
                    </div>
                </div>
                <div class="s-box">
                    <div class="s-b-img">
                        <div class="s-type">Maheshwari Electricals</div>
                        <img src={mahesh} />
                    </div>
                    <div class="s-b-text">
                   <div className="s-b-text-box">With Divi, every part of your website is customizable. You have complete freedom to create the perfect website for you or your clients. Easily change colors, fonts and text styles. Apply stunning animations.</div>
                    </div>
                </div>
            </div>


        </section>

    );
}

export default Service
