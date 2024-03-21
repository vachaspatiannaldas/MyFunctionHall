import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Filter() {
  // ... (other state variables and useEffect)

  const handleCheckboxChange = (categoryId, hallId) => {
    const updatedCategories = [...selectedCategories];
    const updatedHalls = [...selectedHalls];

    if (categoryId !== null) {
      // Handle category changes
      if (updatedCategories.includes(categoryId)) {
        const index = updatedCategories.indexOf(categoryId);
        updatedCategories.splice(index, 1);
      } else {
        updatedCategories.push(categoryId);
      }
    } else {
      // Handle hall changes
      if (updatedHalls.includes(hallId)) {
        const index = updatedHalls.indexOf(hallId);
        updatedHalls.splice(index, 1);
      } else {
        updatedHalls.push(hallId);
      }
    }

    setSelectedCategories(updatedCategories);
    setSelectedHalls(updatedHalls);
  };

  const applyFilter = () => {
    // Filter halls based on selected categories and halls
    const filteredHalls = HallShowdata.filter((hall) => {
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(hall.category);
      const matchesHall =
        selectedHalls.length === 0 || selectedHalls.includes(hall.id);
      const minCapacityValid =
        minCapacity === "" || parseInt(minCapacity, 10) <= hall.capacity;
      const maxCapacityValid =
        maxCapacity === "" || parseInt(maxCapacity, 10) >= hall.capacity;
      const hallRent = hall.rent;
      const minPriceValid =
        minPrice === "" || parseInt(minPrice, 10) <= hallRent;
      const maxPriceValid =
        maxPrice === "" || parseInt(maxPrice, 10) >= hallRent;

      return matchesCategory && matchesHall && minCapacityValid && maxCapacityValid && minPriceValid && maxPriceValid;
    });

    // Update the filteredHalls state
    setFilteredHalls(filteredHalls);
  };

  useEffect(() => {
    applyFilter(); // Call applyFilter initially to load data
  }, []);

  return (
    <React.Fragment>
      {/* ... (other JSX code) */}
      <div className="container mt-5">
        <div className="row">
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
                              onChange={() => handleCheckboxChange(category.id, null)}
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
              </div>
            </div>
          </div>

          {/* Function Hall Filter */}
          <div className="col-md-3">
            <div className="card mt-5">
              <div className="card-header">Function Hall Filter</div>
              <div className="card-body p-1">
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
                              onChange={() => handleCheckboxChange(null, row.id)}
                            />
                            <span className="ml-1">{row.hname}</span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ... (other filter elements) */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Filter;
