import './index.sass';
import React, { FC } from 'react';

interface MainProps {
    onClick: any;
}

export const Main: FC<MainProps> = ({ onClick }) => {
    return (
        <main className="Main">
            <div className="MainContent">
                <div className="MainContent-Titles">
                    <h1 className="MainContent-Title">
                        <span>Стань</span>
                        частью «Свезы»
                    </h1>
                    <h2 className="MainContent-Subtitle">Мировой лидер по производству березовой фанеры</h2>
                </div>
                <div className="MainContent-Buttons">
                    <button className="MainContent-Button">Заполнить анкету</button>
                    <button className="MainContent-Button MainContent-Button_transparent">Вакансии</button>
                </div>
            </div>
            <button className="MainMore" onClick={onClick}>
                Узнать больше
            </button>
        </main>
    );
};
