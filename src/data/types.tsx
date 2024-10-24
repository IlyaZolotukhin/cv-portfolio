import Vector from "../assets/Vector.png";

export type skillCardsType = {
    imgSrc: string
    titleBold: string
    titleNorm: string
    description: string
}

export type portfolioCardsType = {
    bgImg: string,
    imgSrc: string
    title?: string
    description?: string
    titleImg?: string
}

export type contactCardsType = {
    imgVector: string
    title: string
    icon: string
}