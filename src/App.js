import './App.css';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import About from './components/about/About';
import Service from './components/services/Service';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import ContactForm from './components/contact-form/ContactForm';
import './animation'
import Hero from './components/Hero/Hero';
import Headeranime from './components/header2/Headeranime';
import Skills from './components/skills/Skills';
import Contact2 from './components/contact2/Contact2';
import Footer from './components/Footer/Footer';

// import './components/navbar/navbar.css'

function App() {
  return (
    <>
     
       <Headeranime/>
      <Hero/>
      {/* <Main /> */}
      <About/>
      {/* <Aboutt/> */}
      <Service/>
      <Portfolio/>
       <Skills/> 
       <Contact2/>
      <Contact/> 
      <ContactForm/>
     <Footer/>
    </>
  );
}

export default App;
