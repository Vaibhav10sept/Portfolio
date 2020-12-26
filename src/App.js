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
// import './components/navbar/navbar.css'

function App() {
  return (
    <>
     
       <Headeranime/>
      <Hero/>
      <Main />
      <About/>
      <Service/>
      <Portfolio/>
       <Skills/> 
      <Contact/> 
      <ContactForm/>
    </>
  );
}

export default App;
