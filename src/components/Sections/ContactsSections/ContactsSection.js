import React, {useState, useRef} from 'react'
import './ContactsSection.scss';
import { Link } from 'react-router-dom';

import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube, faTelegram } from '@fortawesome/free-brands-svg-icons'

const Result = () => {
    return (
        <p> Your message has been successfully sent. I will contact you soon</p>
    )
}
function ContactsSection() {
    
    const [result, showResult] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm("service_lopsqeg", "template_ojncgop", form.current, "sy5Dug2zvD2_duyQ0")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset();
          showResult(true)
      };

   
    return (
        <div className="contacts-container section__margin">
            <div className="contacts-box gradient__container__bg">
                <form ref={form} onSubmit={sendEmail}>
                    <div className='row'>
                    <h2>Contact <FontAwesomeIcon icon={faAddressCard}/></h2>
                    <p>Please contact our manager to discuss collaboration details directly via Message form or Telegram.</p>
                        <div className="col">
                            <span>Full name</span>
                            <input type="text" name="fullName" className="contact-input" required/>
                            <span>Phone Number</span>
                            <input type="text" name="phone" className="contact-input" required/>
                            <span>Enter Email</span>
                            <input type="text" name="email" className="contact-input"   required/>
                        </div>
                        <div className="col">
                            <span>Message</span>
                            <textarea id="subject" name="message" placeholder="Write something.." className="contact-textarea" ></textarea>
                            <button className='btn-contact btn-contact--large'>
                            Submit
                            </button>
                            <div style={{color: 'green'}}> 
                            {result ? <Result/> : null}
                            </div>
                        </div>
                        <div className="contact-social-icon">
                        <Link
                            className='soc-icon'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                        <Link
                            className='soc-icon'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link
                            className='soc-icon'
                            to='/'
                            target='_blank'
                            aria-label='Telegram'
                        >
                            <FontAwesomeIcon icon={faTelegram} />
                        </Link>
                        <Link
                            className='soc-icon'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <FontAwesomeIcon icon={faYoutube} />
                        </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactsSection