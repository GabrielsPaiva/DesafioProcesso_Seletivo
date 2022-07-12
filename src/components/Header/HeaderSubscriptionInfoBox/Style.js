import styled from "styled-components";

export const WhiteSubscribeBox = styled.div`
background-color: rgb(255, 255, 255);
color: rgba(0, 20, 93, 1);
display: flex;
flex-direction: column;
align-items: center;
border-radius: 20px;
margin-top: 4.6%;
width: 57%;
height: 24vh;
`
export const DotsAndLine = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
margin: 10px 0 0 2%;
width: 98%;
height: 3.6vh;
`
export const ThreeDots = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 6%;
height: 70%;
`
export const Dot = styled.div`
background-color: rgba(0, 20, 93, 1);
border-radius: 50px;
width: 24%;
height: 46%;
`
export const Line = styled.div`
width: 91%;
border: solid 3px;
`
export const SubscriptionInfo = styled.div`
margin-top: 2.6%;
width: 96%;
height: fit-content;
`
export const SubscribeText = styled.h2`
font-size: 3.02vw;
font-weight: 700;
`
export const SubscriptionDate = styled.p`
font-size: 1.87vw;
margin-top: 22px;
`
export const TextAboutFormLink = styled.p`
color: rgba(254, 213, 178, 1);
margin-top: 0.7%;
font-size: 1.56vw;
font-weight: 600;

a{
    color: rgba(254, 213, 178, 1);
    font-weight: 100;
    text-decoration: none;
}
`