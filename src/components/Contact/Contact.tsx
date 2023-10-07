'use client';

import axios from 'axios';
import { Form, Formik, FormikProps } from 'formik';
import React, { FC } from 'react';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { DoubleAngle } from '../DoubleAngle/DoubleAngle';
import styles from './Contact.module.scss';
import { Error } from './Errors';
import Input from './Input';
import TextArea from './TextArea';

const SEND_DATA_URL = 'https://server-nodemailer.herokuapp.com/send';

const Contact: FC = () => {
  const initialValues: FormMailerValues = {
    name: '',
    email: '',
    message: '',
  };

  const { t } = useTranslation();

  return (
    <section className={styles.container} id="contact">
      <div className={styles.contactHeader}>
        <h2 className={styles.contactTitle}>{t('contactSection.header')}</h2>
      </div>
      <div className={styles.contactBackground}>
        <div className={styles.contactSection}>
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape({
              name: Yup.string().min(5).required(),
              email: Yup.string().email().required(),
              message: Yup.string().min(10).required(),
            })}
            onSubmit={async (
              values,
              { resetForm, setStatus, setErrors, setSubmitting }
            ) => {
              setStatus({ success: false });
              try {
                await axios.post<FormMailerValues>(SEND_DATA_URL, values);
                resetForm();
                setStatus({ success: t('contactSection.requestResolved') });
              } catch (error) {
                setStatus({
                  error: t('contactSection.errorMessages.requestRejected'),
                });
                setErrors(error);
              } finally {
                setSubmitting(false);
              }
            }}
            render={({
              errors,
              touched,
              values,
              handleChange,
              status,
            }: FormikProps<FormMailerValues>) => (
              <Form className={styles.contactForm}>
                {errors.name && (
                  <Error
                    touched={!!touched.name}
                    name={errors.name}
                    content={t('contactSection.errorMessages.name')}
                  />
                )}
                <Input
                  name="name"
                  placeholder={t('contactSection.placeholders.name')}
                  value={values.name}
                  onChange={handleChange}
                />
                {errors.email && (
                  <Error
                    touched={!!touched.email}
                    name={errors.email}
                    content={t('contactSection.errorMessages.email')}
                  />
                )}
                <Input
                  name="email"
                  placeholder={t('contactSection.placeholders.email')}
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.message && (
                  <Error
                    touched={!!touched.message}
                    name={errors.message}
                    content={t('contactSection.errorMessages.message')}
                  />
                )}

                <TextArea
                  name="message"
                  placeholder={t('contactSection.placeholders.message')}
                  value={values.message}
                  onChange={handleChange}
                />
                <div className={styles.buttonsContainer}>
                  <input
                    className={styles.formButton}
                    type="reset"
                    value={`${t('contactSection.buttons.reset')}`}
                  />
                  <input
                    className={styles.formButton}
                    type="submit"
                    value={`${t('contactSection.buttons.submit')}`}
                  />
                </div>
                {status && (
                  <div className={styles.confirmationContainer}>
                    <p
                      className={
                        (status.success && styles.confirmationMessage) ||
                        (status.error && styles.errorMessage)
                      }
                    >
                      {status.success ? status.success : status.error}
                    </p>
                  </div>
                )}
              </Form>
            )}
          />
        </div>
        <DoubleAngle onUp={true} subPage="projects" />
      </div>
    </section>
  );
};

export default Contact;
