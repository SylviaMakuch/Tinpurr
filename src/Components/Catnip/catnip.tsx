import React from "react";
import styled from "styled-components";
import catnipp from "./../media/catnip.svg";
import arrow from "./../media/arrow.svg";
import { useState } from "react";


const Container = styled.div`
    display: flex;
    margin: 230px;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1200px) {
        margin: 250px 10px;
    }
`;

const Img = styled.img`
    width: 20px;
    position: absolute;
    left: 30%;
`;

const Img2 = styled.img`
    width: 1000px;
    @media (max-width: 1200px) {
        width: 500px;
    }
`;

const Title = styled.h2`
    color: #252424;
    font-family: 'Work Sans', sans-serif;
    font-size: 70px;
    font-weight: 800;
    margin: 100px;
    @media (max-width: 1200px) {
        text-align: center;
        margin: 60px;
    }
    @media (max-width: 600px) {
        font-size: 40px;
    }
 `;

const Text = styled.div`
    color: #000000;
    font-size: 30px;
    font-family: 'Work  Sans', sans-serif;
    text-align: center;
    @media (max-width: 600px) {
        font-size: 25px;
        margin: 10px
    }
`;

export default function CatNip() {
    return (
        <Container id="catnip">
            {/* <Img src={arrow} /> */}
            <Img2 src={catnipp} />
            <Title>Join The CatNipLife</Title>
            <Text>All Natural, from mama’s garden</Text>
            <Text style={{fontStyle:"italic"}}>Coming soon!</Text>
        </Container>
    )
};