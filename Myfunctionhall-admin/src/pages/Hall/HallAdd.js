import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HallAdd() {
  const [hname, setHname] = useState('');
  const [afor, setAfor] = useState('');
  const [type, setType] = useState('');
  const [rent, setRent] = useState('');
  const [area, setArea] = useState('');
  const [address, setAddress] = useState('');
  const [intakecap, setIntakecap] = useState('');
  const [parkingcap, setParkingcap] = useState('');
  const [kitchen, setKitchen] = useState('');
  const [kitchen_material, setKitchen_material] = useState('');
  const [timings, setTimings] = useState('');
  const [images, setImages] = useState([]); // Use null for initial value
  const [video, setVideo] = useState(null); // Use null for initial value
  const [contact, setContact] = useState('');
  const [watersupply, setWatersupply] = useState('');
  const [washers, setWashers] = useState('');
  const [waiters, setWaiters] = useState('');
  const [status, setStatus] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [capacity, setCapacity] = useState('');
  const [Showdata, setShowdata] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);


  function fetchData() {
    axios.get('http://127.0.0.1:8000/api/categoryfrontend')
      .then((res) => {
        const data = res.data;
        console.log(data);
        setShowdata(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {

      fetchData()

  }, [])



  // Assuming Showdata is an array of objects containing 'id' and 'name' properties

  const handleCategoryChange = (e) => {
    const categoryName = e.target.value;
    const isChecked = e.target.checked;

    // Use Set to store unique category names
    let updatedCategories = new Set(selectedCategories);

    if (isChecked) {
      updatedCategories.add(categoryName);
    } else {
      updatedCategories.delete(categoryName);
    }

    setSelectedCategories(Array.from(updatedCategories));

  };

  function handleChange(e) {
    if (e.target.name === 'images') {
      const imageFiles = e.target.files;
      const imageFilesArray = Array.from(imageFiles);
      setImages([...images, ...imageFilesArray]);
    }else if (e.target.name === 'video') {
      setVideo(e.target.files[0]);
    } else if (e.target.name === 'hname') {
      setHname(e.target.value);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    data.append('hname',hname)
    data.append('for',afor)
    data.append('type',type)
    data.append('rent',rent)
    data.append('area',area)
    data.append('address',address)
    data.append('intakecap',intakecap)
    data.append('parkingcap',parkingcap)
    data.append('kitchen',kitchen)
    data.append('kitchen_material',kitchen_material)
    data.append('timings',timings)
    images.forEach((image, index) => {
      data.append(`images[${index}]`, image);
    });
    data.append('video',video)
    data.append('contact',contact)
    data.append('watersupply',watersupply)
    data.append('washers',washers)
    data.append('waiters',waiters)
    data.append('status',status)
    data.append('price',price)
    data.append('capacity',capacity)

    // Append the selectedCategories to the FormData
    selectedCategories.forEach((category) => {
      data.append('categories[]', category); // Changed 'category' to 'categories'
    });


    // Rest of the code remains the same
    axios
      .post('http://127.0.0.1:8000/api/Hall', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((resp) => {
        if (resp.data && resp.data[0].status === 'success') {
          console.log('Data Added');
          toast.success('Data Added!!!');
          window.location.href = '/hallindex';
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
                  <span className="text-muted fw-light">HallCreates/</span> Vertical Layouts
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
                              onChange={afor=>setAfor(afor.target.value)} value={afor}
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
                          <label className="form-label" for="basic-icon-default-fullname">Rent</label>
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
                          <label className="form-label" for="basic-icon-default-fullname">Area</label>
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
                          <label className="form-label" for="basic-icon-default-email">Address</label>
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
                              onChange={kitchen_material=>setKitchen_material(kitchen_material.target.value)} value={kitchen_material}
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
                          <label className="form-label" for="basic-icon-default-email">Images</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="file"
                              name="images"
                              accept="images/*"
                              id="basic-icon-default-email"
                              className="form-control"
                              multiple
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
                          <label className="form-label" for="basic-icon-default-email">video</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="file"
                              name="video"
                              accept="video/*"
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
                          <label className="form-label" for="basic-icon-default-fullname">status</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="status"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={status=>setStatus(status.target.value)} value={status}
                            />

                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">Category</label>
                          <div className="input-group input-group-merge">
                             {Showdata.map((row) => {
                            return (
                              <div key={row.id}>
                                <input type="checkbox" name='category'  style={{marginLeft:"15px"}}  value={row.name} checked={selectedCategories.includes(row.name)} onChange={handleCategoryChange}/><span>{row.name}</span>
                              </div>
                              );
                          })}

                          </div>
                        </div>








                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-email">price</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="text"
                              name="price"
                              id="basic-icon-default-email"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-email2"
                              onChange={price=>setPrice(price.target.value)} value={price}

                            />
                            <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>




                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-email">capacity</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="text"
                              name="capacity"
                              id="basic-icon-default-email"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-email2"
                              onChange={capacity=>setCapacity(capacity.target.value)} value={capacity}

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
