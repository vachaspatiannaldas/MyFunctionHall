import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Create() {

  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [ratings, setRatings] = useState('');
  const [testimonial_img, setTestimonialImg] = useState(null); // Use null for initial value
  const [eventhistory, setEventhistory] = useState('');
  const token = localStorage.getItem('uid');

  function handleChange(e) { 
    if (e.target.name === 'testimonial_img') {
      setTestimonialImg(e.target.files[0]);
    } else if (e.target.name === 'role') {
      setRole(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'contact') {
      setContact(e.target.value);
    } else if (e.target.name === 'ratings') {
      setRatings(e.target.value);
    } else if (e.target.name === 'address') {
      setAddress(e.target.value);
    } else if (e.target.name === 'eventhistory') {
      setEventhistory(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData(); // Use FormData for file uploads
    data.append('role', role);
    data.append('email', email);
    data.append('address', address);
    data.append('name', name);
    data.append('contact', contact);
    data.append('ratings', ratings);
    data.append('testimonial_img', testimonial_img); // Append the file to FormData
    data.append('eventhistory', eventhistory);
    
    



    
    axios
      .post('http://127.0.0.1:8000/api/AddOn', data, {
        headers: { 'Content-Type': 'multipart/form-data' ,'Authorization':"Bearer "+token},
      })
      .then((resp) => {
        if (resp.data && resp.data[0].status === 'success') {
          console.log('Data Added');
          toast.success('Data Added!!!');
          window.location.href = '/AddOnIndex';
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
                  <span className="text-muted fw-light">Creates/</span> Vertical Layouts
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
                            <label className="form-label" for="basic-icon-default-fullname">role</label>
                            <div className="input-group input-group-merge">
                              <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                              ></span>
                              <input
                                type="text"
                                name="role"
                                className="form-control"
                                id="basic-icon-default-fullname"
                                placeholder="John Doe"
                                aria-label="John Doe"
                                aria-describedby="basic-icon-default-fullname2"
                                onChange={role => setRole(role.target.value)} value={role}
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
                                onChange={email => setEmail(email.target.value)} value={email}
                              />

                            </div>
                          </div>


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
                                onChange={name => setName(name.target.value)} value={name}
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
                                onChange={contact => setContact(contact.target.value)} value={contact}
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
                                onChange={address => setAddress(address.target.value)} value={address}
                              />

                              <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                            </div>
                            <div className="form-text">You can use letters, numbers & periods</div>
                          </div>

                          <div className="mb-3">
                            <label className="form-label" for="basic-icon-default-email">rating</label>
                            <div className="input-group input-group-merge">
                              <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                              <input
                                type="text"
                                name="ratings"
                                id="basic-icon-default-email"
                                className="form-control"
                                placeholder="john.doe"
                                aria-label="john.doe"
                                aria-describedby="basic-icon-default-email2"
                                onChange={ratings => setRatings(ratings.target.value)} value={ratings}

                              />
                              <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                            </div>
                            <div className="form-text">You can use letters, numbers & periods</div>
                          </div>



                          <div className="mb-3">
                            <label className="form-label" for="basic-icon-default-email">Testimonial Image</label>
                            <div className="input-group input-group-merge">
                              <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                              <input
                                type="file"
                                name="testimonial_img"
                                id="basic-icon-default-email"
                                className="form-control"
                                placeholder="john.doe"
                                aria-label="john.doe"
                                aria-describedby="basic-icon-default-email2"
                                onChange={handleChange}

                              />
                              <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                            </div>
                            <div className="form-text">You can use letters, numbers & periods</div>
                          </div>


                          <div className="mb-3">
                            <label className="form-label" for="basic-icon-default-email">eventhistory</label>
                            <div className="input-group input-group-merge">
                              <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                              <input
                                type="text"
                                name="eventhistory"
                                id="basic-icon-default-email"
                                className="form-control"
                                placeholder="john.doe"
                                aria-label="john.doe"
                                aria-describedby="basic-icon-default-email2"
                                onChange={eventhistory => setEventhistory(eventhistory.target.value)} value={eventhistory}

                              />
                              <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
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
        <a href="https://themeselection.com/products/sneat-bootstrap-html-admin-template/"  className="btn btn-danger btn-buy-now">
          Upgrade to Pro
        </a>
      </div>
    </React.Fragment>
  );
}

export default Create;
