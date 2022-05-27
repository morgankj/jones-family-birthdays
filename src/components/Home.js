import React from "react";
import styled from "styled-components";

import familyDisney from "../images/famDisneyCastle2022.jpg";

export default function Home() {
    return (
        <StyledHome>
            <div className="flex">
                <div className="bannerImage homeBanner">
                    <h1 className="koulen">WELCOME</h1>
                </div>
            </div>
        </StyledHome>
    );
}

const StyledHome = styled.div
`   .homeBanner {
        height: 60vh;
        background-image: url(${familyDisney});
    }
`
