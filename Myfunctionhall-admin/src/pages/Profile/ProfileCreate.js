import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  axiosInstance  from '../../axiosConfig';
function ProfileCreate() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null); // Use null for initial value
  const [banner, setBanner] = useState(null); // Use null for initial value
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pin, setPin] = useState('');
  const [Showdata, setShowdata] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);


  function fetchData() {
    axiosInstance.get('http://127.0.0.1:8000/api/Category')
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
    if (e.target.name === 'image') {
      setImage(e.target.files[0]);
    } else if (e.target.name === 'banner') {
      setBanner(e.target.files[0]);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'phone') {
      setPhone(e.target.value);
    } else if (e.target.name === 'category') {
      setCategory(e.target.value);
    } else if (e.target.name === 'city') {
      setCity(e.target.value);
    } else if (e.target.name === 'address') {
      setAddress(e.target.value);
    } else if (e.target.name === 'state') {
      setState(e.target.value);
    } else if (e.target.name === 'pin') {
      setPin(e.target.value);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
  
    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('phone', phone);
    data.append('image', image);
    data.append('banner', banner);
    data.append('address', address);
    data.append('city', city);
    data.append('state', state);
    data.append('pin', pin);
  
    // Append the selectedCategories to the FormData
    selectedCategories.forEach((category) => {
      data.append('categories[]', category); // Changed 'category' to 'categories'
    });

  
    // Rest of the code remains the same
    axiosInstance
      .post('http://127.0.0.1:8000/api/Profile', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((resp) => {
        if (resp.data && resp.data[0].status === 'success') {
          console.log('Data Added');
          toast.success('Data Added!!!');
          window.location.href = '/profileindex';
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
                  <span className="text-muted fw-light">ProfileCreates/</span> Vertical Layouts
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
                          <label className="form-label" for="basic-icon-default-fullname">Email</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="email"
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
                          <label className="form-label" for="basic-icon-default-fullname">Phone</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="phone"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={phone=>setPhone(phone.target.value)} value={phone}
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
                          <label className="form-label" for="basic-icon-default-email">Image</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="file"
                              name="image"
                              accept="image/*"
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
                          <label className="form-label" for="basic-icon-default-email">Banner</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="file"
                              name="banner"
                              accept="banner/*"
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
                          <label className="form-label" for="basic-icon-default-email">City</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="text"
                              name="city"
                              id="basic-icon-default-email"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-email2"
                              onChange={city=>setCity(city.target.value)} value={city}

                            />
                            <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>




                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-email">State</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="text"
                              name="state"
                              id="basic-icon-default-email"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-email2"
                              onChange={state=>setState(state.target.value)} value={state}

                            />
                            <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-email">Pin</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="text"
                              name="pin"
                              id="basic-icon-default-email"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-email2"
                              onChange={pin=>setPin(pin.target.value)} value={pin}

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

export default ProfileCreate;
