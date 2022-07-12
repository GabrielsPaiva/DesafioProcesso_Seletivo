import styled from "styled-components";

export const Div = styled.div`
display: flex;
width: 100%;
height: 90vh;
`
export const SiteLogoBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
height: 100%;
`
export const SiteLogo = styled.img`
width: 50%;
`
export const AboutSection = styled.section`
display: flex;
align-items: center;
width: 50%;
height: 100%;
`
export const AboutBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 90%;
height: 80%;

@media(max-width: 1024px){
    margin-top: 14vh;
}
`
export const AboutTextsBox = styled.div`
width: 100%;
height: fit-content;
`
export const AboutText = styled.p`
font-size: 1.14vw;
font-weight: 700;
line-height: 175%;
margin-top: 5.1%;
`