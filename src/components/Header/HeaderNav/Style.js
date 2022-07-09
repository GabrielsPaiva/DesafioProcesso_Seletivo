import styled from "styled-components";

export const Div = styled.div`
color: white;
display: flex;
align-items: center;
width: 100%;
height: 6em;
`
export const Logo = styled.img`
position: sticky;
top: 0;
margin-left: 4em;
`
export const Nav = styled.nav`
display: flex;
justify-content: flex-end;
align-items: center;
width: 68%;
height: 100%;
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
font-size: 25px;
border: yellow;
border-radius: 50px;
padding: 10px;
width: 180px;
height: 45%;
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