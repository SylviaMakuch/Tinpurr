import React from "react";
import styled from "styled-components";
import Socials from "./Socials";
import tinpurrlogo from "./../media/tinpurrlogo.svg";


const BackGround = styled.div`
    background-color: #F35D6F;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 800px;
`;

const Text = styled.div`
    color: white;
    font-family: 'Work Sans', sans-serif;
    font-size: 25px;
    font-weight: 300;
`;

const Img = styled.img`
    width: 180px;
` ;  

export default function Footer() {
    return (
        <BackGround id="contact">
        <Img src={tinpurrlogo} />
            <Socials />
            <Text> By: Sylvia Makuch</Text>
        </BackGround>
    )
};