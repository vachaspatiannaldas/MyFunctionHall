import React, { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  axiosInstance  from '../../axiosConfig';

function CrackerCreate() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [video, setVideo] = useState(null);
  const [details, setDetails] = useState('');

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'type') {
      setType(files[0]);
    } else if (name === 'contact') {
      setContact(files[0]);
    } else if (name === 'address') {
      setAddress(files[0]);
    } else if (name === 'video') {
      setVideo(files[0]);
    } else if (name === 'details') {
      setDetails(files[0]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    data.append('name', name);
    data.append('type', type);
    data.append('contact', contact);
    data.append('address', address);
    data.append('video', video);
    data.append('details', details);

    axiosInstance
      .post('http://127.0.0.1:8000/api/Cracker', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((resp) => {
        if (resp.data && resp.data[0].status === 'success') {
          console.log('Data Added');
          toast.success('Data Added!!!');
          window.location.href = '/crackerindex';
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
                  <span className="text-muted fw-light">CrackerCreates/</span> Vertical Layouts
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
                          <label className="form-label" for="basic-icon-default-fullname">Name</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={name=>setName(name.target.value)} value={name}
                            />

                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">Type</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="type"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={type=>setType(type.target.value)} value={type}
                            />

                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">Contact</label>
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
                          <label className="form-label" for="basic-icon-default-fullname">Address</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="address"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={address=>setAddress(address.target.value)} value={address}
                            />

                          </div>
                        </div>

                        
                                               
                     
                        <div className="mb-3">
                          <label className="form-label" htmlFor="basic-icon-default-images">
                            video
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


                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">Details</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="details"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={details=>setDetails(details.target.value)} value={details}
                            />

                          </div>
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

export default CrackerCreate;
