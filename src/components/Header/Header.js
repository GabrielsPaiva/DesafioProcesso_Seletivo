import React from 'react';
import styled from 'styled-components';

// images
import headerBackground from "../../assets/Site_assets/headerBackground.png"
import HeaderContent from './HeaderContent/HeaderContent';

// components
import HeaderNav from './HeaderNav/HeaderNav';

const Div = styled.div`
background-image: url(${headerBackground});
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
font-family: 'Montserrat', sans-serif;
width: 100%;
height: 100vh;

@media(max-width: 1444px){
    width: 100%;
    height: 100vh;
}
`

export default function Header() {
    return (
        <Div>
            <HeaderNav headerNav/>
            <HeaderContent/>
        </Div>
    );
}