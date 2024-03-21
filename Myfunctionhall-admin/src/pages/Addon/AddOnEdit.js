import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

function AddOnEdit(props) {
  const { id } = useParams();
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [testimonialImg, setTestimonialImg] = useState(null);
  const [ratings, setRatings] = useState('');
  const [eventHistory, setEventHistory] = useState('');


  
  const token = localStorage.getItem('uid');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  function fetchAddOnData() {
    axios
      .get(`http://127.0.0.1:8000/api/AddOn/${id}`,config)
      .then((res) => {
        const data = res.data;
        setRole(data.role);
        setName(data.name);
        setEmail(data.email);
        setAddress(data.address);
        setContact(data.contact);
        setTestimonialImg(data.testimonial_img);
        setRatings(data.ratings);
        setEventHistory(data.eventhistory);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }

  function handleImageChange(e) {
    setTestimonialImg(e.target.files[0]);
  }

  function updateAddOn(e) {
    e.preventDefault();
    if (!role || !name || !email || !contact) {
      toast.error('Please fill in all required fields.', { autoClose: 2000 });
      return;
    }

    const formData = new FormData(); // Create a FormData object
 
    formData.append('_method', 'put'); // Use _method field to simulate a PUT request
    formData.append('role', role);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('contact', contact);
    formData.append('address', address);
    formData.append('ratings', ratings);
    formData.append('eventhistory', eventHistory);
    formData.append('testimonial_img', testimonialImg); // Append the image file to FormData

    axios.post(`http://127.0.0.1:8000/api/AddOn/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        },
})
      .then((resp) => {
        const data = resp.data;
        if (data.status === 'success') {
          console.log('Data Updated');
          toast.success('Data Updated!!!', { autoClose: 2000 });
         window.location.href = '/AddOnIndex';
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
                        <label className="form-label" htmlFor="basic-icon-default-fullname">Role</label>
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
                              onChange={role=>setRole(role.target.value)} value={role}
                            />

                          </div>
                        </div>

                        
                        <div className="mb-3">
                        <label className="form-label" htmlFor="basic-icon-default-fullname">Email</label>
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
                              onChange={ratings=>setRatings(ratings.target.value)} value={ratings}

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
                              id="testimonial_img"
                              className="form-control"
                              accept="image/*" // Accept only image files
                              onChange={handleImageChange}
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
                              onChange={eventhistory=>setEventHistory(eventhistory.target.value)} value={eventHistory}

                            />
                            <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>







                        <button type="button" class="btn btn-info"  onClick={updateAddOn}>Update</button>
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

export default AddOnEdit;
