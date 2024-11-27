import styled from 'styled-components';
import footerImg from "./assets/wave 1.png";
import {LinkStyled} from "./components/Link.styled";
import {BoxAbout, BoxContacts, BoxPortfolio, BoxSkills} from "./components/Box.styled";
import {Content, ContentImg} from "./components/Content.styled";
import {TextStyled} from "./components/Text.styled";
import heroImg from "./assets/hero.png";
import {TitleStyled} from "./components/Title.styled";
import CardSkill from "./CardSkill";
import CardPortfolio from "./CardPortfolio";
import {skillCards} from "./data/skillCards";
import {portfolioCards} from "./data/portfolioCards";
import CardContacts from "./CardContacts";
import {contactCards} from "./data/contactCards";
import {ThemeStyled} from "./styles/Theme.styled";
import {useState} from "react";
import {Header} from "./layout/header/Header";
import {Modal} from "./layout/modal/Modal";

function App() {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            {isMenuOpen ? <Modal closeMenu={closeMenu}/> : <Header toggleMenu={toggleMenu}/>}
            <Main id="about">
                <BoxAbout>
                    <Content>
                        <TextStyled darkBlue fontSize={35}>Hi !</TextStyled>
                        <TextStyled darkBlue fontSize={35} fontWeight={600}>I'm Ilya Zolotukhin.</TextStyled>
                        <TextStyled darkBlue fontSize={35} fontWeight={600}>a Front-End Developer</TextStyled>
                        <TextStyled paddingTop={30} fontSize={23}>I have experience in creating SPA using React, Redux,
                            TypeScript.
                            Knowledge in user interface, testing, and debugging processes. I'm improving my skills
                            in this direction
                            and plan to expand them with new technologies, such as Angular.
                            I usually spend my free time reading IT-literature (M.Fauler),
                            Codewars and improving my English. Open to your suggestions.</TextStyled>
                    </Content>
                    <ContentImg src={heroImg} alt="heroImg"/>
                </BoxAbout>
                <TitleStyled id="skills">
                    <TextStyled darkBlue fontSize={25}>Additional</TextStyled>
                    <TextStyled darkBlue fontSize={25} fontWeight={600}>skills</TextStyled>
                </TitleStyled>
                <BoxSkills>
                    {
                        skillCards.map((card, i) => {
                            return <LinkStyled key={i} href=""><CardSkill imgSrc={card.imgSrc}
                                                                          titleBold={card.titleBold}
                                                                          titleNorm={card.titleNorm}
                                                                          description={card.description}/></LinkStyled>;
                        })
                    }
                </BoxSkills>
                <TitleStyled id="portfolio">
                    <TextStyled darkBlue fontSize={25}>My</TextStyled>
                    <TextStyled darkBlue fontSize={25} fontWeight={600}>Portfolio</TextStyled>
                </TitleStyled>
                <BoxPortfolio>
                    {
                        portfolioCards.map((card, i) => {
                            return <CardPortfolio key={i}
                                                  imgSrc={card.imgSrc}
                                                  title={card.title}
                                                  bgImg={card.bgImg}
                                                  description={card.description}
                                                  link={card.link}/>;
                        })
                    }
                </BoxPortfolio>
                <TitleStyled id="contactMe">
                    <TextStyled darkBlue fontSize={25}>Contact</TextStyled>
                    <TextStyled darkBlue fontSize={25} fontWeight={600}>Me</TextStyled>
                </TitleStyled>
                <BoxContacts>
                    {
                        contactCards.map((card, i) => {
                            return <CardContacts key={i} contact={card.contact}
                                                 imgVector={card.imgVector}
                                                 title={card.title}
                                                 icon={card.icon}
                                                 imgHover={card.imgHover}/>;
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
        height: 200px;
        margin: 0;
    }
`;
