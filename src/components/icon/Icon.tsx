import React from 'react';
import iconsSprite from '../../assets/svg/sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    stroke?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={ props.width || "100" } height={ props.height || "100" } viewBox={ props.viewBox || "0 0 100 100" }
             stroke={props.stroke || "black"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={ `${iconsSprite}#${props.iconId}` }/>
        </svg>
    );
};
