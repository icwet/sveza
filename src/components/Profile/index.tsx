import './index.sass';
import React, { FC, useRef, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { ProfileStep1 } from './-Step1';
import { ProfileStep2 } from './-Step2';
import { ProfileStep3 } from './-Step3';
import { ProfileStep4 } from './-Step4';

export const Profile: FC<{}> = () => {
    const [isSent, setIsSent] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhoneName] = useState('');
    const [organization, setOrganizationName] = useState('СВЕЗА Усть-Ижора');

    const nameRef = useRef<any>('');
    const lastNameRef = useRef<any>('');
    const middleNameRef = useRef<any>('');
    const phoneRef = useRef<any>('');
    const organizationRef = useRef<any>('');

    const handleChange = () => {
        const firstName = nameRef.current.value;
        const middleName = lastNameRef.current.value;
        const lastName = middleNameRef.current.value;
        const phone = phoneRef.current.value;
        const organization = organizationRef.current.value;

        setFirstName(firstName);
        setMiddleName(middleName);
        setLastName(lastName);
        setPhoneName(phone);
        setOrganizationName(organization);
    };

    // const handleChange = (event: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    //     const target = event.target as HTMLInputElement | HTMLSelectElement;
    //     const value = target.value;
    //     const name = target.name;
    // };

    const submit = (e: any) => {
        e.preventDefault();
        fetch(`https://platform.north.ai/un/vacancies/1259/candidate-profiles`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': 'h2NSTRnEsnygmRGjSkBevQu28KXVTnbP',
            },
            body: JSON.stringify({ firstName }),
        })
            .then(() => setIsSent(true))
            .catch(() => alert('There was an error, please try again'));
    };

    return (
        <section className="Profile">
            <h2 className="Profile-Title">Анкета</h2>
            <form className="Profile-Form" onSubmit={submit}>
                <div className="Profile-Main">
                    <ProfileStep1
                        firstName={firstName}
                        middleName={middleName}
                        lastName={lastName}
                        phone={phone}
                        organization={organization}
                        handleChange={handleChange}
                        nameRef={nameRef}
                    />
                    <ProfileStep2 />
                    <ProfileStep3 />
                    <ProfileStep4 />
                </div>
            </form>
        </section>
    );
};
