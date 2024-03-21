import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

import BackButton from './BackButton';

function BlogDesc() {
  const { id } = useParams();
  const pidd = id;

  const [Showblog, setShowblog] = useState([]);


  function fetchBlog() {
    axios
      .get(`http://127.0.0.1:8000/api/getBlogById/${pidd}`)
      .then((res) => {
        const data = res.data;
        setShowblog(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }



  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <BackButton />

      {/* <div className="container">
        <div className="col-md-12 my-5 d-flex justify-content-center align-items-center row">
          {currentItems.map((item, index) => (
            <div key={index} className="card mb-3 col-md-4 col-lg-3" style={{ width: "100%", borderRadius: "25px" }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src="image/f6.PNG" 
                    style={{ height: "100%", objectFit: "cover" }}
                    className="card-img"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body p-3">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Description - {truncateText(item.for, 50)}</p>
                    <b className="card-text">Place - {item.place}</b> <br />
                    <b className="card-text">Vendor - {item.Vendor}</b> <br />
                    <Link to={'/description/' + item.id} style={{ textDecoration: 'none', color: 'black' }}>
                      <button type="button" className="btn btn-outline-primary my-2">View Hall</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}









 <div className="container">
        <div className="col-md-12 my-1 d-flex justify-content-center align-items-center row">
          {Showblog.map((item, index) => (
            <div key={index} className="" >
              <div className="row">
                <div className='col-md-12'>
                  <h3 className='text-center'>{item.title}</h3>
                <img
                    src="/image/f6.PNG" 
                    style={{ height: "100%", objectFit: "cover",borderRadius:"25px" }}
                    className="card-img my-3"
                    alt="..."
                  />
                   </div>
                   <p className='' style={{ marginTop:"100px" }}><b>Blog Title</b> - {item.title}</p>
                   <p className='mb-5'><b>Blog Description</b> - {item.desc}</p>

              </div>
            </div>
          ))}
        </div>
      </div> 
     
      <Footer />
    </React.Fragment>
  )
}

export default BlogDesc;
