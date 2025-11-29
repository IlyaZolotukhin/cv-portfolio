import React from 'react';
import {TextStyled} from "../Text.styled";
import styled from "styled-components";
import {ThemeStyled} from "../../styles/Theme.styled";
import {Icon} from "../icon/Icon";
import {LinkStyled} from "../Link.styled";

export const Logo = () => {
    return (
        <LogoStyled href={"https://github.com/IlyaZolotukhin"}>
            <Icon iconId={'gitHub'} width={'50'} height={'50'} stroke='darkBlue'/>
            <TextStyled darkBlue fontSize={25} fontWeight={700}>Ilya</TextStyled>
            <TextStyled darkBlue fontSize={25}>Zolotukhin</TextStyled>
        </LogoStyled>
    );
};

const LogoStyled = styled(LinkStyled)`
    margin: 0;
    display: flex;
    align-items: center;
    @media ${ThemeStyled.media.tablet} {
    }
`