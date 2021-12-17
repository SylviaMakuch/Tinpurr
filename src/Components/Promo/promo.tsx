import React from "react";
import styled from "styled-components";
import scooter from "./../media/scooter.gif";
import tindermatch from "./../media/tindermatch.svg";

const Container = styled.div`
    display: flex;
    margin: 15vh;
`;

const Img = styled.img`
    width: 50%;
`;

const Img2 = styled.img`
    width: 50%;
    position: absolute;
    right: 1%;
    height: 60%;
`;

const Slogan = styled.div`
    color: #000000;
    font-family: 'Work Sans', sans-serif;
    font-size: 70px;
    font-weight: 800;
    text-align: center;
`;

export default function Promo() {
    return (
        <div>
            <Slogan> We believe every Kitty deserves Love.</Slogan>
            <Container>
                <Img src={scooter} />
                <Img2 src={tindermatch} />
            </Container>

        </div>
    )
}