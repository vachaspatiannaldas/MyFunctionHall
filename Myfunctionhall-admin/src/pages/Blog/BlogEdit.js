import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

function BlogEdit(props) {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [place, setPlace] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [vendor, setVendor] = useState('');
  const [Showdata, setShowdata] = useState([]);

  function fetchblogData() {
    axios
      .get(`http://127.0.0.1:8000/api/blog/${id}`)
      .then((res) => {
        const data = res.data;
        setTitle(data.title);
        setDescription(data.description);
        setPlace(data.place);
        setVendor(data.vendor);
        setSelectedCategories(JSON.parse(data.category));
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }

//  console.log('selected categories:');
//   co nsole.log(selectedCategories);

  function handleChange(e) {
    if (e.target.name === 'images') {
      const imageFiles = e.target.files;
      const imageFilesArray = Array.from(imageFiles);
      setImages([...images, ...imageFilesArray]);
    }
  }

  function handleCategoryChange(e) {
    const selectedCategory = e.target.value;
    const updatedCategories = selectedCategories.includes(selectedCategory)
      ? selectedCategories.filter((category) => category !== selectedCategory)
      : [...selectedCategories, selectedCategory];
    setSelectedCategories(updatedCategories);
    console.log('updatedCategories:')
    console.log(updatedCategories)
  }


  function updateblog(e) {
    e.preventDefault();
    if (!title || selectedCategories.length === 0) {
      toast.error('Please fill in all required fields.', { autoClose: 2000 });
      return;
    }

    // const categoriesArray = Array.isArray(selectedCategories) ? selectedCategories : [selectedCategories];
    let arstr=[];
    const data = new FormData();
    data.append('_method', 'put');
    data.append('title', title);
    data.append('description', description);
    images.forEach((image, index) => {
      data.append(`images[${index}]`, image);
    });
    data.append('place', place);
    data.append('vendor', vendor);
   // data.append('categories[]', selectedCategories);
    selectedCategories.forEach((category) => {
       // Changed 'category' to 'categories'
       arstr=[...arstr,category];
    });
    data.append('categories', JSON.stringify(arstr));
    //console.log(selectedCategories);



    axios
      .post(`http://127.0.0.1:8000/api/blog/${id}`, data, {
        _method: 'PUT',
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((resp) => {
        if (resp && resp.data && resp.data.status === 'success') {
          console.log(selectedCategories);
          console.log("test");
          console.log(resp.data);
          toast.success('Data Updated!!!', { autoClose: 2000 });
          window.location.href = '/blogindex';
        } else {
          console.log('Error data:', resp.data);
          toast.error('Error occurred while updating data', { autoClose: 2000 });
        }
      })
      .catch((error) => {
        console.log('Errorrr:', error);
        toast.error('An error occurred while making the request', { autoClose: 2000 });
      });
  }

  function fetchData() {
    axios
      .get('http://127.0.0.1:8000/api/categoryfrontend')
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
    fetchblogData();
  }, []);

  // console.log(Showdata);

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
                  <span className="text-muted fw-light">blogCreates/</span> Vertical Layouts
                </h4>
                <div className="row">
                  <div className="col-xl">
                    <div className="card mb-4 col-md-6">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Basic with Icons</h5>
                        <small className="text-muted float-end">Merged input group</small>
                      </div>
                      <div className="card-body">
                      <form onSubmit={updateblog} encType='multipart/form-data' >
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










                        <button type="submit" className="btn btn-primary" onClick={updateblog}>Send</button>
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

export default BlogEdit;
