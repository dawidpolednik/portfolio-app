import { FC } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Home from '@/components/Home/Home';
import { GetStaticPropsContext } from 'next';
import { Seo } from '@/components/Seo';
import OGImage from '~/images/og-image.png';

export type LanguageOptions = 'pl' | 'en';

export async function getStaticProps(context: GetStaticPropsContext) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
}

const App: FC = () => {
  const { t } = useTranslation('common');

  const { i18n } = useTranslation();

  const currentLocale = i18n?.language;

  return (
    <>
      <Seo
        title={t('seo.title')}
        description={t('seo.description')}
        canonicalUrl={`https://dawidpolednik.pl${
          currentLocale === 'pl' ? '/' : currentLocale + '/'
        }`}
        og={{
          imageSrc: OGImage.src,
        }}
        locale={currentLocale}
      />
      <Home />
    </>
  );
};

export default App;
