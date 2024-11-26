import styled from "styled-components";
import {ThemeStyled} from "../styles/Theme.styled";

export const BoxAbout = styled.div`
    max-width: 1167px;
    display: flex;
    gap: 32px;     
    @media ${ThemeStyled.media.tablet}{
        margin-top: 100px;
        flex-direction: column-reverse;
    }
`;

export const BoxSkills = styled.div`
    max-width: 1141px;
    display: flex;
    justify-content: space-between;
    gap: 50px;
    margin-bottom: 168px;
    @media ${ThemeStyled.media.tablet}{
        gap: 30px;
        width: auto;        
        flex-direction: column;
        margin-bottom: 0;
    }
`;

export const BoxPortfolio = styled.div`
    max-width: 1141px;
    display: flex;
    justify-content: space-between;
    gap: 50px;
    margin-bottom: 168px;
    @media ${ThemeStyled.media.tablet}{
        gap: 30px;
        width: auto;
        height: auto;
        flex-direction: column;
        margin-bottom: 0;
    }
`;

export const BoxContacts = styled.div`
    max-width: 1141px;
    display: flex;
    gap: 60px;
    
    @media ${ThemeStyled.media.tablet}{
        gap: 30px;
        width: auto;
        height: auto;
        flex-direction: column;
    }
`;