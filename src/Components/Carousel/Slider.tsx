import React from "react";
import Slider from "react-slick";
import CarouselContainer from "./CarouselContainer";
import CarouselCard from "./CarouselCard";
import { carouselData } from "./configCarousel";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
             {carouselData.map(({image, title, text}, index)=>{
                 return <CarouselCard image={image} title={title} text={text} />
             })}
    </Slider>
  );
}
