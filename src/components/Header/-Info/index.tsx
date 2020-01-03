import './index.sass';
import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderInfo = () => {
    const infoData = ['Вакансии', 'Заполни анкету', '8 800 500-07-10'];

    return (
        <div className="Header-Info">
            <Link to="/profile1" className="Header-Work">
                {infoData[0]}
            </Link>
            <Link to="/profile2" className="Header-Profile">
                {infoData[1]}{' '}
            </Link>
            <a href="tel:88005000710" className="Header-Phone">
                {infoData[2]}
            </a>
        </div>
    );
};
