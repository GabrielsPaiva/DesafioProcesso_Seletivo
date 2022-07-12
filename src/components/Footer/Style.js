import styled from "styled-components";

import footerBackground from "../../assets/Site_assets/footerBackground.png"

export const Div = styled.div`
background-image: url(${footerBackground});
color: rgb(255, 255, 255);
display: flex;
font-family: 'Montserrat', sans-serif;
width: 100%;
height: 49.4vh;
`
export const FooterContentDiv = styled.div`
margin: 3.3% 0 0 11.3%;
width: 50%;
height: fit-content;

@media(max-width: 1024px){
   width: 54%;
}
`
export const SocialMediasDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`
export const SocialMediasText = styled.p`
font-size: 1.25vw;
width: 32%;

@media(max-width: 1024px){
   width: 30%;
}
`
export const SocialMediasImages = styled.img`
height: 80%;

@media(max-width: 1024px){
   width: 10%;
}
`