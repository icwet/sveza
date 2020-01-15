import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import React, { useState } from 'react';

export const ProfileStep3 = () => {
    const [startDateEnterSecond, setDateEnterSecond] = useState(null);
    const [startDateEndSecond, setDateEndSecond] = useState(null);
    const [startDateEnterThree, setDateEnterThree] = useState(null);
    const [startDateEndThree, setDateEndThree] = useState(null);

    return (
        <>
            <div className="Profile-Grid">
                <h2 className="Profile-Subtitle">1 работа</h2>
                <div className="Profile-Label">
                    Дата поступления
                    <DatePicker
                        dateFormat="dd-MM-yyyy"
                        fixedHeight={true}
                        selected={startDateEnterSecond}
                        onChange={(date: null) => setDateEnterSecond(date)}
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
                <label className="Profile-Label">
                    Наименование организации
                    <input type="text" className="Profile-Input" />
                </label>
                <label className="Profile-Label">
                    Причина ухода
                    <input type="text" className="Profile-Input" />
                </label>
            </div>
            <div className="Profile-Grid Profile-Grid_gap_top">
                <div className="Profile-Label">
                    Дата окончания
                    <DatePicker
                        dateFormat="dd-MM-yyyy"
                        fixedHeight={true}
                        selected={startDateEndSecond}
                        onChange={(date: null) => setDateEndSecond(date)}
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
                <label className="Profile-Label">
                    Должность
                    <input type="text" className="Profile-Input" />
                </label>
            </div>
            <div className="Profile-Grid">
                <h2 className="Profile-Subtitle">2 работа</h2>
                <div className="Profile-Label">
                    Дата поступления
                    <DatePicker
                        dateFormat="dd-MM-yyyy"
                        fixedHeight={true}
                        selected={startDateEnterThree}
                        onChange={(date: null) => setDateEnterThree(date)}
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

                <label className="Profile-Label">
                    Наименование организации
                    <input type="text" className="Profile-Input" />
                </label>
                <label className="Profile-Label">
                    Причина ухода
                    <input type="text" className="Profile-Input" />
                </label>
            </div>
            <div className="Profile-Grid Profile-Grid_gap_top">
                <div className="Profile-Label">
                    Дата окончания
                    <DatePicker
                        dateFormat="dd-MM-yyyy"
                        fixedHeight={true}
                        selected={startDateEndThree}
                        onChange={(date: null) => setDateEndThree(date)}
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
                <label className="Profile-Label">
                    Должность
                    <input type="text" className="Profile-Input" />
                </label>
            </div>
        </>
    );
};
