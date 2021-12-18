import React from "react";
import styled from "styled-components";
import scooter from "./../media/scooter.gif";
import tindermatch from "./../media/tindermatch.svg";

const Container = styled.div`
    display: flex;
    margin: 10vh;
    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
    }
`;

const Img = styled.img`
    width: 50%;
    @media (max-width: 1200px) {
        width: 69vh;
    }
`;

const Img2 = styled.img`
    width: 50%;
    position: absolute;
    right: 1%;
    height: 60%;
    @media (max-width: 1200px) {
        width: 50vh;
        position: relative;
        margin-top: 10vh;
    }
`;

const Slogan = styled.div`
    color: #000000;
    font-family: 'Work Sans', sans-serif;
    font-size: 70px;
    font-weight: 800;
    text-align: center;
`;

const Text = styled.div`
    color: #000000;
    text-align: center;
    font-size: 30px;
    font-family: 'Work Sans', sans-serif;
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