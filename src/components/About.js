import React from "react";
import styled from "styled-components";
import familyOcean from "../images/famHawaii2014.jpg";

export default function About() {
    return (
        <StyledAbout>
            <div className="flex">
                <div className="bannerImage aboutBanner">
                    <h1 className="koulen">ABOUT</h1>
                </div>
            </div>
            <div className="middle">
                <h2>About the JonesFamily© Application</h2>
                <p>We are a proud and unusual family in many ways! We have so much to be grateful for and so many cherished memories to look back on. A clan of people who genuinely enjoy one another and lift each other up, ours is a family with countless anniversaries, birthdays, and cherished dates to keep track of.</p>
                <p>Record these dates and set up an email reminder system by adding them to the calendar through your account. DO IT YOU MORON.</p>
            </div>
        </StyledAbout>
    );
}

const StyledAbout = styled.div
`   .aboutBanner {
        height: 50vh;
        background-image: url(${familyOcean});
    }

    h2 {
        font-weight: bold;
        font-size: 3rem;
        margin: 1.5rem;
    }
`
