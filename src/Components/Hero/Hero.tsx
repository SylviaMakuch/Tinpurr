import React from "react";
import styled from "styled-components";
import phone from "./../media/phone.svg";
import Btn from "./Button";
import tinpurrlogo from "./../media/tinpurrlogo.svg"

const BackGround = styled.div`
    background-color: #F35D6F;
    display: flex;
    height: 60vh;
`;  

const MobileImg = styled.img`
    width: 50%;
    align-items: center;
    justify-content: center;
`;

const RightDiv =styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 4vh;
    @media (max-width: 1200px) {
        font-size: 2.5vh;
        justify-content: center;
    }
`;

const Slogan = styled.div`
    color: white;
    font-family: 'Work Sans', sans-serif;
    font-size: 7vh;
    font-weight: 550;
    margin-bottom: 3vh;
    @media only screen and (max-width: 1600px) {
        font-size: 4vh;
    }
    @media only screen and(max-width: 800px) {
        font-size: 2.5vh;
    }
`;

const BrandLogo = styled.img`
    width: 75%;
    margin-bottom: 5vh;
`;

export default function Hero() {
    return (
        <BackGround>
            <MobileImg src={phone} />
            <RightDiv >
                <BrandLogo src={tinpurrlogo} />
                <Slogan> Share Tuna with a Kitty Nearby!
                </Slogan>
                <Btn></Btn>
            </RightDiv>
        </BackGround>
    )
};