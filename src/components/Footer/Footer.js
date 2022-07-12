import React, { useState } from 'react';
import * as S from "./Style"

// images
import facebook from "../../assets/Site_assets/facebook.png"
import insta from "../../assets/Site_assets/insta.png"
import linkedin from "../../assets/Site_assets/linkedin.png"
import medium from "../../assets/Site_assets/medium.png"
import youtube from "../../assets/Site_assets/youtube.png"

// components
import HeaderNav from '../Header/HeaderNav/HeaderNav';

export default function Footer() {
    const [socialMediasLogos] = useState({
        images: [facebook, insta, linkedin, medium, youtube]
    })

    const socialMediasImages = () => {
        return(
            <S.SocialMediasDiv>
                    <S.SocialMediasText>
                        Siga nossas redes sociais
                        e fique conectado com
                        todas as novidades.
                    </S.SocialMediasText>
                    {socialMediasLogos.images.map((item, id)=>(
                        <S.SocialMediasImages key={id} src={item} alt={`logo do `}/>
                    ))}
                </S.SocialMediasDiv>
        )
    }

    return (
        <S.Div>
            <S.FooterContentDiv>
                <HeaderNav contacts/>
                {socialMediasImages()}
            </S.FooterContentDiv>
        </S.Div>
    );
}