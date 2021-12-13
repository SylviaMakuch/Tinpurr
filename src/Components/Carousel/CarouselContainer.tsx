import React, {Component} from "react";
import styled from "styled-components";
import CarouselCard from "./CarouselCard";
import { carouselData } from "./configCarousel";
import Slider from "react-slick";
import tobi from "./../media/tobi.jpg";
import girly from "./../media/girly.jpeg"
import loveshades from "./../media/loveshades.jpg";


const MainContainer = styled.div`
  padding: 40px;
  background: #e07341d4;
`;
const Container = styled.div`
  display: block;
`;

const Img = styled.img`
  border-radius: 50%;
  height: 8vh;
  width: 8vh;
`;

const Title = styled.div`
  color: #000000;
  text-align: center;
  font-size: 30px;
  font-family: "Work Sans", sans-serif;
  font-weight: 800;
`;

const Text = styled.div`
  color: #000000;
  font-size: 30px;
  font-family: "Work Sans", sans-serif;
  font-weight: 200;
`;

export default class CarouselContainer extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        }
        return (
            <MainContainer>
                <Slider {...settings}>
                    <Container>
                        <Title>{"I no longer have to howl at the moon to call for my lady !!"}</Title>
                        <Img src={tobi} />
                        <Text>{"Tobi ~ Vancouver, Canada"}</Text>
                    </Container>
                    <Container>
                        <Title>{"With Enrico going on dates, we have more time to ourselves!"}</Title>
                        <Img src={girly} />
                        <Text>{"Gina ~ Rome, Italy"}</Text>
                    </Container>
                    <Container>
                        <Title>{"I no longer have to worry about staying clean, I kitties licking me every night.  I have Love Shades on."}</Title>
                        <Img src={loveshades} />
                        <Text>{"Princess ~ Georgia, USA"}</Text>
                    </Container>
                </Slider>
            </MainContainer>
        );
    }}
