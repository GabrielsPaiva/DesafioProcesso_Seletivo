import React from 'react';
import * as S from "./Style"

// components
import SubscriptionInfoBox from "../HeaderSubscriptionInfoBox/SubscriptionInfoBox"

export default function HeaderContent() {
    return (
        <S.HeaderContentSection>
            <S.ContentDiv>
                <S.Title><S.InicialTitleSlash>{'// '}</S.InicialTitleSlash>Quer construir uma carreira de sucesso como Desenvolvedor(a) Front-end?</S.Title>
                <SubscriptionInfoBox/>
            </S.ContentDiv>
        </S.HeaderContentSection>
    );
}