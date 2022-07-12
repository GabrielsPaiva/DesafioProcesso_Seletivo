import React from 'react';
import * as S from "./Style"

// images
import topicsImage from "../../../assets/Site_assets/qualificationTopicImage.png"
import qualificationSectionImage from "../../../assets/Site_assets/qualificationComponentImage.png"
import HeaderNav from '../../Header/HeaderNav/HeaderNav';

export default function Qualification() {

    

    const topicPart = (text, title) => {
        return (
            <S.TopicsBox>
                <S.TopicImage src={topicsImage} alt="icone de um pc por cima de uma mesa" />
                <S.TopicsTextAndTitle>
                    <S.TopicsTitle>{title}</S.TopicsTitle>
                    <S.TopicsText>{text}</S.TopicsText>
                </S.TopicsTextAndTitle>
            </S.TopicsBox>
        )
    }

    const qualificationPartReturn = () => {
        return (
            <S.Div>
                <S.QualificationSection>
                    <S.QualificationBox>
                        <HeaderNav qualification/>
                        {topicPart(
                            'Quem trabalha com Front End é responsável por desenvolver por meio do código uma interface gráfica e, normalmente, com as tecnologias base da Web: HTML, CSS e JavaScript.',
                            "front-end"
                        )}
                        {topicPart(
                            'O Back-End trabalha em boa parte dos casos fazendo a ponte entre os dados que vem do navegador rumo ao banco de dados e vice-versa, sempre aplicando as devidas regras de negócio, validações e garantias num ambiente restrito ao usuário final (ou seja, onde ele não consegue acessar ou manipular algo).',
                            "back-end"
                        )}
                    </S.QualificationBox>
                </S.QualificationSection>
                <S.QualficationImageBox>
                    <S.QualificationSectionImage src={qualificationSectionImage} alt="renderização 3d de telas de uma código"></S.QualificationSectionImage>
                </S.QualficationImageBox>
            </S.Div>
        )
    }

    return qualificationPartReturn()
}