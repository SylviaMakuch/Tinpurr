import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    height: 40vh;
    width: 70vh;
    margin: 20px;
    padding: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    line-height: 2.5;
    background-color: #F9ECEC;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    @media (max-width: 1200px) {
        margin: 5vh 8vh 5vh 8vh;
    }
    @media (max-width: 400px) {
        height: 75vh;
        padding: 5vh;
        width: 80vh;
        margin: 2vh;
    }
`;

const Icon = styled.img`
    height: 15vh;
`;

const Title = styled.h2`
    color: #b56969;
    text-align: center;
    font-size: 30px;
    font-family: 'Work Sans', sans-serif;
`;

const Text = styled.div`
    color: rgba(0, 0, 0, 0.333)00;
    font-size: 25px;
    font-family: 'Work Sans', sans-serif;
    @media (max-width: 600px) {
        font-size: 20px;
        text-align: center;
    }
`;
interface AboutCardProperties {
    image: string;
    title: string;
    text1: string;
    text2: string;
    text3: string;
};

export default function PricingCard({image, title, text1, text2, text3 }: AboutCardProperties) {
    return(
        <CardContainer>
            <Icon src={image} />
            <Title>{title}</Title>
            <Text>{text1}</Text>
            <Text>{text2}</Text>
            <Text>{text3}</Text>
        </CardContainer>
    );
};