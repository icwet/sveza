import './index.sass';
import React from 'react';
import { HeaderLogo } from './-Logo';
import { HeaderInfo } from './-Info';

export const Header = () => {
    return (
        <header className="Header">
            <HeaderLogo />
            <HeaderInfo />
        </header>
    );
};
