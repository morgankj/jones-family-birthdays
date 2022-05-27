import React from "react";
import styled from "styled-components";

import bannerImage from "../images/famDisneyCastle2022.jpg";

export default function Home() {
    return (
        <StyledHome>
            <div className="bannerImage">
                <p>JONES</p>
            </div>
        </StyledHome>
    );
}

const StyledHome = styled.div
`   display: flex;

    .bannerImage {
        display: flex;
        height: 50vh;
        width: 100%;
        background-image: url(${bannerImage});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        align-items: center;
        justify-content: center;
        
        p {

            font-size: 8rem;
            font-family: 'Koulen', cursive;
            color: white;
            filter: drop-shadow(0 0 0.5rem black);
        }       
    }
`
