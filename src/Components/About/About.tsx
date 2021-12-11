import React from "react";
import styled from "styled-components";
import { aboutData } from "./configAbout";
import AboutCard from "./AboutCard";

const AboutCardsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 100px;
 `

 export default function About() {
     return (
         <AboutCardsContainer>
             {
                 aboutData.map(({ image, title, text}, index)=>{
                     return <AboutCard image={image} title={title} text={text} />
                 })
             }
         </AboutCardsContainer>
     );
 };