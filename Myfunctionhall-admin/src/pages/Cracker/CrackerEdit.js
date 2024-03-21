import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom'; // Import useParams hook
import  axiosInstance  from '../../axiosConfig';

function CrackerEdit(props) {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [video, setVideo] = useState(null); 
  const [details, setDetails] = useState(''); 
  function fetchCrackerData() {
    axiosInstance
      .get(`http://127.0.0.1:8000/api/Cracker/${id}`)
      .then((res) => {
        const data = res.data;
        setName(data.name);
        setType(data.type);
        setContact(data.contact);
        setAddress(data.address);
        setVideo(data.video);
        setDetails(data.details);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }

  function handleVideoChange(e) {
    setVideo(e.target.files[0]);
  }
  function updateCracker(e) {
    e.preventDefault();
    if (!name || !type || !contact) {
      toast.error('Please fill in all required fields.', { autoClose: 2000 });
      return;
    }

    const formData = new FormData();
    formData.append('_method', 'put');
    formData.append('name', name);
    formData.append('type', type);
    formData.append('contact', contact);
    formData.append('address', address);
    formData.append('video', video);
    formData.append('details', details);

    axiosInstance
      .post(`http://127.0.0.1:8000/api/Cracker/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((resp) => {
        if (resp && resp.data && resp.data.status === 'success') {
          console.log('Data Updated');
          toast.success('Data Updated!!!', { autoClose: 2000 });
          window.location.href = '/crackerindex';
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
    fetchCrackerData();
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
                      <form onSubmit={updateCracker}>

                      
                      

                        
                        <div className="mb-3">
                        <label className="form-label" htmlFor="basic-icon-default-fullname">Name</label>
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
                          <label className="form-label" for="basic-icon-default-company">contact</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-company2" className="input-group-text"
                              ><i className="bx bx-buildings"></i
                            ></span>
                            <input
                              type="text"
                              name='contact'
                              id="basic-icon-default-company"
                              className="form-control"
                              placeholder="ACME Inc."
                              aria-label="ACME Inc."
                              aria-describedby="basic-icon-default-company2"
                              onChange={contact=>setContact(contact.target.value)} value={contact}
                            />
                          </div>

                        </div>
                     
                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-email">address</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="text"
                              name="address"
                              id="basic-icon-default-email"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-email2"
                              onChange={address=>setAddress(address.target.value)} value={address}
                            />

                            <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-email">Video</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="file"
                              name="video"
                              id="video"
                              className="form-control"
                              accept="video/*" 
                              onChange={handleVideoChange}
                            />
                            <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>



                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-email">details</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="text"
                              name="details"
                              id="basic-icon-default-email"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-email2"
                              onChange={details=>setDetails(details.target.value)} value={details}

                            />
                            <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>







                        <button type="button" class="btn btn-info"  onClick={updateCracker}>Update</button>
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

export default CrackerEdit;
