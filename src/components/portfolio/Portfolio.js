import React from 'react'
import './portfolio.css'
function Portfolio() {
    return (
        <div>
            <section id="portfolio">
                <h1 class="p-headind">Portfolio</h1>
                <div class="p-container">
                    <div class="p-box">
                        <div class="overlay-text">
                            <h1>Writting</h1>
                            <p>Client Project</p>
                        </div>
                        <img src="images/w1.jpg" />

                    </div>
                    <div class="p-box">
                        <div class="overlay-text">
                            <h1>Ideas</h1>
                            <p>Client Project</p>
                        </div>
                        <img src="images/w2.jpg" />
                    </div>
                    <div class="p-box">
                        <div class="overlay-text">
                            <h1>Music</h1>
                            <p>Client Project</p>
                        </div>
                        <img src="images/w3.jpg" />
                    </div>
                    <div class="p-box">
                        <div class="overlay-text">
                            <h1>Time</h1>
                            <p>Client Project</p>
                        </div>
                        <img src="images/w4.jpg" />
                    </div>
                    <div class="p-box">
                        <div class="overlay-text">
                            <h1>Creative</h1>
                            <p>Client Project</p>
                        </div>
                        <img src="images/w5.jpg" />
                    </div>
                    <div class="p-box">
                        <div class="overlay-text">
                            <h1>Books</h1>
                            <p>Client Project</p>
                        </div>
                        <img src="images/w6.jpg" />
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Portfolio
