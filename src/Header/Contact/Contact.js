import './Contact.css'
import React, { useContext, useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { AppContext } from '../../AppContext';
import swal from 'sweetalert';
export default function Contact() {
    const {
        SubmitContact,
        contactName,
        contactEmail,
        onChangeContactEmail,
        onChangeContactName,
    }
        = useContext(AppContext)
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_33ptgom', 'template_j70exf7', form.current, 'OsHMSiH17MZW0cXJ-')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');

    useEffect(() => {
        if (name) {
            const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
            if (!regex.test(name)) {
                setNameError('Invalid name');
            }
            else if (name.length < 3) {
                setNameError('User Name Must Have At Least 3 Letter');
            }
            else {
                setNameError('');
            }
        }
    }, [name]);
    //Name Validate
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    useEffect(() => {
        if (email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(email)) {
                setEmailError('Invalid email address');
            }
            else {
                setEmailError('');
            }
        }
    }, [email]);
    //Email Validate
    const handleSubmit = () => {
        swal("Thank You For Your Information!", "We will contact to you soon!", "success")
    }
    return (
        <div className="contact">
            <h1>
                Contact Us
            </h1>
            <form style={{ width: '100%' }} ref={form} onSubmit={sendEmail}>
                <div className='handle_form'>
                    <label for="input-name">Your Name</label>
                    <div className='handle_input'>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            name='contact_name'
                            placeholder="Your Name"
                            id="input-name">
                        </input>
                        {nameError && <div style={{color:'red'}} className="error">{nameError}</div>}
                    </div>
                </div>
                <div className='handle_form'>
                    <label for="input-email">Email</label>
                    <div className='handle_input'>
                        <input
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            type="email"
                            name='contact_email'
                            placeholder="Your Email"
                            id="input-email">
                        </input>
                        {emailError && <div style={{color:'red'}} className="error">{emailError}</div>}
                    </div>
                </div>
                <div className='handle_form'>
                    <label for="input-enquiry">Enquiry</label>
                    <div className='handle_input'>
                        <textarea name='contact_message' style={{ outline: 'none' }}></textarea>
                    </div>
                </div>
                <div className='handle_submit'>
                    <button
                        onClick={() => handleSubmit()}
                        type='submit'
                    >Submit</button>
                    <div className='handle_red'>
                        <p className='handle_rotatecolor' style={{ background: 'blue' }}></p>
                    </div>
                </div>

            </form>
        </div>
    )
}