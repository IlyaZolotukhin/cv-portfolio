import ellipse1 from "../assets/Ellipse 1.png";
import ellipse2 from "../assets/Ellipse 2.png";
import ellipse3 from "../assets/Ellipse 3.png";
import portfolio1 from "../assets/photoUploader.png";
import portfolio2 from "../assets/e-commerce 2.png";
import portfolio3 from "../assets/bukvalend.png";
import {portfolioCardsType} from "./types";

export const portfolioCards: portfolioCardsType[] = [
    {
        bgImg: ellipse1,
        imgSrc: portfolio1,
        title: 'Photo Uploader',
        description: 'Website by Angular',
        link:'https://photouploader-83383.web.app/'
    },
    {
        bgImg: ellipse2,
        imgSrc: portfolio2,
        title: 'E-Commerce',
        description: 'Website by React',
        link:'https://ilyazolotukhin.github.io/eShop/'
    },
    {
        bgImg: ellipse3,
        imgSrc: portfolio3,
        title: 'Bukvalend',
        description: 'Website by Next',
        link:'https://bukvalend.ru/'
    },
]
