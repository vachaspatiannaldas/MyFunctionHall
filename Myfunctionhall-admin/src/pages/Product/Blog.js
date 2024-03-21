import React, { useEffect, useState } from 'react';
import axios from 'axios';

function destroyToken() {
  localStorage.removeItem('uid');
  // Redirect to login route or perform any other desired action
}

function Blog() {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const token = localStorage.getItem('uid');
    
    if (!token) {
      // Redirect to login route
      window.location.href = '/login';
      return;
    }
  
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  
    axios.get('http://127.0.0.1:8000/api/blogs', config)
      .then((res) => {
        const data = res.data;
        console.log(data);
  
        if (Array.isArray(data)) {
          setShowData(data);
        } else if (data && Array.isArray(data.data)) {
          setShowData(data.data);
        } else {
          console.error('Invalid response data');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }






  
  function deleteData(id) {
    const token = localStorage.getItem('uid');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    axios.delete(`http://127.0.0.1:8000/api/blogs/${id}`, config)
      .then((res) => {
        const data = res.data;
        console.log(data);
        if (data) {
          console.log('Data Deleted');
          alert('Data Deleted!!!');
          fetchData(); // Fetch updated data after deletion
        } else {
          console.log('Sorry');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
       <button onClick={destroyToken}>Destroy Token</button>
         <a className="btn btn-primary " href={`/bloginsert`}>
                  ADD
                </a>
      <table id="zero_config" className="table table-striped table-bordered no-wrap">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {showData.map((row) => (
            <tr key={row.id}>
              <td>{row.title}</td>
              <td>{row.description}</td>
              <td>
                <a className="btn btn-primary" href={`/Editblog/${row.id}`}>
                  Edit
                </a>
                <button className="btn btn-danger ml-2" onClick={() => deleteData(row.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Blog;
