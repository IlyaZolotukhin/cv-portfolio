import styled from "styled-components";
import {ThemeStyled} from "../styles/Theme.styled";

type TitleStyledType = {
    justifyContent?: string
}
export const TitleStyled = styled.h1<TitleStyledType>`
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.justifyContent || "center"};
    gap: 8px;
    padding-bottom: 60px;
    @media ${ThemeStyled.media.tablet} {
        padding-top: 92px;
    }
`;

export const TitleCard = styled(TitleStyled)`
    padding-bottom: 0;
    @media ${ThemeStyled.media.tablet} {
        padding-top: 32px;
    }
`;