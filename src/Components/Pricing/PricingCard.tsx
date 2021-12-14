import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    height: 250px;
    max-width: 400px;
    margin: 20px;
    display: grid;
    align-content: flex-start;
    justify-items: center; 
    background-color: #F9ECEC;
`;

const Icon = styled.img`
    height: 150px;
`;

const Title = styled.h2`
    color: #000000;
    text-align: center;
    font-size: 30px;
    font-family: 'Work Sans', sans-serif;
`;

const Text = styled.div`
    color: #000000;
    text-align: center;
    font-size: 30px;
    font-family: 'Work Sans', sans-serif;
`

interface AboutCardProperties {
    image: string;
    title: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
}
export default function PricingCard({image, title, text1, text2, text3, text4 }: AboutCardProperties) {
    return(
        <CardContainer>
            <Icon src={image} />
            <Title>{title}</Title>
            <Text>{text1}</Text>
            <Text>{text2}</Text>
            <Text>{text3}</Text>
            <Text>{text4}</Text>
        </CardContainer>
    );
};