import styled from 'styled-components';
import {ButtonStyled} from "./components/Button.styled";
import {LogoStyled} from "./components/Logo.styled";
import {LinkStyled} from "./components/Link.styled";
import {Box, BoxAbout, BoxSkills} from "./components/Box.styled";
import {Content, ContentImg} from "./components/Content.styled";
import {TextStyled} from "./components/Text.styled";
import heroImg from "./assets/heroImg.png";
import {TitleStyled} from "./components/Title.styled";


function App() {
    return (
        <div>
            <Header>
                <LogoStyled><TextStyled darkBlue fontSize={25} fontWeight>Iliya</TextStyled>
                    <TextStyled darkBlue fontSize={25}>Zolotyhin</TextStyled></LogoStyled>
                <Menu>
                    <LinkStyled href=""><TextStyled fontSize={25}>About</TextStyled></LinkStyled>
                    <LinkStyled href=""><TextStyled fontSize={25}>Skills</TextStyled></LinkStyled>
                    <LinkStyled href=""><TextStyled fontSize={25}>Portfolio</TextStyled></LinkStyled>
                    <ButtonStyled><TextStyled white fontSize={25} fontWeight>contact Me</TextStyled></ButtonStyled>
                </Menu>
            </Header>
            <Main>
                <Box>
                    <BoxAbout>
                        <Content>
                            <TextStyled darkBlue fontSize={35}>Hi !</TextStyled>
                            <TitleStyled justifyContent={'left'}>
                                <TextStyled darkBlue fontSize={35} fontWeight>I'm Zolotyhin Ilya.<br/> a Front-End
                                    Developer</TextStyled>
                            </TitleStyled>
                            <TextStyled fontSize={23}>I have experience in creating SPA using React, Redux, TypeScript.
                                Knowledge in user interface, testing, and debugging processes. I'm improving my skills
                                in this direction
                                and plan to expand them with new technologies, such as Angular.<br/>
                                I usually spend my free time reading IT-literature (M.Fauler),
                                Codewars and improving my English. Open to your suggestions.</TextStyled>
                        </Content>
                        <ContentImg><img src={heroImg} alt="heroImg"/></ContentImg>
                    </BoxAbout>
                </Box>

                <Box>
                    <TitleStyled>
                        <TextStyled darkBlue fontSize={25}>Additional</TextStyled>
                        <TextStyled darkBlue fontSize={25} fontWeight>skills</TextStyled>
                    </TitleStyled>
                    <BoxSkills>
                        <Content>Content</Content>
                        <Content>Content</Content>
                        <Content>Content</Content>
                    </BoxSkills>
                </Box>

                <Box>
                    <TitleStyled>
                        <TextStyled darkBlue fontSize={25}>My</TextStyled>
                        <TextStyled darkBlue fontSize={25} fontWeight>Portfolio</TextStyled>
                    </TitleStyled>
                    <BoxAbout>
                        <Content>Content</Content>
                        <Content>Content</Content>
                        <Content>Content</Content>
                    </BoxAbout>
                </Box>
                <Box>
                    <h2>Title4</h2>
                    <BoxAbout>
                        <Content>Content</Content>
                        <Content>Content</Content>
                        <Content>Content</Content>
                    </BoxAbout>
                </Box>
            </Main>
            <footer>
                <h2>Title5</h2>
                <BoxAbout>
                    <Content>Content</Content>
                    <Content>Content</Content>
                    <Content>Content</Content>
                    <Content>Content</Content>
                </BoxAbout>
            </footer>
        </div>
    );
}

export default App;

const Header = styled.div`
    width: 1173px;
    height: 84px;
    position: fixed;
    padding-top: 35px;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
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
