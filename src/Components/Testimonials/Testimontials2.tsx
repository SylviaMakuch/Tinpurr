import React, { useState } from "react";
import styled from "styled-components";
import tobi from "./../media/tobi.jpg";
import girly from "./../media/girly.jpeg"
import loveshades from "./../media/loveshades.jpg";
import { Carousel } from 'react-responsive-carousel';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 40px auto;
   max-width: 700px;
   height: 900px
   justify-content: center;
   line-height: 2;
   @media (max-width: 600px) {
        margin: 120px 60px;
    }
`;

const Img = styled.img`
    border-radius: 50%;
    padding: 10px;
    border: 4px solid linear-gradient(45deg,#FE6B8B 30%, #FF8E53 90%);
    height: 350px;
    width: 350px;
    background:linear-gradient(45deg,#FE6B8B 30%, #FF8E53 90%); 
    @media(max-width: 800px) {
        height: 300px;
        width: 300px;
    }
`;

const Title = styled.div`
    color: #000000;
    text-align: center;
    font-size: 40px;
    font-family: 'Fuzzy Bubbles';
    font-weight: 500;
    margin: 60px;
    font-style: italic;
    @media(max-width: 1100px) {
        font-size: 35px;
        margin: 30px;
    }
    @media(max-width: 800px) {
        font-size: 30px;
        margin: 20px;
    }
`;

const Text = styled.div`
    color: #000000;
    font-size: 30px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    margin: 30px;
    @media(max-width: 1100px) {
        font-size: 25px;
        margin: 15px;
    }
    @media(max-width: 800px) {
        font-size: 20px;
        margin: 15px;
    }
`;

const Span = styled.span`
    height: 30px;
    width: 30px;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content:center;
    cursor: pointer;
    float: right;
    border-radius: 50%;
    &:before{
        content: "";
        border-radius: 50%;
        height: 6px;
        width: 6px;
        background-color: #d4d4d4;
        transition: background-color 0.3s ease;
  }
     &:hover{
        background-color: #d6d6e05f;
        border-radius: 50%;
  }

`;
export default function Testimonials() {

    return (

        <Carousel
            // showArrows={true}
            // infiniteLoop={true}
            // showThumbs={false}
            // showStatus={false}
            // autoPlay={true}
            // interval={6100}
        >
            {/* <div>
                <Img src={tobi} />
                <div className="myCarousel">
                    <h3>Tobi</h3>
                    <Title>"📍 - Vancouver, Canada" </Title>
                    <Text>
                        "I no longer have to howl at the moon to call for my lady !!"
                    </Text>
                </div>
            </div>

            <div>
                <Img src={girly} />
                <div className="myCarousel">
                    <h3>Gina</h3>
                    <Title>📍 - Rome, Italy</Title>
                    <Text>
                        "With Enrico going on dates, we have more time to ourselves!"
                    </Text>
                </div>
            </div> */}

            {/* <div> */}
                <Img src={loveshades} />
                <div className="myCarousel">
                    <h3>Princess</h3>
                    <Title>📍 - Georgia, USA</Title>
                    <Text>
                        "I no longer have to worry about staying clean, I have kitties licking me every night.  I have Love Shades on."
                    </Text>
                </div>
            </div>
        </Carousel>
    )
}