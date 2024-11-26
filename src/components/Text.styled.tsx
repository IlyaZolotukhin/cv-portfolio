import styled, {css} from "styled-components";
import {ThemeStyled} from "../styles/Theme.styled";

type TextStyledType = {
    darkBlue?: boolean
    lightBlue?: boolean
    white?: boolean
    fontWeight?: number
    fontSize: number
    paddingTop?: number
}
export const TextStyled = styled.p<TextStyledType>`
    display: flex;    
    margin: 0;
    font-size: ${props => props.fontSize || 16 }px;
    font-weight: ${props => props.fontWeight || 'normal' };
    color: ${ThemeStyled.colors.textColor.black};
    padding-top: ${props => props.paddingTop || 0 }px;
    
    ${props => props.white && css<TextStyledType>`
        color: ${ThemeStyled.colors.textColor.white};
    `}

    ${props => props.darkBlue && css<TextStyledType>`
        color: ${ThemeStyled.colors.textColor.black};
    `}

    ${props => props.lightBlue && css<TextStyledType>`
        color: ${ThemeStyled.colors.textColor.light};
    `}

`