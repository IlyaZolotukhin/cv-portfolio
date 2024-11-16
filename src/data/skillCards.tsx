import frontEnd from "../assets/frontEnd.png";
import backEnd from "../assets/backEnd.png";
import design from "../assets/Design.png";
import {skillCardsType} from "./types";

export const skillCards: skillCardsType[] = [
    {
        imgSrc: frontEnd,
        titleBold: 'Front-End',
        titleNorm: 'Developer',
        description: '(Sass, Bootstrap, Tailwind)'
    },
    {
        imgSrc: backEnd,
        titleBold: 'Back-End',
        titleNorm: 'Developer',
        description: '(NodeJS, Firebase)'
    },
    {
        imgSrc: design,
        titleBold: 'UI/UX',
        titleNorm: 'Designer',
        description: '(Figma, Adobe XD)'
    },
]
