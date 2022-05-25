import React from "react";
import styled from 'styled-components';

import bannerImage from "../images/famDisneyCastle2022.jpg";

export default function Home() {
    return (
        <StyledHome>
            <div className="bannerImage"></div>
        </StyledHome>
    );
}

const StyledHome = styled.div
`   display: flex;

    .bannerImage {
        height: 50vh;
        width: 100%;
        background-image: url(${bannerImage});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
`
