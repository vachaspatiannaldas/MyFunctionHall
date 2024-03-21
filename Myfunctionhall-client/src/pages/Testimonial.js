import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Carousel from 'react-multi-carousel';

import {responsivetest} from './Carouselddata';
import { Link } from 'react-router-dom';
function Testimonial() {

  const [Showblog, setShowblog] = useState([]);


  function truncateText(text, wordCount) {
    if (text) {
      const words = text.split(' ');
      if (words.length <= wordCount) {
        return text;
      } else {
        const truncatedText = words.slice(0, wordCount).join(' ');
        return `${truncatedText}...`;
      }
    } else {
      return ''; // Handle the case when text is undefined
    }
  }
  




  function fetchBlog() {
    axios.get('http://127.0.0.1:8000/api/testimonial')
      .then((res) => {
        const data = res.data;
        console.log(data);
        setShowblog(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  
  useEffect(() => {
       
    fetchBlog();
  
    
  }, [])
  return (

<div className='container mb-5'>
  
  <h2 className='text-center my-5 section-title'>What Our Vendors Says</h2>
  <Carousel responsive={responsivetest}>
  {Showblog.map((row) => {
    return ( 
      <div class="container-fluid" style={{ marginBottom: "200px" }}>
        <div class="row justify-content-center">
          <div class="col-sm-11 col-md-9 col-lg-8 col-xl-7">
            <div class="card" id="testimonial_card">
              <p class="post">
                <span><img class="quote-img" src="https://i.imgur.com/i06xx2I.png"/></span>
                <span class="post-txt">
                {truncateText(row.description, 25)} <Link to={`/alltestimonial`}>Read More..</Link> 
                </span>
                <span><img class="nice-img" src="https://i.imgur.com/l5AkSHd.png"/></span>
              </p>
            </div>
            <div class="arrow-down" id="arrow-down"></div>
            <div class="row d-flex justify-content-center">
              <div class="">
                <img class="profile-pic fit-image"  
                  src={`http://localhost:8000/testimonial_upload/${row.image}`}/>
              </div>
              <p class="profile-name">{row.name}</p>
            </div>
          </div>
        </div>
      </div>
    );
  })}
</Carousel>

</div>
  )
}

export default Testimonial