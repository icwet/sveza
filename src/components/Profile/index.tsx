import './index.sass';
import React from 'react';
import Select, { components } from 'react-select';


const menuHeaderStyle = {
    height: 25,
    padding: '12px',
    marginBottom: '12px',
    color: '#525252',
    font: 'bold 13px Gotham, sans-serif',
};
const MenuList = ({ ...props }) => {
    return (
        <components.MenuList {...props}>
            <div style={menuHeaderStyle}>{props.getValue}</div>
            {props.children}
        </components.MenuList>
    );
};

export const Profile = () => {
    const address = [
        {
            label: 'СВЕЗА Усть-Ижора',
            value: 'СВЕЗА Усть-Ижора',
            about: 'Колпинский район, посёлок Понтонный, ул.Фанерная, дом 5, 3 этаж',
        },
        {
            label: 'СВЕЗА Кострома',
            value: 'СВЕЗА Кострома',
            about: 'Город Кострома, улица Комсомольская, дом 2, 1 этаж',
        },
        {
            label: 'СВЕЗА Уральский',
            value: 'СВЕЗА Уральский',
            about: 'Пермский край, Нытвенский р-н, пос. Уральский, ул . Московская, дом 1а',
        },
        {
            label: 'СВЕЗА Мантурово',
            value: 'СВЕЗА Мантурово',
            about: 'Город Мантурово, ул.Матросова, дом 2Б, 2 этаж',
        },
        {
            label: 'СВЕЗА Новатор',
            value: 'СВЕЗА Новатор',
            about: 'Вологодская обл., Великоустюгский район, поселок Новатор',
        },
        {
            label: 'СВЕЗА Верхняя Синячиха',
            value: 'СВЕЗА Верхняя Синячиха',
            about: 'Алапаевский район, посёлок Верхняя Синячиха, ул.Кедровая, дом 1',
        },
        {
            label: 'СВЕЗА Тюмень',
            value: 'СВЕЗА Тюмень',
            about: 'Город Тюмень, ул.Камчатская, 196',
        },
        {
            label: 'СВЕЗА Ресурс',
            value: 'СВЕЗА Ресурс',
            about: 'Тотемский район, посёлок Советский, ул. Дачная 1А',
        }
    ];
    const customStyles = {
        control: (provided: any, state: any) => ({
            ...provided,
            width: 342,
            height: 45,
            border: '1.5px solid #D6D6D6',
            borderRadius: 0,
            fontFamily: 'Gotham, sans-serif',
            fontSize: '13px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: 'unset',
            ':hover': {
                borderColor: '#D6D6D6'
            }
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            display: 'flex',
            alignItems: 'center',
            height: 39,
            cursor: 'pointer',
            color: '#525252',
            font: 'bold 13px Gotham, sans-serif',
            background: state.isSelected ? '#FBFBFB' : '#FBFBFB',
            ':hover': {
                background: '#81B33B',
                color: '#fff'
            }
        }),
        indicatorSeparator: () => ({
            display: 'none'
        }),
        indicatorsContainer: () => ({
            'svg': {
                fill: '#525252',
                ':hover': {
                    fill: '#525252'
                }
            }
        })
    };


    return (
        <section className="Profile">
            <h2 className="Profile-Title">Анкета</h2>
            <form action="" className="Profile-Form">
                <div className="Profile-Main">
                    <div className="Profile-Grid">
                        <label className="Profile-Label">
                            Вакансия
                            <input type="text" className="Profile-Input" />
                        </label>
                        <label className="Profile-Label">
                            Желаемый уровень дохода
                            <input type="text" className="Profile-Input" />
                        </label>
                        <label className="Profile-Label">
                            ФИО*
                            <input type="text" className="Profile-Input" />
                        </label>
                        <label className="Profile-Label">
                            Адрес проживания
                            <input type="text" className="Profile-Input" />
                        </label>
                    </div>
                    <div className="Profile-Grid">

                        <Select
                            defaultValue={address[0]}
                            options={address}
                            styles={customStyles}
                            isSearchable={false}
                            components={{MenuList}}
                        />

                        <div className="Profile-Empty" />
                        <fieldset className="Profile-PhoneNumber">
                            <label className="Phone">
                                <input type="number" className="Phone-CityCode" />
                                <input type="number" className="Phone-Number" />
                            </label>
                        </fieldset>
                        <label className="Profile-Label">
                            Адрес по прописке
                            <input type="text" className="Profile-Input" />
                        </label>



                    </div>
                    <div className="Profile-Grid">

                    </div>
                    <div className="Profile-Grid">

                    </div>
                </div>
            </form>
        </section>
    );
};
