import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    height: 250px;
    margin: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center; 
    @media (max-width: 1600px) {
        margin: 60px 0px;
    }
`;

const Icon = styled.img`
    height: 150px;
    @media (max-width: 800px) {
        height: 80px
    }
`;

const Title = styled.h2`
    color: #252424;
    text-align: center;
    font-size: 30px;
    font-family: 'Work Sans', sans-serif;
`;

const Text = styled.div`
    color: #000000;
    text-align: center;
    font-size: 25px;
    font-family: 'Work Sans', sans-serif;
`;

interface AboutCardProperties {
    image: string;
    title: string;
    text: string;
};

export default function AboutCard({image, title, text}: AboutCardProperties) {
    return(
        <CardContainer>
            <Icon src={image} />
            <Title>{title}</Title>
            <Text>{text}</Text>
        </CardContainer>
    );
};