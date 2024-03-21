import Indexcss from './Indexcss'
import Indexjs from './Indexjs'
import Carousel from 'react-multi-carousel';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from "react-router-dom";
import { responsive, responsive3 } from './Carouselddata';
import Navbar from './Navbar';
import CarouselSkkeleton from './CarouselSkkeleton';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
function Blog() {
    const [Showdata, setShowdata] = useState([]);
    const [ShowCategorydata, setCategoryShowdata] = useState([]);
    const [Showblog, setShowblog] = useState([]);
    const navigate = useNavigate();
    
//   function fetchData() {
//     axios.get('http://127.0.0.1:8000/api/categoryfrontend')
//       .then((res) => {
//         const data = res.data;
//         console.log(data);
//         setShowdata(data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }



//     function fetchCategory() {
//         axios.get('http://127.0.0.1:8000/api/categoryfrontend')
//           .then((res) => {
//             const data = res.data;
//             console.log(data);
//             setCategoryShowdata(data);
//           })
//           .catch((error) => {
//             console.error(error);
//           });
//       }

      function fetchBlog() {
        axios.get('http://127.0.0.1:8000/api/blogfrontend')
          .then((res) => {
            const data = res.data;
            console.log(data);
            setShowblog(data);
          })
          .catch((error) => {
            console.error(error);
          });
      }




      function truncateText(text, wordCount) {
        if (text) {
          const words = text.split(' ');
          if (words.length <= wordCount) {
            return text;
          } else {
            const truncatedText = words.slice(0, wordCount).join(' ');
            return `${truncatedText}...`;
          }
        } else {
          return ''; // Handle the case when text is undefined
        }
      }
      
    
      useEffect(() => {
       
        fetchBlog();
      
        
      }, [])
    return (
        <React.Fragment>
            <Indexcss />
       







<div class="container">
    



            <div class="section-title related__product__title" style={{marginTop:"80px"}}>
                        <h2>Latest Blogs</h2>
                    </div>


                    
                <Carousel responsive={responsive3}>
               
               
                {
                Showblog.length > 0 ?(
                Showblog.map((row) => {
                            return ( 

                <div class="card mb-3 mx-3" style={{ height:"220px" }}>
                    <Link to={`/blog/`+row.id} style={{ textDecoration: 'none', color: 'black' }}>
                <div class="row no-gutters">
                                
                    <div class="col-md-4">
                    <img  src="image/f6.PNG" class="card-img" alt="" style={{ height:"220px" }} />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p class="card-title">{row.title}</p>
                      <p class="card-text">{truncateText(row.description, 4)}</p>
                      <p class="card-text"><b>{row.place}</b></p>

                      <p class="card-text mb-2"><small class="text-muted"><b>Vendor:{row.Vendor}</b></small></p>
                    </div>
                  </div>
                  

                </div>
                </Link>

              </div>
              
 );
})):(
  <div class="card mb-3 mx-3" style={{ height:"220px" }}>
                    <Link style={{ textDecoration: 'none', color: 'black' }}>
                <div class="row no-gutters">
                                
                    <div class="col-md-4">
                    <Skeleton  class="card-img" alt="" style={{ height:"210px",marginLeft:"15px",borderRadius:"5px" }} />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <Skeleton/>
                      <h5 class="card-title"> <Skeleton/> </h5>
                      <p class="card-text"> <Skeleton/> </p>
                      <p class="card-text"> <Skeleton/> </p>

                      <p class="card-text mb-2"><small class="text-muted"><b> <Skeleton/></b></small></p>
                    </div>
                  </div>
                  

                </div>
                </Link>

              </div>
)}
                 

                 

                </Carousel>

                <div className="text-center my-5">
  <button type="button" className="btn btn-outline-light" style={{ backgroundColor: "rgb(127, 1, 75)", color: "#fff" }} ><Link to="/bloglist" style={{ color:"#fff",textDecoration:"none" }}>View All Blogs</Link></button>
</div>




                

                </div>
            <Indexjs />

        </React.Fragment>
    )
}

export default Blog