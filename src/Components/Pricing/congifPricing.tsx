import React from "react";
import styled from "styled-components";
import tier1 from "./../media/tier1.svg";
import tier2 from "./../media/tier2.svg";
import tier3 from "./../media/tier3.svg";


export const pricingData = [
    {
        image: tier1,
        title: "Free",
        text1: "5 Matches Per Day",
        text2: "10 Messages Per Day",
        text3: "Unlimited App Usage",
    },
    {
        image: tier2,
        title:"$19.99/month",
        text:"Unlimited Matches",
        text2: "Unlimited Messages",
        text3: "Unlimited App Usage",
    },
    {   image: tier3,
        title:"$250/annually",
        text:"Priority Listing",
        text2: "Unlimited Matches",
        text3: "Unlimited Messages",
        text4: "Unlimited App Usage",
    },
];