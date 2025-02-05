import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosConfig';
import Sidebar from './Sidebar';

function Index() {
  const navigate = useNavigate();
  const token = localStorage.getItem('uid');
  const usertype = localStorage.getItem('usertype');
   const name = localStorage.getItem('name');


   const [image, setImage] = useState(null);



   const email1 = localStorage.getItem('email');
 
 
   function profilefetch() {
    axiosInstance.get('http://127.0.0.1:8000/api/fetchuser/'+email1)
      .then((res) => {
        console.log(token);
        const data = res.data;
        console.log("profile data here",data);
        //console.log(data[0].name);
      
        setImage(data.image);
      })
      .catch((error) => {
        console.error("error here",error);
      });
  }
 
 
 useEffect(()=>{
  profilefetch();
 },[])
  // const email = localStorage.getItem('email');
 // console.log(name);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } 
    // else if (usertype === 'admin') {
    //   navigate('/dashboard');
    //   window.location.href="/dashboard"
    // } 
    
    
    else if (usertype === 'vendor') {
      navigate('/vendor');
      window.location.href="/vendor"
    } else {
      console.error("Invalid usertype:", usertype);
    }
  }, [token, usertype, navigate]);

  const destroyToken = () => {
    localStorage.removeItem('uid');
    localStorage.removeItem('usertype');
    navigate('/login');
  };

  
  return (
    <React.Fragment>
            <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
  
<Sidebar/>



<div className="layout-page">
         
     
         <nav
           className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
           id="layout-navbar"
         >
           <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
             <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
               <i className="bx bx-menu bx-sm"></i>
             </a>
           </div>

           <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
            
             <div className="navbar-nav align-items-center">
               <div className="nav-item d-flex align-items-center">
                 <i className="bx bx-search fs-4 lh-0"></i>
                 <input
                   type="text"
                   className="form-control border-0 shadow-none"
                   placeholder="Search..."
                   aria-label="Search..."
                 />
               </div>
             </div>
            

             <ul className="navbar-nav flex-row align-items-center ms-auto">
             {/* <button className="align-middle mx-3" onClick={destroyToken}>
       Log Out
     </button> */}

               <li className="nav-item lh-1 me-3">
                 <a
                   className="github-button"
                   href="https://github.com/themeselection/sneat-html-admin-template-free"
                   data-icon="octicon-star"
                   data-size="large"
                   data-show-count="true"
                   aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                   >Star</a
                 >
               </li>

              
               <li className="nav-item navbar-dropdown dropdown-user dropdown">
                 <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                   <div className="avatar avatar-online">
                     <img src={`http://localhost:8000/profile_upload/${image}`} alt className="w-px-40 h-auto rounded-circle" />
                   </div>
                 </a>
                 <ul className="dropdown-menu dropdown-menu-end">
                   <li>
                     <a className="dropdown-item" href="#">
                       <div className="d-flex">
                         <div className="flex-shrink-0 me-3">
                           <div className="avatar avatar-online">
                             <img src={`http://localhost:8000/profile_upload/${image}`} alt="" className="w-px-40 h-auto rounded-circle" />
                           </div>     
                         </div>
                         <div className="flex-grow-1">
                           <span className="fw-semibold d-block">Welcome {name}</span>
                           {/* <small className="text-muted">{usertype}</small> */}
                           <p>You are logged in as a {usertype}</p>
                         
                          {/* Depending on the usertype, you can render different content */}
                          {/* {usertype === 'admin' && <p>This is the admin dashboard.</p>}
                          {usertype === 'vendor' && <p>This is the vendor dashboard.</p>} */}
                         </div>
                       </div>
                     </a>
                   </li>
                   <li>
                     <div className="dropdown-divider"></div>
                   </li>
                   <li>
                     <a className="dropdown-item" href="/myprofiledetails">
                       <i className="bx bx-user me-2"></i>
                       <span className="align-middle">My Profile</span>
                     </a>
                   </li>
                   <li>
                     <a className="dropdown-item" href="#">
                       <i className="bx bx-cog me-2"></i>
                       <span className="align-middle">Settings</span>
                     </a>
                   </li>
                   <li>
                     <a className="dropdown-item" href="#">
                       <span className="d-flex align-items-center align-middle">
                         <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                         <span className="flex-grow-1 align-middle">Billing</span>
                         <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                       </span>
                     </a>
                   </li>
                   <li>
                   <li>
                     <a class="dropdown-item" >
                       <i class="bx bx-power-off me-2"></i>
                       {/* <span class="align-middle" >Log Out</span> */}

                       <button class="align-middle btn btn-light" onClick={destroyToken}>
                          Log Out
                        </button>
                     </a>
                   </li>
                   </li>
                   <li>
                     <div className="dropdown-divider"></div>
                   </li>
                   <li>
   

              </li>
                 </ul>
               </li>
              
             </ul>
           </div>
         </nav>

        

       
      
     </div>


     
      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
   

    <div className="buy-now">
      <a
        href="https://themeselection.com/products/sneat-bootstrap-html-admin-template/"
        target="_blank"
        className="btn btn-danger btn-buy-now"
        >Upgrade to Pro</a
      >
    </div>
    </div>

    </React.Fragment>
  )
}

export default Index