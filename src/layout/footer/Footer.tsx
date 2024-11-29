import React from 'react';
import footerImg from "../../assets/wave 1.png";
import styled from "styled-components";
import {ThemeStyled} from "../../styles/Theme.styled";

export const Footer = () => {
    return (
        <StyledFooter>
            <FooterImg src={footerImg} alt="Footer"/>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    height: 330px;
    max-width: 100vw;
    @media ${ThemeStyled.media.tablet} {
        width: 100%;
        height: 100px;
        margin: 0;
    }
`;

const FooterImg = styled.img`
    width: 100%;
    height: 330px;
    @media ${ThemeStyled.media.tablet} {
        width: 100%;
        height: 200px;
        margin: 0;
    }
`;