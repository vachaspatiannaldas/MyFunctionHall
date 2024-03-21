import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import  axiosInstance  from '../../axiosConfig';


function LawnEdit() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [fora, setFora] = useState(''); // Change variable name
  const [type, setType] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [capacity, setCapacity] = useState('');
  const [parking, setParking] = useState('');
  const [kitchen, setKitchen] = useState('');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);


  function handleImageChange(e) {
    setImage(e.target.files[0]);
  }

  function handleVideoChange(e) {
    setVideo(e.target.files[0]);
  }

  function fetchAddOnData() {
    axiosInstance
      .get(`http://127.0.0.1:8000/api/Lawn/${id}`)
      .then((res) => {
        const data = res.data;
        setName(data.name);
        setFora(data.fora);
        setType(data.type);
        setAddress(data.address);
        setContact(data.contact);
        setCapacity(data.capacity);
        setParking(data.parking);
        setKitchen(data.kitchen);
        setDetails(data.details);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }

  function updateAddOn(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('_method', 'put');
    formData.append('name', name);
    formData.append('for', fora);
    formData.append('details', details);
    formData.append('type', type);
    formData.append('address', address);
    formData.append('contact', contact);
    formData.append('capacity', capacity);
    formData.append('parking', parking);
    formData.append('kitchen', kitchen);
    formData.append('image', image); // Use 'image' instead of 'images'
    formData.append('video', video); // Use 'video' instead of 'videos'

    axiosInstance
      .post(`http://127.0.0.1:8000/api/Lawn/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((resp) => {
        const data = resp.data;
        if (data.status === 'success') {
          console.log('Data Updated');
          toast.success('Data Updated!!!', { autoClose: 2000 });
          window.location.href = '/lawnindex';
        } else {
          console.log('Error data:', resp.data);
          toast.error('Error occurred while updating data', { autoClose: 2000 });
         // window.location.href = '/lawnIndex';
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
              onChange={(e) => setFora(e.target.value)} // Use setFora to update the "for" state
              value={fora} // Use fora instead of fora for value
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
                              onChange={parking=>setParking(parking.target.value)} value={parking}
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
            Video
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

export default LawnEdit;

