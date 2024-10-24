import frontEnd from "../assets/frontEnd.png";
import backEnd from "../assets/backEnd.png";
import uiUx from "../assets/ux-ui.png";
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
        description: '(NodeJS, ?, ?)'
    },
    {
        imgSrc: uiUx,
        titleBold: 'UI/UX',
        titleNorm: 'Designer',
        description: '(Figma, Zeplin, Adobe XD)'
    },
]
