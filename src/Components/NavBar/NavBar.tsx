import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
    display: flex;
    background-color: #F35D6F;
    justify-content: flex-end;
`;

const Text = styled.div`
    display: flex;
    padding: 3vh;
    align-items: center;
    font-family: Poppins, sans-serif;
    font-size: 28px;
    color: white;
    font-weight: 100;
`;

export default function NavBar() {
    return (
        <NavbarContainer>
            <Link to="/about"><Text> ABOUT</Text> </Link>
            <Link to="/pricing"><Text> PRICING</Text></Link>
            <Link to="/catNip"><Text> CATNIP</Text> </Link>
            <Link to="/footer"><Text> CONTACT</Text></Link>
        </NavbarContainer>

    )
};