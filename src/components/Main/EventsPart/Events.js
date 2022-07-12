import React from 'react';
import * as S from "./Style"

// images
import techGirlsImage from "../../../assets/Site_assets/techGirlsPartImage.png"

// components
import HeaderNav from '../../Header/HeaderNav/HeaderNav';

export default function Events() {
    return (
        <S.Div>
            <S.TitleDiv>
                <HeaderNav events/>
            </S.TitleDiv>
            <S.TechGirlsDiv>
                <S.TechGirlsImage src={techGirlsImage} alt="ilustração de um notebook com uma chamada do meet com apenas participantes femininas" />
                <S.TechGirlsTitleAndText>
                    <S.TechGirlsTitle>Tech Girls</S.TechGirlsTitle>
                    <S.TechGirlsText>
                        Com o objetivo de promover
                        network entre mulheres de
                        tecnologia, conectar talentos
                        femininos com oportunidades no
                        mercado da tecnologia, oferecer
                        experiências de troca através de
                        eventos com mulheres que já têm
                        experiência no mercado da
                        tecnologia, acelerar os talentos com
                        ajuda para custeio de luz e internet
                        para facilitar o processo de estudo,
                        promover mentoria para as
                        participantes do grupo.
                    </S.TechGirlsText>
                </S.TechGirlsTitleAndText>
            </S.TechGirlsDiv>
        </S.Div>
    );
}