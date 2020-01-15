import './index.sass';
import React, { FC } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik';
import { ProfileStep1 } from './-Step1';
import { ProfileStep2 } from './-Step2';
import { ProfileStep3 } from './-Step3';
import { ProfileStep4 } from './-Step4';

export const Profile: FC<{}> = () => {
    const initialValues: Profile = { firstName: '', lastName: '', middleName: '', organization: '', phone: '' };

    return (
        <section className="Profile">
            <h2 className="Profile-Title">Анкета</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}>
                <Form className="Profile-Form">
                    <div className="Profile-Main">
                        <ProfileStep1 />
                        <ProfileStep2 />
                        <ProfileStep3 />
                        <ProfileStep4 />
                    </div>
                </Form>
            </Formik>
        </section>
    );
};
