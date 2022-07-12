import React from 'react';
import * as S from "./Style"

// images
import siteLogo from "../../../assets/Site_assets/siteLogo.png"

export default function HeaderNav({ headerNav, about, qualification, team, events, contacts, logo }) {

    const HeaderNavReturn = () => {

        // todos antes do 'headerNav' estão renderizados em seus respectivos componentes

        if (qualification) {
            return <S.QualificationTitle id='qualification'>Formação</S.QualificationTitle>
        } else if (about) {
            return <S.AboutTitle id='about'>Sobre o Vai na Web</S.AboutTitle>
        } else if (team) {
            return <S.TeamTitle id='team'>Equipe</S.TeamTitle>
        } else if (events) {
            return <S.EventsTitle id='events'>Eventos</S.EventsTitle>
        } else if (contacts) {
            return <S.ContactsTitle id='contacts'>Contato</S.ContactsTitle>
        } else if (logo) {
            return <S.A href='#nav' ><S.Logo src={siteLogo} alt="logo do site, escrito 'Vai na Web' " /></S.A>
        } else if (headerNav) {

            return (
                <S.Div>
                    <S.A href='#nav' ><S.Logo src={siteLogo} alt="logo do site, escrito 'Vai na Web' " /></S.A>
                    <S.Nav id='nav'>
                        <S.NavUL>
                            <S.Li><S.A href='#about'>Sobre</S.A></S.Li>
                            <S.Li><S.A href='#qualification'>Formação</S.A></S.Li>
                            <S.Li><S.A href="#team">Equipe</S.A></S.Li>
                            <S.Li><S.A href="#events">Eventos</S.A></S.Li>
                            <S.Li><S.A href="#contacts">Contatos</S.A></S.Li>
                        </S.NavUL>
                    </S.Nav>
                </S.Div>
            )
        }
    }

    return HeaderNavReturn()
}