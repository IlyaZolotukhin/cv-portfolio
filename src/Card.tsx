import styled from "styled-components";
import {cardsDataType} from "./App";
import {TitleStyled} from "./components/Title.styled";
import {TextStyled} from "./components/Text.styled";

const Card = (props: cardsDataType) => {
    return (
        <CardBox>
            <Image src={props.imgSrc} alt={'image'}/>
            <Content>
                <TitleStyled>
                    <TextStyled fontSize={25} fontWeight={600}>{props.titleBold}</TextStyled>
                    <TextStyled fontSize={25}>{props.titleNorm}</TextStyled>
                </TitleStyled>
                {/*<Title>{props.titleBold}{props.titleNorm}</Title>*/}
                <Paragraph>{props.description}</Paragraph>
            </Content>
        </CardBox>
    );
};

export default Card;

const Title = styled.h1`
    font-weight: 700;
    font-size: 16px;
    color: #000000;
    margin: 0 0 15px;
`

const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    //min-height: 350px;
    background: #FFFFFF;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    padding: 10px 10px 22px;
`

const Image = styled.img`
    width: 100%;
    height: 170px;
    object-fit: cover;
    border-radius: 15px;
    margin-bottom: 20px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0 10px;
`

const Paragraph = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 1.6;
    color: #ABB3BA;
    margin-bottom: 20px;
    flex-grow: 1;
`