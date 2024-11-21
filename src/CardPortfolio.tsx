import styled from "styled-components";
import {TextStyled} from "./components/Text.styled";
import {portfolioCardsType} from "./data/types";
import {ThemeStyled} from "./styles/Theme.styled";

const CardPortfolio = (props: portfolioCardsType) => {
    return (
        <CardBox bgImg={props.bgImg}>
            {props.titleImg ?
                <TitleImg src={props.titleImg} alt="title"/> :
                <TextStyled lightBlue fontSize={25} fontWeight={600}>
                    {props.title}
                </TextStyled>}
            <TextStyled lightBlue fontSize={16}>{props.description}</TextStyled>
            <Image src={props.imgSrc} alt={'image'}/>
        </CardBox>
    );
};

export default CardPortfolio;

type CardBoxType = {
    bgImg: string
}

const CardBox = styled.div<CardBoxType>`
    display: flex;
    flex-direction: column;
    width: 347px;
    height: 280px;
    background-image: url(${props => props.bgImg || 'none'});
    background-size: 195px;
    background-repeat: no-repeat;
    background-position-x: 17px;
    background-position-y: 19px;
    box-shadow: 0 5px 26px 5px rgba(0, 0, 0, 0.17);
    border-radius: 10px;
    padding: 20px 24px 26px;
    &:hover {
        box-shadow: 0 5px 26px 5px rgba(0, 0, 0, 0.5);
    }
`

const TitleImg = styled.img`
    width: 175px;
    height: 41px;
    margin-top: 5px;
`

const Image = styled.img`
    width: 285px;
    height: 164px;
    margin: 15px 12px 16px 25px;
    @media ${ThemeStyled.media.tablet}{
        margin: 15px 12px 16px 5px;
    }

`
