import React from "react";
import styled from "styled-components";
import walkingcat from "./../media/walkingcat.gif"

const Container = styled.div`
    display: flex;
    width: 100%;
    margin-top: 10vh;
    margin-bottom: 10vh;  
    position: relative;
 `

const Img = styled.img`
    width: 100%;
    height: 120vh;
`   
const Slogan = styled.div`
    color: #ff2424;
    font-family: 'Work Sans', sans-serif;
    font-size: 70px;
    font-weight: 800;
    position: absolute;
    top: 20%;
    left: 38%;
`

export default function Banner() {
    return (
       <Container>
            <Img src={walkingcat} />
            <Slogan> Walk with Love &#10084;	</Slogan>
       </Container>
    )
}