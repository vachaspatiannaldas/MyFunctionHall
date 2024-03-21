import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../axiosConfig';

function PhotoEdit() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
   
  const { id } = useParams();

  function updatedata() {
    axiosInstance.get('http://127.0.0.1:8000/api/Tag/' + id)
      .then((res) => {
        const data = res.data;
        console.log(data);

        setName(data.name);
        setStatus(data.status);
       
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
  function updateCategory(e) {
    e.preventDefault(); // Prevent the default form submission

    const datacode = {
      "name": name,
      "status": status,
    
    };

    console.log(id);
    console.log(datacode); // Check if the datacode object is correct

    axiosInstance.put('http://127.0.0.1:8000/api/Tag/' + id, datacode)
      .then((resp) => {
        const data = resp.data;
        console.log(resp);
        if (data[0].status === "success") {
          console.log("update");
          toast.success('Data Updated!!!'); // Use toast.success instead of alert
          window.location.href = '/tagindex';
        } else {
          console.log("Error");
          toast.error('Error occurred while updating data');
        }
      })
      .catch((error) => {
        console.log("Error", error);
        toast.error('An error occurred while making the request');
      });
  }

  useEffect(() => {
    updatedata();
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
                <span className="text-muted fw-light">Tagraphy Edit/</span>
              </h4>
              <div className="row">
                <div className="col-xl">
                  <div className="card mb-4 col-md-6">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Tagraphy </h5>
                      <small className="text-muted float-end"></small>
                    </div>
                    <div className="card-body">
                      <form onSubmit={updateCategory}>
                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">Full Name</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text">
                              <i className="bx bx-user"></i>
                            </span>
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={name => setName(name.target.value)} value={name}
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





                          <button type="submit" className="btn btn-info">Update</button>
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

export default PhotoEdit;