import React from "react";
import styled from "styled-components";
import CarouselCard from "./CarouselCard";
import { carouselData } from "./configCarousel";
import Slider from "react-slick";


const Container = styled.div`
    display: block;
 `

export default function CarouselContainer() {
    return (
        <Slider dots={true} infinite={true} speed={1000} slidesToScroll={1} arrows={true} slidesToShow={1}>

                {carouselData.map(({ image, title, text }, index) => {
                    return <CarouselCard image={image} title={title} text={text} />
                })}
 
        </Slider>
    )
}
