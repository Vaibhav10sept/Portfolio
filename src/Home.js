import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Service from "./components/services/Service";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import ContactForm from "./components/contact-form/ContactForm";
import "./animation";
import Hero from "./components/Hero/Hero";
import Headeranime from "./components/header2/Headeranime";
import Skills from "./components/skills/Skills";
import Contact2 from "./components/contact2/Contact2";
import Footer from "./components/Footer/Footer";
import React, { Component, useEffect, useRef, useState } from "react";
import Preloader from "./components/preloader/Preloader";
import Certificate from "./components/certificates/Certificate";
// import './components/navbar/navbar.css'
const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};
const scrollTo = ele => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};



const Home=()=>  {
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const contactInfo = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
 const [loading, setloading] = useState(false)

 const sectionRefs = [
  { section: "about", ref: aboutRef },
  { section: "services", ref: servicesRef },
  { section: "contact", ref: contactRef },
  { section: "skills", ref: skillsRef },
  { section: "home", ref: homeRef },
  { section: "contactInfo", ref: contactInfo }
 
];


useEffect(() => {


  
  const handleScroll = () => {
  
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;
    
  

    const selected = sectionRefs.find(({ section, ref }) => {
      const ele = ref.current;
      if (ele) {
        const { offsetBottom, offsetTop } = getDimensions(ele);
        return scrollPosition > offsetTop && scrollPosition < offsetBottom;
      }
    });

    if (selected && selected.section !== visibleSection) {
      setVisibleSection(selected.section);
      console.log('visible section ',visibleSection);
    } else if (!selected && visibleSection) {
      setVisibleSection(undefined);
      console.log("undefined");
    }
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [visibleSection]);

    return (
          <>
            <Headeranime scrollTo={scrollTo} headerRef={headerRef} visibleSection={visibleSection} servicesRef={servicesRef} sectionRefs={sectionRefs} />
            <Hero homeRef={homeRef}/>
            <About aboutRef={aboutRef} />
            <Service servicesRef={servicesRef}/>
            <Portfolio />
            <Certificate/>
            <Skills skillsRef={skillsRef}/>
            <Contact2 contactInfo={contactInfo} />
            <Contact />
            <ContactForm contactRef={contactRef}/>
            {/* <Footer /> */}
            <Footer/>
          </>
    );
  
}

export default Home;
