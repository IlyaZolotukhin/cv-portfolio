import React from 'react';
import {TitleStyled} from "../Title.styled";
import {TextStyled} from "../Text.styled";
import {portfolioCards} from "../../data/portfolioCards";
import CardPortfolio from "../../CardPortfolio";
import styled from "styled-components";
import {ThemeStyled} from "../../styles/Theme.styled";

export const Portfolio = () => {
    return (
        <>
            <TitleStyled id="portfolio">
                <TextStyled darkBlue fontSize={25}>My</TextStyled>
                <TextStyled darkBlue fontSize={25} fontWeight={600}>Portfolio</TextStyled>
            </TitleStyled>
            <BoxPortfolio>
                {
                    portfolioCards.map((card, i) => {
                        return <CardPortfolio key={i}
                                              imgSrc={card.imgSrc}
                                              title={card.title}
                                              bgImg={card.bgImg}
                                              description={card.description}
                                              link={card.link}/>;
                    })
                }
            </BoxPortfolio>
        </>
    );
};

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