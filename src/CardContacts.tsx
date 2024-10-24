import styled from "styled-components";
import {TextStyled} from "./components/Text.styled";
import {contactCardsType, portfolioCardsType} from "./data/types";

const CardContacts = (props: contactCardsType) => {
    return (
        <CardBox bgImg={props.imgVector}>
            <TextStyled darkBlue fontSize={25} fontWeight={600}>
                {props.title}
            </TextStyled>
        </CardBox>
    );
};

export default CardContacts;

type CardBoxType = {
    bgImg: string
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
`

