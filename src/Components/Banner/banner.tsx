import React from "react";
import styled from "styled-components";
import walkingcat from "./../media/walkingcat.gif"

const Container = styled.div`
    display: block;
    width: 100%;
 `

const Img = styled.img`
    width: 100%;
    
`

export default function Banner() {
    return (
       <Container>
            <Img src={walkingcat} />
       </Container>
    )
}