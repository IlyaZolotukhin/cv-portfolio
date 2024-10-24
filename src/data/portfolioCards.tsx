import ellipse1 from "../assets/Ellipse 1.png";
import ellipse2 from "../assets/Ellipse 2.png";
import ellipse3 from "../assets/Ellipse 3.png";
import portfolio1 from "../assets/SendPay 1.png";
import portfolio2 from "../assets/e-commerce 2.png";
import portfolio3 from "../assets/Edtech 3.png";
import titleImg from "../assets/Screenshot (162) 1.png";
import {portfolioCardsType} from "./types";

export const portfolioCards: portfolioCardsType[] = [
    {
        bgImg: ellipse1,
        imgSrc: portfolio1,
        title: 'Sendpay',
    },
    {
        bgImg: ellipse2,
        imgSrc: portfolio2,
        title: 'E-Commerce',
        description: 'Website'
    },
    {
        bgImg: ellipse3,
        imgSrc: portfolio3,
        titleImg: titleImg
    },
]
