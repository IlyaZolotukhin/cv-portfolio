import styled, {css} from "styled-components";
import {ThemeStyled} from "../styles/Theme.styled";

type TextStyledType = {
    darkBlue?: boolean
    lightBlue?: boolean
    white?: boolean
    fontWeight?: number
    fontSize: number
}
export const TextStyled = styled.p<TextStyledType>`
    font-size: ${props => props.fontSize || 16 }px;
    font-weight: ${props => props.fontWeight || 'normal' };
    color: ${ThemeStyled.colors.textColor.black};
    
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