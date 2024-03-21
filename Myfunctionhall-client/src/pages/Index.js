import React from 'react'
// import Indexjs from './Indexjs'
import Navbar from './Navbar'
import Carousel from 'react-multi-carousel';

import {responsive} from './Carouselddata';
import Services from './Services';
import SliderExample from './SliderExample';
import About from './About';
import TopCarousel from './TopCarousel';
import Testimonial from './Testimonial';
import Footer from './Footer';
import { Link, useNavigate } from "react-router-dom";
import Blog from './Blog';
function Index() {

  const navigate = useNavigate();

  return (
    <React.Fragment>



      <div>
        {/* nav start */}
     <Navbar/>


       <TopCarousel/>

        <section className="web-body">
        <section class="main_heading my-5">
         <div class="section-title">
         
                                <h2 className='text-center'>About Us</h2>
                            </div>
        <div class="container">
            <div class="row my-5">
                <div class="col-lg-6 ">
                    <figure>
                        <img  src="image/hall4.jpg" alt="about images" class="img-fluid about_img"  style={{width:"90%",height:"280px"}} / >
                    </figure>
                </div>
                <div class="col-lg-6" >
                  <p>we understand the importance of creating unforgettable moments for your special events. Whether it's a wedding, corporate event, birthday celebration, or any other occasion, we're here to provide you with the perfect venue to make your event truly remarkable. Our mission is simple: to make event planning as effortless and enjoyable as possible. We strive to connect event organizers with the ideal function halls, ensuring that every detail is meticulously taken care of, from venue selection to event execution.Wide Selection of Venues: We boast an extensive portfolio of function halls, ranging from intimate spaces for small gatherings to grand venues for large-scale events. Whatever your requirements, we have the perfect venue to suit your needs.

</p>
                      <button type="button" class="btn btn-sm btn-outline-info" data-toggle="tooltip" data-placement="right" title="Who I am "><Link to="/about">Check More</Link></button>
                </div>
            </div>
        </div>


    </section>







<Services/> 




<div class="container">
  <SliderExample/>











            </div>





       <Blog/>







          {/* TESTIMONIALS Start*/}
    <Testimonial/>



       <Footer/>
        </section>

      </div>

{/* <Indexjs/> */}

    </React.Fragment>
  )
}

export default Index
