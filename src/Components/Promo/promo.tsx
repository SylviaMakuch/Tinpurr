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
    margin: 40px;
    @media (max-width: 600px) {
        width: 400px;
    }
    @media (max-width: 1600px) {
       margin-top: 100px;
    }
`;

const Slogan = styled.div`
    color: #000000;
    font-family: 'Work Sans', sans-serif;
    font-size: 80px;
    font-weight: 800;
    margin: 100px 0 0 0;
    padding: 30px;
    text-align: center; 
       @media (max-width: 600px) {
        font-size: 40px;
    }
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