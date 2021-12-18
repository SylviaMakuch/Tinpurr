import React, { useState } from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
    display: flex;
    background-color: #F35D6F;
    justify-content: flex-end;
    @media (max-width: 1200px) {
        justify-content: space-between;
    }
`;

const Text = styled.div`
    display: flex;
    padding: 3vh;
    align-items: center;
    font-family: Poppins, sans-serif;
    font-size: 28px;
    color: white;
    font-weight: 100;
    cursor: pointer;
    @media (max-width: 1200px) {
        justify-content: space-between;
        font-size: 24px;
    }

    :hover{
        color: pink;
    }
`;

export default function NavBar() {

    const setScrolledPage = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ 
                behavior: "smooth" 
            });
        }
    }

    const [scrollPage, setScrollPage] = useState(false);

    return (
        <NavbarContainer>
            <Text onClick={() => setScrolledPage("about")}> ABOUT</Text>
            <Text onClick={() => setScrolledPage("pricing")}> PRICING</Text>
            <Text onClick={() => setScrolledPage("catnip")}> CATNIP</Text>
            <Text onClick={() => setScrolledPage("contact")}> CONTACT</Text>
        </NavbarContainer>
    )
};