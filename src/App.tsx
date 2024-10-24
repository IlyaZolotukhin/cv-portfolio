import styled from 'styled-components';
import {ButtonStyled} from "./components/Button.styled";
import {LogoStyled} from "./components/Logo.styled";
import {LinkStyled} from "./components/Link.styled";
import {Box, BoxAbout, BoxSkills} from "./components/Box.styled";
import {Content, ContentImg} from "./components/Content.styled";
import {TextStyled} from "./components/Text.styled";
import heroImg from "./assets/heroImg.png";
import {TitleStyled} from "./components/Title.styled";
import CardSkill from "./CardSkill";
import CardPortfolio from "./CardPortfolio";
import {skillCards} from "./data/skillCards";

function App() {

    return (
        <div>
            <Header>
                <LogoStyled><TextStyled darkBlue fontSize={25} fontWeight={700}>Iliya</TextStyled>
                    <TextStyled darkBlue fontSize={25}>Zolotyhin</TextStyled>
                </LogoStyled>
                <ul>
                    <Menu>
                        <MenuItem><LinkStyled href=""><TextStyled fontSize={25}>About</TextStyled></LinkStyled></MenuItem>
                        <MenuItem><LinkStyled href=""><TextStyled fontSize={25}>Skills</TextStyled></LinkStyled></MenuItem>
                        <MenuItem><LinkStyled href=""><TextStyled fontSize={25}>Portfolio</TextStyled></LinkStyled></MenuItem>
                        <ButtonStyled><TextStyled white fontSize={25} fontWeight={600}>contact Me</TextStyled></ButtonStyled>
                        {/*<ButtonStyled aria-label ="закрыть"><TextStyled white fontSize={25} fontWeight> X </TextStyled></ButtonStyled>*/}
                    </Menu>
                </ul>

            </Header>
            <Main>
                <Box>
                    <BoxAbout>
                        <Content>
                            <TextStyled darkBlue fontSize={35}>Hi !</TextStyled>
                            <TitleStyled justifyContent={'left'}>
                                <TextStyled darkBlue fontSize={35} fontWeight={600}>I'm Zolotyhin Ilya.<br/> a Front-End
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
                        <TextStyled darkBlue fontSize={25} fontWeight={600}>skills</TextStyled>
                    </TitleStyled>
                    <BoxSkills>
                        {
                            skillCards.map((card, i) => {
                                return <CardSkill key={i} imgSrc={card.imgSrc} titleBold={card.titleBold}
                                                  titleNorm={card.titleNorm} description={card.description}/>;
                            })
                        }
                    </BoxSkills>
                </Box>

                <Box>
                    <TitleStyled>
                        <TextStyled darkBlue fontSize={25}>My</TextStyled>
                        <TextStyled darkBlue fontSize={25} fontWeight={600}>Portfolio</TextStyled>
                    </TitleStyled>
                    <BoxAbout>
                        {
                            skillCards.map((card, i) => {
                                return <CardPortfolio key={i} imgSrc={card.imgSrc} titleBold={card.titleBold}
                                                  titleNorm={card.titleNorm} description={card.description}/>;
                            })
                        }
                    </BoxAbout>
                </Box>
            </Main>
            <footer>
                <TitleStyled>
                    <TextStyled darkBlue fontSize={25}>Contact</TextStyled>
                    <TextStyled darkBlue fontSize={25} fontWeight={600}>Me</TextStyled>
                </TitleStyled>
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

const Header = styled.header`
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

const Menu = styled.ul`
    display: flex;
    align-items: center;
    gap: 45px;
    text-decoration: none;
`;

const MenuItem = styled.li`
    display: flex;
`;

const Main = styled.section `
    margin-top: 160px;
    display: flex;
    flex-direction: column;
`;
