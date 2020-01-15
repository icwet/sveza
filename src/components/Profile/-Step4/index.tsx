import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import React, { useState } from 'react';

export const ProfileStep4 = () => {
    const [startDateEnterFour, setDateEnterFour] = useState(null);
    const [startDateEndFour, setDateEndFour] = useState(null);

    return (
        <>
            <div className="Profile-Grid">
                <h2 className="Profile-Subtitle">3 работа</h2>
                <div className="Profile-Label">
                    Дата поступления
                    <DatePicker
                        dateFormat="dd-MM-yyyy"
                        fixedHeight={true}
                        selected={startDateEnterFour}
                        onChange={(date: null) => setDateEnterFour(date)}
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
                        selected={startDateEndFour}
                        onChange={(date: null) => setDateEndFour(date)}
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
            <div className="Profile-Grid Profile-Grid_width_full">
                <h2 className="Profile-Subtitle">Дополнительная информация:</h2>
                <fieldset className="Profile-FieldSet">
                    <legend className="Profile-Legend">Водительское удостоверение:</legend>
                    <div className="Profile-Checkbox">
                        <div className="Checkbox">
                            <input id="notDrive" name="driving" type="radio" className="Checkbox-Input" />
                            <label htmlFor="notDrive" className="Checkbox-Label">
                                нет
                            </label>
                        </div>
                        <div className="Checkbox">
                            <input id="yesDrive" name="driving" type="radio" className="Checkbox-Input" />
                            <label htmlFor="yesDrive" className="Checkbox-Label">
                                да
                            </label>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="Profile-FieldSet">
                    <legend className="Profile-Legend">Категория:</legend>
                    <div className="Profile-Checkbox">
                        <div className="Checkbox">
                            <input id="catA" name="category" value="A" type="checkbox" className="Checkbox-Input" />
                            <label htmlFor="catA" className="Checkbox-Label">
                                A
                            </label>
                        </div>
                        <div className="Checkbox">
                            <input id="catB" name="category" value="B" type="checkbox" className="Checkbox-Input" />
                            <label htmlFor="catB" className="Checkbox-Label">
                                B
                            </label>
                        </div>
                        <div className="Checkbox">
                            <input id="catC" name="category" value="C" type="checkbox" className="Checkbox-Input" />
                            <label htmlFor="catC" className="Checkbox-Label">
                                C
                            </label>
                        </div>
                        <div className="Checkbox">
                            <input id="catD" name="category" value="D" type="checkbox" className="Checkbox-Input" />
                            <label htmlFor="catD" className="Checkbox-Label">
                                D
                            </label>
                        </div>
                        <div className="Checkbox">
                            <input id="catE" name="category" value="E" type="checkbox" className="Checkbox-Input" />
                            <label htmlFor="catE" className="Checkbox-Label">
                                E
                            </label>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="Profile-FieldSet">
                    <legend className="Profile-Legend">Работали ли у нас ранее?</legend>
                    <div className="Profile-Checkbox">
                        <div className="Checkbox">
                            <input id="notPrevWork" name="prevWork" type="radio" className="Checkbox-Input" />
                            <label htmlFor="notPrevWork" className="Checkbox-Label">
                                нет
                            </label>
                        </div>
                        <div className="Checkbox">
                            <input id="yesPrevWork" name="prevWork" type="radio" className="Checkbox-Input" />
                            <label htmlFor="yesPrevWork" className="Checkbox-Label">
                                да
                            </label>
                        </div>
                    </div>
                </fieldset>
                <label className="Profile-Label Profile-Label_width_full">
                    Где, в какой должности и в какой период?
                    <input type="text" className="Profile-Input" />
                </label>
                <label className="Profile-Label Profile-Label_width_full">
                    Работают ли у Вас родственники, знакомые в нашей компании (родство, ФИО, должность)
                    <input type="text" className="Profile-Input" />
                </label>
                <fieldset className="Profile-FieldSet">
                    <legend className="Profile-Legend">
                        Имеете ли Вы какие-либо ограничения по состоянию здоровья?
                    </legend>
                    <div className="Profile-Checkbox">
                        <div className="Checkbox">
                            <input id="notHealth" name="health" type="radio" className="Checkbox-Input" />
                            <label htmlFor="notHealth" className="Checkbox-Label">
                                нет
                            </label>
                        </div>
                        <div className="Checkbox">
                            <input id="yesHealth" name="health" type="radio" className="Checkbox-Input" />
                            <label htmlFor="yesHealth" className="Checkbox-Label">
                                да
                            </label>
                        </div>
                    </div>
                </fieldset>
                <label className="Profile-Label Profile-Label_width_full">
                    Какие?
                    <input type="text" className="Profile-Input" />
                </label>
                <label className="Profile-Label">
                    Источник вакансии?
                    <input type="text" className="Profile-Input" />
                </label>
                <div className="Checkbox Checkbox_type_alt">
                    <input id="yesPersonal" name="personal" type="checkbox" className="Checkbox-Input" />
                    <label htmlFor="yesPersonal" className="Checkbox-Label">
                        Согласие на обработку персональных данных →
                    </label>
                </div>
            </div>
            <button className="Profile-Submit">Отправить</button>
        </>
    );
};
