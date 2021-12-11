import React from "react";
import styled from "styled-components";
import tinpurrlogo from "./../../media/tinpurrlogo.svg";

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const BrandLogo = styled.img`
  
`;

const Text= styled.div`
    display: flex;
    align-items: center;
    font-family: Poppins, Open Sans;
    font-size: 25px;
`
export default function NavBar() {
    return(
        <NavbarContainer>
            <BrandLogo src={tinpurrlogo} />
            <Text> CONTACT PRICING DOWNLOAD</Text>
        </NavbarContainer>

    )
}