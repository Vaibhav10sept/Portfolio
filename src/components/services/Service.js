import React from 'react'
import './service.css'
import work from "../../../src/assets/work3.jpg";
function Service(props) {
    return (

        <section id="services" ref={props.servicesRef}>
            <div class="s-heading">
                <h1>Services</h1>
                <p>Here Is The Some Servies Which We Provide You.</p>
            </div>
            <div class="b-container">
                <div class="s-box">
                    <div class="s-b-img">
                        <div class="s-type">Front-End</div>
                        <img src={work} />
                    </div>
                    <div class="s-b-text">
                       <div className="s-b-text-box"> With Divi, every part of your website is customizable. You have complete freedom to create the perfect website for you or your clients. Easily change colors, fonts and text styles. Apply stunning animations.</div>
                    </div>
                </div>
                <div class="s-box">
                    <div class="s-b-img">
                        <div class="s-type">Back-End</div>
                        <img src={work} />
                    </div>
                    <div class="s-b-text">
                       <div className="s-b-text-box"> With Divi, every part of your website is customizable. You have complete freedom to create the perfect website for you or your clients. Easily change colors, fonts and text styles. Apply stunning animations.</div>
                    </div>
                </div>
                <div class="s-box">
                    <div class="s-b-img">
                        <div class="s-type">SEO</div>
                        <img src={work} />
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
