import styled from 'styled-components';
import {ButtonStyled} from "./components/Button.styled";
import {LogoStyled} from "./components/Logo.styled";
import footerImg from "./assets/footer.png";
import {LinkStyled} from "./components/Link.styled";
import {BoxAbout, BoxContacts, BoxPortfolio, BoxSkills} from "./components/Box.styled";
import {Content, ContentImg} from "./components/Content.styled";
import {TextStyled} from "./components/Text.styled";
import heroImg from "./assets/heroImg.png";
import {TitleStyled} from "./components/Title.styled";
import CardSkill from "./CardSkill";
import CardPortfolio from "./CardPortfolio";
import {skillCards} from "./data/skillCards";
import {portfolioCards} from "./data/portfolioCards";
import CardContacts from "./CardContacts";
import {contactCards} from "./data/contactCards";
import {ThemeStyled} from "./styles/Theme.styled";
import {useState} from "react";

function App() {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <Header>
                <LogoStyled><TextStyled darkBlue fontSize={25} fontWeight={700}>Iliya</TextStyled>
                    <TextStyled darkBlue fontSize={25}>Zolotyhin</TextStyled>
                </LogoStyled>
                <BurgerIcon onClick={toggleMenu}>
                    &#9776;
                </BurgerIcon>
                {isMenuOpen ? <div>bbbb</div> : <Menu>
                    <MenuItem><LinkStyled href=""><TextStyled
                        fontSize={25}>About</TextStyled></LinkStyled></MenuItem>
                    <MenuItem><LinkStyled href=""><TextStyled
                        fontSize={25}>Skills</TextStyled></LinkStyled></MenuItem>
                    <MenuItem><LinkStyled href=""><TextStyled
                        fontSize={25}>Portfolio</TextStyled></LinkStyled></MenuItem>
                    <ButtonStyled><TextStyled white fontSize={25} fontWeight={600}>contact
                        Me</TextStyled></ButtonStyled>
                </Menu>}
            </Header>
            <Main>
                <BoxAbout>
                    <Content>
                        <TextStyled darkBlue fontSize={35}>Hi !</TextStyled>
                        <TextStyled darkBlue fontSize={35} fontWeight={600}>I'm Zolotyhin Ilya.<br/> a Front-End
                            Developer</TextStyled>
                        <TextStyled paddingTop={30} fontSize={23}>I have experience in creating SPA using React, Redux, TypeScript.
                            Knowledge in user interface, testing, and debugging processes. I'm improving my skills
                            in this direction
                            and plan to expand them with new technologies, such as Angular.<br/>
                            I usually spend my free time reading IT-literature (M.Fauler),
                            Codewars and improving my English. Open to your suggestions.</TextStyled>
                    </Content>
                    <ContentImg src={heroImg} alt="heroImg"/>
                </BoxAbout>
                <TitleStyled>
                    <TextStyled darkBlue fontSize={25}>Additional</TextStyled>
                    <TextStyled darkBlue fontSize={25} fontWeight={600}>skills</TextStyled>
                </TitleStyled>
                <BoxSkills>
                    {
                        skillCards.map((card, i) => {
                            return <LinkStyled href=""><CardSkill key={i} imgSrc={card.imgSrc}
                                                                  titleBold={card.titleBold}
                                                                  titleNorm={card.titleNorm}
                                                                  description={card.description}/></LinkStyled>;
                        })
                    }
                </BoxSkills>
                <TitleStyled>
                    <TextStyled darkBlue fontSize={25}>My</TextStyled>
                    <TextStyled darkBlue fontSize={25} fontWeight={600}>Portfolio</TextStyled>
                </TitleStyled>
                <BoxPortfolio>
                    {
                        portfolioCards.map((card, i) => {
                            return <LinkStyled href=""><CardPortfolio key={i} imgSrc={card.imgSrc} title={card.title}
                                                                      bgImg={card.bgImg}
                                                                      description={card.description}
                                                                      titleImg={card.titleImg}/></LinkStyled>;
                        })
                    }
                </BoxPortfolio>
                <TitleStyled>
                    <TextStyled darkBlue fontSize={25}>Contact</TextStyled>
                    <TextStyled darkBlue fontSize={25} fontWeight={600}>Me</TextStyled>
                </TitleStyled>
                <BoxContacts>
                    {
                        contactCards.map((card, i) => {
                            return <CardContacts key={i} contact={card.contact} imgVector={card.imgVector} title={card.title}
                                                 icon={card.icon} imgHover={card.imgHover}/>;
                        })
                    }
                </BoxContacts>
            </Main>
            <Footer>
                <FooterImg src={footerImg} alt="Footer"/>
            </Footer>
        </>
    );
}

export default App;

const Header = styled.header`
    width: 1440px;
    height: 84px;
    padding: 0 133px;
    position: fixed;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    @media ${ThemeStyled.media.tablet} {
        padding: 30px;
    }`;

const BurgerIcon = styled.div`
    display: none;
    @media ${ThemeStyled.media.tablet} {
        font-size: 25px;
        font-weight: bold;
        display: flex;
        margin: 0;
        cursor: pointer;
    }`
;

const Menu = styled.ul`
    margin: 0;
    display: flex;
    align-items: center;
    gap: 45px;
    text-decoration: none;
    @media ${ThemeStyled.media.tablet} {
        display: none;
    }
`;

const MenuItem = styled.li`
    display: flex;
`;

const Main = styled.section`
    margin-top: 160px;
    display: flex;
    flex-direction: column;
    @media ${ThemeStyled.media.tablet} {
        margin-top: 0;
    }
`;

const Footer = styled.footer`
    height: 330px;
    max-width: 100vw;
    @media ${ThemeStyled.media.tablet} {
        width: 100%;
        height: 100px;
        margin: 0;
    }
`;

const FooterImg = styled.img`
    width: 100%;
    height: 330px;
    @media ${ThemeStyled.media.tablet} {
        width: 100%;
        height: 100px;
        margin: 0;
    }
`;
