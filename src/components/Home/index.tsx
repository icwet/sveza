import './index.sass';
import React, { useRef } from 'react';
import { Main } from '../Main';
import { About } from '../About';
import { Advantage } from '../Advantage';
import { Career } from '../Career';
import { Connect } from '../Connect';
import { Contact } from '../Contact';

export const Home = () => {
    const aboutSection = useRef<HTMLInputElement>(null);
    const onButtonClick = () => {
        if (aboutSection && aboutSection.current) {
            aboutSection.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
    };

    return (
        <div className="Home">
            <Main onClick={onButtonClick} />
            <div ref={aboutSection} className="Home-About">
                <About />
            </div>
            <Advantage />
            <Career />
            <Connect />
            <Contact />
        </div>
    );
};
