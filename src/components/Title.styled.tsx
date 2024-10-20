import styled from "styled-components";

type TitleStyledType = {
    justifyContent?: string
}
export const TitleStyled = styled.h1<TitleStyledType>`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.justifyContent || "center" };
    gap: 8px;
    padding-bottom: 32px;
`;