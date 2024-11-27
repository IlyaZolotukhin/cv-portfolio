import React from 'react';
import {MenuItem} from "../header/Header";
import {LinkStyled} from "../../components/Link.styled";
import {TextStyled} from "../../components/Text.styled";
import styled from "styled-components";

type ModalProps = {
    closeMenu: () => void
}

export const Modal: React.FC<ModalProps> = ({closeMenu}) => {
    return (
        <StyledModal>
            <CloseButton onClick={closeMenu}>&times;</CloseButton>
            <MenuModal>
                <MenuItem><LinkStyled href="#about" onClick={closeMenu}>
                    <TextStyled white fontSize={35}>About</TextStyled></LinkStyled></MenuItem>
                <MenuItem><LinkStyled href="#skills" onClick={closeMenu}><TextStyled
                    fontSize={35} white>Skills</TextStyled></LinkStyled></MenuItem>
                <MenuItem><LinkStyled href="#portfolio" onClick={closeMenu}><TextStyled
                    fontSize={35} white>Portfolio</TextStyled></LinkStyled></MenuItem>
                <MenuItem><LinkStyled href="#contactMe" onClick={closeMenu}><TextStyled
                    fontSize={35} white>Contact Me</TextStyled></LinkStyled></MenuItem>
            </MenuModal>
        </StyledModal>
    );
};

const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.85);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1000;`
;

const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    color: white;
    font-size: 35px;
    cursor: pointer;`
;

const MenuModal = styled.ul`
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;
    text-decoration: none;
`;