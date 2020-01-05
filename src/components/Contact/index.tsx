import './index.sass';
import React from 'react';

export const Contact = () => {
    return (
        <footer className="Contact">
            <div className="Contact-Info">
                <h2 className="Contact-Title">Контакты</h2>
                <div className="Contact-Ph">
                    Запись на собеседование на рабочие вакансии
                    <a href="tel:88005000710" className="Contact-Phone">
                        8 800 500-07-10
                    </a>
                    <small className="Contact-Small">Круглосуточно, бесплатно по России</small>
                    <div className="Contact-Requisites">© ООО «Свеза-Лес», 2019</div>
                </div>
            </div>
            <div className="Contact-Map"></div>
        </footer>
    );
};
