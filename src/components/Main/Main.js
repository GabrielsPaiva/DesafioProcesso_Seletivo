import React from 'react';
import styled from 'styled-components';

// components
import AboutVnw from './AboutVnWPart/AboutVnw';
import Qualification from './QualificationPart/Qualification';
import TeamPart from './TechinicalTeam/TeamPart';
import Events from './EventsPart/Events';

const Div = styled.div`
font-family: 'Montserrat', sans-serif;
width: 100%;
height: fit-content;
`

export default function Main() {
    return (
        <Div>
            <AboutVnw/>
            <Qualification/>
            <TeamPart/>
            <Events/>
        </Div>
    );
}