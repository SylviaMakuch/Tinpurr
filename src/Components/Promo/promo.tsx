import React from "react";
import styled from "styled-components";
import scooter from "./../media/scooter.gif";
import tindermatch from "./../media/tindermatch.svg";

const Container = styled.div`
    display: flex;
    margin: 150px;
    justify-content: space-between;
    @media (max-width: 1600px) {
        flex-direction: column;
        align-items: center;
    }
`;

const Img = styled.img`
     width: 800px;
    @media (max-width: 800px) {
        width: 400px;
    }
`;

const Img2 = styled.img`
    width: 800px;
    @media (max-width: 600px) {
        width: 400px;
    }
`;

const Slogan = styled.div`
    color: #000000;
    font-family: 'Work Sans', sans-serif;
    font-size: 50px;
    font-weight: 800;
    margin: 100px 0 0 0;
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