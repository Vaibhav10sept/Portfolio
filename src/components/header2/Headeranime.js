import React from "react";
import "./menuanimation";
import "./headeranime.css";

function Headeranime() {
  React.useEffect(() => {


    const hamburger = document.querySelector(
      ".header .nav-bar .nav-list .hamburger"
    );
    const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
    const menu_item = document.querySelectorAll(
      ".header .nav-bar .nav-list ul li a"
    );
    const header = document.querySelector(".header.containerhead");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobile_menu.classList.toggle("active");
    });

    document.addEventListener("scroll", () => {
      var scroll_position = window.scrollY;
      if (scroll_position > 250) {
        header.style.backgroundColor = "#29323c";
      } else {
        header.style.backgroundColor = "transparent";
      }
    });

    menu_item.forEach((item) => {
      item.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mobile_menu.classList.toggle("active");
      });
    });
  }, []);
  return (
    <div className="box_container">
      <section id="header">
        <div class="header containerhead">
          <div class="nav-bar">
            <div class="brand">
              <a href="#hero">
                <h1>
                  <span>S</span>anskar <span>S</span>achan
                </h1>
              </a>
            </div>
            <div class="nav-list">
              <div class="hamburger">
                <div class="bar"></div>
              </div>
              <ul>
                <li>
                  <a href="#hero" data-after="Home" class="highlight">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" data-after="Service" class="highlight">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#projects" data-after="Projects" class="highlight">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#about" data-after="About" class="highlight">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact-form" data-after="Contact" class="highlight">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Headeranime;
