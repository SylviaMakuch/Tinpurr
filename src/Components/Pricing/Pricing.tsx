import React from "react";
import styled from "styled-components";
import PricingCard from "./PricingCard";
import { pricingData } from "./congifPricing";

const PricingContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 80px;
    @media (max-width: 1700px) {
        flex-wrap: wrap;
        margin: 50px;
        flex-direction: column;
    }
    @media (max-width: 800px) {
        flex-wrap: wrap;
        margin: 5vh;
    }
 `;

const Slogan = styled.div`
    color: #000000;
    font-family: 'Work Sans', sans-serif;
    font-size: 70px;
    font-weight: 800;
    margin: 60px;
    @media (max-width: 1600px) {
        text-align: center;
        margin: 100px;
        padding: 20px;
        font-size: 50px;
    }
    @media (max-width: 600px) {
        font-size: 40px;
    }
 `;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    @media (max-width: 1200px) {
        flex-wrap: wrap;
        margin: 50px;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
}
    @media (max-width: 800px) {
        flex-wrap: wrap;
        margin: 5vh;
}
`;

export default function Pricing() {
    return (
        <PricingContainer id="pricing">
            <Slogan> Affordable plans for every cat’s needs! </Slogan>
            <CardContainer>
            {
                pricingData.map(({ image, title, text1, text2, text3 }, index) => {
                    return <PricingCard image={image} title={title} text1={text1} text2={text2} text3={text3} key={index} />
                })
            }
            </CardContainer>
        </PricingContainer>
    );
};