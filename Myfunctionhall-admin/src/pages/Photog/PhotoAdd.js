import React, {  useState } from 'react'
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function PhotoAdd() {
    const[name,setName]=useState('');
    const[contact,setContact] = useState('');
    const[address,setAddress] = useState('');
    const[details,setDetails] = useState('');
    const[email,setEmail] = useState('');
    const[experience,setExperience] = useState('');
   
    



    function handleSubmit()
    {
              const data={
            "name":name,
            "address":address,
            "contact":contact,
            "details":details,
            "email":email,
            "experience":experience,
           
         
        };

        console.log(data);

        const token = localStorage.getItem('uid');

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };


        axios.post('http://127.0.0.1:8000/api/Photog', data,config)
  .then((resp) => {
    const data = resp.data;
    console.log(resp);
    if (data[0].status === "success") {
      console.log("Data Added");
      toast.success('Data Added!!!');
      window.location.href = '/photoindex';
    } else {
      toast.error('Sorry, an error occurred while adding data.');
      console.log("Error");
    }
  })
  .catch((error) => {
    console.error("Request failed:", error);
    toast.error('Sorry, an error occurred while sending the request.');
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
                  <span className="text-muted fw-light">Photography add/</span> 
                </h4>
                <div className="row">
                  <div className="col-xl">
                    <div className="card mb-4 col-md-6">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Basic with Icons</h5>
                        <small className="text-muted float-end"></small>
                      </div>
                      <div className="card-body">
                      <form action="" method="post">

                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">Full Name</label>
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
                          <label className="form-label" for="basic-icon-default-company">Email</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-company2" className="input-group-text"
                              ><i className="bx bx-buildings"></i
                            ></span>
                            <input
                              type="text"
                              name='email'
                              id="basic-icon-default-company"
                              className="form-control"
                              placeholder="ACME Inc."
                              aria-label="ACME Inc."
                              aria-describedby="basic-icon-default-company2"
                              onChange={email=>setEmail(email.target.value)} value={email}
                            />
                          </div>

                        </div>

                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-type">address</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="text"
                              name="address"
                              id="basic-icon-default-type"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-type2"
                              onChange={address=>setAddress(address.target.value)} value={address}
                            />

                            <span id="basic-icon-default-type2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-type">contact</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="text"
                              name="contact"
                              id="basic-icon-default-type"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-type2"
                              onChange={contact=>setContact(contact.target.value)} value={contact}

                            />
                            <span id="basic-icon-default-type2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>



                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-type">details</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="text"
                              name="details"
                              id="basic-icon-default-type"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-type2"
                              onChange={details=>setDetails(details.target.value)} value={details}

                            />
                            <span id="basic-icon-default-type2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>



                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-type">experience</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="text"
                              name="experience"
                              id="basic-icon-default-type"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-type2"
                              onChange={experience=>setExperience(experience.target.value)} value={experience}

                            />
                            <span id="basic-icon-default-type2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>


                       







                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Send</button>
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

export default PhotoAdd;
