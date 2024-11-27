import React from 'react';
import {TextStyled} from "../../components/Text.styled";
import {LinkStyled} from "../../components/Link.styled";
import {ButtonStyled} from "../../components/Button.styled";
import styled from "styled-components";
import {ThemeStyled} from "../../styles/Theme.styled";
import {Logo} from "../../components/Logo";

type HeaderProps = {
    toggleMenu: () => void
}

export const Header: React.FC<HeaderProps> = ({toggleMenu}) => {
    return (
        <StyledHeader>
            <Logo/>
            <BurgerIcon onClick={toggleMenu}>
                &#9776;
            </BurgerIcon>

            <Menu>
                <MenuItem><LinkStyled href="#about"><TextStyled
                    fontSize={25}>About</TextStyled></LinkStyled></MenuItem>
                <MenuItem><LinkStyled href="#skills"><TextStyled
                    fontSize={25}>Skills</TextStyled></LinkStyled></MenuItem>
                <MenuItem><LinkStyled href="#portfolio"><TextStyled
                    fontSize={25}>Portfolio</TextStyled></LinkStyled></MenuItem>
                <ButtonStyled href="#contactMe"><TextStyled white fontSize={25} fontWeight={600}>contact
                    Me</TextStyled></ButtonStyled>
            </Menu>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    max-width: 1440px;
    width: 100%;
    height: 84px;
    padding: 0 133px;
    position: fixed;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    @media ${ThemeStyled.media.tablet} {
        padding: 30px;
    }`;

const BurgerIcon = styled.div`
    display: none;
    @media ${ThemeStyled.media.tablet} {
        font-size: 25px;
        font-weight: bold;
        display: flex;
        margin: 0;
        cursor: pointer;
    }`
;

const Menu = styled.ul`
    margin: 0;
    display: flex;
    align-items: center;
    gap: 45px;
    text-decoration: none;
    @media ${ThemeStyled.media.tablet} {
        display: none;
    }
`;

export const MenuItem = styled.li`
    display: flex;
`;