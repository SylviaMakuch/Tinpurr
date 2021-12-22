import React from "react";
import styled from "styled-components";
import { aboutData } from "./configAbout";
import AboutCard from "./AboutCard";

const AboutCardsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 250px;
    @media (max-width: 1600px) {
        margin: 150px;
    }
    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
    }
    @media (max-width: 400px) {
        flex-direction: column;
        margin: 90px;
    }

 `;

export default function About() {
    return (
        <AboutCardsContainer id="about">
            {
                aboutData.map(({ image, title, text }, index) => {
                    return <AboutCard image={image} title={title} text={text} key={index} />
                })
            }
        </AboutCardsContainer>
    );
};