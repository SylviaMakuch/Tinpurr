import React from "react";
import styled from "styled-components";
import CarouselCard from "./CarouselCard";
import { carouselData } from "./configCarousel";


const Container = styled.div`
 
 `

 export default function CarouselContainer() {
     return (
         <Container>
             {carouselData.map(({image, title, text}, index)=>{
                 return <CarouselCard image={image} title={title} text={text} />
             })}
         </Container>
     )
 }
