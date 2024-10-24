import styled from "styled-components";
import {TextStyled} from "./components/Text.styled";
import {skillCardsType} from "./data/types";

const CardPortfolio = (props: skillCardsType) => {
    return (
        <CardBox>
            <Content>
                    <TextStyled fontSize={25} fontWeight={600}>{props.titleBold}</TextStyled>
                <TextStyled fontSize={16}>{props.description}</TextStyled>
                <Image src={props.imgSrc} alt={'image'}/>
            </Content>
        </CardBox>
    );
};

export default CardPortfolio;

const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 347px;
    height: 280px;
    background: #FFFFFF;
    box-shadow: 0 5px 26px 5px rgba(0, 0, 0, 0.17);
    border-radius: 13px;
    padding: 20px 24px 26px;
`

const Image = styled.img`
    width: 225px;
    height: 159px;
    object-fit: cover;
    margin-bottom: 18px;
    padding: 0 37px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`