import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../axiosConfig';


// target.ischeck  value for selected or not

function ProfileEdit(props) {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState(null);
    const [banner, setBanner] = useState(null);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pin, setPin] = useState('');
    const [Showdata, setShowdata] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    function fetchProfileData() {
        axiosInstance
            .get(`http://127.0.0.1:8000/api/Profile/${id}`)
            .then((res) => {
                const data = res.data;
                setName(data.name);
                setEmail(data.email);
                setPhone(data.phone);
                setAddress(data.address);
                setCity(data.city);
                setState(data.state);
                setPin(data.pin);
                setSelectedCategories(JSON.parse(data.category));
            })
            .catch((error) => {
                console.log('Error', error);
            });
    }

    function handleChange(e) {
        setImage(e.target.files[0]);
    }

    function handleBannerChange(e) {
        setBanner(e.target.files[0]);
    }

    function handleCategoryChange(e) {
      const selectedCategory = e.target.value;
      const updatedCategories = selectedCategories.includes(selectedCategory)
          ? selectedCategories.filter(category => category !== selectedCategory)
          : [...selectedCategories, selectedCategory];
      setSelectedCategories(updatedCategories);
  }
  

    function updateProfile(e) {
        e.preventDefault();
        if (!name || !email || !phone || !address || !city || !state || !pin || selectedCategories.length === 0) {
            toast.error('Please fill in all required fields.', { autoClose: 2000 });
            return;
        }

        const data = new FormData();
        data.append('_method', 'put');
        data.append('name', name);
        data.append('email', email);
        data.append('phone', phone);
        data.append('address', address);
        data.append('city', city);
        data.append('state', state);
        data.append('pin', pin);

        // Append the selectedCategories as an array
        data.append('categories[]', selectedCategories);

        // Append the image if it's updated
        if (image !== null) {
            data.append('image', image);
        }

        if (banner !== null) {
            data.append('banner', banner);
        }

        axiosInstance
            .post(`http://127.0.0.1:8000/api/Profile/${id}`, data, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
            .then((resp) => {
                if (resp && resp.data && resp.data.status === 'success') {
                    console.log('Data Updated');
                    toast.success('Data Updated!!!', { autoClose: 2000 });
                    window.location.href = '/profileindex';
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

    function fetchData() {
        axiosInstance
            .get('http://127.0.0.1:8000/api/Category')
            .then((res) => {
                const data = res.data;
                setShowdata(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        fetchData();
        fetchProfileData();
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
                      <form onSubmit={updateProfile}>

                      
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
                            <label className="form-label" htmlFor="category">Category</label>
                            <div className="input-group input-group-merge">
                            {Showdata.map(row => (
                      <div key={row.id}>
                          <input
                              type="checkbox"
                              id={`category-${row.id}`}
                              name="category"
                              style={{ marginLeft: "15px" }}
                              value={row.name}
                              checked={selectedCategories.includes(row.name)} // Check this line
                              onChange={handleCategoryChange}
                          />
                          <label htmlFor={`category-${row.id}`}>{row.name}</label>
                      </div>
                  ))}

                            </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-email">Image</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="file"
                              name="image"
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
                              id="basic-icon-default-email"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-email2"
                              onChange={handleBannerChange}

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





                        <button type="submit" class="btn btn-info">Update</button>
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

export default ProfileEdit;
