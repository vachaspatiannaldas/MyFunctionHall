// Productinsert.js

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Bloginsert() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      description: description
    };
    console.log(data);

    try {
      const token = localStorage.getItem('uid');
      console.log("Token:", token);

      if (!token) {
        // Redirect to login route
        navigate('/login');
        return;
      }

      const response = await axios.post(
        'http://127.0.0.1:8000/api/blogs',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          withCredentials: true
        }
      );
      navigate('/blogs');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">title</label>
          <input
            type="text"
            name="title"
            id=""
            className="form-control"
            placeholder=""
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">description</label>
          <input
            type="text"
            name="description"
            id=""
            className="form-control"
            placeholder=""
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>

        <button type="submit" className="btn btn-info">
          Submit
        </button>
      </form>
    </React.Fragment>
  );
}

export default Bloginsert;
