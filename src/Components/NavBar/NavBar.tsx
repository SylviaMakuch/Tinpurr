import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
    display: flex;
    background-color: #F35D6F;
    justify-content: flex-end;
`;

const Text= styled.div`
    display: flex;
    padding: 3vh;
    align-items: center;
    font-family: Poppins, sans-serif;
    font-size: 28px;
    color: white;
    font-weight: 100;
`;

export default function NavBar() {
    return(
        <NavbarContainer>
            <Text> ABOUT</Text> 
            <Text> PRICING</Text>
            <Text> CATNIP</Text>
            <Text> CONTACT</Text>
        </NavbarContainer>

    )
};