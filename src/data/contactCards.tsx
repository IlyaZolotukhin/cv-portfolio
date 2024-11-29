import Vector from "../assets/svg/Spot.svg";
import imgHover from "../assets/svg/HoverSpot.svg";
import {contactCardsType} from "./types";
import GitHub from "../assets/svg/GitHub.svg";
import Telega from "../assets/svg/telega.svg";
import Email from "../assets/svg/Mail.svg";
import Telephon from "../assets/call.png";
export const contactCards: contactCardsType[] = [
    {
        imgHover: imgHover,
        imgVector: Vector,
        title: 'Github',
        icon: GitHub,
        contact: "https://github.com/IlyaZolotukhin"
    },
    {
        imgHover: imgHover,
        imgVector: Vector,
        title: 'Email',
        icon: Email,
        contact: `mailto:"1zolotyhin1@gmail.com"`
    },
    {
        imgHover: imgHover,
        imgVector: Vector,
        title: 'Telephon',
        icon: Telephon,
        contact: "tel:89915036422"
    },
    {
        imgHover: imgHover,
        imgVector: Vector,
        title: 'Telegram',
        icon: Telega,
        contact: "https://t.me/zltkhin"
    },
]
