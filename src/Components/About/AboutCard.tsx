import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    height: 250px;
    max-width: 400px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center; 
`;

const Icon = styled.img`
    height: 150px;
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
    font-size: 30px;
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