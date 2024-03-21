import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactPaginate from 'react-paginate';

function Index() {
  const [Showdata, setShowdata] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
 // const [currentPage, setCurrentPage] = useState(0);

  // const itemsPerPage = 5;


  const token = localStorage.getItem('uid');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  function fetchData(pageNumber = 0) {
    axios.get(`http://127.0.0.1:8000/api/AddOn`,config)
      .then((res) => {
        const data = res.data.data;
        const total = res.data.total;
        console.log('Fetched data:', data);
        console.log('Total records:', total);
        setShowdata(data);
        // setTotalPages(Math.ceil(total / itemsPerPage));
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }
  
  useEffect(() => {
    const token = localStorage.getItem('uid');
    if(!token)
    {
      window.location.href="/login"
    }
    fetchData();
  }, []);

  // function handlePageClick(selectedPage) {
  //   setCurrentPage(selectedPage.selected);
  //   fetchData(selectedPage.selected);
  // }


  function deletedata(id) {
    axios.delete('http://127.0.0.1:8000/api/AddOn/' + id,config)
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
          window.location.href = '/AddOnIndex';
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
      <ToastContainer/>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />
          <div className="layout-page">
            <Header />
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">

                <div class="card">
                  <div className="d-flex justify-content-end mt-5 mx-5">
                    <a href='/addonCreate'>
                      <button type="submit" className="btn btn-primary">ADD</button>
                    </a>
                  </div>
                  <h5 class="card-header">Registeration Table</h5>
                  <div class="card-body">
                    <div class="table-responsive text-nowrap">
                    {Showdata && Showdata.length > 0 ? (
                      <table className="table table-bordered" style={{ marginBottom: "100px" }}>
                        <thead>
                          <tr>
                            <th>role</th>
                            <th>Name</th>
                            <th>contact</th>
                            <th>email</th>
                            <th>Address</th>
                            <th>ratings</th>
                            <th>testimonial_img</th>
                            <th>eventhistory</th>
                            <th>operations</th>
                          </tr>
                        </thead>
                        <tbody>
                          
                          {Showdata.map((row) => {
                            return (
                              <tr key={row.id}>
                                <td>{row.role}</td>
                                <td>{row.name}</td>
                                <td>{row.contact}</td>

                                <td>{row.email}</td>
                                <td>{row.address}</td>
                                <td>{row.ratings}</td>
                                <td>
                                <img src={`http://localhost:8000/addon_upload/${row.testimonial_img}`} 
                                alt="#" style={{width:"380px",height:"290px",marginTop:"40px",marginLeft:"40px"}}/>
                                </td>
                                {/* <td>{row.testimonial_img}</td> */}
                                <td>{row.eventhistory}</td>
                              
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
                                      {/* <a class="dropdown-item" href={'/AddOnEdit/'+row.id}>
                                        <i class="bx bx-edit-alt me-1"></i> Edit
                                      </a> */}
                                      <a  className='btn btn-primary' href={'/AddOnEdit/'+row.id}>Edit</a>
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
                       ) : (
                        <p>No data available.</p>
                      )}
                    </div>
                    <div className="d-flex justify-content-center mt-4">
        {/* <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={totalPages}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        /> */}
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
