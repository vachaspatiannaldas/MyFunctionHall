import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Editblog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('uid');
        console.log(token);
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };

        const response = await axios.get(`http://127.0.0.1:8000/api/blogs/${id}`, config);
        const { title, description } = response.data.data;

        setTitle(title || '');
        setDescription(description || '');
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('uid');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      const data = { title, description };

      await axios.put(`http://127.0.0.1:8000/api/blogs/${id}`, data, config);
      alert('Blog updated successfully!');
      // Redirect to another page after successful update
      navigate('/blogs');
    } catch (error) {
      console.error(error);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div>
      <h1>Edit Blog</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            name="title"
            onChange={handleTitleChange}
            value={title}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Editblog;
