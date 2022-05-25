import React from "react";
import styled from 'styled-components';

export default function Footer() {
    return (
        <StyledFooter>© 2022 MorganJones, LLC. All rights reserved.</StyledFooter>
    );
}

const StyledFooter = styled.footer
`   display: flex;
    justify-content: center;
    color: white;
    padding: .5rem 0;
    font-size: 1.2rem;
`
