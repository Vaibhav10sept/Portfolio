import React from 'react'
import './contact-form.css'

function ContactForm() {
    return (
        <div style={{overflow:"hidden"}}>
            <section id="contact-form">
                <form>
                    <div class="contact-left">
                        <h1 class="c-l-heading contact__text"><font style={{borderBottom:" 3px solid #1ED98B"}}>Writ</font>e us</h1>
                        <div class="f-name">
                            <font class="contact__text" >Name</font>
                            <input type="text" class="home__img" placeholder="Full Name" />
                        </div>
                        <div class="f-email">
                            <font class="contact__text"> Email</font>
                            <input type="email" class="home__img" placeholder="Example@gmail.com" />
                        </div>
                    </div>
                    <div class="contact-right">

                        <div class="message">
                            <font class="contact__text" >Message</font>
                            <textarea name="message " class="about__text" rows="5" cols="20" placeholder="Write Message..."></textarea>
                        </div>

                        <button class="home__img">submit</button>
                    </div>

                </form>

            </section>
        </div>
    )
}

export default ContactForm
