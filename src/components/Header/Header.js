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
font-family: 'Montserrat', sans-serif;
width: 100%;
height: 1080px;
`

export default function Header() {
    return (
        <Div>
            <HeaderNav/>
            <HeaderContent/>
        </Div>
    );
}