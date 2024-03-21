import React, { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  axiosInstance  from '../../axiosConfig';

function MarketingAdd() {
  const [client, setClient] = useState(''); // Renamed 'client' to 'client'
  const [email, setEmail] = useState('');
   const [contact, setContact] = useState('');
  const [adtitle, setAdtitle] = useState('');
  const [description, setDescription] = useState('');
  const [length, setLength] = useState('');
  
  const [contract, setContract] = useState('');
  const [status, setStatus] = useState('');
  const [image, setImages] = useState(null);
  const [videos, setVideos] = useState(null); 

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === 'client') {
      setClient(value);
    }
    else if (name === 'email') {
      setEmail(value);
    }  
    else if (name === 'adtitle') {
      setAdtitle(value);
    }
    else if (name === 'description') {
      setDescription(value);
    }    else if (name === 'length') {
      setLength(value);
    }  else if (name === 'adtitle') {
      setAdtitle(value);
    }  else if (name === 'contract') {
      setContract(value);
    }  else if (name === 'status') {
      setStatus(value);
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
    data.append('client', client); // Use the correct variable name here (it was mistakenly named "client" in the provided code)
    data.append('adtitle', adtitle);
    data.append('email', email);
    data.append('adtitle', adtitle);
    data.append('status', status);
    data.append('description', description);
    data.append('length', length);
    data.append('contact', contact);
    data.append('image', image); // Use the correct variable name here (it was mistakenly named "videos" in the provided code)
    data.append('contract', contract);
    data.append('video', videos); // Use the correct variable name here (it was mistakenly named "image" in the provided code)

    axiosInstance
      .post('http://127.0.0.1:8000/api/Marketing', data, {
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      })
      .then((resp) => {
        if (resp.data && resp.data[0].status === 'success') {
          console.log('Data Added');
          toast.success('Data Added!!!');
          window.location.href = '/marketingindex';
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
                  <span className="text-muted fw-light">MarketingAdds/</span> Vertical Layouts
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

export default MarketingAdd;
