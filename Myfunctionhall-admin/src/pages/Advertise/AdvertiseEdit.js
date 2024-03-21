import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../axiosConfig';

function AdvertiseEdit() {
  const { id } = useParams();
  const [adprovider, setAdprovider] = useState('');
  const [adtitle, setAdtitle] = useState('');
  const [description, setDescription] = useState('');
  const [ad_duration, setAdDuration] = useState('');
  const [adtype, setAdtype] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState('');
  const [contract_duration, setContractDuration] = useState('');

  function fetchAdvertiseData() {
    axiosInstance
      .get(`http://127.0.0.1:8000/api/Advertise/${id}`)
      .then((res) => {
        const data = res.data;
        setAdprovider(data.adprovider);
        setAdtitle(data.adtitle);
        setDescription(data.description);
        setAdDuration(data.ad_duration);
        setAdtype(data.adtype);
        setImage(data.image);
        setVideo(data.video);
        setContractDuration(data.contract_duration);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  

  function handleImageChange(e) {
    setImage(e.target.files[0]);
  }

  function handleVideoChange(e) {
    setVideo(e.target.files[0]);
  }
  function updateAdvertise(e) {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('_method', 'PUT');
    formData.append('adprovider', adprovider);
    formData.append('adtitle', adtitle);
    formData.append('description', description);
    formData.append('ad_duration', ad_duration);
    formData.append('adtype', adtype);
    formData.append('contract_duration', contract_duration);
    formData.append('image', image);
    formData.append('video', video);
  
  
    axiosInstance
      .post(`http://127.0.0.1:8000/api/Advertise/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((resp) => {
        const data = resp.data;
        if (data.status === 'success') {
          console.log('Data Updated');
          toast.success('Data Updated!!!', { autoClose: 2000 });
          // Use React Router's history object to navigate
         // history.push('/advertiseIndex');
         window.location.href='/advertiseIndex'
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
    fetchAdvertiseData();
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
                      <form onSubmit={updateAdvertise}>

                        <div className="mb-3">
                        <label className="form-label" htmlFor="basic-icon-default-fullname">adprovider</label>
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
                        <label className="form-label" htmlFor="basic-icon-default-fullname">adtitle</label>
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
                          <label className="form-label" for="basic-icon-default-company">description</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-company2" className="input-group-text"
                              ><i className="bx bx-buildings"></i
                            ></span>
                            <input
                              type="text"
                              name='description'
                              id="basic-icon-default-company"
                              className="form-control"
                              placeholder="ACME Inc."
                              aria-label="ACME Inc."
                              aria-describedby="basic-icon-default-company2"
                              onChange={description=>setDescription(description.target.value)} value={description}
                            />
                          </div>

                        </div>
                     
                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-adtitle">adtype</label>
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
                              onChange={adtype=>setAdtype(adtype.target.value)} value={adtype}
                            />

                            <span id="basic-icon-default-adtitle2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-adtitle">contract_duration</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="text"
                              name="contract_duration"
                              id="basic-icon-default-adtitle"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-adtitle2"
                              onChange={contract_duration=>setContractDuration(contract_duration.target.value)} value={contract_duration}

                            />
                            <span id="basic-icon-default-adtitle2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>


                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-adtitle">ad_duration</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="text"
                              name="ad_duration"
                              id="basic-icon-default-adtitle"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-adtitle2"
                              onChange={ad_duration=>setAdDuration(ad_duration.target.value)} value={ad_duration}

                            />
                            <span id="basic-icon-default-adtitle2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>






                      

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
            name="image"
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
      </div>

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
            name="video"
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


                        <button type="button" class="btn btn-info"  onClick={updateAdvertise}>Update</button>
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

export default AdvertiseEdit;
