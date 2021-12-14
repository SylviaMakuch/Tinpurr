import React from "react";
import styled from "styled-components";
import PricingCard from "./PricingCard";
import { pricingData } from "./congifPricing";

const PricingContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20vh;
 `

 export default function Pricing() {
     return (
         <PricingContainer>
             {
                 pricingData.map(({ image, title, text1, text2, text3, text4}, index)=>{
                     return <PricingCard image={image} title={title} text1={text1} text2={text2} text3={text3} text4={text4}/>
                 })
             }
         </PricingContainer>
     );
 };