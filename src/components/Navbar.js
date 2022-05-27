import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import mainLogo from '../images/mainLogo.png';

export default function Navbar() {
  return (
    <StyledNavbar className="navbar">
        <a href="/" className="navLogo">
            <img alt="pink birthday cake jones family" src={mainLogo} />
        </a>
        <nav>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/dates" >Dates</Link></li>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/" >NAV4</Link></li>
            </ul>
        </nav>
        <div className="account">LOGIN</div>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div
`   display: flex;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
    color: white;
    filter: drop-shadow(0 0 0.2rem black);
    
    a {
        text-decoration: none;
        color: white;
    }
    
    .navLogo, ul {
        display: flex;
    }

    ul {
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
