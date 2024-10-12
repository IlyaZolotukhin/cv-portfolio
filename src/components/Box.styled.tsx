import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BoxContent = styled(Box)`
    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 800px){
        flex-direction: column;
    }
`;