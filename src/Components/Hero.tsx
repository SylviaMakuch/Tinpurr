import React from "react";
import styled from "styled-components";
import phone from "./media/phone.svg";

const BackGround = styled.div`
    background-color: #F35D6F;
    display: flex;
`
const MobileImg = styled.img`
    
`
const Slogan = styled.div`
    color: white;
    font-family: Work Sans;
    
`

export default function Hero() {
    return (
        <BackGround>
            <MobileImg src={phone} />
            <Slogan> Share Tuna with a Kitty Nearby !</Slogan>
        </BackGround>

    )
};