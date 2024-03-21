import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      email: email,
      password: password
    };

    axios.post('http://127.0.0.1:8000/api/Login', data)
      .then((resp) => {
        const responseData = resp.data;
        console.log(responseData);

        if (responseData[0].status === "success") {
          console.log("Data Added");
          toast.success('Login Successfully!!!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000 
          });

          localStorage.setItem("uid", JSON.stringify(responseData[0].user));
          window.location.href = "/";
        } else {
          toast.error('Invalid Credential!!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000 
          });
          console.log("Error");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        toast.error('An error occurred during login. Please try again.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000 
        });
      });
  }
  return (
    <React.Fragment>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />
          <div className="layout-page">
            <Header />
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">
                  <span className="">Login</span> 
                </h4>
                <div className="row">
                  <div className="col-xl">
                    <div className="card mb-4 col-md-6">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Login</h5>
                        <small className="text-muted float-end">Merged input group</small>
                      </div>
                      <div className="card-body">
                        <form>
                          <div className="mb-3">
                            <label className="form-label" htmlFor="basic-icon-default-fullname">
                              Email
                            </label>
                            <div className="input-group input-group-merge">
                              <span id="basic-icon-default-fullname2" className="input-group-text">
                                <i className="bx bx-user"></i>
                              </span>
                              <input type="text" name="email" onChange={email=>setEmail(email.target.value)} value={email} class="form-control" />

                            </div>
                          </div>

                          <div className="mb-3">
                            <label className="form-label" htmlFor="basic-icon-default-fullname">
                              Password
                            </label>
                            <div className="input-group input-group-merge">
                              <span id="basic-icon-default-fullname2" className="input-group-text">
                                <i className="bx bx-user"></i>
                              </span>
                              <input type="password" name="password" onChange={password=>setPassword(password.target.value)} value={password} class="form-control" />

                            </div>
                          </div>


                          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                            Send
                          </button>
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

export default Login;
