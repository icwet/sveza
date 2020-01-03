import "./index.sass";
import React from "react";
import { Header } from "../Header";
import { Main } from "../Main";
import { About } from "../About";
import { Advantage } from "../Advantage";
import { Career } from "../Career";

export const Home = () => {
    return (
        <div className="Home">
            <Header />
            <Main />
            <About />
            <Advantage />
            <Career />
        </div>
    )
};
