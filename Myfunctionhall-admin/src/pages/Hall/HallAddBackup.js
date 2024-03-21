import React, { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  axiosInstance  from '../../axiosConfig';

function HallAdd() {
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

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === 'hname') {
      setHname(value);
    }
    else if (name === 'for') {
      setHallFor(value);
    }  else if (name === 'type') {
      setType(value);
    }  else if (name === 'rent') {
      setRent(value);
    }  else if (name === 'area') {
      setArea(value);
    }  else if (name === 'address') {
      setAddress(value);
    }  else if (name === 'intakecap') {
      setIntakecap(value);
    }  else if (name === 'parkingcap') {
      setParkingcap(value);
    }  else if (name === 'kitchen') {
      setKitchen(value);
    }  else if (name === 'kitchen_material') {
      setkitchen_material(value);
    }  else if (name === 'timings') {
      setTimings(value);
    }  else if (name === 'contact') {
      setContact(value);
    }  else if (name === 'watersupply') {
      setWatersupply(value);
    }  else if (name === 'washers') {
      setWashers(value);
    }  else if (name === 'waiters') {
      setWashers(value);
    }  else if (name === 'status') {
      setStatus(value);
    }



    else if (name === 'images') {
      setImages(files[0]);
    }   else if (name === 'video') {
      setVideos(files[0]);
  }
  }
  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    data.append('hname', hname);
    data.append('for', hallFor); // Use the correct variable name here (it was mistakenly named "hallFor" in the provided code)
    data.append('type', type);
    data.append('rent', rent);
    data.append('area', area);
    data.append('address', address);
    data.append('intakecap', intakecap);
    data.append('parkingcap', parkingcap);
    data.append('kitchen', kitchen);
    data.append('kitchen_material', kitchen_material);
    data.append('timings', timings);
    data.append('contact', contact);
    data.append('watersupply', watersupply);
    data.append('washers', washers);
    data.append('waiters', waiters);
    data.append('status', status);
    data.append('images', images); // Use the correct variable name here (it was mistakenly named "videos" in the provided code)
    data.append('video', videos); // Use the correct variable name here (it was mistakenly named "images" in the provided code)

    axiosInstance
    .post('http://127.0.0.1:8000/api/Hall', data, {
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    })
    .then((resp) => {
      if (resp.data && resp.data.status === 'success') {
        console.log('Data Added');
        toast.success('Data Added!!!');
        window.location.href = '/hallIndex';
      } else {
        console.log('Data Added');
        toast.success('Data Added!!!');
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
                  <span className="text-muted fw-light">HallAdds/</span> Vertical Layouts
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
                              name="images"
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

export default HallAdd;
