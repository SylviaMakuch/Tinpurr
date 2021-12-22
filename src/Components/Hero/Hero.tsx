import React from "react";
import styled from "styled-components";
import phone from "./../media/phone.svg";
import Btn from "./Button";
import tinpurrlogo from "./../media/tinpurrlogo.svg"

const BackGround = styled.div`
    background-color: #F35D6F;
    height: 950px;
    width: 100%;
`;
const MainDiv = styled.div`
    display:flex;
    @media(max-width: 1100px) {
        flex-direction: column-reverse;
        align-items: center;
    }
    @media(max-width: 400px) {
        margin: 50px;
    }
`

const MobileImg = styled.img`
    width: 1100px;
    @media(max-width: 1100px) {
        width: 550px;
    }
    @media(max-width: 600px) {
        width: 480px;
    }
`;

const RightDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 30px;
    @media (max-width: 1100px) {
        margin: 10px;
        align-items: center;
    }
`;

const Slogan = styled.div`
    color: white;
    font-family: 'Work Sans', sans-serif;
    font-size: 100px;
    font-weight: 550;
    margin-bottom: 20px;
    @media (max-width: 1600px) {
        font-size: 60px;
    }
    @media(max-width: 1000px) {
        font-size: 45px;
        text-align: center;
    }
`;

const BrandLogo = styled.img`
    width: 300px;
    margin: 30px;
`;

export default function Hero() {
    return (
        <BackGround>
            <MainDiv>
            <MobileImg src={phone} />
            <RightDiv >
                <BrandLogo src={tinpurrlogo} />
                <Slogan> Share Tuna with a Kitty Nearby!
                </Slogan>
                <Btn></Btn>
            </RightDiv>
            </MainDiv>
        </BackGround>
    )
};