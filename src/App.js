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
import React, { Component } from "react";
import Preloader from "./components/preloader/Preloader";
// import './components/navbar/navbar.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 5000);
  };

  render() {
    return (
      <>
        {this.state.loading ? (
          <Preloader />
        ) : (
          <>
           
            <Headeranime />
            <Hero />
            <About />
            <Service />
            <Portfolio />
            <Skills />
            <Contact2 />
            <Contact />
            <ContactForm />
            <Footer />
          </>
        )}
      </>
    );
  }
}

export default App;
