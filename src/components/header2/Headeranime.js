import React from "react";
import "./menuanimation";
import "./headeranime.css";

function Headeranime(props) {
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
        header.style.backgroundColor = "dodgerblue";
        header.style.color = "#fff";
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
  });

  return (
    <div className="box_container" >
      <section id="header">
        <div class="header containerhead">
          <div class="nav-bar">
            <div class="brand">
              <a href="#hero">
                <h1>
                  <span>V</span>aibhav <span>T</span>iwari
                </h1>
              </a>
            </div>
            <div class="nav-list" ref={props.headerRef}>
              <div class="hamburger">
                <div class="bar"></div>
              </div>
              <ul>
                {/* <li>
                  <a href="#hero" data-after="Home" class={`${props.visibleSection === "home" ? "highlight" : ""}`}>
                    Home
                  </a>
                </li> */}
                <li>
                  <a href="#services" data-after="Service" class={`${props.visibleSection === "services" ? "highlight" : ""}`}>
                    Internships
                  </a>
                </li>
                <li>
                  <a href="#skills" data-after="Projects" class={`${props.visibleSection === "skills" ? "highlight" : ""}`}>
                    skills
                  </a>
                </li>
                <li>
                  <a href="#contact2" data-after="Projects" class={`${props.visibleSection === "contactInfo" ? "highlight" : ""}`}>
                    contact-info
                  </a>
                </li>
                <li>
                  <a href="#about" data-after="About" class={`${props.visibleSection === "about" ? "highlight" : ""}`}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact-form" data-after="Contact" class={`${props.visibleSection === "contact" ? "highlight" : ""}`}>
                    Connect
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
