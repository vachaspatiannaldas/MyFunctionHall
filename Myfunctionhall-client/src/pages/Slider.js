import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SliderCard from './SliderCard';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Slider(props) {
  const ProductData = [
    {
      id: 1,
      imgurl: "https://www.quickpantry.in/cdn/shop/products/Rs.12_500x500.jpg?v=1595193757",
      name: "Maggi",
      price: "$20.99",
      description: "this is maggi"
    },
    {
      id: 2,
      imgurl: "https://vegecravings.com/wp-content/uploads/2023/01/Korean-Style-Maggi-Noodles-Recipe-Step-By-Step-Instructions-scaled.jpg",
      name: "Parle",
      price: "$28.99",
      description: "this is Parle"
    },
    {
        id: 3,
        imgurl: "https://www.quickpantry.in/cdn/shop/products/Rs.12_500x500.jpg?v=1595193757",
        name: "Maggi",
        price: "$20.99",
        description: "this is maggi"
      },
      {
        id: 4,
        imgurl: "https://vegecravings.com/wp-content/uploads/2023/01/Korean-Style-Maggi-Noodles-Recipe-Step-By-Step-Instructions-scaled.jpg",
        name: "Parle",
        price: "$28.99",
        description: "this is Parle"
      },
      {
        id: 5,
        imgurl: "https://www.quickpantry.in/cdn/shop/products/Rs.12_500x500.jpg?v=1595193757",
        name: "Maggi",
        price: "$20.99",
        description: "this is maggi"
      },
      {
        id: 6,
        imgurl: "https://vegecravings.com/wp-content/uploads/2023/01/Korean-Style-Maggi-Noodles-Recipe-Step-By-Step-Instructions-scaled.jpg",
        name: "Parle",
        price: "$28.99",
        description: "this is Parle"
      },
      {
        id: 7,
        imgurl: "https://www.quickpantry.in/cdn/shop/products/Rs.12_500x500.jpg?v=1595193757",
        name: "Maggi",
        price: "$20.99",
        description: "this is maggi"
      },
      {
        id: 7,
        imgurl: "https://vegecravings.com/wp-content/uploads/2023/01/Korean-Style-Maggi-Noodles-Recipe-Step-By-Step-Instructions-scaled.jpg",
        name: "Parle",
        price: "$28.99",
        description: "this is Parle"
      }
  ];

  const product = ProductData.map(item => (
    <SliderCard
      key={item.id} // Add a unique key prop for each item
      name={item.name}
      url={item.imgurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <React.Fragment>
     <Carousel
        
        responsive={responsive}>
        {product}
      </Carousel>
    </React.Fragment>
  );
}

export default Slider;
