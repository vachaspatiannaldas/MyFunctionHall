


import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Filter() {
  const [HallShowdata, setHallShowdata] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredHalls, setFilteredHalls] = useState([]);
  const [selectedHalls, setSelectedHalls] = useState([]);
  const [minCapacity, setMinCapacity] = useState("");
  const [maxCapacity, setMaxCapacity] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  
 
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

    axios.get('http://127.0.0.1:8000/api/categoryfrontend')
      .then((res) => {
        const data = res.data;
        setCategories(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);




  //  handle checkbox changes and filter halls
  const handleCheckboxChange = (categoryId) => {
    const updatedCategories = [...selectedCategories];

    if (updatedCategories.includes(categoryId)) {
      
      const index = updatedCategories.indexOf(categoryId);
      updatedCategories.splice(index, 1);
    } else {
      // add Category 
      updatedCategories.push(categoryId);
    }

    setSelectedCategories(updatedCategories);
  };


 

  useEffect(() => {
    if (selectedCategories.length === 0) {
      // Fetch no checkboxes 
      axios
        .get('http://127.0.0.1:8000/api/hallfrontend')
        .then((res) => {
          const data = res.data;
          console.log("All Data",data);
          setFilteredHalls(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // Fetch  selected categories
      axios
        .get(`http://127.0.0.1:8000/api/filteredhalls?selectedCategories=${selectedCategories.join(',')}`)
        .then((res) => {
          const data = res.data;
          console.log("Perticular selected ",data);
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
      // remove hall if already selected
      const index = updatedHalls.indexOf(hallId);
      updatedHalls.splice(index, 1);
    } else {
      // add hall
      updatedHalls.push(hallId);
    }
  
    setSelectedHalls(updatedHalls);
  
    const areHallsSelected = updatedHalls.length > 0;
  
    
    // Filter halls based on selected categories and halls
    const filteredHalls = HallShowdata.filter((hall) => {
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(hall.category);
      const matchesHall = !areHallsSelected || updatedHalls.includes(hall.id);
  
      
      console.log("Hall ID:", hall.id);
      console.log("Matches Category:", matchesCategory);
      console.log("Matches Hall:", matchesHall);
  
      return matchesCategory && matchesHall;
    });
  
    console.log("Filtered Halls:", filteredHalls);
  
    setFilteredHalls(filteredHalls);
    console.log("Selected Categories:", selectedCategories);

  };
  





















//min and max code
const applyFilter = () => {
  
   const filteredHalls = HallShowdata.filter((hall) => {
     const hallRent = hall.rent;
    const minCapacityValid = minCapacity === "" || parseInt(minCapacity, 10) <= hall.capacity;
    const maxCapacityValid = maxCapacity === "" || parseInt(maxCapacity, 10) >= hall.capacity;

    return minCapacityValid && maxCapacityValid && (minPrice === "" || parseInt(minPrice, 10) <= hallRent) &&
    (maxPrice === "" || parseInt(maxPrice, 10) >= hallRent);
  });

  
  console.log(filteredHalls);
  setFilteredHalls(filteredHalls);
};


  return (
    <React.Fragment>
      
      <div className="container mt-5">
        <div className="row">
       
         
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
      <li className="list-group-item p-2 d-flex justify-content-between align-items-center ml-3" key={row.id}>
        <label>
          <input
            className="form-check-input"
            type="checkbox"
            value={row.id}
            checked={selectedHalls.includes(row.id)}
            onChange={() => handleHallCheckboxChange(row.id)}
          />
          <span className="ml-1">{row.hname}</span>
        </label>
      </li>
    ))}
  </ul>
</div>

</div>
                

                <div className="card border-0 b-3">
                            <div className="card-header p-2 bg-white" data-toggle="collapse" data-target="#collapseExample4" aria-expanded="false">
                         
                                <p className="m-0 h6">Hall Capacity</p>
                            </div>
                            <div className="card-body p collapse show " id="collapseExample4">
                                <div className="form-row">
                                <div className='col-md-8'>
                                  <label htmlFor="capacityRange">Capacity Range:</label>
                                  <input
                                    style={{width:"250px"}}
                                    type="range"
                                    id="capacityRange"
                                    min="0"
                                    max="1000" 
                                    value={minCapacity}
                                    onChange={(e) => setMinCapacity(e.target.value)}
                                  />
                                  <span>{minCapacity}</span>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="card border-0 b-3">
      <div
        className="card-header p-2 bg-white"
        data-toggle="collapse"
        data-target="#collapseExample4"
        aria-expanded="false"
      >
        <p className="m-0 h6">Hall Price</p>
      </div>
      <div className="card-body p collapse show" id="collapseExample4">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Min</label>
            <input
              className="form-control"
              placeholder="$0"
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
          <div className="form-group text-right col-md-6">
            <label>Max</label>
            <input
              className="form-control"
              placeholder="$10,000"
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>
        {/* <button onClick={applyFilter} className="btn btn-primary">
          Apply Filter
        </button> */}
      </div>
    </div>
              </div>
            </div>
            <div className="card-footer">
                        <button type="button" className="btn btn-block btn-primary" onClick={applyFilter}>Filter</button>
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
