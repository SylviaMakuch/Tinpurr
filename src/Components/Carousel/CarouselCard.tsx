import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

const Container = styled.div`
    display: block;
`

const Img = styled.img`
    border-radius: 50%;
    height: 8vh;
    width: 8vh;
`

const Title = styled.div`
    color: #000000;
    text-align: center;
    font-size: 30px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 800;
`

const Text = styled.div`
    color: #000000;
    font-size: 30px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 200;
`

interface CarouselCardProperties {
    image: string;
    title: string;
    text: string;
}

export default function CarouselCard({ text, title, image }: CarouselCardProperties) {
    return (
        <Container>
            <Title>{title}</Title>
            <Img src={image} />
            <Text>{text}</Text>
        </Container>
    )
}