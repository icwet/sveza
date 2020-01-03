import './index.sass';
import React from 'react';
import block1 from './img/block-1.svg';
import block2 from './img/block-2.svg';
import block3 from './img/block-3.svg';
import block4 from './img/block-4.svg';
import block5 from './img/block-5.svg';
import block6 from './img/block-6.svg';
import { InfoCard } from '../InfoCard';

export const Advantage = () => {
    const AdvantageContent = [
        { image: block1, advantage: 'Стабильность' },
        { image: block2, advantage: 'Оформление по ТК РФ' },
        { image: block3, advantage: 'Сменный график' },
        { image: block4, advantage: 'Обучение и развитие' },
        { image: block5, advantage: 'Медицинское обслуживание' },
        { image: block6, advantage: 'Развозка' },
    ];

    return (
        <section className="Advantage">
            <div className="Advantage-Header">
                <h2 className="Advantage-Title">Преимущества работы</h2>
                <p className="Advantage-Ph">
                    <span>Для нас, сотрудников компании, «Свеза» — большая дружная семья,</span> объединяющая города и
                    области России.
                </p>
            </div>
            <div className="Advantage-Elems">
                {AdvantageContent.map((adv, index: number) => {
                    return <InfoCard {...adv} key={index} />;
                })}
            </div>
        </section>
    );
};
