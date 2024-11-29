import React from 'react';
import {TitleStyled} from "../Title.styled";
import {TextStyled} from "../Text.styled";
import {contactCards} from "../../data/contactCards";
import CardContacts from "../../CardContacts";
import styled from "styled-components";
import {ThemeStyled} from "../../styles/Theme.styled";

export const Contacts = () => {
    return (
        <>
            <TitleStyled id="contactMe">
                <TextStyled darkBlue fontSize={25}>Contact</TextStyled>
                <TextStyled darkBlue fontSize={25} fontWeight={600}>Me</TextStyled>
            </TitleStyled>
            <BoxContacts>
                {
                    contactCards.map((card, i) => {
                        return <CardContacts key={i} contact={card.contact}
                                             imgVector={card.imgVector}
                                             title={card.title}
                                             icon={card.icon}
                                             imgHover={card.imgHover}/>;
                    })
                }
            </BoxContacts>
        </>
    );
};

export const BoxContacts = styled.div`
    max-width: 1141px;
    display: flex;
    gap: 60px;
    
    @media ${ThemeStyled.media.tablet}{
        gap: 30px;
        flex-direction: column;
    }
`;