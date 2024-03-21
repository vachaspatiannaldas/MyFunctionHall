import React from 'react'

function TopCarousel() {
  return (
    <React.Fragment>
         <div className="background">
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="image/slide1.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="image/slide2.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="image/slide3.png" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
            {/* <ul className="list-unstyled social-hero-section mb-0">
              <li data-aos="fade-left" data-aos-delay={0} className="aos-init aos-animate"><a href="#"><span><i className="fa fa-whatsapp" /></span></a></li>
              <li data-aos="fade-left" data-aos-delay={100} className="aos-init aos-animate"><a href="#"><span><i className="fa fa-instagram" /></span></a></li>
              <li data-aos="fade-left" data-aos-delay={200} className="aos-init aos-animate"><a href="#"><span><i className="fa fa-facebook-f" /></span></a></li>
              <li data-aos="fade-left" data-aos-delay={300} className="aos-init aos-animate"><a href="#"><span> <i className="fa fa-twitter" /></span></a></li>
            </ul> */}
          </div>
        </div>
    </React.Fragment>
  )
}

export default TopCarousel