import React, { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  axiosInstance  from '../../axiosConfig';

function LawnAdd() {
  const [name, setName] = useState('');
  const [hallFor, setHallFor] = useState(''); // Renamed 'hallFor' to 'hallFor'
  const [type, setType] = useState('');
  const [address, setAddress] = useState('');

  const [contact, setContact] = useState('');



  const [capacity, setCapacity] = useState('');
  const [parkingcap, setParkingcap] = useState('');
  const [kitchen, setKitchen] = useState('');
  const [details, setDetails] = useState('');
 
  const [image, setImages] = useState(null);
  const [videos, setVideos] = useState(null);

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === 'name') {
      setName(value);
    }
    else if (name === 'for') {
      setHallFor(value);
    }  else if (name === 'type') {
      setType(value);
    }    else if (name === 'address') {
      setAddress(value);
    }  else if (name === 'capacity') {
      setCapacity(value);
    }  else if (name === 'parkingcap') {
      setParkingcap(value);
    }  else if (name === 'kitchen') {
      setKitchen(value);
    }   else if (name === 'contact') {
      setContact(value);
    }  
    
           
    
    else if (name === 'image') {
      setImages(files[0]);
    }   else if (name === 'video') {
      setVideos(files[0]);
  }
  }
  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    data.append('name', name);
    data.append('for', hallFor); // Use the correct variable name here (it was mistakenly named "hallFor" in the provided code)
    data.append('type', type);
    data.append('address', address);
    data.append('capacity', capacity);
    data.append('parking', parkingcap);
    data.append('kitchen', kitchen);
    data.append('contact', contact);
    data.append('details', details);
    data.append('image', image); // Use the correct variable name here (it was mistakenly named "videos" in the provided code)
    data.append('video', videos); // Use the correct variable name here (it was mistakenly named "image" in the provided code)

    axiosInstance
      .post('http://127.0.0.1:8000/api/Lawn', data, {
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      })
      .then((resp) => {
        if (resp.data && resp.data[0].status === 'success') {
          console.log('Data Added');
          toast.success('Data Added!!!');
          window.location.href = '/lawnindex';
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
                  <span className="text-muted fw-light">LawnAdds/</span> Vertical Layouts
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
                          <label className="form-label" for="basic-icon-default-fullname">For</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
              type="text"
              name="for"
              className="form-control"
              id="basic-icon-default-fullname"
              placeholder="John Doe"
              aria-label="John Doe"
              aria-describedby="basic-icon-default-fullname2"
              onChange={(e) => setHallFor(e.target.value)} // Use setHallFor to update the "for" state
              value={hallFor} // Use hallFor instead of hallFor for value
            />
                          </div>
                        </div>










                        


  
                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">type</label>
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
                          <label className="form-label" for="basic-icon-default-fullname">parking</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="parking"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={parkingcap=>setParkingcap(parkingcap.target.value)} value={parkingcap}
                            />

                          </div>
                        </div>





                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">address</label>
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
                          <label className="form-label" for="basic-icon-default-fullname">capacity</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="capacity"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={capacity=>setCapacity(capacity.target.value)} value={capacity}
                            />

                          </div>
                        </div>


                     


  
                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">kitchen</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="kitchen"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={kitchen=>setKitchen(kitchen.target.value)} value={kitchen}
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
                          <label className="form-label" for="basic-icon-default-fullname">details</label>
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
                              onChange={handleChange}

                            />
                            <span id="basic-icon-default-images2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>







                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
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

export default LawnAdd;
