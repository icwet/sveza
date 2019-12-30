import "./index.sass";
import React from "react";
import { Header } from "../Header";
import { Main } from "../Main";
import { About } from "../About";
import { Advantage } from "../Advantage";

export const Home = () => {
    return (
        <div className="Home">
            <Header />
            <Main/>
            <About/>
            <Advantage/>
        </div>
    )
};
