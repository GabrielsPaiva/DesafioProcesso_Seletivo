import styled from "styled-components";

export const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10%;
width: 100%;
height: 160vh;

@media(max-width: 1024px){
   height: 150vh;
}
`
export const TitleAndSearch = styled.div`
width: 80%;
height: fit-content;
`
export const SearchBarBox = styled.div`
background-color: rgba(15, 34, 96, 1);
display: flex;
align-items: center;
width: 98%;
height: 10.1vh;

@media(max-width: 1024px){
   height: 9vh;
}
`
export const Form = styled.form`
display: flex;
border: solid 1.8px rgb(255, 255, 255);
border-radius: 4px;
margin-left: 12.5%;
width: 23.2%;
`
export const SearchInput = styled.input`
background-color: rgba(15, 34, 96, 1);
color: rgb(255, 255, 255);
font-size: 1.5vw;
border: none;
width: 88%;
height: 3.5vh;
outline: none;

&::placeholder{
    color: rgba(188, 224, 253, 1);
    font-family: 'Montserrat';
    font-style: italic;
    font-size: 1.4vw;
    text-indent: 5%;
}
`
export const MagnifierButton = styled.img`
@media(max-width: 1024px){
   width: 15%;
}
`

export const TeamDiv = styled.div`
display: flex;
flex-wrap: wrap;
width: 82%;
`
export const TeamBox = styled.div`
color: rgb(255, 255, 255);
background-repeat: no-repeat;
background-size: cover;
background-position-x: center;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
margin: 1% 0 0 1.2%;
width: 23%;
height: 34vh;

@media(max-width: 1024px){
   height: 26vh;
}
`
export const TeamMemberName = styled.p`
font-size: 1.3vw;
font-weight: 700;
`
export const TeamMemberCargo = styled.p`
font-size: 0.9vw;
margin: 3% 0 2.5% 0;
`