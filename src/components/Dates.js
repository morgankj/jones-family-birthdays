import React from "react";
import styled from "styled-components";

import emIanWedding from "../images/EmilyIanMarriage.jpg";

export default function Dates() {
    return (
        <StyledDates>
            <div className="flex">
                <div className="bannerImage homeBanner">
                    <h1 className="koulen">DATES</h1>
                </div>
            </div>
        </StyledDates>
    );
}

const StyledDates = styled.div
`   .homeBanner {
        height: 60vh;
        background-image: url(${emIanWedding});
    }
`
