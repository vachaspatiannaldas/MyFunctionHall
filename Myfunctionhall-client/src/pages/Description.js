import React, { useEffect, useState } from 'react'
import Indexcss from './Indexcss'
import Indexjs from './Indexjs'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import axios from 'axios';

function Description() {

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




  function openModal() {
    setShowModal(true);
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
        console.error('Error', error);
        toast.error('An error occurred while making the request');
      });
  }



function fetchDescription() {
    axios.get(`http://127.0.0.1:8000/api/halldesc/${id}`)
      .then((res) => {
        const data = res.data;
        console.log(data);
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
        {/* <Navbar/> */}
        <ToastContainer />
          <section class="product-details spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__pic">
                        <div class="product__details__pic__item">
                        <img src={`http://localhost:8000/hall_upload/${product.images}`} 
                                alt="#" style={{width:"250px",height:"400px"}}/>
                        </div>
                        <div class="product__details__pic__slider owl-carousel">
                        <img src={`http://localhost:8000/hall_upload/${product.images}`} 
                                alt="#" style={{width:"250px",height:"400px"}}/>
                            <img data-imgbigurl="img/product/details/product-details-3.jpg"
                                src="img/product/details/product-details-1.jpg"  alt=""/>
                            <img data-imgbigurl="img/product/details/product-details-5.jpg"
                                src="img/product/details/thumb-3.jpg" alt=""/>
                            <img data-imgbigurl="img/product/details/product-details-4.jpg"
                                src="img/product/details/thumb-4.jpg" alt=""/>
                        </div>
                    </div>
                </div>



                
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__text">
                        <h3>{product.hname}</h3>
                        <div class="product__details__rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                            <span>(18 reviews)</span>
                        </div>
                        <div class="product__details__price">$50.00</div>
                        <p>{product.for}</p>
                       
                       
                        <button
                  type="button"
                  className="btn btn-primary"
                  onClick={openModal}
                >
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
<input
  type="text"
  defaultValue={product.hname}
  name="hall_id"
  className="form-control"
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
           
        </form>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" aria-label="Close" onClick={closeModal}>Close</button>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit Enquiry</button>

      </div>
    </div>
  </div>
</div>                        <ul>
                            
<li>
    <b>Availability:</b> 
    <span>
       
        {product.status === "active" ? (
            <b class="text-danger">Available</b>
        ) : (
            <b class="text-danger">Not available</b>
        )}
    </span>
</li>

                                
                                
                           

                            <li><b>Total Halls :</b> <span>{product.area}</span></li>
                            <li><b>Venue Capacity::</b> <span>{product.area}</span></li>
                            <li><b> Car Parking : :</b> <span>{product.area}</span></li>
                            <li><b> Rooms ::</b> <span>{product.area}</span></li>


                            <li><b>Shipping</b> <span>{product.area}</span></li>
                            <li><b>Contact</b> <span>{product.contact}</span></li>
                            <li><b>Share on</b>
                                <div class="share">
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-instagram"></i></a>
                                    <a href="#"><i class="fa fa-pinterest"></i></a>
                                </div>
                            </li>
                        </ul>
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
                                    aria-selected="false">Reviews <span>(1)</span></a>
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
                                        <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="/image/f6.png" data-lightbox="photos"><img class="img-fluid" src="/image/f6.png"/></a></div>
                                        <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="/image/f1.jpg" data-lightbox="photos"><img class="img-fluid" src="/image/f1.jpg"/></a></div>
                                        <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="/image/f2.jpg" data-lightbox="photos"><img class="img-fluid" src="/image/f2.jpg"/></a></div>
                                        <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="/image/f3.png" data-lightbox="photos"><img class="img-fluid" src="/image/f3.png"/></a></div>
                                        <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="/image/f4.jpg" data-lightbox="photos"><img class="img-fluid" src="/image/f4.jpg"/></a></div>
                                        <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="/image/f5.jpg" data-lightbox="photos"><img class="img-fluid" src="image/f5.jpg"/></a></div>
                                    </div>
                                </div>
                            </div>
                   </div>
                            <div class="tab-pane" id="tabs-3" role="tabpanel">
                                <div class="product__details__tab__desc">
                                    <h6>Review</h6>
                                    <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                        Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                                        Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                                        sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                                        eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                                        sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                                        diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                                        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                        Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                                        Proin eget tortor risus.</p>
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

export default Description