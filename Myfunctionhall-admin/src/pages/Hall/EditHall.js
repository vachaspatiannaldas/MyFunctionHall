import React, { useEffect, useState } from 'react'
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import  axiosInstance  from '../../axiosConfig';

function Editslider() {
      const { id } = useParams();
    
      const [hname, setHname] = useState('');
      const [hallFor, setHallFor] = useState(''); // Renamed 'hallFor' to 'hallFor'
      const [type, setType] = useState('');
      const [rent, setRent] = useState('');
      const [area, setArea] = useState('');
      const [address, setAddress] = useState('');
      const [intakecap, setIntakecap] = useState('');
      const [parkingcap, setParkingcap] = useState('');
      const [kitchen, setKitchen] = useState('');
      const [kitchen_material, setkitchen_material] = useState('');
      const [timings, setTimings] = useState('');
      const [contact, setContact] = useState('');
      const [watersupply, setWatersupply] = useState('');
      const [washers, setWashers] = useState('');
      const [waiters, setWaiters] = useState('');
      const [status, setStatus] = useState('');
     
      const [images, setImages] = useState(null);
      const [videos, setVideos] = useState(null);
    

      function handleImageChange(e) {
        setImages(e.target.files[0]);
      }
    
      function handleVideoChange(e) {
        setVideos(e.target.files[0]);
      }



      function fetchAddOnData() {
        axiosInstance
          .get(`http://127.0.0.1:8000/api/Hall/${id}`)
          .then((res) => {
            const data = res.data;
            setHname(data.hname);
            setHallFor(data.hallFor);
            setType(data.type);
            setRent(data.rent);
            setArea(data.area);
            setAddress(data.address);
            setIntakecap(data.intakecap);
            setParkingcap(data.parkingcap);
            setKitchen(data.kitchen);
            setkitchen_material(data.kitchen_material);
            setTimings(data.timings);
            setContact(data.contact);
            setWatersupply(data.watersupply);
            setWashers(data.washers);
            setWaiters(data.waiters);
            setStatus(data.status);
            setImages(data.images);
            setVideos(data.videos);
           
          })
          .catch((error) => {
            console.log('Error', error);
          });
      }
    
  

      function updateAddOn(e) {
        e.preventDefault();
        // if (!role || !name || !email || !contact) {
        //   toast.error('Please fill in all required fields.', { autoClose: 2000 });
        //   return;
        // }
    
        const formData = new FormData(); // Create a FormData object
     
        formData.append('_method', 'put'); // Use _method field to simulate a PUT request
        formData.append('hname', hname);
        formData.append('for', setHallFor);
        formData.append('type', type);
        formData.append('rent', rent);
        formData.append('area', area);
        formData.append('address', address);
        formData.append('intakecap', intakecap);
        formData.append('parkingcap', parkingcap);
        formData.append('kitchen', kitchen);
        formData.append('kitchen_material', kitchen_material);
        formData.append('timings', timings);
        formData.append('contact', contact);
        formData.append('watersupply', watersupply);
        formData.append('washers', washers);
        formData.append('waiters', waiters);
        formData.append('status', status);
        formData.append('images', images);
        formData.append('video', videos);
       
    
        axiosInstance
          .post(`http://127.0.0.1:8000/api/Hall/${id}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          .then((resp) => {
            const data = resp.data;
            if (data.status === 'success') {
              console.log('Data Updated');
              toast.success('Data Updated!!!', { autoClose: 2000 });
             window.location.href = '/hallIndex';
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
                      






                      
                      <form>

                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">Hname</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="hname"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={hname=>setHname(hname.target.value)} value={hname}
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
                          <label className="form-label" for="basic-icon-default-fullname">rent</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="rent"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={rent=>setRent(rent.target.value)} value={rent}
                            />

                          </div>
                        </div>





                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">area</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="area"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={area=>setArea(area.target.value)} value={area}
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
                          <label className="form-label" for="basic-icon-default-fullname">intakecap</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="intakecap"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={intakecap=>setIntakecap(intakecap.target.value)} value={intakecap}
                            />

                          </div>
                        </div>


                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">parkingcap</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="parkingcap"
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
                          <label className="form-label" for="basic-icon-default-fullname">kitchen_material</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="kitchen_material"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={kitchen_material=>setkitchen_material(kitchen_material.target.value)} value={kitchen_material}
                            />

                          </div>
                        </div>                                             

  
                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">timings</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="timings"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={timings=>setTimings(timings.target.value)} value={timings}
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
                          <label className="form-label" for="basic-icon-default-fullname">watersupply</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="watersupply"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={watersupply=>setWatersupply(watersupply.target.value)} value={watersupply}
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
                          <label className="form-label" for="basic-icon-default-fullname">washers</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="washers"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={washers=>setWashers(washers.target.value)} value={washers}
                            />

                          </div>
                        </div>     



                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">waiters</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="waiters"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={waiters=>setWaiters(waiters.target.value)} value={waiters}
                            />

                          </div>
                        </div>     



                    












                        
                   


                   
                        <div className="mb-3">
        <label className="form-label" htmlFor="basic-icon-default-images">
          Testimonial Image
        </label>
        <div className="input-group input-group-merge">
          <span className="input-group-text">
            <i className="bx bx-envelope"></i>
          </span>
          <input
            type="file"
            name="images"
            id="images"  
            className="form-control"
            accept="image/*" // Accept only image files
            onChange={handleImageChange}
          />
          <span id="basic-icon-default-images2" className="input-group-text">
            @example.com
          </span>
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
          
          className="btn btn-danger btn-buy-now"
        >
          Upgrade to Pro
        </a>
      </div>
    </React.Fragment>
  );
}

export default Editslider;
