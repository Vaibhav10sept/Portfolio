import React from 'react';
import "./nav1.css";
import $ from 'jquery'

function Navbar() {
    React.useEffect(() => {
        
  $(document).ready(function(){
    $('.toggle').click(function(){
      $('.toggle').toggleClass('active')
      
      $('nav ul').toggleClass('active-menu')
     
      
    })
   });
    }, [])
    return (
        <div>
            <section id="main">
	<nav>
	<a href="#" class="logo">LOGO</a>
	<div class="toggle"></div>
	<ul class="menu">
	<li class="active"><a href="#main" >Home</a></li>	
	<li><a href="#about">About</a></li>	
	<li><a href="#services">Services</a></li>	
	<li><a href="#portfolio">Portfolio</a></li>		
	<li><a href="#contact-form">Contact</a></li>	
	</ul>
	<a href="#" class="lang">En</a>
	</nav>
    </section>
        </div>
    )
}

export default Navbar;
