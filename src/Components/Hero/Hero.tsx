import React from "react";
import styled from "styled-components";
import phone from "./../media/phone.svg";
import Btn from "./Button";
import tinpurrlogo from "./../media/tinpurrlogo.svg"

const BackGround = styled.div`
    background-color: #F35D6F;
    display: flex;
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
    margin-top: 10vh;
`

const Slogan = styled.div`
    color: white;
    font-family: 'Work Sans', sans-serif;
    font-size: 70px;
    font-weight: 800;
`;

const BrandLogo = styled.img`
    width: 50%;
    margin-bottom: 15vh;
`;

export default function Hero() {
    return (
        <BackGround>
            <MobileImg src={phone} />
            <RightDiv >
                <BrandLogo src={tinpurrlogo} />
                <Slogan> Share Tuna with a Kitty Nearby!
                    <Btn></Btn>
                </Slogan>
            </RightDiv>
        </BackGround>
    )
};