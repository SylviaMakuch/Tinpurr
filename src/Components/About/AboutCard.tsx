import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    height: 550px;
    max-width: 300px;
`;

const Icon = styled.img<{ image: string }>`
    height: 150px;
`;

const Title = styled.h2 <{ title: string }>`
    color: #000000;
    text-align: center;
    font-size: 30px;
`;

const Text = styled.div<{ text: string }>`
    color: #000000;
    text-align: center;
    font-size: 30px;
`
export default function AboutCard({ image, title, text}) {
    return(
        <CardContainer>
            <Icon src={image} />
            <Title>{title}</Title>
            <Text>{text}</Text>
        </CardContainer>
    );
};