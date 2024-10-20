import styled from 'styled-components';
import {ButtonStyled} from "./components/Button.styled";
import {LogoStyled} from "./components/Logo.styled";
import {LinkStyled} from "./components/Link.styled";
import {Box, BoxAbout, BoxSkills} from "./components/Box.styled";
import {Content, ContentImg} from "./components/Content.styled";
import {TextStyled} from "./components/Text.styled";
import heroImg from "./assets/heroImg.png";
import frontEnd from "./assets/frontEnd.png";
import backEnd from "./assets/backEnd.png";
import uiUx from "./assets/ux-ui.png";
import {TitleStyled} from "./components/Title.styled";
import Card from "./Card";

export type cardsDataType = {
    imgSrc: string
    titleBold: string
    titleNorm: string
    description: string
}

function App() {

    const cardsData: cardsDataType[] = [
        {
            imgSrc: frontEnd,
            titleBold: 'Front-End',
            titleNorm: 'Developer',
            description: ' Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.'
        },
        {
            imgSrc: backEnd,
            titleBold: 'Front-End',
            titleNorm: 'Developer',
            description: ' Faucibus. Faucibus. Sit sit sapien.'
        },
        {
            imgSrc: uiUx,
            titleBold: 'UI/UX',
            titleNorm: 'Designer',
            description: ' Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.'
        },
    ]

    return (
        <div>
            <Header>
                <LogoStyled><TextStyled darkBlue fontSize={25} fontWeight={700}>Iliya</TextStyled>
                    <TextStyled darkBlue fontSize={25}>Zolotyhin</TextStyled>
                </LogoStyled>
                <ul>
                    <Menu role="menu">
                        <MenuItem role="menuitem"><LinkStyled href=""><TextStyled fontSize={25}>About</TextStyled></LinkStyled></MenuItem>
                        <MenuItem role="menuitem"><LinkStyled href=""><TextStyled fontSize={25}>Skills</TextStyled></LinkStyled></MenuItem>
                        <MenuItem role="menuitem"><LinkStyled href=""><TextStyled fontSize={25}>Portfolio</TextStyled></LinkStyled></MenuItem>
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
                            cardsData.map((card, i) => {
                                return <Card key={i} imgSrc={card.imgSrc} titleBold={card.titleBold}
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
                        <Content>Content</Content>
                        <Content>Content</Content>
                        <Content>Content</Content>
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
