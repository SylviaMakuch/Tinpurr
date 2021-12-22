import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    height: 700px;
    width: 350px;
    margin: 20px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    line-height: 2.5;
    background-color: #F9ECEC;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    @media (max-width: 1450px) {
        height: 700px;
        width: 300px;
        margin: 20px;
        padding: 30px;
    }
    @media (max-width: 1000px) {
        height: 700px;
        width: 150px;
        margin: 20px;
        padding: 10px;
    }
`;

const Icon = styled.img`
    height: 200px;
    @media (max-width: 800px) {
        height: 100px;
    }
`;

const Title = styled.h2`
    color: #b56969;
    text-align: center;
    font-size: 30px;
    font-family: 'Work Sans', sans-serif;
    @media (max-width: 800px) {
        font-size: 20px;
    }
`;

const Text = styled.div`
    color: rgba(0, 0, 0, 0.333)00;
    font-size: 25px;
    font-family: 'Work Sans', sans-serif;
    @media (max-width: 800px) {
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