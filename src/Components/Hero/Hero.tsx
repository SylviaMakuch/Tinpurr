import React from "react";
import styled from "styled-components";
import phone from "./../media/phone.svg";
import button, { Button } from "@material-ui/core";
  

const BackGround = styled.div`
    background-color: #F35D6F;
    display: flex;
    align-items: center;
    justify-content: center;
`

const MobileImg = styled.img`
    width: 50%;
`

const Slogan = styled.div`
    color: white;
    font-family: 'Work Sans', sans-serif;
    font-size: 70px;
    font-weight: 800;
`



export default function Hero() {
    return (
        <BackGround>
            <MobileImg src={phone} />
            <Slogan> Share Tuna with a Kitty Nearby!
            <Button 
            variant="contained" 
            color="primary">Download
            </Button>
            </Slogan>
        </BackGround>
    )
};