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
        margin-top: 350px;// доработать
        flex-direction: column-reverse;
    }
`;

export const BoxSkills = styled(Box)`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    
    @media ${ThemeStyled.media.tablet}{
        flex-direction: column;
    }
`;