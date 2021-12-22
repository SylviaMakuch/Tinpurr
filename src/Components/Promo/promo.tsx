import React from "react";
import styled from "styled-components";
import scooter from "./../media/scooter.gif";
import tindermatch from "./../media/tindermatch.svg";

const Container = styled.div`
    display: flex;
    margin: 150px;
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
    width: 60%;
    position: absolute;
    left: 60%;
    @media (max-width: 1200px) {
        width: 130%;
        left: 25%;
        position: relative;
        margin-top: 100px;
    }
`;

const Slogan = styled.div`
    color: #000000;
    font-family: 'Work Sans', sans-serif;
    font-size: 70px;
    font-weight: 800;
    margin: 5vh;
    @media (max-width: 1200px) {
        text-align: center;
    }
    @media (max-width: 600px) {
        font-size: 40px;
    }
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