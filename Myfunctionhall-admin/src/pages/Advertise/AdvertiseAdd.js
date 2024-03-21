import React, { useState,useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../../axiosConfig';
function AdvertiseAdd() {
  const [adprovider, setAdprovider] = useState('');
  const [adtitle, setAdtitle] = useState('');
  const [description, setDescription] = useState('');
  const [ad_duration, setDuration] = useState('');
  const [adtype, setType] = useState('');
  const [image, setImage] = useState(null); // Use null for initial value
  const [video, setVideo] = useState('');
  const [contract_duration, setContract] = useState('');

  function handleChange(e) {
    if (e.target.name === 'image') {
      setImage(e.target.files[0]);
    } else if (e.target.name === 'video') {
      setVideo(e.target.files[0]);
    } else if (e.target.name === 'adprovider') {
      setAdprovider(e.target.value);
    } else if (e.target.name === 'adtitle') {
      setAdtitle(e.target.value);
    } else if (e.target.name === 'contract_duration') {
      setContract(e.target.value);
    } else if (e.target.name === 'ad_duration') {
      setDuration(e.target.value);
    } else if (e.target.name === 'adtype') {
      setType(e.target.value);
    } else if (e.target.name === 'description') {
      setDescription(e.target.value);
    }
  }
  

  function handleSubmit(e) {
    e.preventDefault();
  
    const data = new FormData(); // Use FormData for file uploads
    data.append('adprovider', adprovider);
    data.append('adtitle', adtitle);
    data.append('description', description);
    data.append('image', image);
    data.append('adtype', adtype);
    data.append('ad_duration', ad_duration);
    data.append('contract_duration', contract_duration);
  
    // Check if a video file is present before appending it
    if (video !== null) {
      data.append('video', video);
    }
  
    axiosInstance
      .post('http://127.0.0.1:8000/api/Advertise', data, { 
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      })
      .then((resp) => {
        if (resp.data && resp.data[0].status === 'success') {
          console.log('Data Added');
          toast.success('Data Added!!!');
          window.location.href = '/advertiseIndex';
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

  useEffect(() => {
    const token = localStorage.getItem('uid');
    if (!token) {
      window.location.href="/login"
    }
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
                  <span className="text-muted fw-light">AdvertiseAdds/</span> Vertical Layouts
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
                          <label className="form-label" for="basic-icon-default-fullname">adprovider</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="adprovider"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={adprovider=>setAdprovider(adprovider.target.value)} value={adprovider}
                            />

                          </div>
                        </div>

                        
                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">adprovider</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="adtitle"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={adtitle=>setAdtitle(adtitle.target.value)} value={adtitle}
                            />

                          </div>
                        </div>

                        
                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">adprovider</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="contract_duration"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={contract_duration=>setContract(contract_duration.target.value)} value={contract_duration}
                            />

                          </div>
                        </div>



                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-company">ad_duration</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-company2" className="input-group-text"
                              ><i className="bx bx-buildings"></i
                            ></span>
                            <input
                              type="text"
                              name='ad_duration'
                              id="basic-icon-default-company"
                              className="form-control"
                              placeholder="ACME Inc."
                              aria-label="ACME Inc."
                              aria-describedby="basic-icon-default-company2"
                              onChange={ad_duration=>setDuration(ad_duration.target.value)} value={ad_duration}
                            />
                          </div>

                        </div>
                     
                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-adtitle">description</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="text"
                              name="description"
                              id="basic-icon-default-adtitle"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-adtitle2"
                              onChange={description=>setDescription(description.target.value)} value={description}
                            />

                            <span id="basic-icon-default-adtitle2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-adtitle">rating</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="text"
                              name="adtype"
                              id="basic-icon-default-adtitle"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-adtitle2"
                              onChange={adtype=>setType(adtype.target.value)} value={adtype}

                            />
                            <span id="basic-icon-default-adtitle2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>



                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-adtitle">Testimonial Image</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="file"
                              name="image"
                              id="basic-icon-default-adtitle"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-adtitle2"
                              onChange={handleChange}

                            />
                            <span id="basic-icon-default-adtitle2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
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
              name="video"
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

export default AdvertiseAdd;
