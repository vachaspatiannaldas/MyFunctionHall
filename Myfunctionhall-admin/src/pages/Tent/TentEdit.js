import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

function TentEdit() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [details, setDetails] = useState('');
  const [video, setVideo] = useState(null);
   
  const { id } = useParams();

  function handleVideoChange(e) {
    setVideo(e.target.files[0]);
  }

  function updatedata() {
    axios.get(`http://127.0.0.1:8000/api/Tent/${id}`)
      .then((res) => {
        const data = res.data;
        console.log(data);

        setName(data.name);
        setType(data.type);
        setAddress(data.address);
        setContact(data.contact);
        setDetails(data.details);
        setVideo(data.video);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }

  function updateCategory(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('_method', 'PUT');
    formData.append('name', name);
    formData.append('type', type);
    formData.append('address', address);
    formData.append('contact', contact);
    formData.append('details', details);
    formData.append('video', video);

   
    
    axios
    .post(`http://127.0.0.1:8000/api/Tent/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((resp) => {
      const data = resp.data[0];
      console.log(resp);
      if (data.status === 'success') {
        console.log('update');
        toast.success('Data Updated!!!');
        window.location.href = '/tentindex';
      } else {
        console.log('Error');
        toast.error('Error occurred while updating data');
      }
    })
    .catch((error) => {
      console.log('Error', error);
      toast.error('An error occurred while making the request');
    });
}

  useEffect(() => {
    updatedata();
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
                <span className="text-muted fw-light">TentEdits/</span> Vertical Layouts
              </h4>
              <div className="row">
                <div className="col-xl">
                  <div className="card mb-4 col-md-6">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Basic with Icons</h5>
                      <small className="text-muted float-end">Merged input group</small>
                    </div>
                    <div className="card-body">
                      <form onSubmit={updateCategory}>
                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">Full Name</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text">
                              <i className="bx bx-user"></i>
                            </span>
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={name => setName(name.target.value)} value={name}
                            />
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-company">type</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-company2" className="input-group-text"
                              ><i className="bx bx-buildings"></i
                            ></span>
                            <input
                              type="text"
                              name='type'
                              id="basic-icon-default-company"
                              className="form-control"
                              placeholder="ACME Inc."
                              aria-label="ACME Inc."
                              aria-describedby="basic-icon-default-company2"
                              onChange={type=>setType(type.target.value)} value={type}
                            />
                          </div>

                        </div>
                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-type">address</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="text"
                              name="address"
                              id="basic-icon-default-type"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-type2"
                              onChange={address=>setAddress(address.target.value)} value={address}
                            />

                            <span id="basic-icon-default-type2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-type">contact</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="text"
                              name="contact"
                              id="basic-icon-default-type"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-type2"
                              onChange={contact=>setContact(contact.target.value)} value={contact}

                            />
                            <span id="basic-icon-default-type2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>



                        <div className="mb-3">
                            <label className="form-label" for="basic-icon-default-type">details</label>
                            <div className="input-group input-group-merge">
                              <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                              <input
                                type="text"
                                name="details"
                                id="basic-icon-default-type"
                                className="form-control"
                                placeholder="john.doe"
                                aria-label="john.doe"
                                aria-describedby="basic-icon-default-type2"
                                onChange={details => setDetails(details.target.value)} value={details}
                              />
                              <span id="basic-icon-default-type2" className="input-group-text">@example.com</span>
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
                          <button type="submit" className="btn btn-info">Update</button>
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

export default TentEdit;