import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import Navbar from './Navbar';
import BackButton from './BackButton';
import Pagination from './Pagination';
import Footer from './Footer';
import Skeleton from 'react-loading-skeleton';

function AllTestimonial() {
  const [Showblog, setShowblog] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function fetchBlog() {
    axios.get('http://127.0.0.1:8000/api/testimonial')
      .then((res) => {
        const data = res.data;
        console.log(data);
        setShowblog(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <BackButton />

      <div className="container">
        <div className="col-md-12 my-5 d-flex justify-content-center align-items-center row">
          {Showblog.length > 0 ? (
            Showblog.slice(indexOfFirstItem, indexOfLastItem).map((item, index) => (
              <div key={index} className="card mb-3 col-md-4 col-lg-3" style={{ width: "100%", borderRadius: "25px", height: "240px" }}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src="image/f6.PNG"
                      style={{ height: "240px", objectFit: "cover" }}
                      className="card-img"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-3">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">Description - {item.description}</p>
                    
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="card mb-3 col-md-4 col-lg-3" style={{ width: "100%", borderRadius: "25px", height: "240px" }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <Skeleton width={240} height={240} />
                </div>
                <div className="col-md-8">
                  <div className="card-body p-3">
                    <h4 className='text-center'>Sorry No Hall Found...</h4>
                    <h5 className="card-title"><Skeleton width={100} /></h5>
                    <p className="card-text"><Skeleton count={3} /></p>
                    <Link style={{ textDecoration: 'none', color: 'black' }}>
                      <button type="button" className="btn btn-outline-light my-2" >
                        <Skeleton width={100} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={Showblog.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default AllTestimonial;
