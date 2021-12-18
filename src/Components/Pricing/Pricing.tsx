import React from "react";
import styled from "styled-components";
import PricingCard from "./PricingCard";
import { pricingData } from "./congifPricing";

const PricingContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 15vh;
 `;

 const Slogan = styled.div`
    color: #000000;
    font-family: 'Work Sans', sans-serif;
    font-size: 70px;
    font-weight: 800;
 `;
 
 export default function Pricing() {
     return (
         <PricingContainer id="pricing">
            <Slogan> Affordable plans for every cat’s needs! </Slogan>
             {
                 pricingData.map(({ image, title, text1, text2, text3}, index)=>{
                     return <PricingCard image={image} title={title} text1={text1} text2={text2} text3={text3}/>
                 })
             }
         </PricingContainer>
     );
 };