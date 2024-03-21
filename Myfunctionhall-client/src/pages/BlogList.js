import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import Navbar from './Navbar';
import BackButton from './BackButton';
import Pagination from './Pagination';
import Footer from './Footer';
import Skeleton from 'react-loading-skeleton';

function BlogList() {
  const [Showdata, setShowdata] = useState([]);
  const [ShowCategorydata, setCategoryShowdata] = useState([]);
  const [Showblog, setShowblog] = useState([]);
  const navigate = useNavigate();
  const [servicedata, setServicedata] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Start pagination coding
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  const filteredData = servicedata.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // End pagination coding

  function truncateText(text, wordCount) {
    if (text) {
      const words = text.split(' ');
      if (words.length <= wordCount) {
        return text;
      } else {
        const truncatedText = words.slice(0, wordCount).join(' ');
        return `${truncatedText}...`;
      }
    }
    // Handle the case when text is undefined
    return '';
  }

  function fetchBlog() {
    axios.get('http://127.0.0.1:8000/api/blogfrontend')
      .then((res) => {
        const data = res.data;
        console.log(data);
        setServicedata(data);
        setShowblog(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchBlog();
  }, [])

  useEffect(() => {
    // Filter items based on search query
    const filtered = servicedata.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setShowblog(filtered);
  }, [searchQuery, servicedata]);

  return (
    <React.Fragment>
      <Navbar />
      <BackButton />

      <div className="container">
        <div className="form-group col-md-12 mt-5">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a Services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="col-md-12 my-5 d-flex justify-content-center align-items-center row">
          {currentItems.length > 0 ? (
            currentItems.map((item, index) => (
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
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">Description - {truncateText(item.desc, 40)}</p>
                      <b className="card-text">Place - {item.place}</b> <br />
                      <b className="card-text">Vendor - {item.Vendor}</b> <br />
                      <Link to={`/blog/` + item.id} style={{ textDecoration: 'none', color: 'black' }}>
                        <button type="button" className="btn btn-outline-light my-2" style={{ backgroundColor: "rgb(127, 1, 75)", color: "#fff" }}>View Blog</button>
                      </Link>
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
          totalItems={filteredData.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default BlogList;
