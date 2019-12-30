import "./index.sass";
import React from "react";
import { Logo } from "./-Logo"
import { Info } from "./-Info";

export const Header = () => {
    return (
        <header className="Header">
          <Logo />
          <Info />
        </header>
    )
};
