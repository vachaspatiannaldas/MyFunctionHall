import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Index() {
  const [Showdata, setShowdata] = useState([]);

  function fetchData() {
    axios.get('http://127.0.0.1:8000/api/register')
      .then((res) => {
        const data = res.data;
        console.log(data);
        setShowdata(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // useEffect(() => {
  //   const uid = JSON.parse(localStorage.getItem('uid'));
  //   if (!uid) {
  //     window.location.href = '/login';
  //   }
  //   else {
  //     fetchData()
  //   }
  // }, [])


  useEffect(() => {
  
      fetchData()
    
  }, [])

  function deletedata(id) {
    axios.delete('http://127.0.0.1:8000/api/register/' + id)
      .then((res) => {
        const data = res.data;
        console.log(data);
        if (data) {
          console.log('Data Deleted');
          toast.success('Data Deleted!!!', {
            position: 'top-right',
            autoClose: 5000, // Display success toast for 5 seconds
            hideProgressBar: true,
            newestOnTop: false,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: true,
          });
          window.location.href = '/Registertable';
        } else {
          console.log('Sorry');
          toast.error('Failed to delete data', { autoClose: 4000 });

        }
      })
      .catch((error) => {
        console.error(error);
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

                <div class="card">
                  <div className="d-flex justify-content-end mt-5 mx-5">
                    <a href='/create'>
                      <button type="submit" className="btn btn-primary">ADD</button>
                    </a>
                  </div>
                  <h5 class="card-header">Registeration Table</h5>
                  <div class="card-body">
                    <div class="table-responsive text-nowrap">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Landmark</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Pin</th>
                            <th>Mobile</th>
                            <th>Pan</th>
                            <th>Upi</th>
                            <th>Ref</th>
                            <th>Password</th>
                            <th>Status</th>
                            <th>Operation</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Showdata.map((row) => {
                            return (
                              <tr key={row.id}>
                                <td>{row.full_name}</td>
                                <td>{row.email}</td>
                                <td>{row.address}</td>
                                <td>{row.landmark}</td>
                                <td>{row.city}</td>
                                <td>{row.state}</td>
                                <td>{row.pin}</td>
                                <td>{row.mobile}</td>
                                <td>{row.pan}</td>
                                <td>{row.upi}</td>
                                <td>{row.ref}</td>
                                <td>{row.password}</td>
                                <td>{row.status}</td>

                                <td>
                                  <div class="dropdown">
                                    <button
                                      type="button"
                                      class="btn p-0 dropdown-toggle hide-arrow"
                                      data-bs-toggle="dropdown"
                                    >
                                      <i class="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                    <div class="dropdown-menu">
                                      <a class="dropdown-item" href="javascript:void(0);">
                                        <i class="bx bx-edit-alt me-1"></i> Edit
                                      </a>
                                      <a class="dropdown-item" href="javascript:void(0);" onClick={() => deletedata(row.id)}>
                                        <i class="bx bx-trash me-1"></i> Delete
                                      </a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
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

export default Index;
