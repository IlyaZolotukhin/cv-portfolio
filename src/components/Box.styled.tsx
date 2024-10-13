import styled from "styled-components";
import {ThemeStyled} from "../styles/Theme.styled";

export const Box = styled.div`
    width: 1173px;
    height: 467px;
    display: flex;
    flex-direction: column;
`;

export const BoxAbout = styled(Box)`

    display: flex;
    flex-direction: row;
    gap: 32px;
    
    @media ${ThemeStyled.media.tablet}{
        flex-direction: column;
    }
`;

export const BoxSkills = styled(Box)`
    width: 1173px;
    height: 467px;
    display: flex;
    flex-direction: row;
    gap: 32px;
    
    @media ${ThemeStyled.media.tablet}{
        flex-direction: column;
    }
`;