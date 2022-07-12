import styled from "styled-components";

export const Div = styled.div`
display: flex;
margin: 8% 0 15% 0;
width: 100%;
height: 61vh;

@media(max-width: 1024px){
   height: 52vh;
}
`
export const QualificationSection = styled.section`
color: rgba(15, 34, 96, 1);
display: flex;
justify-content: center;
align-items: flex-end;
width: 50%;
height: 100%;
`
export const QualificationBox = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
width: 50%;
height: 100%;
`
export const TopicsBox = styled.div`
display: flex;
justify-content: space-between;
margin: 3.5% 0 0 4%;
width: 96%;
height: 35%;

@media(max-width: 1024px){
   height: 30%;
}
`
export const TopicImage = styled.img`
width: 25%;
height: 50%;
`
export const TopicsTextAndTitle = styled.div`
width: 70%;
`
export const TopicsTitle = styled.h2`
text-transform: uppercase;
font-size: 1.47vw;
margin-bottom: 4.5%;
`
export const TopicsText = styled.p`
color: rgb(0, 0, 0);
font-size: 0.8vw;
font-weight: 600;
`
export const QualficationImageBox = styled.div`
display: flex;
justify-content: flex-end;
width: 50%;
height: 100%;
`
export const QualificationSectionImage = styled.img`
width: 100%;
height: 92%;
`