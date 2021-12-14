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
    height: 50vh;
`
const Text = styled.div`
    color: white;
    font-family: 'Work Sans', sans-serif;
    font-size: 25px;
    font-weight: 300;
`
const Img = styled.img`
    width: 30%;
`   

export default function Footer() {
    return (
        <BackGround>
        <Img src={tinpurrlogo} />
            <Text> By: Sylvia Makuch</Text>
            <Socials />
        </BackGround>
    )
};