import './index.sass';
import React from 'react';

export const Contact = () => {
    const address = [
        {
            class: 'Map-Pos',
            title: '“Свеза Верхняя Синячиха”',
            address: 'Свердловская обл., Алапаевский р-н, пос. Верхняя Синячиха, ул. Кедровая, д. 1',
            phone: '+7 34346 9-73-18',
        },
        {
            class: 'Map-Pos Map-Pos_two',
            title: '“Свеза Верхняя Синячиха”',
            address: 'Свердловская обл., Алапаевский р-н, пос. Верхняя Синячиха, ул. Кедровая, д. 1',
            phone: '+7 34346 9-73-18',
        },
        {
            class: 'Map-Pos Map-Pos_three',
            title: '“Свеза Верхняя Синячиха”',
            address: 'Свердловская обл., Алапаевский р-н, пос. Верхняя Синячиха, ул. Кедровая, д. 1',
            phone: '+7 34346 9-73-18',
        },
        {
            class: 'Map-Pos Map-Pos_four',
            title: '“Свеза Верхняя Синячиха”',
            address: 'Свердловская обл., Алапаевский р-н, пос. Верхняя Синячиха, ул. Кедровая, д. 1',
            phone: '+7 34346 9-73-18',
        },
        {
            class: 'Map-Pos Map-Pos_five',
            title: '“Свеза Верхняя Синячиха”',
            address: 'Свердловская обл., Алапаевский р-н, пос. Верхняя Синячиха, ул. Кедровая, д. 1',
            phone: '+7 34346 9-73-18',
        },
        {
            class: 'Map-Pos Map-Pos_six',
            title: '“Свеза Верхняя Синячиха”',
            address: 'Свердловская обл., Алапаевский р-н, пос. Верхняя Синячиха, ул. Кедровая, д. 1',
            phone: '+7 34346 9-73-18',
        },
        {
            class: 'Map-Pos Map-Pos_seven',
            title: '“Свеза Верхняя Синячиха”',
            address: 'Свердловская обл., Алапаевский р-н, пос. Верхняя Синячиха, ул. Кедровая, д. 1',
            phone: '+7 34346 9-73-18',
        },
        {
            class: 'Map-Pos Map-Pos_eight',
            title: '“Свеза Верхняя Синячиха”',
            address: 'Свердловская обл., Алапаевский р-н, пос. Верхняя Синячиха, ул. Кедровая, д. 1',
            phone: '+7 34346 9-73-18',
        },
    ];

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
                    {address.map((e, index) => {
                        return (
                            <div key={index} className={e.class}>
                                <div className="Map-Dot" />
                                <div className="Map-Info">
                                    <h2 className="Title">{e.title}</h2>
                                    <p className="Ph">{e.address}</p>
                                    <a href="tel:+73434697318" className="Phone">
                                        {e.phone}
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
};
