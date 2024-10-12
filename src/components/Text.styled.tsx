import styled, {css} from "styled-components";

type TextStyledType = {
    darkBlue?: boolean
    lightBlue?: boolean
    fontWeight: boolean
    fontSize: string
}
export const TextStyled = styled.p<TextStyledType>`
    font-family: Poppins, serif;
    font-size: ${props => props.fontSize || '16'}px;

    ${props => props.darkBlue && css<TextStyledType>`
        color: #002265;
    `}

    ${props => props.lightBlue && css<TextStyledType>`
        color: #14279B;
    `}

    ${props => props.fontWeight && css<TextStyledType>`
        font-weight: bold;
    `}
`