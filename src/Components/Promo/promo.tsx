import React from "react";
import styled from "styled-components";
import scooter from "./../media/scooter.gif";

const Container = styled.div`
    display: flex;
`

const Img = styled.img`
    width: 50%;
`   
const Slogan = styled.div`
    color: #ff1d56;
    font-family: 'Work Sans', sans-serif;
    font-size: 70px;
    font-weight: 800;
    position: absolute;
    top: 20%;
    left: 40%;
`

export default function Promo() {
    return (
       <Container>
            <Img src={walkingcat2} />
            <Img src={walkingcat2} />
            <Slogan> Walk with Love &#10084;	</Slogan>
       </Container>
    )
}