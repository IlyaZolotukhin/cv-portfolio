import Vector from "../assets/Vector.png";
import imgHover from "../assets/vectorHover.png";
import {contactCardsType} from "./types";
import GitHub from "../assets/github.png";
import Telega from "../assets/telega.png";
import Email from "../assets/fast message.png";
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
