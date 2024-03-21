import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom'; // Import useParams hook

function ServicevendorsEdit(props) {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [ownername, setOwnername] = useState('');
  const [image, setImage] = useState(null); // Use null for initial value
  const [details, setDetails] = useState('');
  const [contact, setContact] = useState('');
  const [status, setStatus] = useState('');
  const [sid, setSid] = useState('');
  const [sidget, setSidget] = useState([]);

  function fetchServiceData() {
    axios
      .get(`http://127.0.0.1:8000/api/Servicevendors/${id}`)
      .then((res) => {
        const data = res.data;
        setName(data.name);
        setOwnername(data.ownername);
        setImage(data.image);
        setDetails(data.details);
        setContact(data.contact);
        setStatus(data.status);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }

  function handleImageChange(e) {
    setImage(e.target.files[0]);
  }
  function updateService(e) {
    e.preventDefault();
    if (!name) {
      toast.error('Please fill in all required fields.', { autoClose: 2000 });
      return;
    }

    const formData = new FormData();
    formData.append('_method', 'put');
    formData.append('name', name);
    formData.append('ownername', ownername);
    formData.append('image', image);
    formData.append('details', details);
    formData.append('contact', contact);
    formData.append('status', status);

    axios
      .post(`http://127.0.0.1:8000/api/Servicevendors/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((resp) => {
        if (resp && resp.data && resp.data.status === 'success') {
          console.log('Data Updated');
          toast.success('Data Updated!!!', { autoClose: 2000 });
          window.location.href = '/servicevendorsindex';
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

  useEffect(() => {
    fetchServiceData();
  }, []);

  function fetchsid()
  {
      axios.get('http://127.0.0.1:8000/api/Serviceget')
      .then((resp)=>{
          const data = resp.data;
          setSidget(data);
        
      });            

  }

  useEffect(()=>{
      fetchsid();
  },[]);

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
                      <form onSubmit={updateService}>

                      
                      

                        
                        <div className="mb-3">
                        <label className="form-label" htmlFor="basic-icon-default-fullname">Name</label>
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
                        <label className="form-label" htmlFor="basic-icon-default-fullname">Owner Name</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="ownername"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={ownername=>setOwnername(ownername.target.value)} value={ownername}
                            />

                          </div>
                        </div>



                      


                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-email">Image</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="file"
                              name="image"
                              id="image"
                              className="form-control"
                              accept="image/*" // Accept only image files
                              onChange={handleImageChange}
                            />
                            <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>


                     

                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-email">Details</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="text"
                              name="details"
                              id="basic-icon-default-email"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-email2"
                              onChange={details=>setDetails(details.target.value)} value={details}

                            />
                            <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>
                     

                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-email">contact</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="text"
                              name="contact"
                              id="basic-icon-default-email"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-email2"
                              onChange={contact=>setContact(contact.target.value)} value={contact}

                            />
                            <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>


                     

                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-email">Status</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="text"
                              name="status"
                              id="basic-icon-default-email"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-email2"
                              onChange={status=>setStatus(status.target.value)} value={status}

                            />
                            <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>



                        <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                <label for="">Select Sid </label>
                                                <select class="form-control" name="sid" id="" value={sid} onChange={(sid)=>{
                                                    setSid(sid.target.value)
                                                }}>
                                                    {
                                                        sidget.map((obj)=>{
                                                        return (
                                                            <option value={obj.id}>{obj.name}</option>
                                                        )
                                                        })
                                                    }
                                                
                                                </select>
                                            </div>
                                           </div>





                        <button type="button" class="btn btn-info"  onClick={updateService}>Update</button>
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

export default ServicevendorsEdit;
