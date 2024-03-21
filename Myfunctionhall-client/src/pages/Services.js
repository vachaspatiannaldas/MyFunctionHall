import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import ServiceVendorSkeleton from './ServiceVendorSkeleton';

function Services() {
  const [servicedata, setServicedata] = useState([]);

  useEffect(() => {
  
    const delay = 0; 
  
    setTimeout(() => {
      axios
        .get('http://127.0.0.1:8000/api/Servicevendors')
        .then((res) => {
          const data = res.data;
          setServicedata(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, delay);
  }, []);
  

  function truncateText(text, wordCount) {
    if (text) {
      const words = text.split(' ');
      if (words.length <= wordCount) {
        return text;
      } else {
        const truncatedText = words.slice(0, wordCount).join(' ');
        return `${truncatedText}...`;
      }
    }
    return ''; // Return an empty string if text is undefined
  }
  

  const responsive5 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <React.Fragment>
      <div class="section-title related__product__title" style={{ marginTop: '80px' }}>
        <h2 className='text-center mb-3'>Our Services</h2>
      </div>

      


{/* 
      <div class="container-fluid">
    <div class="row">
        <div class="col-12 mt-3">
        {servicedata.slice(0, 4).map((row, index) => (
        <Link to={`/servicedescription`} style={{ textDecoration: 'none', color: 'black' }}>
            <div class="card">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img class=""src={`http://localhost:8000/servicevendors_upload/${row.image}`}  style={{ height:"220px" }} alt="Card image cap"/  >
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">{row.name}</h4>
                        <p class="card-text">{row.details}</p>
                    </div>
                </div>
                <div class="card-footer">
                    <small class="text-muted"> <b>ownername - {row.ownername}</b></small>
                </div>
            </div>
            </Link>
             ))}
        </div>
    </div>
</div> */}








<div className="container">
  {servicedata.length > 0 ? (
    <div className="row">
      {servicedata.slice(0, 4).map((item, index) => (
       <div key={index} className="col-md-6 col-sm-12">
       <div className="card mb-3" style={{ width: "100%", borderRadius: "25px" }}>
         <div className="row no-gutters">
           <div className="col-md-4 col-sm-12">
             <img
               src={`http://localhost:8000/servicevendors_upload/${item.image}`}
               style={{ height: "210px", objectFit: "cover" }}
               className="card-img"
               alt="..."
             />
           </div>
           <div className="col-md-8 col-sm-12">
             <div className="card-body p-3">
               <h5 className="card-title">{item.name}</h5>
               <p className="card-text">Description - {truncateText(item.details, 15)}</p>
               <b className="card-text">Owner Name - {item.ownername}</b> <br />
               <Link to={`/servicedescription`} style={{ textDecoration: 'none', color: 'black' }}>
                 <button type="button" className="btn btn-outline-light my-2" style={{ backgroundColor: "rgb(127, 1, 75)", color: "#fff" }}>
                   View Service
                 </button>
               </Link>
             </div>
           </div>
         </div>
       </div>
     </div>
     
      ))}
    </div>
  ) : (

    //sekeleton loading code
    <ServiceVendorSkeleton/>
    
  )}
</div>



      <div className="text-center my-5">
        <button type="button" className="btn btn-outline-light my-2" style={{ backgroundColor: "rgb(127, 1, 75)", color: "#fff" }}>
          <Link to="/servicedescription" style={{ color: '#fff', textDecoration: 'none' }}>
            View All Services
          </Link>
        </button>
      </div>
    </React.Fragment>
  );
}

export default Services;
