import React, { FC, useCallback, useEffect, useState } from 'react';
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
import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator';

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

  const { handleSubmit, control, formState, reset } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const [isRequestRejected, setIsRequestRejected] = useState<boolean>(false);

  const { isSubmitSuccessful, isSubmitting } = formState;

  const onSubmit = useCallback(async (data: FormValues) => {
    const { name, email, message } = data;
    try {
      await sendMail({
        name,
        email,
        message,
      });
    } catch (error) {
      console.error({ error });
      setIsRequestRejected(true);
    }
  }, []);

  useEffect(() => {
    if (isSubmitSuccessful) {
      setTimeout(() => {
        reset();
      }, 5000);
    }
    // eslint-disable-next-line
  }, [isSubmitSuccessful]);

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
                fieldState: { error },
              }) => {
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

            <LoadingIndicator
              visible={isSubmitting}
              className={styles.formSpinnerWrapper}
            />

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
        </div>
      </div>
    </section>
  );
};

export default Contact;
