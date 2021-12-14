import React from "react";
import styled from "styled-components";
import samsung from "./../media/samsung.png";
import hooters from "./../media/hooters.png";
import cat from "./../media/cat.png";
import purrom from "./../media/purrom.png";
const Container = styled.div`
    display: block;
    background-color: #ff3355c5;
    display: flex;
    justify-content: space-evenly;
 `

const Img = styled.img`
    margin: 4vh;
    height: 15vh;
    width: 20vh;
    opacity: 0.7;

`

export default function Sponsor() {
    return (
       <Container>
            <Img src={samsung} />
            <Img src={cat} />
            <Img src={purrom} />
            <Img src={hooters} />
      
       </Container>
    )
}