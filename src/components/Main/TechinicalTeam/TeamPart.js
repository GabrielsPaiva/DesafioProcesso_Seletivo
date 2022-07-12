import React, { useEffect, useState } from 'react';
import * as S from "./Style"
import TeamInfo from "../../Team.json"

// components
import HeaderNav from '../../Header/HeaderNav/HeaderNav';

// images
import magnifier from "../../../assets/Site_assets/magnifier.png"

import photo1 from "../../../assets/Fotos_da_Equipe/photo1.jpg"
import photo2 from "../../../assets/Fotos_da_Equipe/photo2.jpg"
import photo3 from "../../../assets/Fotos_da_Equipe/photo3.jpg"
import photo4 from "../../../assets/Fotos_da_Equipe/photo4.jpg"
import photo5 from "../../../assets/Fotos_da_Equipe/photo5.jpg"
import photo6 from "../../../assets/Fotos_da_Equipe/photo6.jpg"
import photo7 from "../../../assets/Fotos_da_Equipe/photo7.jpg"
import photo8 from "../../../assets/Fotos_da_Equipe/photo8.jpg"
import photo9 from "../../../assets/Fotos_da_Equipe/photo9.jpg"
import photo10 from "../../../assets/Fotos_da_Equipe/photo10.jpg"
import photo11 from "../../../assets/Fotos_da_Equipe/photo11.jpg"
import photo12 from "../../../assets/Fotos_da_Equipe/photo12.jpg"
import photo13 from "../../../assets/Fotos_da_Equipe/photo13.jpg"
import photo14 from "../../../assets/Fotos_da_Equipe/photo14.jpg"
import photo15 from "../../../assets/Fotos_da_Equipe/photo15.jpg"



export default function TeamPart() {
    const [membersPhotos] = useState({
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15]
    })
    const [membersInfo] = useState({ info: [...TeamInfo] })

    const [filteredMembersInfo, setFilteredMembersInfo] = useState({
        info: [...TeamInfo]
    })
    const [inputValue, setInputValue] = useState("")

    const teamInfoMapping = () => {
        membersInfo.info.map((item, id) =>
            item.image = membersPhotos.photos[id]
        )

        return (
            <S.TeamDiv>
                {filteredMembersInfo.info.map((item, id) => (
                    <S.TeamBox key={id} style={{ backgroundImage: `url(${item.image})` }}>
                        <S.TeamMemberName>{item.name}</S.TeamMemberName>
                        <S.TeamMemberCargo>{item.cargo}</S.TeamMemberCargo>
                    </S.TeamBox>
                ))}
            </S.TeamDiv>
        )
    }

    const teamMembersFilter = () => {
        // eslint-disable-next-line array-callback-return
        const newMembersInfo = membersInfo.info.filter(item => {
            if (item.name.toLowerCase().includes(inputValue.toLowerCase())) {
                return true
            }
        })
        setFilteredMembersInfo({ info: newMembersInfo })
    }

    const teamPartReturn = () => {
        return (
            <S.Div>
                <S.TitleAndSearch>
                    <HeaderNav team/>
                    <S.SearchBarBox>
                        <S.Form onSubmit={(e) => { e.preventDefault(); teamMembersFilter() }}>
                            <S.SearchInput value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Pesquisar...' />
                            <S.MagnifierButton onClick={() => { teamMembersFilter() }} src={magnifier} alt="imagem de uma lupa" />
                        </S.Form>
                    </S.SearchBarBox>
                </S.TitleAndSearch>
                {teamInfoMapping()}
            </S.Div>
        )
    }

    useEffect(() => {
        if (inputValue === "") {
            setFilteredMembersInfo({ info: [...TeamInfo] })
        }
    }, [inputValue])

    return teamPartReturn()
}