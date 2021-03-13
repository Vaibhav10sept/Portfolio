import React from 'react'
import './contact2.css'
function Contact2(props) {
    return (
        <div style={{background:"transparent",overflow:"hidden"}} id="contact2" ref={props.contactInfo}>
  <section >
    <div class="contact2 container2">
      <div data-aos="flip-up"><h1 class="section-title2">contact <span>info</span></h1></div>
      <div class="contact2-items">
        <div class="contact2-item" data-aos="fade-right">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png"/></div>
          <div class="contact2-info">
            <h1>Phone</h1>
            <h2>6392459012</h2>
            <h2>6394082500</h2>
          </div>
        </div>
        <div class="contact2-item" data-aos="flip-left">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png"/></div>
          <div class="contact2-info">
            <h1>Email</h1>
            <h2>vaibhavtiwari10sept@gmail.com</h2>
            <h2>cu.18bcs2275@gmail.com</h2>
          </div>
        </div>
        <div class="contact2-item" data-aos="fade-left">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png"/></div>
          <div class="contact2-info">
            <h1>Address</h1>
            <h2>120/121 Lajpat Nagar, Kanpur</h2>
          </div>
        </div>
      </div>
    </div>
  </section>

        </div>
    )
}

export default Contact2
