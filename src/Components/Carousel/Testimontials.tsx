import React, { useState } from "react";
import styled from "styled-components";
import tobi from "./../media/tobi.jpg";
import girly from "./../media/girly.jpeg"
import loveshades from "./../media/loveshades.jpg";


const Container = styled.div`
    display: block;
`

const Img = styled.img`
    border-radius: 50%;
    padding: 10px;
    border: 4px solid linear-gradient(45deg,#FE6B8B 30%, #FF8E53 90%);
    height: 15vh;
    width: 15vh;
    background:linear-gradient(45deg,#FE6B8B 30%, #FF8E53 90%); 
`

const Title = styled.div`
    color: #000000;
    text-align: center;
    font-size: 30px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
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

export default function Testimonials() {
    const carouselData = {
        0: {
            image: tobi,
            title: "I no longer have to howl at the moon to call for my lady !!",
            text: "Tobi ~ Vancouver, Canada",

        },
        1: {
            image: girly,
            title: "With Enrico going on dates, we have more time to ourselves!",
            text: " Gina ~ Rome, Italy",

        },
        2: {
            image: loveshades,
            title: "I no longer have to worry about staying clean, I kitties licking me every night.  I have Love Shades on.",
            text: " Princess ~ Georgia, USA",
        },
    };

    const [current, setCurrent] = useState(carouselData[0])
    const [active, setActive] = useState(0)
    console.log(current)
    return (
        <Container>
            <Img src={current.image} />
            <Title>{current.title}</Title>
            <Text>{current.text}</Text>
            <div>
                {Object.keys(carouselData).map(index => (
                    <span
                        onClick={event => handhleSetClick(event)}

                ))}
            </div>
        </Container>
    )
}