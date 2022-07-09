import React from 'react';
import * as S from "./Style"

// images
import siteLogo from "../../../assets/Site_assets/siteLogo.png"

export default function HeaderNav() {

    const HeaderNavReturn = () => {
        return(
            <S.Div>
            <S.A href='#'><S.Logo src={siteLogo} alt="logo do site, escrito 'Vai na Web' " /></S.A>
            <S.Nav>
                <S.NavUL>
                    <S.Li><S.A href="#">Sobre</S.A></S.Li>
                    <S.Li><S.A href="#">Formação</S.A></S.Li>
                    <S.Li><S.A href="#">Equipe</S.A></S.Li>
                    <S.Li><S.A href="#">Eventos</S.A></S.Li>
                    <S.Li><S.A href="#">Contatos</S.A></S.Li>
                </S.NavUL>
            </S.Nav>
        </S.Div>
        )
    }

    return HeaderNavReturn()
}