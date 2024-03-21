import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

function PackageEdit() {
  const [days, setDays] = useState('');
  const [amount, setAmount] = useState('');
  const [details, setDetails] = useState('');
   
  const { id } = useParams();

  function updatedata() {
    axios.get('http://127.0.0.1:8000/api/Package/' + id)
      .then((res) => {
        const data = res.data;
        console.log(data);

        setDays(data.days);
        setAmount(data.amount);
        setDetails(data.details);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
  function updateCategory(e) {
    e.preventDefault(); // Prevent the default form submission

    const datacode = {
      "days": days,
      "amount": amount,
      "details": details,
    };

    console.log(id);
    console.log(datacode); // Check if the datacode object is correct

    axios.put('http://127.0.0.1:8000/api/Package/' + id, datacode)
      .then((resp) => {
        const data = resp.data;
        console.log(resp);
        if (data[0].status === "success") {
          console.log("update");
          toast.success('Data Updated!!!'); // Use toast.success instead of alert
          window.location.href = '/packageindex';
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
                <span className="text-muted fw-light">PackageEdits/</span> Vertical Layouts
              </h4>
              <div className="row">
                <div className="col-xl">
                  <div className="card mb-4 col-md-6">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Basic with Icons</h5>
                      <small className="text-muted float-end">Merged input group</small>
                    </div>
                    <div className="card-body">
                      <form onSubmit={updateCategory}>
                       
                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-company">Days</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-company2" className="input-group-text"
                              ><i className="bx bx-buildings"></i
                            ></span>
                            <input
                              type="text"
                              name='days'
                              id="basic-icon-default-company"
                              className="form-control"
                              placeholder="ACME Inc."
                              aria-label="ACME Inc."
                              aria-describedby="basic-icon-default-company2"
                              onChange={days=>setDays(days.target.value)} value={days}
                            />
                          </div>

                        </div>
                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-type">Amount</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="text"
                              name="amount"
                              id="basic-icon-default-type"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-type2"
                              onChange={amount=>setAmount(amount.target.value)} value={amount}
                            />

                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-type">Details</label>
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

export default PackageEdit;