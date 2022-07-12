import styled from "styled-components";

export const Div = styled.div`
color: white;
display: flex;
width: 100%;
height: 8.9vh;
`
export const Logo = styled.img`
position: fixed;
top: 2.5vh;
margin-left: 3.3vw;
`
export const Nav = styled.nav`
display: flex;
justify-content: flex-end;
align-items: center;
width: 68%;
height: 100%;

@media(max-width: 1024px){
    margin-left: 7%;
}
`
export const NavUL = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
width: 62%;
height: 100%;
`
export const Li = styled.li`
display: flex;
justify-content: center;
align-items: center;
font-family: 'Montserrat', sans-serif;
font-size: 1.3vw;
border: yellow;
border-radius: 50px;
width: 8.6vw;
height: 4vh;
cursor: pointer;

&:hover{
    transition-duration: 300ms;
    border: solid yellow;
}
`
export const A = styled.a`
color: white;
text-decoration: none;
`

// components routes

// qualification component
export const QualificationTitle = styled.h2`
padding-top: 20%;
font-size: 2.85vw;
font-weight: 800;
`
// about component
export const AboutTitle = styled.h2`
color: rgba(15, 34, 96, 1);
font-size: 2.6vw;
font-weight: 800;
margin-top: 3.8%;
`
// team compontent
export const TeamTitle = styled.h2`
color: rgba(15, 34, 96, 1);
font-size: 3vw;
font-weight: 800;
margin-bottom: 3.3%;
`
// events component
export const EventsTitle = styled.h2`
color: rgba(15, 34, 96, 1);
font-size: 3vw;
font-weight: 800;
margin-bottom: 2.8%;
`
// contacts component
export const ContactsTitle = styled.h2`
font-size: 3.15vw;
margin-bottom: 16%;
`