import React, { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Contact() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'name') {
      setName(e.target.value); 
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'phone') {
      setPhone(e.target.value);
    }  else if (e.target.name === 'message') {
      setMessage(e.target.value);
    } 
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('phone', phone);
    data.append('message', message);

    axios
      .post('http://127.0.0.1:8000/api/Contact', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((resp) => {
        if (resp.data && resp.data[0].status === 'success') {
          console.log('Data Added');
          toast.success('Contact Send Successfully!!!');
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
          navigate('/contact');
        } else {
          console.log('Error');
          toast.error('Error occurred while adding data');
        }
      })
      .catch((error) => {
        console.log('Error', error);
        toast.error('An error occurred while making the request');
      });
  }
    
  return (
   <React.Fragment>   
   
<Navbar/>
<ToastContainer />
   <section class="contact_us">
        <div class="container">
            <div class="row">
                <div class="col-md-10 offset-md-1">
                    <div class="contact_inner">
                        <div class="row">
                            <div class="col-md-10">
                                <div class="contact_form_inner">
                                    <div class="contact_field">
                                        <h3>Contact Us</h3>
                                        <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                                        <input type="text" class="form-control form-group" placeholder="Name" 
                                         onChange={name=>setName(name.target.value)} value={name}
                                        />
                                        <input type="text" class="form-control form-group" placeholder="Email" 
                                         onChange={email=>setEmail(email.target.value)} value={email}
                                        />
                                        <input type="text" class="form-control form-group" placeholder="Phone" 
                                            onChange={phone=>setPhone(phone.target.value)} value={phone}               
                                            />
                                        <textarea class="form-control form-group" placeholder="Message"
                                         onChange={message=>setMessage(message.target.value)} value={message}
                                        ></textarea>
                                        <button   type="submit"  class="contact_form_submit" onClick={handleSubmit}>Send</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="right_conatct_social_icon d-flex align-items-end">
                                   <div class="socil_item_inner d-flex">
                                      <li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
                                      <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                      <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div class="contact_info_sec" style={{color:"white"}}>
                            <h4>Contact Info</h4>
                            <div class="d-flex info_single align-items-center">
                            <i class='fas fa-headset'></i>
                                                            <span>+91 8009 054294</span>
                            </div>
                            <div class="d-flex info_single align-items-center">
                                <i class="fas fa-envelope-open-text"></i>
                                <span>info@flightmantra.com</span>
                            </div>
                            <div class="d-flex info_single align-items-center">
                                <i class="fas fa-map-marked-alt"></i>
                                <span>1000+ Travel partners and 65+ Service city across India, USA, Canada & UAE</span>
                            </div>
            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="map_sec">
        <div class="container">
            <div class="row">
                <div class="col-md-10 offset-md-1">
                    <div class="map_inner">
                        <h4>Find Us on Google Map</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quo beatae quasi assumenda, expedita aliquam minima tenetur maiores neque incidunt repellat aut voluptas hic dolorem sequi ab porro, quia error.</p>
                        <div class="map_bind">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d88.04952462217592!3d22.6757520733225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1596988408134!5m2!1sen!2sin" width="100%" height="450" frameborder="0" 
                            style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  
  
   </React.Fragment>
  )
}

export default Contact