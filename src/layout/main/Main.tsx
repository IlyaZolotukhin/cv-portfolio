import React from 'react';
import styled from "styled-components";
import {ThemeStyled} from "../../styles/Theme.styled";
import {About} from "../../components/about/About";
import {Skills} from "../../components/skills/Skills";
import {Portfolio} from "../../components/portfolio/Portfolio";
import {Contacts} from "../../components/contacts/Contacts";

export const Main = () => {
    return (
        <StyledMain id="about">
            <About />
            <Skills />
            <Portfolio />
            <Contacts />
        </StyledMain>
    );
};

const StyledMain = styled.section`
    margin-top: 160px;
    display: flex;
    flex-direction: column;
    @media ${ThemeStyled.media.tablet} {
        margin-top: 0;
    }
`;