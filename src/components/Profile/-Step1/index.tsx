import React, { CSSProperties, useState } from 'react';
import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import Select, { components } from 'react-select';

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
    },
];
const customComponentStyles = {
    menuHeaderStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        height: 45,
        padding: '13px 13px 0 28px',
        marginBottom: '12px',
        color: '#525252',
        font: 'bold 13px Gotham, sans-serif',
    },
    separator: {
        position: 'absolute',
        top: 50,
        width: 286,
        height: 1.5,
        background: '#D6D6D6',
    } as CSSProperties,
    customAbout: {
        paddingTop: '8px',
        lineHeight: 1.5,
        opacity: 0.5,
    },
};
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
            borderColor: '#D6D6D6',
        },
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '13px 13px 0 28px',
        height: 86,
        cursor: 'pointer',
        color: '#525252',
        font: 'bold 13px Gotham, sans-serif',
        background: state.isSelected ? '#FBFBFB' : '#FBFBFB',
        userSelect: 'select',
        ':hover': {
            background: '#81B33B',
            color: '#fff',
        },
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    indicatorsContainer: () => ({
        svg: {
            fill: '#525252',
            ':hover': {
                fill: '#525252',
            },
        },
    }),
    menu: (provided: any, state: any) => ({
        ...provided,
        marginTop: 18,
        background: '#FBFBFB',
        borderRadius: 0,
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        '&:before': {
            content: '""',
            display: 'block',
            width: 0,
            height: 0,
            position: 'absolute',
            top: -12,
            left: 12,
            borderStyle: 'solid',
            borderWidth: '0 12px 12px 12px',
            borderColor: 'transparent transparent #FBFBFB transparent',
        },
    }),
};

export const ProfileStep1 = () => {
    const [dateBirth, setDateBirth] = useState(null);
    const [currentValue, setCurrentValue] = useState('');

    const Option = ({ ...props }) => {
        return (
            <components.Option {...props}>
                {props.children}
                <div style={customComponentStyles.customAbout}>{props.data.about}</div>
            </components.Option>
        );
    };
    const MenuList = ({ ...props }) => {
        return (
            <components.MenuList {...props}>
                <div style={customComponentStyles.menuHeaderStyle}>
                    {currentValue || props.options[0].value}
                    <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.2806 0L5.24268 7.03301L1.98512 3.76382L0.613281 5.24773L5.34855 10L12.7545 1.37361L11.2806 0Z"
                            fill="#81B33B"
                        />
                    </svg>
                    <div style={customComponentStyles.separator} />
                </div>
                {props.children}
            </components.MenuList>
        );
    };

    return (
        <>
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
                    Фамилия*
                    <input name="lastName" type="text" className="Profile-Input" />
                </label>
                <label className="Profile-Label">
                    Имя*
                    <input name="firstName" type="text" className="Profile-Input" />
                </label>
                <label className="Profile-Label">
                    Отчество*
                    <input name="middleName" type="text" className="Profile-Input" />
                </label>
                <label className="Profile-Label">
                    Адрес проживания
                    <input type="text" className="Profile-Input" />
                </label>
                <div className="Profile-Label">
                    Дата рождения
                    <DatePicker
                        dateFormat="dd-MM-yyyy"
                        fixedHeight={true}
                        selected={dateBirth}
                        onChange={(date: null) => setDateBirth(date)}
                        locale={ru}
                        showMonthDropdown
                        showYearDropdown
                        scrollableYearDropdown
                        className="Date"
                        dayClassName={date => 'Date-Day'}
                        calendarClassName="Date-Calendar"
                        placeholderText="__-__-____"
                        todayButton="Выбрать"
                        yearDropdownItemNumber={40}
                    />
                </div>
            </div>
            <div className="Profile-Grid">
                <label className="Select-Label">
                    <span>Комбинат*</span>
                    <Select
                        defaultValue={address[0]}
                        options={address}
                        styles={customStyles}
                        isSearchable={false}
                        components={{ MenuList, Option }}
                        onChange={({ ...newValue }) => setCurrentValue(newValue.value)}
                    />
                </label>

                <fieldset className="Profile-PhoneNumber">
                    <label className="Phone">
                        <span>Телефон*</span>
                        <input placeholder="+7" type="tel" className="Phone-CityCode" />
                        <input placeholder="___-____-____" type="tel" className="Phone-Number" />
                    </label>
                </fieldset>
                <label className="Profile-Label">
                    Адрес по прописке
                    <input type="text" className="Profile-Input" />
                </label>
            </div>
            <div className="Profile-Grid">
                <h2 className="Profile-Subtitle">Паспортные данные</h2>
                <label className="Profile-Label">
                    Номер паспорта
                    <input type="text" className="Profile-Input" />
                </label>
                <label className="Profile-Label">
                    Кем выдан
                    <input type="text" className="Profile-Input" />
                </label>
            </div>
            <div className="Profile-Grid Profile-Grid_gap_top">
                <label className="Profile-Label">
                    Серия
                    <input type="text" className="Profile-Input" />
                </label>
                <label className="Profile-Label">
                    Когда выдан
                    <input type="text" className="Profile-Input" />
                </label>
            </div>
        </>
    );
};
