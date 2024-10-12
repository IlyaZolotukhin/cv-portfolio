import styled from 'styled-components';
import {ButtonStyled} from "./components/Button.styled";
import {LogoStyled} from "./components/Logo.styled";
import {LinkStyled} from "./components/Link.styled";
import {Box, BoxContent} from "./components/Box.styled";
import {Content} from "./components/Content.styled";
import {TextStyled} from "./components/Text.styled";


function App() {
    return (
        <div>
            <Header>
                <LogoStyled>Iliya Zolotyhin</LogoStyled>
                <Menu>
                    <LinkStyled href="">About</LinkStyled>
                    <LinkStyled href="">Passions</LinkStyled>
                    <LinkStyled href="">Portfolio</LinkStyled>
                    <ButtonStyled>contact Me</ButtonStyled>
                </Menu>
            </Header>
            <Main>
                <Box>
                    <TextStyled darkBlue fontSize={'35'} fontWeight>Title1</TextStyled>
                    <Content>Content</Content>
                </Box>
                <Box>
                    <h2>Title2</h2>
                    <BoxContent>
                        <Content>Content</Content>
                        <Content>Content</Content>
                        <Content>Content</Content>
                    </BoxContent>
                </Box>
                <Box>
                    <h2>Title3</h2>
                    <BoxContent>
                        <Content>Content</Content>
                        <Content>Content</Content>
                        <Content>Content</Content>
                    </BoxContent>
                </Box>
                <Box>
                    <h2>Title4</h2>
                    <BoxContent>
                        <Content>Content</Content>
                        <Content>Content</Content>
                        <Content>Content</Content>
                    </BoxContent>
                </Box>
            </Main>
            <footer>
                <h2>Title5</h2>
                <BoxContent>
                    <Content>Content</Content>
                    <Content>Content</Content>
                    <Content>Content</Content>
                    <Content>Content</Content>
                </BoxContent>
            </footer>
        </div>
    );
}

export default App;

const Header = styled.div`
    position: fixed;
    padding: 35px;
    left: 133px;
    top: 0px;
    display: flex;
    background-color:white;
`;

const Menu = styled.nav`
/*    width: 675px;
    height: 58px;*/
    display: flex;
    align-items: center;
    gap: 45px;
`;

const Main = styled.div`
    margin-top: 160px;
    display: flex;
    flex-direction: column;
`;



const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;