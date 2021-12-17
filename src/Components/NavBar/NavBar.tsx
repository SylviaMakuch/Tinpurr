import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
    display: flex;
    background-color: #F35D6F;
    justify-content: flex-end;
`

const Text= styled.div`
    display: flex;
    align-items: center;
    font-family: Poppins, Open Sans;
    font-size: 25px;
    color: white;
`

export default function NavBar() {
    return(
        <NavbarContainer>
            <Text> CONTACT PRICING DOWNLOAD</Text>
        </NavbarContainer>

    )
};