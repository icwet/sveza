import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import React, { useState } from 'react';

export const ProfileStep2 = () => {
    const [startDateEnter, setDateEnter] = useState(null);
    const [startDateEnd, setDateEnd] = useState(null);
    return (
        <>
            <div className="Profile-Grid Profile-Grid_width_full">
                <fieldset className="Profile-FieldSet">
                    <legend className="Profile-Legend">Пол</legend>
                    <div className="Profile-Checkbox">
                        <div className="Checkbox">
                            <input id="female" name="gender" type="radio" className="Checkbox-Input" />
                            <label htmlFor="female" className="Checkbox-Label">
                                Женский
                            </label>
                        </div>
                        <div className="Checkbox">
                            <input id="male" name="gender" type="radio" className="Checkbox-Input" />
                            <label htmlFor="male" className="Checkbox-Label">
                                Мужской
                            </label>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="Profile-FieldSet">
                    <legend className="Profile-Legend">Семейное положение</legend>
                    <div className="Profile-Checkbox">
                        <div className="Checkbox">
                            <input id="married" name="family" type="radio" className="Checkbox-Input" />
                            <label htmlFor="married" className="Checkbox-Label">
                                женат/замужем
                            </label>
                        </div>
                        <div className="Checkbox">
                            <input id="notMarried" name="family" type="radio" className="Checkbox-Input" />
                            <label htmlFor="notMarried" className="Checkbox-Label">
                                холост/не замужем
                            </label>
                        </div>
                        <div className="Checkbox">
                            <input id="divorce" name="family" type="radio" className="Checkbox-Input" />
                            <label htmlFor="divorce" className="Checkbox-Label">
                                разведен/разведена
                            </label>
                        </div>
                    </div>
                </fieldset>
                <label className="Profile-Label">
                    Дети (пол, возраст)
                    <input type="text" className="Profile-Input" />
                </label>
                <fieldset className="Profile-FieldSet">
                    <legend className="Profile-Legend">Основное образование</legend>
                    <div className="Profile-Checkbox">
                        <div className="Checkbox">
                            <input id="higher" name="education" type="radio" className="Checkbox-Input" />
                            <label htmlFor="higher" className="Checkbox-Label">
                                высшее
                            </label>
                        </div>
                        <div className="Checkbox">
                            <input id="incomplete" name="education" type="radio" className="Checkbox-Input" />
                            <label htmlFor="incomplete" className="Checkbox-Label">
                                неоконченное высшее
                            </label>
                        </div>
                        <div className="Checkbox">
                            <input id="secondary" name="education" type="radio" className="Checkbox-Input" />
                            <label htmlFor="secondary" className="Checkbox-Label">
                                среднее профессиональное
                            </label>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div className="Profile-Grid">
                <div className="Profile-Label">
                    Год поступления
                    <DatePicker
                        dateFormat="dd-MM-yyyy"
                        fixedHeight={true}
                        selected={startDateEnter}
                        onChange={(date: null) => setDateEnter(date)}
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
                    Наименование учебного заведения
                    <input type="text" className="Profile-Input" />
                </label>
                <label className="Profile-Label">
                    форма учебного заведения
                    <input type="text" className="Profile-Input" />
                </label>
            </div>
            <div className="Profile-Grid">
                <div className="Profile-Label">
                    Год окончания
                    <DatePicker
                        dateFormat="dd-MM-yyyy"
                        fixedHeight={true}
                        selected={startDateEnd}
                        onChange={(date: null) => setDateEnd(date)}
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
                    Специальность, квалификация
                    <input type="text" className="Profile-Input" />
                </label>
            </div>
            <div className="Profile-Grid Profile-Grid_width_full">
                <h2 className="Profile-Subtitle">
                    опыт работы (за последние 5-7 лет), начиная с последнего места работы, в том числе и без оформления
                    по трудовой книжке:
                </h2>
            </div>
        </>
    );
};
