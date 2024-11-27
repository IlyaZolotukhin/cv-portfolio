import React from 'react';
import {TextStyled} from "./Text.styled";
import styled from "styled-components";
import {ThemeStyled} from "../styles/Theme.styled";

export const Logo = () => {
    return (
        <LogoStyled><TextStyled darkBlue fontSize={25} fontWeight={700}>Iliya</TextStyled>
            <TextStyled darkBlue fontSize={25}>Zolotukhin</TextStyled>
        </LogoStyled>
    );
};

const LogoStyled = styled.div`
    margin: 0;
    display: flex;
    align-items: center;
    @media ${ThemeStyled.media.tablet} {
    }
`