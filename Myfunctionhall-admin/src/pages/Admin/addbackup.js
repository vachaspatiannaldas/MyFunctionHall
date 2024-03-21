// AddAdmin.js

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddAdmin() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setCpassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
      confirm_password: confirm_password,
      usertype:"admin"
    };
    console.log(data);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/registration', data);
      console.log(response);
      // const token = response.data[0].token;
      // localStorage.getItem('uid', token);
      navigate('/Sidebar');
      //console.log("Token:", token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <form onSubmit={handleSubmit}>
            <h2>ADD ADD Register</h2>
            <div className="form-group">
              <label htmlFor="">name</label>
              <input
                type="text"
                name="name"
                id=""
                className="form-control"
                placeholder=""
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">email</label>
              <input
                type="text"
                name="email"
                id=""
                className="form-control"
                placeholder=""
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">password</label>
              <input
                type="text"
                name="password"
                id=""
                className="form-control"
                placeholder=""
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="">confirm_password</label>
              <input
                type="text"
                name="confirm_password"
                id=""
                className="form-control"
                placeholder=""
                onChange={(e) => setCpassword(e.target.value)}
                value={confirm_password}
              />
            </div>
            <button type="submit" className="btn btn-info">
              Submit
            </button>
          </form>
      </div>
    </React.Fragment>
  );
}

export default AddAdmin;
