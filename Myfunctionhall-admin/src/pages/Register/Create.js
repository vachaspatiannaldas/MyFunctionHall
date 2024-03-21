import React, { useEffect, useState } from 'react'
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Form() {
    const[fname,setFname]=useState('');
    const[email,setEmail] = useState('');
    const[address,setAddress] = useState('');
    const[landmark,setLandmark] = useState('');
    const[city,setCity] = useState('');
    const[state,setState] = useState('');
    const[pin,setPin] = useState('');
    const[mobile,setMobile] = useState('');
    const[pan,setPan] = useState('');
    const[upi,setUpi] = useState('');
    const[password,setPassword] = useState('');
    const[status,setStatus] = useState('');

    
    const [fnameError, setFnameError] = useState(false);
    const [fnameErrormsg, setFnameErrormsg] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [emailErrormsg, setEmailErrormsg] = useState('');
    const [addressError, setAddressError] = useState(false);
    const [addressErrormsg, setAddressErrormsg] = useState('');
    const [mobileError, setMobileError] = useState(false);
    const [mobileErrormsg, setMobileErrormsg] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrormsg, setPasswordErrormsg] = useState('');
  


    function handleSubmit()
    {
        const regExp = /[A-Za-z]/;
        const regnumExp =  /[0-9]/;
        const regmailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

       
        if (!fname) {
            setFnameErrormsg('Required');
            setFnameError(true)
        }
        else if (!regExp.test(fname)) {
            setFnameErrormsg('Only Characters');
            setFnameError(true)
        }
        if (!email) {
            setEmailErrormsg('Required');
            setEmailError(true)
        }
        else if (!regmailExp.test(email)) {
            setEmailErrormsg('Only Characters');
            setEmailError(true)
        }
        if (!address) {
            setAddressErrormsg('Required');
            setAddressError(true)
        }
        if (!mobile) {
            setMobileErrormsg('Required');
            setMobileError(true)
        }
        else if (!regnumExp.test(mobile)) {
            setMobileErrormsg('Only Numbers');
            setMobileError(true)
        }
        if (!password) {
            setPasswordErrormsg('Required');
            setPasswordError(true)
        }



        else {
        const data={
            "full_name":fname,
            "email":email,
            "address":address,
            "landmark":landmark,
            "city":city,
            "state":state,
            "pin":pin,
            "mobile":mobile,
            "pan":pan,
            "upi":upi,
            "password":password,
            "status":status,
         
        };

        console.log(data);
        axios.post('http://127.0.0.1:8000/api/register', data)
      .then((resp) => {
        const responseData = resp.data;
        console.log(resp);
        if (responseData[0].status === "success") {
          console.log("Data Added");
          toast.success('Data Added!!!');
          window.location.href = '/Registertable';
        } else {
          console.log("Error");
          toast.error('Error occurred while adding data');
        }
      })
      .catch((error) => {
        console.log("Error", error);
        toast.error('An error occurred while making the request');
      });
  





        }
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
                          <label className="form-label" for="basic-icon-default-fullname">Full Name</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="full_name"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={fname=>setFname(fname.target.value)} value={fname}
                            />
  {fnameError && <p className="error">{fnameErrormsg}</p>}

                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-company">Company</label>
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
                          {emailError && <p className="error">{emailErrormsg}</p>}

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
 {addressError && <p className="error">{addressErrormsg}</p>}

                            <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-email">landmark</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="text"
                              name="landmark"
                              id="basic-icon-default-email"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-email2"
                              onChange={landmark=>setLandmark(landmark.target.value)} value={landmark}

                            />
                            <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>



                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-email">city</label>
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
                          <label className="form-label" for="basic-icon-default-email">state</label>
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
                          <label className="form-label" for="basic-icon-default-email">pin</label>
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


                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-email">mobile</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="text"
                              name="mobile"
                              id="basic-icon-default-email"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-email2"
                              onChange={mobile=>setMobile(mobile.target.value)} value={mobile}

                            />
 {mobileError && <p className="error">{mobileErrormsg}</p>}

                            <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>







                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-phone">pan</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-phone2" className="input-group-text"
                              ><i className="bx bx-phone"></i
                            ></span>
                            <input
                              type="text"
                              name="pan"
                              id="basic-icon-default-phone"
                              className="form-control phone-mask"
                              placeholder="658 799 8941"
                              aria-label="658 799 8941"
                              aria-describedby="basic-icon-default-phone2"
                              onChange={pan=>setPan(pan.target.value)} value={pan}

                            />
                          </div>
                        </div>





                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-phone">upi</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-phone2" className="input-group-text"
                              ><i className="bx bx-phone"></i
                            ></span>
                            <input
                              type="text"
                              name="upi"
                              id="basic-icon-default-phone"
                              className="form-control phone-mask"
                              placeholder="658 799 8941"
                              aria-label="658 799 8941"
                              aria-describedby="basic-icon-default-phone2"
                              onChange={upi=>setUpi(upi.target.value)} value={upi}

                            />
                          </div>
                        </div>





                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-phone">password</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-phone2" className="input-group-text"
                              ><i className="bx bx-phone"></i
                            ></span>
                            <input
                              type="text"
                              name="password"
                              id="basic-icon-default-phone"
                              className="form-control phone-mask"
                              placeholder="658 799 8941"
                              aria-label="658 799 8941"
                              aria-describedby="basic-icon-default-phone2"
                              onChange={password=>setPassword(password.target.value)} value={password}

                            />
{passwordError && <p className="error">{passwordErrormsg}</p>}

                          </div>
                        </div>



                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-phone">password</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-phone2" className="input-group-text"
                              ><i className="bx bx-phone"></i
                            ></span>
                         
                            <select class="form-control" name="status" onChange={status=>setStatus(status.target.value)} value={status}>
                                             <option value="active">Active</option>
                                             <option value="Inactive">Inactive</option>
                            </select>
                           
                          </div>
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

export default Form;
