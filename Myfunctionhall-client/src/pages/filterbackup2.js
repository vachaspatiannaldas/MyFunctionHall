import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Filter() {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [halls, setHalls] = useState([]);

  useEffect(() => {
    // Fetch categories and all halls on component mount
    axios.get('http://127.0.0.1:8000/api/categoryfrontend')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get('http://127.0.0.1:8000/api/hallfrontend')
      .then((response) => {
        setHalls(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCheckboxChange = (categoryId) => {
    // Check if the category is already selected
    const isCategorySelected = selectedCategories.includes(categoryId);

    // Toggle the category's selection status
    if (isCategorySelected) {
      const updatedCategories = selectedCategories.filter((id) => id !== categoryId);
      setSelectedCategories(updatedCategories);
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }

    // Filter halls based on selected categories
    const filteredHalls = halls.filter((hall) => {
      // Check if the hall's category_id is in the selected categories
      return selectedCategories.includes(hall.category_id);
    });

    setHalls(filteredHalls);
  };

  return (
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

      <h3>Filtered Halls</h3>
      <ul>
        {halls.map((hall) => (
          <li key={hall.id}>{hall.hname}</li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
