import './Contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
export default function Contact() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_33ptgom', 'template_i2dnaeh', form.current, 'sobri6eby9CjRPEns')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <div style={{ width:'100%', marginLeft: '50px', marginTop: '50px' }} className="contact">
            <h1>
                Contact Us
            </h1>
            <form style={{ width: '100%' }} ref={form} onSubmit={sendEmail}>
                <div className='handle_form'>
                    <label for="input-name">Your Name</label>
                    <div className='handle_input'>
                        <input type="text" name='user_name' placeholder="Your Name" id="input-name"></input>
                    </div>
                </div>
                <div className='handle_form'>
                    <label for="input-email">Email</label>
                    <div className='handle_input'>
                        <input type="email" name='user_email' placeholder="Your Email" id="input-email"></input>
                    </div>
                </div>
                <div className='handle_form'>
                    <label for="input-enquiry">Enquiry</label>
                    <div className='handle_input'>
                        <textarea name='message' style={{ outline: 'none' }} cols={25} rows={10}></textarea>
                    </div>
                </div>
                <div className='handle_submit'>
                    <button type='submit'>Submit</button>
                    <div className='handle_red'>
                        <p className='handle_rotatecolor' style={{ background: 'blue' }}></p>
                    </div>
                </div>

            </form>
        </div>
    )
}