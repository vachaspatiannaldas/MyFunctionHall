import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import BackButton from './BackButton';
import Pagination from './Pagination';
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function AddressDesc() {
  const { address } = useParams();
  const pidd = address;

  const [hallData, setHallData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  // Start pagination coding
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // End pagination coding

  function fetchHallData() {
    axios
      .get(`http://127.0.0.1:8000/api/getHallsByAddress/${pidd}`)
      .then((res) => {
        const data = res.data;
        if (Array.isArray(data) && data.length > 0) {
          setHallData(data);
          setFilteredItems(data); // Initialize filtered items with all data
        } else {
          setHallData([]);
          setFilteredItems([]); // Initialize filtered items as empty
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function truncateText(text, wordCount) {
    const words = text.split(' ');
    if (words.length <= wordCount) {
      return text;
    } else {
      const truncatedText = words.slice(0, wordCount).join(' ');
      return `${truncatedText}...`;
    }
  }

  useEffect(() => {
    fetchHallData();
  }, [pidd]);

  useEffect(() => {
    // Filter items based on search query
    const filtered = hallData.filter((item) =>
      item.hname.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchQuery, hallData]);

  return (
    <React.Fragment>
      <Navbar />
      <BackButton />

      <div className="container">
        <div className="form-group col-md-12 mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a hall..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="col-md-12 my-5 d-flex justify-content-center align-items-center row">
          {currentItems.length > 0 ? (
            currentItems.map((item, index) => (
              <div key={index} className="card mb-3 col-md-4 col-lg-3" style={{ width: "100%", height: "240px", borderRadius: "25px" }}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src={`http://localhost:8000/hall_upload/${JSON.parse(item.images)[0]}`}
                      style={{ height: "240px", objectFit: "cover" }}
                      className="card-img"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-3">
                      <h5 className="card-title">{item.hname}</h5>
                      <p className="card-text">Description - {truncateText(item.for, 40)}</p>
                      <b className="card-text">Price - {item.rent}</b> <br />
                      <b className="card-text">Hall Type - {item.type}</b> <br />
                      <Link to={'/description/' + item.id} style={{ textDecoration: 'none', color: 'black' }}>
                        <button type="button" className="btn btn-outline-primary my-2">View Hall</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="row">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="card mb-3 col-md-4 col-lg-3" style={{ width: "100%", height: "240px", borderRadius: "25px" }}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <Skeleton height={240} width={100} style={{ objectFit: "cover" }} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body p-3">
                        <h5 className="card-title"><Skeleton width={100} />Sorry No data Found</h5>
                        <p className="card-text"><Skeleton count={2} width={100} /></p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={filteredItems.length} // Use filtered items for pagination
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default AddressDesc;
