import styled from "styled-components";
import {ThemeStyled} from "../styles/Theme.styled";

export const ButtonStyled = styled.button`
    display: flex;
    gap: 10px;
    align-items: center;
    height: 58px;
    border: none;
    border-radius: 10px;
    background-color: ${ThemeStyled.colors.blue};
    padding: 10px 18px;

    &:hover {
        background-color: ${ThemeStyled.colors.navy};
        cursor: pointer;
    }
`