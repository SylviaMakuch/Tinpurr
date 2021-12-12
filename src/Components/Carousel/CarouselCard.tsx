import React from "react";
import styled from "styled-components";

const Container =styled.div`
    display: block;
`

const Img = styled.img`
    border-radius: 50%;
    height: 50vh;
`

const Title =styled.div`
    color: #000000;
    text-align: center;
    font-size: 30px;
    font-family: 'Work Sans', sans-serif;

`

const Text =styled.div`
    color: #fffefe;
    text-align: center;
    font-size: 10px;
    font-family: 'Work Sans', italic;

`
export default function CarouselCard() {
    return(
        <Container>
        <Title>{text}</Title>
        <Img src={image} />
        <Text>{name}</Text>
        </Container>
    )
}