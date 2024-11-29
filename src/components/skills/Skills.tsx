import React from 'react';
import {TitleStyled} from "../Title.styled";
import {TextStyled} from "../Text.styled";
import {skillCards} from "../../data/skillCards";
import {LinkStyled} from "../Link.styled";
import CardSkill from "../../CardSkill";
import styled from "styled-components";
import {ThemeStyled} from "../../styles/Theme.styled";

export const Skills = () => {
    return (
        <>
            <TitleStyled id="skills">
                <TextStyled darkBlue fontSize={25}>Additional</TextStyled>
                <TextStyled darkBlue fontSize={25} fontWeight={600}>skills</TextStyled>
            </TitleStyled>
            <BoxSkills>
                {
                    skillCards.map((card, i) => {
                        return <LinkStyled key={i} href=""><CardSkill imgSrc={card.imgSrc}
                                                                      titleBold={card.titleBold}
                                                                      titleNorm={card.titleNorm}
                                                                      description={card.description}/></LinkStyled>;
                    })
                }
            </BoxSkills>
        </>
    );
};

export const BoxSkills = styled.div`
    max-width: 1141px;
    display: flex;
    justify-content: space-between;
    gap: 50px;
    margin-bottom: 168px;
    @media ${ThemeStyled.media.tablet}{
        gap: 30px;
        width: auto;        
        flex-direction: column;
        margin-bottom: 0;
    }
`;