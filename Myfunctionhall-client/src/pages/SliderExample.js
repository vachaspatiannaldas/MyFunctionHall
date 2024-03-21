import Carousel from 'react-multi-carousel';
import React, { useEffect, useState } from 'react';
import { responsive, responsive3 } from './Carouselddata';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import CarouselSkkeleton from './CarouselSkkeleton';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SliderExample() {
  const navigate = useNavigate();





  const [Showdata, setShowdata] = useState([]);
  const [HallShowdata, setHallShowdata] = useState([]);


  function fetchData() {
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

  useEffect(() => {

    fetchData();
    fetchhallData();
  }, []);




  return (
    <React.Fragment>
      <div className="container">
        <div className="section-title related__product__title">
          <h2 className='text-center mb-3'>Browse Wedding Hall</h2>
        </div>
        <Carousel responsive={responsive}>
          {HallShowdata.length > 0 ? (
            HallShowdata.map((row) => (
              <Link to={'/description/' + row.id} style={{ textDecoration: 'none', color: 'black' }}>
                <div className="card mr-2 text-center" style={{ height: "320px" }}>
                  {row.images && row.images.length > 0 ? (
                    <img
                      src={`http://localhost:8000/hall_upload/${JSON.parse(row.images)[0]}`}
                      alt="#"
                      style={{ height: "240px" }}
                    />
                  ) : (
                    <img src={`http://localhost:8000/hall_upload/${row.images}`} alt="#" style={{ height: "240px" }} />
                  )}
                  <div className="card-body">
                    <h5 className="card-title"><b>{row.hname} </b></h5>
                    <p className="card-text text-danger">Venues / Vendors</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <CarouselSkkeleton />
          )}
        </Carousel>
      </div>











































      <div className='container my-5'>
        <div class="section-title related__product__title">
          <h2 className='text-center mb-3'>Browse  Venues and Vendors</h2>
        </div>
        <Carousel responsive={responsive}>




          {
            HallShowdata.length > 0 ? (

              HallShowdata.map((row) => {
                return (
                  // <link to={'/description/' + row.id}  style={{ textDecoration: 'none', color: 'black' }}></link>

                  <Link to={'/city/' + row.address} style={{ textDecoration: 'none', color: 'black' }}>
                    <div class="card mr-2 text-center" style={{ height: "320px" }}>
                      {row.images && row.images.length > 0 ? (
                        <img
                          src={`http://localhost:8000/hall_upload/${JSON.parse(row.images)[1]}`}
                          alt="#"
                          style={{ height: "240px" }}
                        />
                      ) : (
                        <img src={`http://localhost:8000/hall_upload/${row.images}`} alt="#" style={{ height: "240px" }} />
                      )}
                      <div class="card-body">
                        <h5 class="card-title"><b>{row.address}</b></h5>
                        <p class="card-text text-danger">Venues / Vendors</p>
                      </div>
                    </div>
                  </Link>



                );
              })) : (
              <CarouselSkkeleton />
            )}


        </Carousel>











      </div>








      <div class="section-title related__product__title" style={{ marginTop: "80px" }}>
        <h2 className='text-center mb-3'>Vendors by Category</h2>
      </div>



      <Carousel responsive={responsive}>




        {Showdata.length >0 ?(
        
        Showdata.map((row) => {
          return (
            // <link to={'/description/' + row.id}  style={{ textDecoration: 'none', color: 'black' }}></link>

            <Link to={'/filter'} style={{ textDecoration: 'none', color: 'black' }}>
              <div class="card mr-2 text-center" style={{ height: "320px" }}>
                {row.images && row.images.length > 0 ? (
                  <img
                    src={`http://localhost:8000/Category_upload/${row.image}`}
                    alt="#"
                    style={{ height: "240px" }}
                  />
                ) : (
                  <img src={`http://localhost:8000/Category_upload/${row.image}`} alt="#" style={{ height: "240px" }} />
                )}
                <div class="card-body">
                  <h5 class="card-title"><b>{row.name}</b></h5>
                </div>
              </div>
            </Link>



          );
        })
      
        ):(
          <CarouselSkkeleton/>
        )
      }


      </Carousel>
      <div className="text-center my-5">
        <button type="button" className="btn btn-outline-light" style={{ backgroundColor: "rgb(127, 1, 75)", color: "#fff" }}><Link to="/filter" style={{ color: "#fff", textDecoration: "none" }}>View All Category</Link></button>
      </div>

      {/* 


                <Carousel responsive={responsive}>
                {Showdata.map((row) => {
                            return (
                   
                    <div class="card mr-2 text-center">
                        <a href="/filter">  <img src={`http://localhost:8000/Category_upload/${row.image}`} 
                                alt="#"  style={{height:"240px"}} /></a>
                        <div class="card-body">
                            <h5 class="card-title" id='btnmain'><b>{row.name} </b></h5>
                        </div>
                    </div>
                    
                             );
                            })}


                </Carousel>
                 */}








    </React.Fragment>
  )
}

export default SliderExample