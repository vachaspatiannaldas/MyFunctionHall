import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from "react-router-dom";
import Navbar from './Navbar';
import BackButton from './BackButton';
import Pagination from './Pagination';
import Footer from './Footer';import './Servicedescription.css';

const Servicedescription = () => {
  const [servicedata, setServicedata] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

 // Start pagination coding
 const [currentPage, setCurrentPage] = useState(1);
 const [itemsPerPage] = useState(4);

 const filteredData = servicedata.filter((item) =>
 item.name.toLowerCase().includes(searchQuery.toLowerCase())
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
    
   
      useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/Servicevendors')
          .then((res) => {
            const data = res.data;
            setServicedata(data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);
      


  

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
            {currentItems.map((item, index) => (
              <div key={index} className="card mb-3 col-md-4 col-lg-3" style={{ width: "100%", borderRadius: "25px" ,height: "240px"}}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                     src={`http://localhost:8000/servicevendors_upload/${item.image}`} 
                      style={{ height: "240px", objectFit: "cover" }}
                      className="card-img"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-3">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">Description - {truncateText(item.details, 40)}</p>
                      <b className="card-text">ownername - {item.ownername}</b> <br />
  
                      <button
  type="button"
  className="btn btn-outline-light my-2"
  style={{ backgroundColor: "rgb(127, 1, 75)", color: "#fff" }}
  onClick={() => {
    const phoneNumber = item.contact; 
    const telUri = `tel:${phoneNumber}`;
    window.location.href = telUri;
  }}
><i class="fa fa-phone mx-1"></i>
  {item.contact}
</button>


                        
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        <div className="d-flex justify-content-center align-items-center">
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={servicedata.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
        <Footer />
        </React.Fragment>
    )
}

export default Servicedescription