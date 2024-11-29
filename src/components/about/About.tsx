import React from 'react';
import {Content, ContentImg} from "../Content.styled";
import {TextStyled} from "../Text.styled";
import heroImg from "../../assets/hero.png";
import styled from "styled-components";
import {ThemeStyled} from "../../styles/Theme.styled";

export const About = () => {
    return (
        <BoxAbout>
            <Content>
                <TextStyled darkBlue fontSize={35}>Hi !</TextStyled>
                <TextStyled darkBlue fontSize={35} fontWeight={600}>I'm Ilya Zolotukhin.</TextStyled>
                <TextStyled darkBlue fontSize={35} fontWeight={600}>a Front-End Developer</TextStyled>
                <TextStyled paddingTop={30} fontSize={23}>I have experience in creating SPA using React, Redux,
                    TypeScript.
                    Knowledge in user interface, testing, and debugging processes. I'm improving my skills
                    in this direction
                    and plan to expand them with new technologies, such as Angular.
                    I usually spend my free time reading IT-literature (M.Fauler),
                    Codewars and improving my English. Open to your suggestions.</TextStyled>
            </Content>
            <ContentImg src={heroImg} alt="heroImg"/>
        </BoxAbout>
    );
};

export const BoxAbout = styled.div`
    max-width: 1167px;
    display: flex;
    gap: 32px;
    @media ${ThemeStyled.media.tablet} {
        margin-top: 100px;
        flex-direction: column-reverse;
    }
`;