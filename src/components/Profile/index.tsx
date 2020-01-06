import './index.sass';
import React from 'react';
import { Dropdown } from 'react-bootstrap';

export const Profile = () => {
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
                        <Dropdown className="Profile-DropDown">
                            <label className="Profile-Label" htmlFor="dropdown_combine">
                                Комбинат
                            </label>
                            <Dropdown.Toggle id="dropdown_combine">Dropdown Button</Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
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
                        <Dropdown className="Profile-DropDown">
                            <label className="Profile-Label" htmlFor="dropdown_nationality">
                                Гражданство*
                            </label>
                            <Dropdown.Toggle id="dropdown_nationality">Dropdown Button</Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </form>
        </section>
    );
};
