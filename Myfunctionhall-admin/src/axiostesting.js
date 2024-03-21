import axiosInstance from './axiosConfig'; // Import the axiosInstance you've created

// GET request
axiosInstance.get('http://example.com/api/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

// POST request
const data = { name: 'John', age: 30 };
axiosInstance.post('http://example.com/api/users', data)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

// PUT request
const updatedData = { name: 'Jane', age: 25 };
axiosInstance.put('http://example.com/api/users/1', updatedData)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

// PATCH request
const partialUpdate = { age: 26 };
axiosInstance.patch('http://example.com/api/users/1', partialUpdate)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

// DELETE request
axiosInstance.delete('http://example.com/api/users/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
