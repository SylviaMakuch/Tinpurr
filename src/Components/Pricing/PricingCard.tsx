import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    height: 40vh;
    width: 40vh;
    margin: 20px;
    padding: 5vh 0vh 5vh 0vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    line-height: 2.5;
    background-color: #F9ECEC;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
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
    color: #000000;
    text-align: center;
    font-size: 25px;
    font-family: 'Work Sans', sans-serif;
`
interface AboutCardProperties {
    image: string;
    title: string;
    text1: string;
    text2: string;
    text3: string;
}
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