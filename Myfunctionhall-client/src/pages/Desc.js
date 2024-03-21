import React, { useEffect, useState } from 'react'
import Indexcss from './Indexcss'
import Indexjs from './Indexjs'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import axios from 'axios';
import BackButton from './BackButton';

function  Desc() {

    const { id } = useParams();
    const pidd = id.id;
  
    const [product, setProduct] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [event_date, setEvent_date] = useState('');
    const [mobile, setMobile] = useState('');
    const [guest_count, setGuest_count] = useState('');
    const [plate_cost, setPlate_cost] = useState('');
    const [address, setAddress] = useState('');
    const [food, setFood] = useState('');
    const [msg, setMsg] = useState('');
    const [event_time, setEventTime] = useState('');
    const [hallid, setHallid] = useState(''); // Initialize hallid state
  

  useEffect(() => {
    fetchDescription();
    hallidshow();
  }, []);




  function handleChange(e) {
    if (e.target.name === 'name') {
      setName(e.target.value); 
    }
    else if (e.target.name === 'email') {
        setEvent_date(e.target.value);
    } else if (e.target.name === 'event_date') {
        setEvent_date(e.target.value);
    } else if (e.target.name === 'mobile') {
        setEvent_date(e.target.value);
    }  else if (e.target.name === 'guest_count') {
        setGuest_count(e.target.value);
    } else if (e.target.name === 'plate_cost') {
        setPlate_cost(e.target.value);
    } 
    else if (e.target.name === 'address') {
        setAddress(e.target.value);
    } 
    else if (e.target.name === 'food') {
        setFood(e.target.value);
    } 
    else if (e.target.name === 'msg') {
        setMsg(e.target.value);
    }  else if (e.target.name === 'hall_id') {
        setHallid(e.target.value);
    } 
  }


  function closeModal() {
    setShowModal(false);
    setName('');
    setEmail('');
    setEvent_date('');
    setMobile('');
    setGuest_count('');
    setPlate_cost('');
    setAddress('');
    setFood('');
    setMsg('');
    setEventTime('');
    setHallid('');
  }




//   function handleSubmit(e) {
//     e.preventDefault();

//     const data = new FormData();
//     data.append('name', name);
//     data.append('event_date', event_date);
//     data.append('mobile', mobile);
//     data.append('guest_count', guest_count);

//     data.append('plate_cost', plate_cost);
//     data.append('address', address);
//     data.append('food', food);
//     data.append('msg', msg);
//     data.append('event_time', event_time);
    
//     axios.post('http://127.0.0.1:8000/api/enquiry', data)
//     .then((resp) => {
//         if (resp.data && resp.data[0].status === 'success') {
//             toast.success('Enquiry Sent Successfully');
//             setShowModal(false); // Close the modal
//             // Reset form fields
//             setName('');
//             setEvent_date('');
//             setMobile('');
//             setGuest_count('');
//             setPlate_cost('');
//             setAddress('');
//             setFood('');
//             setMsg('');
//             setEventTime();
//         } else {
//             console.log('Error');
//             toast.error('Error occurred while adding data');
//         }
//     })
//     .catch((error) => {
//         console.log('Error', error);
//         toast.error('An error occurred while making the request');
//     });
// }











function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('event_date', event_date);
    data.append('mobile', mobile);
    data.append('guest_count', guest_count);
    data.append('plate_cost', plate_cost);
    data.append('address', address);
    data.append('food', food);
    data.append('msg', msg);
    data.append('event_time', event_time);
    data.append('hall_id', product.hname); // Include the hall_id in the FormData

    axios
      .post('http://127.0.0.1:8000/api/enquiry', data)
      .then((resp) => {
        if (resp.data && resp.data[0].status === 'success') {
          axios
            .post('http://127.0.0.1:8000/api/send-enquiry-email', { emailData: data })
            .then(() => {
              toast.success('Enquiry Sent Successfully');
              setShowModal(false);
              // Reset form fields
              setName('');
              setEmail('');
              setEvent_date('');
              setMobile('');
              setGuest_count('');
              setPlate_cost('');
              setAddress('');
              setFood('');
              setMsg('');
              setEventTime('');
              setHallid(''); // Clear hall_id when the form is reset
            })
            .catch((error) => {
              console.error('Email sending error', error);
              toast.error('Error occurred while sending the email');
            });
        } else {
          console.error('Error');
          toast.error('Error occurred while adding data');
        }
      })
      .catch((error) => {
        //console.error('Error', error);
        toast.success('Enquiry Sent Successfully');
      });
  }



function fetchDescription() {
    axios.get(`http://127.0.0.1:8000/api/halldesc/${id}`)
      .then((res) => {
        const data = res.data;
        console.log(data);
        console.log("images",product.images)
        setProduct(data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }



  function hallidshow() {
    axios
      .get(`http://127.0.0.1:8000/api/hallidshow/${pidd}`)
      .then((res) => {
        const data = res.data;
        console.log('data2', data);
        setHallid(data[0]); // Set the hall_id state with the correct hall ID
      })
      .catch((error) => {
        console.error(error);
      });
  }

  
// function hallidshow() {
//     axios.get(`http://127.0.0.1:8000/api/hallidshow/${pidd}`)
//       .then((res) => {
//         const data = res.data;
//         console.log("data2",data);
//         setHallid(data[0]);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }


//   function hallidshow() {
//     axios.get(`http://127.0.0.1:8000/api/hallidshow/${id}`)
//       .then((res) => {
//         const data = res.data;
//         console.log("id",data);
//         if (data.length > 0) {
//           setHallid(data[0].hname);
//           console.log("hii",setHallid(data[0].hname))
        
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }


  useEffect(()=>{
    fetchDescription();
    hallidshow();
},[])


  return (
    <React.Fragment>
        <Indexcss/>
        <Navbar/>
       

       <BackButton/>
             <ToastContainer />
          <section class="product-details spad">
        <div class="container">
            <div class="row">
            <h3 style={{textAlign:"center", marginBottom:"15px"}}>{product.hname}</h3>
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__pic">
                        <div class="product__details__pic__item">
                       {/* Assuming product.images is a JSON-encoded string */}
                       {product.images ? (
                  <img
                    src={`http://localhost:8000/hall_upload/${JSON.parse(product.images)[0]}`}
                    alt="#"
                    style={{ width: "250px", height: "400px" }}
                  />
                ) : (
                  <Skeleton width={250} height={400} />
                )}


                        </div>
                        <div class="product__details__pic__slider owl-carousel">
                        {product.images ? (
                  JSON.parse(product.images).map((image, index) => (
                    <img
                      key={index}
                      data-imgbigurl={`http://localhost:8000/hall_upload/${image}`}
                      src={`http://localhost:8000/hall_upload/${image}`}
                      alt=""
                      style={{ width: "250px", height: "400px" }}
                    />
                  ))
                ) : (
                  <Skeleton width={250} height={400} count={4} />
                )}
                        </div>
                    </div>
                </div>



                
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__text">
                        {/* <div class="product__details__rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                            <span>(18 reviews)</span>
                        </div> */}
                        {/* <div class="product__details__price">&#8377; {product.rent}</div> */}
                        {/* <p>{product.for}</p> */}

                        <div class="container">
    <ul class="list-group">
        <li class="list-group-item">
            <b class='act1'>Availability: </b> 
            <span>                                        
                {product.status === "Active" ? (
                    <b class="text-success">Available</b>
                ) : (
                    <b class="text-danger">Not available</b>
                )}
            </span>
        </li>
        <li class="list-group-item"><b>Total Halls:</b> <span>
        {product.area ? product.area : <Skeleton width={100} />}

          </span></li>
        <li class="list-group-item"><b>Hall Capacity:</b> <span>
        {product.capacity ? product.capacity : <Skeleton width={100} />}

          </span></li>
        <li class="list-group-item"><b>Car Parking:</b> <span>
        {product.area ? product.area : <Skeleton width={100} />}

          </span></li>
        <li class="list-group-item"><b>Rooms:</b> <span>
        {product.area ? product.area : <Skeleton width={100} />}

          </span></li>
        <li class="list-group-item"><b>Contact:</b> <span>
        {product.contact ? product.contact : <Skeleton width={100} />}

          </span></li>
        <li class="list-group-item"><b>Price:</b> <span>
        {product.rent ? product.rent : <Skeleton width={100} />}

          </span></li>
        <li class="list-group-item">
            <b>Share on: </b>
            <div class="share">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-pinterest"></i></a>
            </div>
        </li>
    </ul>
</div>

                       
<button type="button"  className="btn btn-outline-light mt-2 ml-2" style={{ backgroundColor: "rgb(127, 1, 75)", color: "#fff" }} onClick={() => setShowModal(true)}>
    Book Enquiry
</button>

<div
  className={`modal fade ${showModal ? 'show d-block' : ''}`}
  id="exampleModal"
  tabIndex="-1"
  role="dialog"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Enquiry</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
            </div>
            <div className="modal-body">

<form>
                    <div className='row'>
                      <div className='col-md-6'>
                      <div class="form-group">
              <label for="">Name</label>
              <input type="text" name="name" id="" onChange={(e)=>setName(e.target.value)} value={name} class="form-control" placeholder=""/>
            </div>
           

            <input
  type="hidden"
  name="hall_id"
  value={hallid} // Use the hallid state here
/>
{/* <input
  type="text"
  defaultValue={product.hname}
  name="hall_id"
  class="form-control"
  onChange={(e) => setHallid(e.target.value)}
/> */}
Hall Name <input
  type="text"
  defaultValue={product.hname}
  name="hall_id"
  className="form-control mb-2"
  readOnly // Add the readOnly attribute
/>



{/* 
    <div className="form-group">
  <label htmlFor="hall_id">Hall Name</label>
  <input
    type="text"
    name="hall_id"
    value={hallid} // Use the hallid state here
    onChange={(e) => setHallid(e.target.value)} // Update hallid state when the input changes
  />
</div> */}


            <div class="form-group">
              <label for="">Email</label>
              <input type="text" name="email" id="" onChange={(e)=>setEmail(e.target.value)} value={email} class="form-control" placeholder=""/>
            </div>

            <div class="form-group">
              <label for="">Event Date</label>
              <input type="date" name="event_date"  onChange={(e)=>setEvent_date(e.target.value)} value={event_date}  id="" class="form-control" placeholder=""/>
            </div>
            <div class="form-group">
              <label for="">Mobile No</label>
              <input type="text" name="mobile" onChange={(e)=>setMobile(e.target.value)} value={mobile} id="" class="form-control" placeholder=""/>
            </div>
            <div class="form-group">
                <label for="">Guest Count</label>
                <select class="custom-select" name="guest_count" value={guest_count} id="" onChange={(e)=>setGuest_count(e.target.value)} >
                    <option >Select one</option>
                    <option value="0-200">0 - 200</option>
                    <option value="201-400">201 - 400</option>
                    <option value="401-100">401 - 1000</option>
                    <option value="< 2000">- 2000</option>
                </select>
            </div>
                      </div>
                      <div className='col-md-6'>
                      <div class="form-group">
                <label for="">Hall Rent /  Per Plate cost</label>
                <select class="custom-select" name="plate_cost" value={plate_cost} onChange={(e)=>setPlate_cost(e.target.value)}  id="">
                    <option >Select one</option>
                    <option value="200">200</option>
                    <option value="400">400</option>
                    <option value="500+">500+</option>
                </select>
            </div>
           
            <div class="form-group">
              <label for="">Your Address</label>
              <input type="text" name="address" value={address} onChange={(e)=>setAddress(e.target.value)} id="" class="form-control" placeholder=""/>
            </div>

            <div class="form-group">
                <label for="">Select Food Veg / Non - Veg</label>
                <select class="custom-select" name="food" value={food} onChange={(e)=>setFood(e.target.value)} id="">
                    <option value="veg">Veg</option>
                    <option value="non-veg">Non-Veg</option>
                    <option value="both">Both</option>
                </select>
            </div>

            <div class="form-group">
                <label for="">Select Event Session</label>
                <select class="custom-select" name="event_time" value={event_time} onChange={(e)=>setEventTime(e.target.value)} id="">
                    <option value="Morning - Lunch">Morning - Lunch</option>
                    <option value="Evening - Dinner">Evening - Dinner</option>
                    <option value="Both">Both</option>
                </select>
            </div>

            <div class="form-group">
              <label for="">Message</label>
              <textarea name="msg" placeholder="" 
												onChange={(e)=>{setMsg(e.target.value)}} value={msg} rows="3" className='form-control'></textarea>            </div>
           
                      </div>

                    </div>




      
           
           
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" aria-label="Close" onClick={closeModal}>Close</button>
        <button type="submit"  className="btn btn-outline-light" style={{ backgroundColor: "rgb(127, 1, 75)", color: "#fff" }} onClick={handleSubmit}>Submit Enquiry</button>

      </div>
    </div>
  </div>
</div>                      
                    </div>
                </div>



                <div class="col-lg-12">
                    <div class="product__details__tab">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab"
                                    aria-selected="true">Description</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab"
                                    aria-selected="false">Gallery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab"
                                    aria-selected="false">Video <span>(1)</span></a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                <div class="product__details__tab__desc">
                                    <h6>Description</h6>
                                    <p>{product.for}</p>
                                </div>
                            </div>
                            








                            <div class="tab-pane" id="tabs-2" role="tabpanel">
                            <div class="photo-gallery">
                                <div class="container">
                                    
                                    <div class="row photos mt-3">
                                        {product.images ? (
                                          JSON.parse(product.images).map((image, index) => (
                                            <div class="col-sm-6 col-md-4 col-lg-3 item d-flex" key={index}>
                                        <a href={`http://localhost:8000/hall_upload/${image}`} data-lightbox="photos">

                                              <img
                                                src={`http://localhost:8000/hall_upload/${image}`}
                                                alt={`Image ${index + 1}`}
                                                style={{ width: '100%', height: '100%'}}
                                              />
                                          </a>
                                            </div>
                                          ))
                                        ) : (
                                          <p>No images available</p>
                                        )}
                                      </div>

                                </div>
                            </div>
                  </div>



                           <div class="tab-pane" id="tabs-3" role="tabpanel">
                                <div class="product__details__tab__desc">
                                <video className="videohall" controls>
                                <source src={`http://localhost:8000/hall_upload/${product.video}`}   type="video/mp4" ></source>
                                </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Indexjs/>
    </React.Fragment>
  )
}

export default Desc