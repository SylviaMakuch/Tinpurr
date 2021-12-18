import React from "react";
import styled from "styled-components";
import walkingcat2 from "./../media/walkingcat2.gif"

const Container = styled.div`
    display: flex;
   @media (max-width: 1200px) {
    margin-bottom: 10vh;  
    position: relative;
    justify-content: center;
    @media (max-width: 1200px) {
        margin: 10vh;
`;

const Img = styled.img`
    width: 100%;
    height: 100vh;
    @media (max-width: 1200px) {
     height: 60vh;
    }
`;

const Slogan = styled.div`
    color: #ff1d56;
    font-family: 'Work Sans', sans-serif;
    font-size: 70px;
    font-weight: 800;
    position: absolute;
    top: 20%;
    left: 40%;
    @media (max-width: 1200px) {
        left: 27%;
    }
`;

export default function Banner() {
    return (
        <Container>
            <Img src={walkingcat2} />
            <Slogan> Walk with Love &#10084;	</Slogan>
        </Container>
    )
};