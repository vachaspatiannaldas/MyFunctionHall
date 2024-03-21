import React, { useState,useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';


import  axiosInstance  from '../../axiosConfig';


function Myprofile() {


    const navigate = useNavigate();
    const token = localStorage.getItem('uid');
    const usertype = localStorage.getItem('usertype');
    //  const name1 = localStorage.getItem('name');
      const email1 = localStorage.getItem('email');
    
  const { id } = useParams();
  const [name, setName] = useState('');
  const [proid, setProid] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pin, setPin] = useState('');
  const [Showdata, setShowdata] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);



  

  useEffect(() => {
    const token = localStorage.getItem('uid');
    if (!token) {
      window.location.href = '/logintoken';
      return;
    }

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    console.log(token);
  function fetchProfileData() {
    axiosInstance
      .get(`http://127.0.0.1:8000/api/Profile/${id}`)
      .then((res) => {
        const data = res.data;
        console.log("profile data",data);
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



  
  function fetchData() {
    axiosInstance
      .get('http://127.0.0.1:8000/api/Category')
      .then((res) => {
        const data = res.data;
        console.log(data);
        setShowdata(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }


  
  function profilefetch() {
    axiosInstance.get('http://127.0.0.1:8000/api/fetchuser/'+email1)
      .then((res) => {
        console.log(token);
        const data = res.data;
        console.log("profile data here",data);
        //console.log(data[0].name);
        setName(data[0].name);
        setEmail(data[0].email);
        setProid(data[0].id);
      })
      .catch((error) => {
        console.error("error here",error);
      });
  }

  fetchProfileData();
    fetchData();
    profilefetch();
}, [])

  function handleChange(e) {
    setImage(e.target.files[0]);
  }

 function handleCategoryChange(e) {
  const selectedCategory = e.target.value;
  const updatedCategories = selectedCategories.includes(selectedCategory)
    ? selectedCategories.filter((category) => category !== selectedCategory)
    : [...selectedCategories, selectedCategory];
  setSelectedCategories(updatedCategories);
}


  function updateProfile(e) {
     e.preventDefault();
    // if (!name || !email || !phone || !address || !city || !state || !pin || selectedCategories.length === 0) {
    //   toast.error('Please fill in all required fields.', { autoClose: 2000 });
    //   return;
    // }
  
    // Convert the selectedCategories to an array
    const categoriesArray = Array.isArray(selectedCategories) ? selectedCategories : [selectedCategories];
  
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
  //  data.append('categories[]', categoriesArray);
  data.append('categories','testing');
    // Append the image if it's updated
    if (image !== null) {
      data.append('image', image);
    }
  
    axiosInstance
      .post(`http://127.0.0.1:8000/api/Profile/${proid}`,data, {
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
  

  
  // useEffect(() => {
   
  //     // profilefetch();
    
  // }, [])





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
               
                <div class="container">
        <div class="row">
            <div class="col-md-12 mb-5">
                <img src="image/bg.jpeg" alt="" class="bgimg"/>
               <div class="row row2">
                <div className='col-md-2'>
                    <img src="image/images (4).jpg" alt="" srcset="" class="img2"/>
                </div>
                {/* <div class="ml-3 mt-4 div2  col-md-4">
                    <p>Abhishek Gouda</p>
                    <p>@bootdey</p>
                    <p>Website Developer, Programmer</p>
                    <p>Bootdey City, NY, USA</p>

                </div> */}
                
               </div>
                
            </div>
 
             <a  href={'/fetchuser/'+email1} class="btn btn-primary m-2 " data-bs-toggle="modal" data-bs-target="#exampleModal"style={{ width:"200px",float:"right" }}> Edit Details</a>
 




<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        

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
                               value={name}
                               onChange={name=>setName(name.target.value)}
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
    <span id="basic-icon-default-fullname2" className="input-group-text">
      <i className="bx bx-user"></i>
    </span>
    <input
                  type="text"
                  name="phone"
                  id="basic-icon-default-phone"
                  className="form-control"
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  aria-describedby="basic-icon-default-phone"
                  onChange={(event) => setPhone(event.target.value)}
                  value={phone}
                />
  </div>
</div>

  <div className="mb-3">
                          <label className="form-label" htmlFor="category">Category</label>
                          <div className="input-group input-group-merge">
                            {Showdata.map((row) => (
                              <div key={row.id}>
                                <input
                                  type="checkbox"
                                  id={`category-${row.id}`} // Unique ID for each checkbox
                                  name='category'
                                  style={{ marginLeft: "15px" }}
                                  value={row.name}
                                  checked={selectedCategories.includes(row.name)}
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







  <button type="submit" className="btn btn-primary" >Send</button>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

            <ul class="nav nav-tabs mt-5" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Profile</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Photos</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
                </li>
              </ul>
              {/* {Showdata2.map((row) => {
                            return ( */}
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    
                <h4>My Profile</h4>

               
                <div className='row'>
                  
                <div  className='col-md-6'>
                <p><b>Name - {name} </b> </p>
                <p><b>Email -{email1} </b></p>
                  <p><b>Website -</b>www.google.com</p>
                  <p><b>About -</b> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dolorum expedita est provident id qui labore deserunt iure ullam eligendi culpa ipsum, eaque perferendis odit ab rerum quas consequuntur. Expedita! </p>
                  <p className='mr-2'><b>Category -</b>
                  <button type="button" class="btn btn-primary mx-1">Hall</button>
                  <button type="button" class="btn btn-primary mx-1">Catering</button>
                  <button type="button" class="btn btn-primary mx-1">DJ</button>
                  <button type="button" class="btn btn-primary mx-1">Decoration</button>
                  
                  </p>
                  
                  

                </div>
                <div  className='col-md-6'>
                <p><b>Address -</b>Solapur Mharashtra </p>
                  <p><b>Phone -</b>{phone}</p>
                  <p><b>Rating -</b>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>

                  </p>
                 

                </div>
                  </div>
                  
                  </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">


                <img src="image/images (4).jpg" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} imgdata" alt=""/>
                <img src="image/images (4).jpg" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} imgdata" alt=""/>
                <img src="image/images (4).jpg" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} imgdata" alt=""/>
                <img src="image/images (4).jpg" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} imgdata" alt=""/>
                <img src="image/images (4).jpg" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} imgdata" alt=""/>
                <img src="image/images (4).jpg" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} imgdata" alt=""/>
                <img src="image/images (4).jpg" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} imgdata" alt=""/>
               
                </div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
              </div>
               {/* );
              })} */}
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

export default Myprofile;
