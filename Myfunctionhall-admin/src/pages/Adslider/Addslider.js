import React, { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../../axiosConfig';



function Addslider() {
  const [hallid, setHallid] = useState('');
  const [images, setImages] = useState(null);
  const [videos, setVideos] = useState(null);

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === 'hallid') {
      setHallid(value);
    } else if (name === 'images') {
      setImages(files[0]);
    } else if (name === 'videos') {
      setVideos(files[0]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('hallid', hallid);
    formData.append('images', images);
    formData.append('videos', videos);
  
    axiosInstance.post('http://127.0.0.1:8000/api/Adslider', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Make sure to include this header
      },
    })
    .then((resp) => {
      if (resp.data && resp.data[0].status === 'success') {
        console.log('Data Added');
        toast.success('Data Added!!!');
        window.location.href = '/sliderindex';
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
       <ToastContainer />
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />
          <div className="layout-page">
            <Header />
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">
                  <span className="text-muted fw-light">Addsliders/</span> Vertical Layouts
                </h4>
                <div className="row">
                  <div className="col-xl">
                    <div className="card mb-4 col-md-6">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Basic with Icons</h5>
                        <small className="text-muted float-end">Merged input group</small>
                      </div>
                      <div className="card-body">
                      <form>

                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">hallid</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="hallid"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={hallid=>setHallid(hallid.target.value)} value={hallid}
                            />

                          </div>
                        </div>

                        
                                               
                     
                        <div className="mb-3">
          <label className="form-label" htmlFor="basic-icon-default-images">
            videos
          </label>
          <div className="input-group input-group-merge">
            <span className="input-group-text">
              <i className="bx bx-envelope"></i>
            </span>
            <input
              type="file"
              accept="video/*"
              name="videos"
              id="basic-icon-default-images"
              className="form-control"
              onChange={handleChange}
            />
            <span id="basic-icon-default-images2" className="input-group-text">
              @example.com
            </span>
          </div>
          <div className="form-text">You can use letters, numbers & periods</div>
        </div>


                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-images">Testimonial Image</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="file"
                              name="images"
                              id="basic-icon-default-images"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-images2"
                              onChange={handleChange}

                            />
                            <span id="basic-icon-default-images2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>







                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Send</button>
                      </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>
        <div className="layout-overlay layout-menu-toggle"></div>
      </div>

      <div className="buy-now">
        <a
          href="https://themeselection.com/products/sneat-bootstrap-html-admin-template/"
          target="_blank"
          className="btn btn-danger btn-buy-now"
        >
          Upgrade to Pro
        </a>
      </div>
    </React.Fragment>
  );
}

export default Addslider;
