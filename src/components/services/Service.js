import React from 'react'
import './service.css'
function Service() {
    return (

        <section id="services">
            <div class="s-heading">
                <h1>Services</h1>
                <p>Here Is The Some Servies Which We Provide You.</p>
            </div>
            <div class="b-container">
                <div class="s-box">
                    <div class="s-b-img">
                        <div class="s-type">Front-End</div>
                        <img src="images/s1.png" />
                    </div>
                    <div class="s-b-text">
                        <a href="#">With Divi, every part of your website is customizable. You have complete freedom to create the perfect website for you or your clients. Easily change colors, fonts and text styles. Apply stunning animations.</a>
                    </div>
                </div>
                <div class="s-box">
                    <div class="s-b-img">
                        <div class="s-type">Back-End</div>
                        <img src="images/s2.png" />
                    </div>
                    <div class="s-b-text">
                        <a href="#">With Divi, every part of your website is customizable. You have complete freedom to create the perfect website for you or your clients. Easily change colors, fonts and text styles. Apply stunning animations.</a>
                    </div>
                </div>
                <div class="s-box">
                    <div class="s-b-img">
                        <div class="s-type">SEO</div>
                        <img src="images/s3.jpg" />
                    </div>
                    <div class="s-b-text">
                    <a href="#">With Divi, every part of your website is customizable. You have complete freedom to create the perfect website for you or your clients. Easily change colors, fonts and text styles. Apply stunning animations.</a>
                    </div>
                </div>
            </div>


        </section>

    );
}

export default Service
