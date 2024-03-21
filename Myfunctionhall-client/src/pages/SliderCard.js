import React from 'react'

function SliderCard(props) {
  return (
    <React.Fragment>
        <div class="card"  style={{width: "18rem",height:"29rem"}}>
  <img class="card-img-top" src={props.url} alt="Card image cap" style={{height:"280px"}} />
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text">{props.description}</p>
    <p class="card-text">{props.price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

    </React.Fragment>
  )
}

export default SliderCard