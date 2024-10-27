import styled from "styled-components";
import {ThemeStyled} from "../styles/Theme.styled";

export const BoxAbout = styled.div`
    width: 1167px;
    height: 467px;
    display: flex;
    gap: 32px;  
    
    @media ${ThemeStyled.media.tablet}{
        margin-top: 350px;// доработать
        flex-direction: column-reverse;
    }
`;

export const BoxSkills = styled.div`
    width: 1141px;
    height: 393px;
    display: flex;
    justify-content: space-between;
    
    @media ${ThemeStyled.media.tablet}{
        flex-direction: column;
    }
`;

export const BoxPortfolio = styled.div`
    width: 1141px;
    height: 374px;
    display: flex;
    justify-content: space-between;
    
    @media ${ThemeStyled.media.tablet}{
        flex-direction: column;
    }
`;

export const BoxContacts = styled.div`
    width: 1141px;
    height: 349px;
    display: flex;
    gap: 130px;
    
    @media ${ThemeStyled.media.tablet}{
        flex-direction: column;
    }
`;