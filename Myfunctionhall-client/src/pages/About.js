import React from 'react'
import BackButton from './BackButton'
import Footer from './Footer'
import Navbar from './Navbar'




function About() {
  return (
    <React.Fragment>
<Navbar/>

<BackButton/>
         <section class="main_heading my-5">
         <div class="section-title">
                                <h2>About Us</h2>
                            </div>
        <div class="container">
            <div class="row my-5">
                <div class="col-lg-6 ">
                    <figure>
                        <img src="image/hall4.jpg" alt="about images" class="img-fluid about_img"  style={{width:"90%",height:"280px"}} / >
                    </figure>
                </div>
                <div class="col-lg-6" >
                    <p>we understand the importance of creating unforgettable moments for your special events. Whether it's a wedding, corporate event, birthday celebration, or any other occasion, we're here to provide you with the perfect venue to make your event truly remarkable. Our mission is simple: to make event planning as effortless and enjoyable as possible. We strive to connect event organizers with the ideal function halls, ensuring that every detail is meticulously taken care of, from venue selection to event execution. Wide Selection of Venues: We boast an extensive portfolio of function halls, ranging from intimate spaces for small gatherings to grand venues for large-scale events. Whatever your requirements, we have the perfect venue to suit your needs.

Seamless Booking Process: With our user-friendly platform, booking your desired function hall is quick and hassle-free. Simply browse through our selection, check availability, and secure your booking with ease.

Exceptional Customer Service: Our dedicated team is committed to providing personalized assistance every step of the way. Whether you have questions about venue specifications or need guidance in planning your event, we're here to help.</p>
                </div>
            </div>
        </div>

        
    </section>

    <Footer/>

    </React.Fragment>
  )
}

export default About