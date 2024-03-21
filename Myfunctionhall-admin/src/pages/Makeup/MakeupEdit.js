import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import  axiosInstance  from '../../axiosConfig';

function AddOnEdit(props) {
  const { id } = useParams();
  const [bname, setBname] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [experience, setExperience] = useState('');
  const [image, setImage] = useState(null); // Use null for initial value
  const [link, setLink] = useState('');
  const [details, setDetails] = useState('');
  const [fora, setFora] = useState(null);


  function fetchAddOnData() {
    axiosInstance
      .get(`http://127.0.0.1:8000/api/Makeup/${id}`)
      .then((res) => {
        const data = res.data;
        setBname(data.bname);
        setAddress(data.address);
        setContact(data.contact);
        setAddress(data.address);
        setContact(data.contact);
        setExperience(data.experience);
        setImage(data.image);
        setDetails(data.details);
        setLink(data.link);
        setFora(data.fora);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }

  function handleImageChange(e) {
    setImage(e.target.files[0]);
  }

  function updateAddOn(e) {
    e.preventDefault();
    // if (!role || !name || !email || !contact) {
    //   toast.error('Please fill in all required fields.', { autoClose: 2000 });
    //   return;
    // }

    const formData = new FormData();
    formData.append('_method','put');
    formData.append('bname',bname);
    formData.append('image',image);
    formData.append('for',fora);
    formData.append('contact',contact);
    formData.append('address',address);
    formData.append('experience',experience);
    formData.append('link',link);
    formData.append('details',details);

    axiosInstance
      .post(`http://127.0.0.1:8000/api/Makeup/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((resp) => {
        if (resp && resp.data && resp.data.status === 'success') {
          console.log('Data Updated');
          toast.success('Data Updated!!!', { autoClose: 2000 });
          window.location.href = '/makeupindex';
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
    fetchAddOnData();
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
                        <h5 className="mb-0">Makeup Edit</h5>
                        <small className="text-muted float-end">Merged input group</small>
                      </div>
                      <div className="card-body">
                   

                      <form encType="multipart/form-data">


<div className="mb-3">
  <label className="form-label" for="basic-icon-default-fullname">bname</label>
  <div className="input-group input-group-merge">
    <span id="basic-icon-default-fullname2" className="input-group-text"
      ><i className="bx bx-user"></i
    ></span>
    <input
      type="text"
      name="bname"
      className="form-control"
      id="basic-icon-default-fullname"
      placeholder="John Doe"
      aria-label="John Doe"
      aria-describedby="basic-icon-default-fullname2"
      onChange={bname=>setBname(bname.target.value)} value={bname}
    />

  </div>
</div>




<div className="mb-3">
  <label className="form-label" for="basic-icon-default-fullname">fora</label>
  <div className="input-group input-group-merge">
    <span id="basic-icon-default-fullname2" className="input-group-text"
      ><i className="bx bx-user"></i
    ></span>
    <input
      type="text"
      name="for"
      className="form-control"
      id="basic-icon-default-fullname"
      placeholder="John Doe"
      aria-label="John Doe"
      aria-describedby="basic-icon-default-fullname2"
      onChange={fora=>setFora(fora.target.value)} value={fora}
    />

  </div>
</div>




<div className="mb-3">
  <label className="form-label" for="basic-icon-default-fullname">Details</label>
  <div className="input-group input-group-merge">
    <span id="basic-icon-default-fullname2" className="input-group-text"
      ><i className="bx bx-user"></i
    ></span>
    <input
      type="text"
      name="details"
      className="form-control"
      id="basic-icon-default-fullname"
      placeholder="John Doe"
      aria-label="John Doe"
      aria-describedby="basic-icon-default-fullname2"
      onChange={details=>setDetails(details.target.value)} value={details}
    />

  </div>
</div>



<div className="mb-3">
  <label className="form-label" for="basic-icon-default-company">contact</label>
  <div className="input-group input-group-merge">
    <span id="basic-icon-default-company2" className="input-group-text"
      ><i className="bx bx-buildings"></i
    ></span>
    <input
      type="text"
      name='contact'
      id="basic-icon-default-company"
      className="form-control"
      placeholder="ACME Inc."
      aria-label="ACME Inc."
      aria-describedby="basic-icon-default-company2"
      onChange={contact=>setContact(contact.target.value)} value={contact}
    />
  </div>

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
  <label className="form-label" for="basic-icon-default-email">experience</label>
  <div className="input-group input-group-merge">
    <span className="input-group-text"><i className="bx bx-envelope"></i></span>
    <input
      type="text"
      name="experience"
      id="basic-icon-default-email"
      className="form-control"
      placeholder="john.doe"
      aria-label="john.doe"
      aria-describedby="basic-icon-default-email2"
      onChange={experience=>setExperience(experience.target.value)} value={experience}

    />
    <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
  </div>
  <div className="form-text">You can use letters, numbers & periods</div>
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
      onChange={handleImageChange}

    />
    <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
  </div>
  <div className="form-text">You can use letters, numbers & periods</div>
</div>


<div className="mb-3">
  <label className="form-label" for="basic-icon-default-email">link</label>
  <div className="input-group input-group-merge">
    <span className="input-group-text"><i className="bx bx-envelope"></i></span>
    <input
      type="text"
      name="link"
      id="basic-icon-default-email"
      className="form-control"
      placeholder="john.doe"
      aria-label="john.doe"
      aria-describedby="basic-icon-default-email2"
      onChange={link=>setLink(link.target.value)} value={link}

    />
    <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
  </div>
  <div className="form-text">You can use letters, numbers & periods</div>
</div>







<button type="submit" className="btn btn-primary" onClick={updateAddOn}>
Send</button>
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

export default AddOnEdit;
