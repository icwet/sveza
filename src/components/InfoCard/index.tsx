import "./index.sass";
import React, { FC } from "react";

interface InfoProps {
    image: string;
    advantage: string;
}

export const InfoCard: FC<InfoProps> = (props) => {
    return (
        <div className="InfoCard">
            <img src={props.image} alt={props.advantage} className="InfoCard-Image"/>
            <p className="InfoCard-Ph">{props.advantage}</p>
        </div>
    )
};
