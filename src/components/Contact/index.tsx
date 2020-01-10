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
            <div className="Contact-Map">
                <div className="Map">
                    <div className="Map-Pos">
                        <div className="Map-Dot" />
                        <div className="Map-Info">
                            <h2 className="Title">“Свеза Верхняя Синячиха”</h2>
                            <p className="Ph">
                                Свердловская обл., Алапаевский р-н, пос. Верхняя Синячиха, ул. Кедровая, д. 1
                            </p>
                            <a href="tel:+73434697318" className="Phone">
                                +7 34346 9-73-18
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
