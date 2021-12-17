import React from "react";
import styled from "styled-components";
import catnipp from "./../media/catnip.svg";
import arrow from "./../media/arrow.svg";
import { useState } from "react";


const Container = styled.div`
    display: flex;
    margin: 15vh;
    flex-direction: column;
    align-items: center;
`;

const Img = styled.img`
    width: 5%;
    position: absolute;
    left: 30%;
`;

const Img2 = styled.img`
    width: 50%;
`;

const Title = styled.h2`
    color: #252424;
    font-size: 30px;
    font-family: 'Work Sans', sans-serif;
`;

const Text = styled.div`
    color: #000000;
    font-size: 30px;
    font-family: 'Work Sans', sans-serif;
`;

export default function CatNip() {
    const [ScrolledToElement, ScrolledToElement] =useState('')
    return (
        <Container>
            <Img src={arrow} />
            <Img2 src={catnipp} />
            <Title>Join The CatNipLife</Title>
            <Text>All Natural, from mama’s garden</Text>
        </Container>
    )
};