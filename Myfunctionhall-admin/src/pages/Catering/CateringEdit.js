import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import  axiosInstance  from '../../axiosConfig';

function CateringEdit() {
  const navigate = useNavigate(); 

  const [type, setType] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [details, setDetails] = useState('');
  const [caterer, setCaterer] = useState(''); // Fix typo
  const [email, setEmail] = useState(''); // Fix typo
  const [speciality, setSpeciality] = useState('');

  const { id } = useParams();

  useEffect(() => {
    updatedata();
  }, []);

  function updatedata() {
    axiosInstance.get('http://127.0.0.1:8000/api/Catering/' + id)
      .then((res) => {
        const data = res.data;
        console.log(data);

     
        setType(data.type);
        setAddress(data.address);
        setContact(data.contact);
        setDetails(data.details);
        setCaterer(data.caterer);
        setEmail(data.email);
        setSpeciality(data.speciality);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Create a data object with updated values
    const data = {
      
      type: type,
      address: address,
      contact: contact,
      details: details,
      caterer: caterer, // Fixed typo in variable name
      email: email, // Fixed typo in variable name
      speciality: speciality,
    };

    axiosInstance.patch(`http://127.0.0.1:8000/api/Catering/${id}`, data)
      .then((res) => {
        toast.success('Data Updated!!!', {
          position: 'top-right',
          autoClose: 5000, // Display success toast for 5 seconds
          hideProgressBar: true,
          newestOnTop: false,
          closeOnClick: true,
          rtl: false,
          pauseOnFocusLoss: true,
          draggable: true,
          pauseOnHover: true,
        });        navigate('/cateringindex'); 
      })
      .catch((error) => {
        console.log('Error', error);
        toast.error('Failed to update data'); // Use a toast to show error message
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
                <span className="text-muted fw-light">CateringEdits/</span> Vertical Layouts
              </h4>
              <div className="row">
                <div className="col-xl">
                  <div className="card mb-4 col-md-6">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Basic with Icons</h5>
                      <small className="text-muted float-end">Merged input group</small>
                    </div>
                    <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      




                      <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">caterer</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="caterer"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={caterer=>setCaterer(caterer.target.value)} value={caterer}
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
                          <label className="form-label" for="basic-icon-default-fullname">speciality</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="speciality"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={speciality=>setSpeciality(speciality.target.value)} value={speciality}
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
                              onChange={details=>setDetails(details.target.value)} value={details}

                            />
                            <span id="basic-icon-default-type2" className="input-group-text">@example.com</span>
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

export default CateringEdit;