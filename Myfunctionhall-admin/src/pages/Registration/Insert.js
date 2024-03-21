import React, {  useState } from 'react'
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


function Insert() {
    const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setCpassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
      confirm_password: confirm_password,
      usertype:"vendor"
    };
    console.log(data);

    if (password !== confirm_password) {
      // Passwords do not match
      toast.error('Passwords do not match. Please try again.', { autoClose: 4000 });
      return;
    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/registration', data);
      console.log(response);
      // const token = response.data[0].token;
      // localStorage.getItem('uid', token);
      //navigate('/registration');
      window.location.href="/login";
      toast.success('Registration Done', { autoClose: 6000 });
      setName('');
      setEmail('');
      setPassword('');
      setCpassword('');
      //console.log("Token:", token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
  //   <React.Fragment>
  //      <ToastContainer />
  //  <div className="layout-wrapper layout-content-navbar">
  //       <div className="layout-container">
  //         <Sidebar />
  //         <div className="layout-page">
  //           <Header />
            
  //           <div className="content-wrapper">
  //             <div className="container-xxl flex-grow-1 container-p-y">
  //               <h4 className="fw-bold py-3 mb-4">
  //                 <span className="text-muted fw-light">Vendor Registeration /</span> Form
  //               </h4>
                
  //               <div className="row">
  //                 <div className="col-xl">
  //                   <div className="card mb-4 col-md-6">
  //                     <div className="card-header d-flex justify-content-between align-items-center">
  //                       <h5 className="mb-0">Vendor Registration</h5>
  //                       <small className="text-muted float-end"></small>
  //                     </div>
  //                     <div className="card-body">
  //                     <form onSubmit={handleSubmit}>

  //                       <div className="mb-3">
  //                         <label className="form-label" for="basic-icon-default-fullname">Full Name</label>
  //                         <div className="input-group input-group-merge">
  //                           <span id="basic-icon-default-fullname2" className="input-group-text"
  //                             ><i className="bx bx-user"></i
  //                           ></span>
  //                           <input
  //                             type="text"
  //                             name="name"
  //                             className="form-control"
  //                             id="basic-icon-default-fullname"
  //                             placeholder="John Doe"
  //                             aria-label="John Doe"
  //                             aria-describedby="basic-icon-default-fullname2"
  //                             onChange={(e) => setName(e.target.value)}
  //                             value={name}
  //                           />

  //                         </div>
  //                       </div>

  //                       <div className="mb-3">
  //                         <label className="form-label" for="basic-icon-default-company">Email</label>
  //                         <div className="input-group input-group-merge">
  //                           <span id="basic-icon-default-company2" className="input-group-text"
  //                             ><i className="bx bx-buildings"></i
  //                           ></span>
  //                           <input
  //                             type="text"
  //                             value={email}
  //                             id="basic-icon-default-company"
  //                             className="form-control"
  //                             placeholder="ACME Inc."
  //                             aria-label="ACME Inc."
  //                             aria-describedby="basic-icon-default-company2"
  //                             onChange={(e) => setEmail(e.target.value)}

  //                           />
  //                         </div>

  //                       </div>
                        


  //                         <div className="mb-3">
  //                         <label className="form-label" for="basic-icon-default-company">Password</label>
  //                         <div className="input-group input-group-merge">
  //                           <span id="basic-icon-default-company2" className="input-group-text"
  //                             ><i className="bx bx-buildings"></i
  //                           ></span>
  //                           <input
  //                             type="password"
  //                             value={password}
  //                             id="basic-icon-default-company"
  //                             className="form-control"
  //                             placeholder="ACME Inc."
  //                             aria-label="ACME Inc."
  //                             aria-describedby="basic-icon-default-company2"
  //                             onChange={(e) => setPassword(e.target.value)}

  //                           />
  //                         </div>

  //                       </div>      



                        
  //                         <div className="mb-3">
  //                         <label className="form-label" for="basic-icon-default-company">Confirm Password</label>
  //                         <div className="input-group input-group-merge">
  //                           <span id="basic-icon-default-company2" className="input-group-text"
  //                             ><i className="bx bx-buildings"></i
  //                           ></span>
  //                           <input
  //                             type="password"
  //                             value={confirm_password}
  //                             id="basic-icon-default-company"
  //                             className="form-control"
  //                             placeholder="ACME Inc."
  //                             aria-label="ACME Inc."
  //                             aria-describedby="basic-icon-default-company2"
  //                             onChange={(e) => setCpassword(e.target.value)}

  //                           />
  //                         </div>

  //                       </div>        

  //                       <button type="button" className="btn btn-primary" onClick={handleSubmit}>Send</button>
  //                     </form>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //             <Footer />
  //             <div className="content-backdrop fade"></div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="layout-overlay layout-menu-toggle"></div>
  //     </div>

  //     <div className="buy-now">
  //       <a
  //         href="https://themeselection.com/products/sneat-bootstrap-html-admin-template/"
         
  //         className="btn btn-danger btn-buy-now"
  //       >
  //         Upgrade to Pro
  //       </a>
  //     </div> 

  //   </React.Fragment>



  <React.Fragment>
  <ToastContainer/>
  <div id='loginsec'>
  <div className="container " >
<div className="card">
<h4>Vendor Registration Form</h4>
<form onSubmit={handleSubmit}>
  <label for="Email">Name</label>
  <input type="text" id="Email" placeholder="Enter your Email"   onChange={(e) => setName(e.target.value)}
                           value={name}  required />
  <label for="Email">Email</label>
  <input type="email" id="Email" placeholder="Enter your Email"  onChange={(e) => setEmail(e.target.value)}
          value={email} required/>

  <label for="password">Password</label>
  <input type="password" id="password" placeholder="Enter your password"  onChange={(e) => setPassword(e.target.value)}
          value={password} required/>
  <label for="password">Confirm Password</label>
  <input type="password" id="password" placeholder="Enter your password"   onChange={(e) => setCpassword(e.target.value)}
          value={confirm_password}required/>

  <button type="submit">Register Vendor </button>
  <div className="switch">Back to Login? <a  href="/login"> Login </a></div>

      </form>
</div>

</div>
</div>
</React.Fragment>
  );
}

export default Insert;
