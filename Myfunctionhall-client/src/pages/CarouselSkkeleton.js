import React from 'react'
import { responsive, responsive3 } from './Carouselddata';
import Carousel from 'react-multi-carousel';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom';
function CarouselSkkeleton() {
  return (    
    <div className="row">
    <div className="col-md-3" >
      <div className="card mb-3 text-center" style={{ width:"22rem"}}>
        <Skeleton height={240} width={100} />
        <div className="card-body">
          <h5 className="card-title"><Skeleton width={100} /></h5>
          <p className="card-text text-danger"><Skeleton /></p>
        </div>
      </div>
    </div>
  
</div>

  
  
  )
}

export default CarouselSkkeleton