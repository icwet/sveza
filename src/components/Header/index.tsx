import "./index.sass"
import React from "react";
import { Logo } from "./-Logo"
import { Info } from "./-Info";

export const Header = () => {
    return (
        <>
            <Logo/>
            <Info/>
        </>
    )
};