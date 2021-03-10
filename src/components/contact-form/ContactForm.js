import React from 'react'
import './contact-form.css'

function ContactForm(props) {
    return (
        <div style={{overflow:"hidden"}}  ref={props.contactRef}>
            <section id="contact-form">
                <form>
                    <div class="contact-left">
                        <h1 class="c-l-heading contact__text" data-aos="fade-top"><font style={{borderBottom:" 3px solid #1ED98B"}}>Writ</font>e us</h1>
                        <div class="f-name" data-aos="fade-left">
                            <font class="contact__text" >Name</font>
                            <input type="text" class="home__img" placeholder="Full Name" />
                        </div>
                        <div class="f-email" data-aos="fade-left">
                            <font class="contact__text"> Email</font>
                            <input type="email" class="home__img" placeholder="Example@gmail.com" />
                        </div>
                    </div>
                    <div class="contact-right">

                        <div class="message" data-aos="fade-right">
                            <font class="contact__text" >Message</font>
                            <textarea name="message " class="about__text" rows="5" cols="20" placeholder="Write Message..."></textarea>
                        </div>

                        <button className="contbtn" data-aos="zoom-in">submit</button>
                    </div>

                </form>

            </section>
        </div>
    )
}

export default ContactForm
