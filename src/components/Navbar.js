import React from "react";
import styled from 'styled-components';
import logo from '../images/cakelogo.png';
import mainLogo from '../images/mainLogo.png';

export default function Navbar() {
  return (
    <StyledNavbar>
        <a href="/" className="navLogo">
            <img alt="pink birthday cake jones family" src={mainLogo} />
        </a>
        <nav>
            <ol>
                <li><a href="/" >Home</a></li>
                <li><a href="/" >Birthdays</a></li>
                <li><a href="/" >About</a></li>
                <li><a href="/" >NAV4</a></li>
            </ol>
        </nav>
        <div className="account">LOGIN</div>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div
`   background: #355070;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
    color: white;
    
    a {
        text-decoration: none;
        color: white;
    }
    
    .navLogo, ol {
        display: flex;
    }

    ol {
        justify-content: space-between;
    }

    li {
        margin: 0 2rem;
    }

    img {
        height: 3.5rem;
    }

    li a:hover {
        color: #EAAC8B;
    }

    img:hover, li:hover {
        position: relative;
        top: -1.5px;
        filter: drop-shadow(0 0 0.5rem black);
    }

    p {
        margin-left: 1rem;
    }
    
    `
