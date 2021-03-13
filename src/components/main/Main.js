import React from 'react'
import Navbar from '../navbar/Navbar'
// import '../navbar/navbar.css'
import './main.css'
function Main() {
    return (
        <div class="backgroundimg">
      

                <div class="name">
                    <div class="greet">Hello</div>
                    <h1>I'm <font color="#17d1ac">Vaibhav </font> </h1>
                    <p class="details">In this Video I am gonna show you how to create a personal website with all pages.After Watching this tutorial you will be able to craete website like this</p>
                    <a href="#" class="cv-btn">Download Cv</a>


                </div>
                <div class="black-line"></div>
                <div class="social">
                    <a href="#"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
                    <a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a>
                    <a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                    <a href="#"><i class="fab fa-youtube" aria-hidden="true"></i></a>
                </div>

            
        </div>
    )
}

export default Main
