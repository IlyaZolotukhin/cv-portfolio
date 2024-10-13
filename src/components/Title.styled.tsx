import styled from "styled-components";

type TitleStyledType = {
    justifyContent?: string
}
export const TitleStyled = styled.div<TitleStyledType>`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.justifyContent || "center" };
    gap: 6px;
    padding-bottom: 32px;
`;