import React, { FC, useCallback, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import styles from './Contact.module.scss';
import Input from './Input';
import TextArea from './TextArea';
import { AnimatedText } from '@/components/AnimatedText/AnimatedText';
import sendMail from '@/service/email-service';
import { Controller, useForm } from 'react-hook-form';
import { FormValues } from '@/models/FormValues';

const Contact: FC = () => {
  const defaultValues: FormValues = {
    name: '',
    email: '',
    message: '',
  };

  const { t } = useTranslation();

  const schema = yup.object().shape({
    name: yup.string().required().min(5),
    email: yup.string().required().email(),
    message: yup.string().required().min(10),
  });

  const {
    handleSubmit,
    control,
    formState,
    trigger,
    reset,
    resetField,
    getValues,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const [isRequestRejected, setIsRequestRejected] = useState<boolean>(false);

  const { errors, isLoading, isSubmitSuccessful, isSubmitting } = formState;

  const onSubmit = useCallback(async (data: FormValues) => {
    const { name, email, message } = data;
    try {
      await sendMail({
        name,
        email,
        message,
      });
      // reset();
    } catch (error) {
      console.log({ error });
      setIsRequestRejected(true);
    }
  }, []);

  return (
    <section className={styles.container} id='contact'>
      <div className={styles.contactHeader}>
        <AnimatedText
          text={t('contactSection.header')}
          className={styles.contactTitle}
          el='h2'
        />
      </div>
      <div className={styles.contactBackground}>
        <div className={styles.contactSection}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.contactForm}
          >
            <Controller
              control={control}
              defaultValue={defaultValues.name}
              name='name'
              render={({
                field: { value, onChange },
                fieldState: { error, isTouched },
              }) => {
                console.log('isTouched :>> ', isTouched);
                return (
                  <Input
                    name='name'
                    placeholder={t('contactSection.placeholders.name')}
                    value={value}
                    onChange={onChange}
                    errorMessage={
                      error?.type === 'required'
                        ? t('contactSection.errors.name.required')
                        : error?.type === 'min'
                        ? t('contactSection.errors.name.min')
                        : undefined
                    }
                  />
                );
              }}
            />

            <Controller
              control={control}
              defaultValue={defaultValues.email}
              name='email'
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => {
                return (
                  <Input
                    name='email'
                    placeholder={t('contactSection.placeholders.email')}
                    value={value}
                    onChange={onChange}
                    errorMessage={
                      error?.type === 'required'
                        ? t('contactSection.errors.email.required')
                        : error?.type === 'email'
                        ? t('contactSection.errors.email.invalid')
                        : undefined
                    }
                  />
                );
              }}
            />

            <Controller
              control={control}
              defaultValue={defaultValues.message}
              name='message'
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => {
                return (
                  <TextArea
                    name='message'
                    placeholder={t('contactSection.placeholders.message')}
                    value={value}
                    onChange={onChange}
                    errorMessage={
                      error?.type === 'required'
                        ? t('contactSection.errors.message.required')
                        : error?.type === 'min'
                        ? t('contactSection.errors.message.min')
                        : undefined
                    }
                  />
                );
              }}
            />

            <div className={styles.buttonsContainer}>
              <input
                className={styles.formButton}
                type='button'
                onClick={() => {
                  reset();
                  setIsRequestRejected(false);
                }}
                value={`${t('contactSection.buttons.reset')}`}
                disabled={isSubmitting}
              />
              <input
                className={styles.formButton}
                type='submit'
                value={`${t('contactSection.buttons.submit')}`}
                disabled={isSubmitting}
              />
            </div>

            {(isSubmitSuccessful || isRequestRejected) && (
              <div className={styles.confirmationContainer}>
                <p className={styles.confirmationMessage}>
                  {isSubmitSuccessful
                    ? t('contactSection.requestResolved')
                    : t('contactSection.requestRejected')}
                </p>
              </div>
            )}
          </form>

          {/* <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape({
              name: Yup.string().min(5).required(),
              email: Yup.string().email().required(),
              message: Yup.string().min(10).required(),
            })}
            onSubmit={async (
              values,
              { resetForm, setStatus, setErrors, setSubmitting },
            ) => {
              setStatus({ success: false });
              try {
                await sendMail({
                  name: values.name,
                  email: values.email,
                  message: values.message,
                });
                resetForm();
                setStatus({ success: t('contactSection.requestResolved') });
              } catch (error) {
                setStatus({
                  error: t('contactSection.errorMessages.requestRejected'),
                });
                setErrors(error as any);
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
                  name='name'
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
                  name='email'
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
                  name='message'
                  placeholder={t('contactSection.placeholders.message')}
                  value={values.message}
                  onChange={handleChange}
                />
                <div className={styles.buttonsContainer}>
                  <input
                    className={styles.formButton}
                    type='reset'
                    value={`${t('contactSection.buttons.reset')}`}
                  />
                  <input
                    className={styles.formButton}
                    type='submit'
                    value={`${t('contactSection.buttons.submit')}`}
                  />
                </div> */}
          {/* {status && (
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
              </Form> */}
          {/* )} */}
          {/* /> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
