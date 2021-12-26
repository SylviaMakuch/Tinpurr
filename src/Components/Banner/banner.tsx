import React from "react";
import styled from "styled-components";
import walkingcat2 from "./../media/walkingcat2.gif"

const Container = styled.div`
    display: flex;
    margin-bottom: 175px;  
    position: relative;
    justify-content: center;
    @media (max-width: 800px) {
        margin-bottom: 150px;
`;

const Img = styled.img`
    width: 100%;
    height: 1200px;
    @media (max-width: 1200px) {
     height: 850px;
    }
    @media (max-width: 800px) {
        width: 200%;
    }
`;

const Slogan = styled.div`
    color: #ff1d56;
    font-family: 'Work Sans', sans-serif;
    font-size: 70px;
    font-weight: 800;
    position: absolute;
    text-align: center;
    top: 20%;
    @media (max-width: 1100px) {
        text-align: center;
        font-size: 40px;
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