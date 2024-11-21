import styled from "styled-components";
import {ThemeStyled} from "../styles/Theme.styled";

export const BoxAbout = styled.div`
    width: 1167px;
    height: 467px;
    display: flex;
    gap: 32px; 
    margin-bottom: 118px;
    
    @media ${ThemeStyled.media.tablet}{
        margin-top: 400px;
        margin-bottom: 150px;
        flex-direction: column-reverse;
    }
`;

export const BoxSkills = styled.div`
    width: 1141px;
    height: 393px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    
    @media ${ThemeStyled.media.tablet}{
        gap: 30px;
        width: auto;
        height: auto;
        flex-direction: column;
    }
`;

export const BoxPortfolio = styled.div`
    
    width: 1141px;
    height: 374px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    
    @media ${ThemeStyled.media.tablet}{
        gap: 30px;
        width: auto;
        height: auto;
        flex-direction: column;
    }
`;

export const BoxContacts = styled.div`
    width: 1141px;
    height: 349px;
    display: flex;
    //gap: 130px;
    
    @media ${ThemeStyled.media.tablet}{
        gap: 30px;
        width: auto;
        height: auto;
        flex-direction: column;
    }
`;