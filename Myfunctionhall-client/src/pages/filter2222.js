// when user checked category showing category and when user checked All function  showing perticular hall and whe user click clicked range + enter min max price it working separately 
// so everyhing working separately but i want to whenvver user checked category + All function + and increase rnage + entered min and max everyhing work correctly as user want 



import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from './Navbar';

function Filter() {
  const [HallShowdata, setHallShowdata] = useState([]);
  const [ShowCategorydata, setCategoryShowdata] = useState([]);

  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [halls, setHalls] = useState([]);

  function fetchhallData() {
    axios.get('http://127.0.0.1:8000/api/hallfrontend')
      .then((res) => {
        const data = res.data;
        console.log(data);
        setHallShowdata(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function fetchCategory() {
    axios.get('http://127.0.0.1:8000/api/categoryfrontend')
      .then((res) => {
        const data = res.data;
        console.log(data);
        setCategoryShowdata(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  
  function fetchCategory2() {
    axios.get('http://127.0.0.1:8000/api/categoryfrontend')
      .then((res) => {
        const data = res.data;
        console.log(data);
        setCategories(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchhallData();
    fetchCategory();
    fetchCategory2();
  }, []);

  const handleCheckboxChange = (categoryId) => {
    const updatedCategories = [...selectedCategories];
    if (updatedCategories.includes(categoryId)) {
      // Category is already selected, remove it
      const index = updatedCategories.indexOf(categoryId);
      updatedCategories.splice(index, 1);
    } else {
      // Category is not selected, add it
      updatedCategories.push(categoryId);
    }
    setSelectedCategories(updatedCategories);

    // Fetch halls based on selected categories
    axios.post('http://127.0.0.1:8000/api/filter-halls', { selectedCategories })
      .then((response) => {
        setHalls(response.data.halls);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div>
              <h2>Filter Halls by Category</h2>
              <ul>
                {categories.map((category) => (
                  <li key={category.id}>
                    <label>
                      <input
                        type="checkbox"
                        value={category.id}
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => handleCheckboxChange(category.id)}
                      />
                      {category.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <h1>hhh</h1>

            {halls.map((hall) => (
              <div className="card-body p-0 collapse show" id="collapseExample5" key={hall.id}>
                <ul className="list-group list-group-flush" style={{ height: "200px", overflow: "auto" }}>
                  {ShowCategorydata.map((row) => (
                    <li className="list-group-item p-2 d-flex justify-content-between align-items-center ml-3">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label ml-1" htmlFor="flexCheckDefault">
                        {row.name}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="col-md-9">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  {HallShowdata.map((row) => (
                    <div className="col-md-4 mb-4" key={row.id}>
                      <a href={'/description/' + row.id}>
                        <div className="card">
                          <img className="card-img-top" src={`http://localhost:8000/hall_upload/${row.images}`} alt="#" style={{ width: "292px", height: "250px" }} />
                          <div className="card-body">
                            <p className="h6"><small className="text-muted">{row.hname}</small><br />{row.hname}</p>
                            <p className="m-0">
                              <i className="fa-xs far fa-star"></i>
                              <i className="fa-xs far fa-star"></i>
                              <i className="fa-xs far fa-star"></i>
                              <i className="fa-xs far fa-star"></i>
                              <i className="fa-xs far fa-star"></i>
                            </p>
                            <p className="h5 m-0">{row.rent}</p>
                          </div>
                          <div className="card-footer p-0">
                            <div className="btn-group" role="group">
                              <button type="button" className="btn btn-light">
                                <i className="fas fa-cart-plus"></i>
                                <span>Add Cart</span>
                              </button>
                              <button type="button" className="btn btn-light">
                                <i className="fas fa-shopping-cart"></i>
                              </button>
                              <button type="button" className="btn btn-light">
                                <i className="fas fa-heart"></i>
                              </button>
                              <button type="button" className="btn btn-light">
                                <i className="fas fa-sync-alt"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Filter;
