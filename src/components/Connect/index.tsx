import './index.sass';
import React from 'react';

export const Connect = () => {
    return (
        <section className="Connect">
            <div className="Connect-Content">
                <h2 className="Connect-Title">Присоединяйтесь к «Свезе»!</h2>
                <p className="Connect-Ph">
                    Мы обеспечиваем всех сотрудников достойной заработной платой, ценным опытом и большими
                    перспективами.
                </p>
                <ul className="Connect-List">
                    <li className="Connect-Elem">Интересные возможности для развития</li>
                    <li className="Connect-Elem">Уверенность в завтрашнем дне</li>
                    <li className="Connect-Elem">Забота о сотрудниках и их здоровье</li>
                </ul>
                <button className="Connect-Button">Заполнить анкету</button>
            </div>
            <div className="Connect-Preview"></div>
        </section>
    );
};
