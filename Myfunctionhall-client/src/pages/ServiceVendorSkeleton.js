import React from 'react'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom';

function ServiceVendorSkeleton() {
  return (
    <div className="row">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="col-md-6">
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <Skeleton
                  style={{ height: "210px", objectFit: "cover" }}
                  className="card-img"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body p-3">
                  <Skeleton height={30} width="80%" />
                  <p className="card-text">
                    <Skeleton count={2} />
                  </p>
                  <b className="card-text">
                    <Skeleton width="50%" />
                  </b>
                  <Link to={`/servicedescription`} style={{ textDecoration: 'none', color: 'black' }}>
                    <button type="button" className="btn btn-outline-light my-2" style={{ backgroundColor: "rgb(127, 1, 75)", color: "#fff" }}>
                      <Skeleton width="80%" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ServiceVendorSkeleton