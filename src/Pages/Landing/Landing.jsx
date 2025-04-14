import React from 'react';
import LayOut from '../../component/LayOut/LayOut';
// import Category from '../../Component/Category/Category';
// import Carousel from '../../component/Carousel/CarouselEffect';
// import Product from '../../Component/Product/Product';
// import Category from '../../component/Category/Category';
// import Product from '../../component/Product/Product';


import CarouselEffect from "../../Component/Carousel/CarouselEffect";
import Category from "../../Component/Category/Category";
import Product from "../../Component/Product/Product";

function Landing() {
  return (
    <LayOut>
      < CarouselEffect />
      < Category />
      < Product />
    </LayOut>
  );
}

export default Landing;

