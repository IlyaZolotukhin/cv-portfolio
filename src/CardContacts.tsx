import styled from "styled-components";
import {TextStyled} from "./components/Text.styled";
import {contactCardsType} from "./data/types";
import {LinkStyled} from "./components/Link.styled";
import {ThemeStyled} from "./styles/Theme.styled";

const CardContacts = (props: contactCardsType) => {
    return (
        <LinkStyled href={props.contact}>
            <CardBox imgHover={props.imgHover} bgImg={props.imgVector}>
                <Icon src={props.icon} alt={props.title}/>
                <TextStyled darkBlue fontSize={25} fontWeight={600}>
                    {props.title}
                </TextStyled>
            </CardBox>
        </LinkStyled>
    );
};

export default CardContacts;

type CardBoxType = {
    bgImg: string
    imgHover?: string
}

const CardBox = styled.div<CardBoxType>`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    width: 240px;
    height: 236px;
    background-image: url(${props => props.bgImg || 'none'});
    background-size: 166px;
    background-repeat: no-repeat;
    background-position-x: 30px;
    background-position-y: 19px;

    &:hover {
        background-image: url(${props => props.imgHover || 'none'});
    }

    @media ${ThemeStyled.media.tablet} {
        background-position-x: 25px;
    }
`;
const Icon = styled.img`
    width: 100px;
    position: relative;
    bottom: 50px;
`;

