import React, { useState } from "react";
import styled from "styled-components";
import tobi from "./../media/tobi.jpg";
import girly from "./../media/girly.jpeg"
import loveshades from "./../media/loveshades.jpg";


const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 40px auto;
   max-width: 700px;
`

const Img = styled.img`
    border-radius: 50%;
    padding: 10px;
    border: 4px solid linear-gradient(45deg,#FE6B8B 30%, #FF8E53 90%);
    height: 30vh;
    width: 30vh;
    background:linear-gradient(45deg,#FE6B8B 30%, #FF8E53 90%); 
`

const Title = styled.div`
    color: #000000;
    text-align: center;
    font-size: 30px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 600;
    margin: 5vh;
`

const Text = styled.div`
    color: #000000;
    font-size: 30px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 200;
`

const Span = styled.span`
    height: 20px;
    width: 20px;
    margin: 0 px;
    display: flex;
    align-items: center;
    justify-content:center;
    cursor: pointer;
    float: right;
    &:before{
        content: "";
        height: 6px;
        width: 6px;
        background-color: #d4d4d4;
        transition: background-color 0.3s ease;
  }
     &:hover{
        background-color: #d6d6e05f;
  }

`

interface CarouselCard {
    image: string;
    title: string;
    text: string;
}

interface CarouselCardProperties extends Record<number, CarouselCard> {

}

export default function Testimonials() {
    const carouselData: CarouselCardProperties = {
        0: {
            image: tobi,
            title: "I no longer have to howl at the moon to call for my lady !!",
            text: "Tobi ~ Vancouver, Canada"
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

    const handleSetClick = (event:any) => {
        setActive(event.target.getAttribute("data-Testimonials"));
        setCurrent(carouselData[event.target.getAttribute("data-Testimonials")]);
    };
    return (
        <Container>
            <Img src={current.image} />
            <Title>{current.title}</Title>
            <Text>{current.text}</Text>
            <div>
                {Object.keys(carouselData).map(index => (
                    <Span
                        onClick={(event:any) => handleSetClick(event)}
                        data-Testimonials={index}
                        key={index} 
                    />
                ))}
            </div>
        </Container>
    )
}