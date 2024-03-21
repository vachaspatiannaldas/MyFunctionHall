import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Filter() {
  const [HallShowdata, setHallShowdata] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredHalls, setFilteredHalls] = useState([]);
  const [selectedHalls, setSelectedHalls] = useState([]);


  
  // Fetch hall data from the API
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/hallfrontend')
      .then((res) => {
        const data = res.data;
        setHallShowdata(data);
        setFilteredHalls(data);
      })
      .catch((error) => {
        console.error(error);
      });

    // Fetch categories from the API
    axios.get('http://127.0.0.1:8000/api/categoryfrontend')
      .then((res) => {
        const data = res.data;
        setCategories(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Function to handle checkbox changes and filter halls
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
  };



  

  // Fetch filtered halls when selectedCategories change
  useEffect(() => {
    if (selectedCategories.length === 0) {
      // Fetch all data when no checkboxes are selected
      axios
        .get('http://127.0.0.1:8000/api/hallfrontend')
        .then((res) => {
          const data = res.data;
          setFilteredHalls(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // Fetch data based on selected categories
      axios
        .get(`http://127.0.0.1:8000/api/filteredhalls?selectedCategories=${selectedCategories.join(',')}`)
        .then((res) => {
          const data = res.data;
          setFilteredHalls(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [selectedCategories]);
  

  const handleHallCheckboxChange = (hallId) => {
    const updatedHalls = [...selectedHalls];
  
    if (updatedHalls.includes(hallId)) {
      // Hall is already selected, remove it
      const index = updatedHalls.indexOf(hallId);
      updatedHalls.splice(index, 1);
    } else {
      // Hall is not selected, add it
      updatedHalls.push(hallId);
    }
  
    setSelectedHalls(updatedHalls);
  
    // Filter halls based on selected categories
    const filteredHalls = HallShowdata.filter((hall) =>
      selectedHalls.includes(hall.id)
    );
  
    setFilteredHalls(filteredHalls);
  };
  
  return (
    <React.Fragment>
      {/* ... (other JSX code) */}
      <div className="container mt-5">
        <div className="row">
          {/* ... (your other UI elements) */}
          {/* Category Filter */}
          <div className="col-md-3">
            <div className="card mt-5">
              <div className="card-header">Category Filter</div>
              <div className="card-body p-1">
                <div className="card border-0 b-3">
                  <div
                    className="card-header p-2 bg-white"
                    data-toggle="collapse"
                    data-target="#collapseExample5"
                    aria-expanded="false"
                  >
                    <p className="m-0 h6">All Category</p>
                  </div>
                  <div className="card-body p-0 collapse show" id="collapseExample5">
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
                            <a href={'/Category/' + category.id}>
                              <span className="ml-2">{category.name}</span>
                            </a>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
             
                <div className="card border-0 b-3">
  <div
    className="card-header p-2 bg-white"
    data-toggle="collapse"
    data-target="#collapseExample4"
    aria-expanded="false"
  >
    <p className="m-0 h6">All Function Hall</p>
  </div>
  <div className="card-body p-0 collapse show" id="collapseExample4">
  <ul className="list-group list-group-flush" style={{ height: "200px", overflow: "auto" }}>
    {HallShowdata.map((row) => (
      <li className="list-group-item p-2 d-flex justify-content-between align-items-center ml-3">
        <input
          className="form-check-input"
          type="checkbox"
          value={row.id}
          id={`hallCheckbox-${row.id}`}
          checked={selectedHalls.includes(row.id)}
          onChange={() => handleHallCheckboxChange(row.id)}
        />
        <label className="form-check-label ml-1" htmlFor={`hallCheckbox-${row.id}`}>
          {row.hname}
        </label>
      </li>
    ))}
  </ul>
</div>
</div>

              </div>
            </div>
          </div>
          {/* Display Filtered Halls */}
          <div className="col-md-9">
            <div className="row">
              {filteredHalls.map((row) => (
                <div className="col-md-4 mb-4" key={row.id}>
                  <a href={'/description/' + row.id}>
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={`http://localhost:8000/hall_upload/${row.images}`}
                        alt="#"
                        style={{ width: "292px", height: "250px" }}
                      />
                      <div className="card-body">
                        <p className="h6">
                          <small className="text-muted">{row.hname}</small>
                          <br />
                          {row.hname}
                        </p>
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
    </React.Fragment>
  );
}

export default Filter;
