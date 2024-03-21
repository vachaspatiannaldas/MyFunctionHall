import React, { useEffect, useState } from 'react'
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useParams } from 'react-router-dom';

import  axiosInstance  from '../../axiosConfig';




function MarketingEdit() {
  const { id } = useParams();
 // const history = useHistory();

  const [client, setClient] = useState(''); // Renamed 'client' to 'client'
  const [email, setEmail] = useState('');
   const [contact, setContact] = useState('');
  const [adtitle, setAdtitle] = useState('');
  const [description, setDescription] = useState('');
  const [length, setLength] = useState('');
  
  const [contract, setContract] = useState('');
  const [status, setStatus] = useState('');
  const [image, setImages] = useState(null);
  const [video, setVideos] = useState(null);

    



  
  function handleImageChange(e) {
    setImages(e.target.files[0]);
  }

  function handleVideoChange(e) {
    setVideos(e.target.files[0]);
  }

  function fetchAddOnData() {
    axiosInstance
      .get(`http://127.0.0.1:8000/api/Marketing/${id}`)
      .then((res) => {
        const data = res.data;
        setClient(data.client);
        setContact(data.contact);
        setEmail(data.email);
        setAdtitle(data.adtitle);
        setDescription(data.description);
        setImages(data.image);
        setVideos(data.video);
        setLength(data.length);
        setContract(data.contract);
        setStatus(data.status);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }
  
  function updateAddOn(e) {
   // e.preventDefault();
  
    const formData = new FormData();
    formData.append('_method', 'put');
  
    formData.append('client', client);
    formData.append('contact', contact);
    formData.append('email', email);
    formData.append('adtitle', adtitle);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('video', video);
    formData.append('length', length);
    formData.append('contract', contract);
    formData.append('status', status);
  
    axiosInstance
      .post(`http://127.0.0.1:8000/api/Marketing/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((resp) => {
        const data = resp.data;
        if (data.status === 'success') {
          console.log('Data Updated');
          toast.success('Data Updated!!!', { autoClose: 2000 });
 
          // Redirect using React Router's history object
          window.location.href('/marketingindex');

        } else {
          console.log('Error data:', resp.data);
           toast.error('sorry updated', { autoClose: 2000 });
          //window.location.href('/marketingindex');
        }
      })
      .catch((error) => {
        console.log('Errorrr:', error);
         //toast.success('An error occurred while making the request', { autoClose: 2000 });
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
                 



                 


                      <form>

                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">Client</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="client"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={client=>setClient(client.target.value)} value={client}
                            />

                          </div>
                        </div>




                        
                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">adtitle</label>
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
              onChange={(e) => setAdtitle(e.target.value)} // Use setClient to update the "for" state
              value={adtitle} // Use client instead of client for value
            />
                          </div>
                        </div>










                        


  
                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">description</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="description"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={description=>setDescription(description.target.value)} value={description}
                            />

                          </div>
                        </div>



                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">email</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="email"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={email=>setEmail(email.target.value)} value={email}
                            />

                          </div>
                        </div>



                     

                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">Status</label>
                          <select class="form-control" name="status" onChange={status=>setStatus(status.target.value)} value={status}>
                                             <option value="active">Active</option>
                                             <option value="Inactive">Inactive</option>
                                           </select>
                        </div>     

  
                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">length</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="length"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={length=>setLength(length.target.value)} value={length}
                            />

                          </div>
                        </div>   

  

                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">contact</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="contact"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={contact=>setContact(contact.target.value)} value={contact}
                            />

                          </div>
                        </div>     







                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">contract</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="contract"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={contract=>setContract(contract.target.value)} value={contract}
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


                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-images"> Image</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="file"
                              name="image"
                              id="basic-icon-default-images"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-images2"
                              onChange={handleImageChange}

                            />
                            <span id="basic-icon-default-images2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>







                        <button type="submit" className="btn btn-primary" onClick={updateAddOn}>
                        Send</button>
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

export default MarketingEdit;
