import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <React.Fragment>
     
 
<footer
  className="text-center text-lg-start text-black"
  style={{ backgroundColor: "#F5F5F5",padding:"15px" }}
>
  <div className=" pb-0">
    <section className="">
      <div className="row">
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">
        <Link to="/">  <img src="/image/logo.png" alt="logo" className='logo'  style={{ width:"150px",marginLeft:"12px" }}  /></Link>

          </h6>
          <p>
            Here you can use rows and columns to organize your footer content.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">Services</h6>
          <p>
            <Link className="text-black"  style={{ textDecoration: 'none' }} to="/">Home</Link>
          </p>
          <p>
            <Link className="text-black"  style={{ textDecoration: 'none' }} to="/about">About Us</Link>
          </p>
          <p>
            <Link className="text-black"  style={{ textDecoration: 'none' }} to="/filter">Search Hall</Link>
          </p>
          <p>
            <Link className="text-black"  style={{ textDecoration: 'none' }} to="/contact">Contact</Link>
          </p>
        </div>
        
        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
          <p>
            <i className="fa fa-home mr-3" />Solapur,Maharashtra
          </p>
          <p>
            <i className="fa fa-envelope mr-3" /> <a href="mailto:info@vertextechnosys.com" className='text-black' style={{ textDecoration: 'none' }}>info@vertextechnosys.com</a>
          </p>
          <p>
            <i className="fa fa-phone mr-3" /> + 9373960666
          </p>
         
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>
          <Link
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <i className="fa fa-facebook-f" />
          </Link>
          <Link
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            href="#!"
            role="button"
          >
            <i className="fa fa-twitter" />
          </Link>
          <Link
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
          >
            <i className="fa fa-google" />
          </Link>
          <Link
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
            role="button"
          >
            <i className="fa fa-instagram" />
          </Link>
          <Link
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="#!"
            role="button"
          >
            <i className="fa fa-linkedin" />
          </Link>
         
        </div>
      </div>
    </section>
  </div>
  <div
    className="text-center p-3"
    
  >
    © 2023 Copyright:
    <Link className="text-black" href="https://www.vertextechnosys.com/">
     Vertex Technosys
    </Link>
  </div>
</footer>


    </React.Fragment>
  )
}

export default Footer