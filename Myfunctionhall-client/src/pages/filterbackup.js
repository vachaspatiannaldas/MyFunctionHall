import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from './Navbar'

function Filter() {
   


    const [HallShowdata, setHallShowdata] = useState([]);
    const [ShowCategorydata, setCategoryShowdata] = useState([]);
  
    const [categories, setCategories] = useState([]); // Initialize categories with an empty array
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [halls, setHalls] = useState([]);
  
    function fetchhallData() {
      axios.get('http://127.0.0.1:8000/api/hallfrontend')
        .then((res) => {
          const data = res.data;
          console.log(data);
          setHallShowdata(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  
    function fetchCategory() {
      axios.get('http://127.0.0.1:8000/api/categoryfrontend')
        .then((res) => {
          const data = res.data;
          console.log(data);
          setCategories(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  
    // useEffect(() => {
    //   // Fetch categories from the API
    //   axios.get('http://127.0.0.1:8000/api/categoryfrontend')
    //     .then((response) => {
    //       setCategories(response.data.categories);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }, []);
  
    const handleCheckboxChange = (categoryId) => {
      const updatedCategories = [...selectedCategories];
      if (updatedCategories.includes(categoryId)) {
        // Category is already selected, remove it
        const index = updatedCategories.indexOf(categoryId);
        updatedCategories.splice(index, 1);
      } else {
        // Category is not selected, add it
        updatedCategories.push(categoryId);
      }
      setSelectedCategories(updatedCategories);
  
      // Fetch halls based on selected categories
      axios.post('http://127.0.0.1:8000/api/filter-halls', { selectedCategories })
        .then((response) => {
          setHalls(response.data.halls);
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    useEffect(() => {
      fetchhallData();
      fetchCategory();
    }, []);

  return (
    <React.Fragment>







{/* <Navbar/> */}



 


    <div className="container mt-5">
        <div className="row">
            <div className="col-md-3">
                






                
                <div className="card mb-5">
                    <div className="card-header">Hall Details</div>
                    <div className="card-body p-1">
                        <div className="card border-0 b-3">
                            <div className="card-header p-2 bg-white" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false">
                                <p className="m-0 h6">Hall Type</p>
                            </div>
                            <div className="card-body p-0 collapse show"  id="collapseExample1">
                                <ul className="list-group list-group-flush" style={{height:"200px",overflow:"auto"}}>
                                    
                                    
                                {HallShowdata.map((row) => {
                            return (
                                    <li className="list-group-item p-2 d-flex justify-content-between align-items-center ml-3">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label class="form-check-label ml-1" for="flexCheckDefault">
                                           {row.type}
                                        </label>   
                                    </li>
                                    
                                         
            );
        })}                     
                               
                                </ul>
                            </div>
                        
                        </div>
                        <div className="card border-0 b-3">
                            <div className="card-header p-2 bg-white" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false">
                                <p className="m-0 h6">Hall Capacity (Size)</p>
                            </div>
                            <div className="card-body p-0 collapse " id="collapseExample2">
                                <ul className="list-group list-group-flush" style={{height:"200px",overflow:"auto"}}>
                                    <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                                        <div className="custom-control custom-checkbox">
                                            <label className="custom-control-label" for="customCheck1"><a href="">Any</a></label>
                                        </div>
                                    </li>
                                    <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                                        <div className="custom-control custom-checkbox">
                                            <label className="custom-control-label" for="customCheck1">0 - 200</label>
                                        </div>
                                    </li>
                                    <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1"  />
                                            <label className="custom-control-label" for="customCheck1">201 - 500</label>
                                        </div>
                                       
                                    </li>
                                    <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1"  />
                                            <label className="custom-control-label" for="customCheck1">501 - 1000</label>
                                        </div>
                                       
                                    </li>
                                    <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1"  />
                                            <label className="custom-control-label" for="customCheck1">1001 - 1500</label>
                                        </div>
                                       
                                    </li>
                                    <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1"  />
                                            <label className="custom-control-label" for="customCheck1"> 2000</label>
                                        </div>
                                       
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>




                        <div className="card border-0 b-3">
                            <div className="card-header p-2 bg-white" data-toggle="collapse" data-target="#collapseExample9" aria-expanded="false">
                                <p className="m-0 h6">Food Type</p>
                            </div>
                            <div className="card-body p-0 collapse " id="collapseExample9">
                                <ul className="list-group list-group-flush" style={{height:"200px",overflow:"auto"}}>
                                    <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                                        <div className="custom-control custom-checkbox">
                                            <label className="custom-control-label" for="customCheck1"><a href="">Veg Or Non-Veg</a></label>
                                        </div>
                                    </li>
                                    <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                                        <div className="custom-control custom-checkbox">
                                            <label className="custom-control-label" for="customCheck1">Any</label>
                                        </div>
                                    </li>
                                    <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1"  />
                                            <label className="custom-control-label" for="customCheck1">Veg Only</label>
                                        </div>
                                       
                                    </li>
                                    <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1"  />
                                            <label className="custom-control-label" for="customCheck1">Non - Veg Only</label>
                                        </div>
                                       
                                    </li>
                                    <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1"  />
                                            <label className="custom-control-label" for="customCheck1">Both</label>
                                        </div>
                                       
                                    </li>
                                   
                                   
                                </ul>
                            </div>
                        </div>

                </div>

</div>





                






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

        </div>










        {halls.map((hall) => (

        <div className="card-body p-0 collapse show"  id="collapseExample5" key={hall.id}>
                                <ul className="list-group list-group-flush" style={{height:"200px",overflow:"auto"}}>
                                {ShowCategorydata.map((row) => {
                            return (
                                  
                                <li className="list-group-item p-2 d-flex justify-content-between align-items-center ml-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label ml-1" for="flexCheckDefault">
                                       {row.name}
                                    </label>   
                                </li>
                               );
                            })}   
                                </ul>
                            </div>

))}












            

                <div className="card mt-5">
                    <div className="card-header">Category Filter</div>
                    <div className="card-body p-1">
                        <div className="card border-0 b-3">
                            <div className="card-header p-2 bg-white" data-toggle="collapse" data-target="#collapseExample5" aria-expanded="false">
                                <p className="m-0 h6">All Category</p>
                            </div>
                            <div className="card-body p-0 collapse show"  id="collapseExample5">
                                <ul className="list-group list-group-flush" style={{height:"200px",overflow:"auto"}}>
                                {ShowCategorydata.map((row) => {
                            return (
                                  
                                <li className="list-group-item p-2 d-flex justify-content-between align-items-center ml-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label ml-1" for="flexCheckDefault">
                                       {row.name}
                                    </label>   
                                </li>
                               );
                            })}   
                                </ul>
                            </div>
                        
                        </div>
                        <div className="card border-0 b-3">
                            <div className="card-header p-2 bg-white" data-toggle="collapse" data-target="#collapseExample4" aria-expanded="false">
                                <p className="m-0 h6">All Function Hall</p>
                            </div>
                            <div className="card-body p-0 collapse show" id="collapseExample4">
                                <ul className="list-group list-group-flush" style={{height:"200px",overflow:"auto"}}>
                                   
                                {HallShowdata.map((row) => {

                                  return(
                                    <li className="list-group-item p-2 d-flex justify-content-between align-items-center ml-3">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label class="form-check-label ml-1" for="flexCheckDefault">
                                           {row.hname}
                                        </label>   
                                    </li>
                                  );
                                })}
                                </ul>
                            </div>
                        </div>


                      
                        <div className="card border-0 b-3">
                            <div className="card-header p-2 bg-white" data-toggle="collapse" data-target="#collapseExample4" aria-expanded="false">
                                <p className="m-0 h6">Price</p>
                            </div>
                            <div className="card-body p collapse show " id="collapseExample4">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Min</label>
                                        <input className="form-control" placeholder="$0" type="number"/>
                                    </div>
                                    <div className="form-group text-right col-md-6">
                                        <label>Max</label>
                                        <input className="form-control" placeholder="$1,0000" type="number"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="button" className="btn btn-block btn-primary">Filter</button>
                    </div>
                </div>
            </div>



            <div className="col-md-9">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-secondary active"><i className="fas fa-th"></i></button>
                                    <button type="button" className="btn btn-secondary"><i className="fas fa-th-list"></i></button>
                                    <button type="button" className="btn btn-secondary">
                                        <i className="fas fa-sync-alt"></i>
                                        <span>Product Compare (0)</span>
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Sort By:</span>
                                    </div>
                                    <select className="form-control" id="" name="">
                                        <option value="">Default</option>
                                        <option value="">Name (A - Z)</option>
                                        <option value="">Name (Z - A)</option>
                                        <option value="">Price (Low &gt; High)</option>
                                        <option value="">Price (High &gt; Low)</option>
                                        <option value="">Rating (Highest)</option>
                                        <option value="">Rating (Lowest)</option>
                                        <option value="">Model (A - Z)</option>
                                        <option value="">Model (Z - A)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Show:</span>
                                    </div>
                                    <select className="form-control" id="" name="">
                                        <option value="">15</option>
                                        <option value="">25</option>
                                        <option value="">50</option>
                                        <option value="">75</option>
                                        <option value="">100</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
        <div className="row">


        {HallShowdata.map((row) => {
                            return ( 
            <div className="col-md-4 mb-4" >
                <a  href={'/description/' + row.id}>
                <div className="card">
                <img className="card-img-top" src={`http://localhost:8000/hall_upload/${row.images}`} 
                                alt="#" style={{width:"292px",height:"250px"}}/>
                    <div className="card-body">
                        <p className="h6"><small className="text-muted">{row.hname}</small><br/>{row.hname}</p>
                        <p className="m-0">
                            <i className="fa-xs far fa-star"></i>
                            <i className="fa-xs far fa-star"></i>
                            <i className="fa-xs far fa-star"></i>
                            <i className="fa-xs far fa-star"></i>
                            <i className="fa-xs far fa-star"></i>
                        </p>
                        <p className="h5 m-0">{row.rent}</p>
                    </div>
                    <div className="card-footer p-0">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-light">
                                <i className="fas fa-cart-plus"></i>
                                <span>Add Cart</span>
                            </button>
                            <button type="button" className="btn btn-light">
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                            <button type="button" className="btn btn-light">
                                <i className="fas fa-heart"></i>
                            </button>
                            <button type="button" className="btn btn-light">
                                <i className="fas fa-sync-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
                </a>
            </div>




            );
})}





        </div>
                    </div>
                    <div className="card-footer p-3">
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="pagination m-0">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <p className="text-right mb-0 mt-1">Showing 1 to 12 of 12 (1 Pages)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row mb-5">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">
                                <i className="float-left mr-3 fa-3x fas fa-shipping-fast"></i>
                                <p className="h6">Free shipping & Return <br/><small className="text-muted">For all orders over $500</small></p>
                            </div>
                            <div className="col-md-3">
                                <i className="float-left mr-3 fa-3x fas fa-thumbs-up"></i>
                                <p className="h6">Customer Protection <br/><small className="text-muted">From click to delivery.</small></p>
                            </div>
                            <div className="col-md-3">
                                <i className="float-left mr-3 fa-3x fas fa-umbrella"></i>
                                <p className="h6">Safe Payment <br/><small className="text-muted">Use world’s most secure payment methods.</small></p>
                            </div>
                            <div className="col-md-3">
                                <i className="float-left mr-3 fa-3x fas fa-life-ring"></i>
                                <p className="h6">Support 24/7 <br/><small className="text-muted">We answer for question all time</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>




    
    </React.Fragment>
  )
}

export default Filter