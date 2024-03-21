import React, { useEffect, useState } from 'react'
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../axiosConfig';



function Editslider() {



      const { id } = useParams();
      const [hallid, setHallid] = useState('');
      const [images, setImages] = useState(null);
      const [videos, setVideos] = useState(null);
      const [selectedImage, setSelectedImage] = useState(null); // Added state for selected image



      const token = localStorage.getItem('uid');

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      function fetchAddOnData() {
        axios
          .get(`http://127.0.0.1:8000/api/Adslider/${id}`,config)
          .then((res) => {
            const data = res.data;
            setHallid(data.hallid);
            setImages(data.images);
            setVideos(data.videos);
            setSelectedImage(data.images);
           
          })
          .catch((error) => {
            console.log('Error', error);
          });
      }
    
      // function handleImageChange(e) {
      //   setImages(e.target.files[0]);
      // }

      function handleImageChange(e) {
        setImages(e.target.files[0]);
        // setSelectedImage(URL.createObjectURL(e.target.files[0])); // Set the selected image URL
      }
    
      function handleVideoChange(e) {
        setVideos(e.target.files[0]);
      }

      function updateAddOn(e) {
        e.preventDefault();
        // if (!role || !name || !email || !contact) {
        //   toast.error('Please fill in all required fields.', { autoClose: 2000 });
        //   return;
        // }
    
        const formData = new FormData(); // Create a FormData object
     
        formData.append('_method', 'put'); // Use _method field to simulate a PUT request
        formData.append('hallid', hallid);
        formData.append('images', images);
        formData.append('videos', videos);
       
    
        axiosInstance.post(`http://127.0.0.1:8000/api/Adslider/${id}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          .then((resp) => {
            const data = resp.data;
            if (data.status === 'success') {
              console.log('Data Updated');
              toast.success('Data Updated!!!', { autoClose: 2000 });
             window.location.href = '/sliderindex';
            } else {
              console.log('Error data:', resp.data);
              toast.error('Error occurred while updating data', { autoClose: 2000 });
            }
          })
          .catch((error) => {
            console.log('Errorrr:', error);
            toast.error('An error occurred while making the request', { autoClose: 2000 });
          });
      }
    
      useEffect(() => {
        fetchAddOnData();
      }, []);
  
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
                  <span className="text-muted fw-light">Forms/</span> Vertical Layouts
                </h4>
                <div className="row">
                  <div className="col-xl">
                    <div className="card mb-4 col-md-6">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Basic with Icons</h5>
                        <small className="text-muted float-end">Merged input group</small>
                      </div>
                      <div className="card-body">
                      <form onSubmit={updateAddOn}>

                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">role</label>
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

                       


{/* 
                        <div className="mb-3">
        <label className="form-label" htmlFor="basic-icon-default-images">
          Testimonial Image
        </label>
        <div className="input-group input-group-merge">
          <span className="input-group-text">
            <i className="bx bx-envelope"></i>
          </span>
          <input
            type="file"
            name="images"
            id="images"  
            className="form-control"
            accept="image/*" // Accept only image files
            onChange={handleImageChange}
          />
          <span id="basic-icon-default-images2" className="input-group-text">
            @example.com
          </span>
        </div>
        <div className="form-text">You can use letters, numbers & periods</div>
      </div> */}







            <div className="mb-3">
                            <label className="form-label" htmlFor="basic-icon-default-images">
                              Testimonial Image
                            </label>
                            <div className="input-group input-group-merge">
                              <span className="input-group-text">
                                <i className="bx bx-envelope"></i>
                              </span>
                              <input
                                type="file"
                                name="images"
                                id="images"
                                className="form-control"
                                accept="image/*"
                                onChange={handleImageChange}
                              />
                              <span id="basic-icon-default-images2" className="input-group-text">
                                @example.com
                              </span>
                            </div>
                            <div className="form-text">You can use letters, numbers & periods</div>
                          </div>
                          <img src={`http://localhost:8000/adslider_upload/${images}`} 
                                alt="#" style={{width:"380px",height:"290px",marginTop:"40px",marginLeft:"40px"}}/>
      <div className="mb-3">
        <label className="form-label" htmlFor="basic-icon-default-images">
          Videos
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
            onChange={handleVideoChange}
          />
          <span id="basic-icon-default-images2" className="input-group-text">
            @example.com
          </span>
        </div>
        <div className="form-text">You can use letters, numbers & periods</div>
      </div>





                        <button type="button" class="btn btn-info" onClick={updateAddOn}>Update</button>
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

export default Editslider;
