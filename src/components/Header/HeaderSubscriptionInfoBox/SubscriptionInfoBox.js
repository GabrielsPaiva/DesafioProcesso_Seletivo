import React from 'react';
import * as S from "./Style"

export default function SubscriptionInfoBox() {

    const SubscriptionBoxReturn = () => {
        return(
            <>
            <S.WhiteSubscribeBox>
                <S.DotsAndLine>
                    <S.ThreeDots>
                        <S.Dot></S.Dot>  <S.Dot></S.Dot>  <S.Dot></S.Dot>
                    </S.ThreeDots>
                    <S.Line></S.Line>
                </S.DotsAndLine>
                <S.SubscriptionInfo>
                    <S.SubscribeText>Inscreva-se no Vai na Web!</S.SubscribeText>
                    <S.SubscriptionDate>Inscrições 02 a 21 de Agosto</S.SubscriptionDate>
                </S.SubscriptionInfo>
            </S.WhiteSubscribeBox>
            <S.TextAboutFormLink>Link para o formulário: <a href='https://bit.ly/CarreiraVaiNaWeb'>bit.ly/CarreiraVaiNaWeb</a></S.TextAboutFormLink>
            </>
        )
    }

    return SubscriptionBoxReturn()
}