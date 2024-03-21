import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BlogCreate() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [place, setPlace] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [vendor, setVendor] = useState('');
  const [Showdata, setShowdata] = useState([]);


  function fetchData() {
    axios.get('http://127.0.0.1:8000/api/blog')
      .then((res) => {
        const data = res.data;
        console.log(data);
        setShowdata(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function fetchcategory() {
    axios.get('http://127.0.0.1:8000/api/categoryfrontend')
      .then((res) => {
        const data = res.data;
        console.log(data);
        setShowdata(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {

      fetchData();
      fetchcategory();

  }, [])



  // Assuming Showdata is an array of objects containing 'id' and 'name' properties

  const handleCategoryChange = (e) => {
    const categoryName = e.target.value;
    const isChecked = e.target.checked;

    // Use Set to store unique category names
    let updatedCategories = new Set(selectedCategories);

    if (isChecked) {
      updatedCategories.add(categoryName);
    } else {
      updatedCategories.delete(categoryName);
    }

    setSelectedCategories(Array.from(updatedCategories));

  };

  function handleChange(e) {
    if (e.target.name === 'images') {
      const imageFiles = e.target.files;
      const imageFilesArray = Array.from(imageFiles);
      setImages([...images, ...imageFilesArray]);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    data.append('title',title)
    data.append('description',description)
    images.forEach((image, index) => {
      data.append(`images[${index}]`, image);
    });
    data.append('place',place)
    data.append('vendor',vendor)

    // Append the selectedCategories to the FormData
    selectedCategories.forEach((category) => {
      data.append('categories[]', category); // Changed 'category' to 'categories'
    });


    // Rest of the code remains the same
    axios
      .post('http://127.0.0.1:8000/api/blog', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((resp) => {
        if (resp.data && resp.data[0].status === 'success') {
          console.log('Data Added');
          toast.success('Data Added!!!');
          window.location.href = '/blogindex';
        } else {
          console.log('Error');
          toast.error('Error occurred while adding data');
        }
      })
      .catch((error) => {
        console.log('Error', error);
        toast.error('An error occurred while making the request');
      });
  }




  return (
    <React.Fragment>
       <ToastContainer />
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />
          <div className="layout-page">
            <Header />
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">
                  <span className="text-muted fw-light">BlogCreates/</span> Vertical Layouts
                </h4>
                <div className="row">
                  <div className="col-xl">
                    <div className="card mb-4 col-md-6">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Basic with Icons</h5>
                        <small className="text-muted float-end">Merged input group</small>
                      </div>
                      <div className="card-body">
                      <form>

                      <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">title</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="title"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={title=>setTitle(title.target.value)} value={title}
                            />

                          </div>
                        </div>



                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">description</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text"
                              ><i className="bx bx-user"></i
                            ></span>
                            <input
                              type="text"
                              name="description"
                              className="form-control"
                              id="basic-icon-default-fullname"
                              placeholder="John Doe"
                              aria-label="John Doe"
                              aria-describedby="basic-icon-default-fullname2"
                              onChange={description=>setDescription(description.target.value)} value={description}
                            />

                          </div>
                        </div>



                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-email">Images</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="file"
                              name="images"
                              accept="images/*"
                              id="basic-icon-default-email"
                              className="form-control"
                              multiple
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-email2"
                              onChange={handleChange}
                            />
                            <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>



                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-email">place</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="text"
                              name="place"
                              id="basic-icon-default-email"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-email2"
                              onChange={place=>setPlace(place.target.value)} value={place}

                            />
                            <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>


                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-fullname">Category</label>
                          <div className="input-group input-group-merge">
                             {Showdata.map((row) => {
                            return (
                              <div key={row.id}>
                                <input type="checkbox" name='category'  style={{marginLeft:"15px"}}  value={row.name} checked={selectedCategories.includes(row.name)} onChange={handleCategoryChange}/><span>{row.name}</span>
                              </div>
                              );
                          })}

                          </div>
                        </div>











                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-email">vendor</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="text"
                              name="vendor"
                              id="basic-icon-default-email"
                              className="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-icon-default-email2"
                              onChange={vendor=>setVendor(vendor.target.value)} value={vendor}

                            />
                            <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                          </div>
                          <div className="form-text">You can use letters, numbers & periods</div>
                        </div>






                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Send</button>
                      </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>
        <div className="layout-overlay layout-menu-toggle"></div>
      </div>

      <div className="buy-now">
        <a
          href="https://themeselection.com/products/sneat-bootstrap-html-admin-template/"
          target="_blank"
          className="btn btn-danger btn-buy-now"
        >
          Upgrade to Pro
        </a>
      </div>
    </React.Fragment>
  );
}

export default BlogCreate;
