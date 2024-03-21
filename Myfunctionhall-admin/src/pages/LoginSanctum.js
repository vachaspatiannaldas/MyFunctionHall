import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginSanctum() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password
    };
    console.log(data);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/loginsanctum', data);
      const token = response.data.token;
      const usertype = response.data.usertype; 
      const name = response.data.name;
      const userEmail = response.data.email;

      console.log(response)
      if (token) {
        localStorage.setItem('uid', token);
        localStorage.setItem('usertype', usertype);
        localStorage.setItem('name', name);
        localStorage.setItem('email', userEmail);

        if (usertype === 'admin') {
          navigate('/dashboard'); 
        } else if (usertype === 'vendor') {
          navigate('/vendor'); 
        } else {
          console.error("Invalid usertype:", usertype);
        }
      } else {
        console.error("Token not found ");
      }
    } catch (error) {
      console.error(error);
    }

  
  };

  return (
    <React.Fragment>
      {/* <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>ADD Login</h2>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              placeholder=""
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              placeholder=""
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      </div> */}


      








      <div id='loginsec'>
      <div className="container " >
  <div className="card">
    <h2>Login Form</h2>
    <form onSubmit={handleSubmit}>
      <label for="Email">Email</label>
      <input type="text" id="Email" placeholder="Enter your Email"  onChange={(e) => setEmail(e.target.value)}
              value={email} required/>

      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Enter your password"  onChange={(e) => setPassword(e.target.value)}
              value={password} required/>

      <button type="submit">Login</button>
      <div className="switch">Don't have an account? <span className='text-primary'> Register here </span></div>

      {/* <button type="submit"  className='mt-2'><a href='/registration' style={{ color:"white" }}>Register For Vendor</a></button> */}
      <button type="submit" className='mt-2'><a href="/addadmin" style={{ color:"white" }}>Register For Admin</a></button>
    </form>
  </div>

  </div>
</div>
    </React.Fragment>
  );
}

export default LoginSanctum;
