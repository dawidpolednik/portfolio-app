import { FC } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Home from '@/components/Home/Home';
import { GetStaticPropsContext } from 'next';

export type LanguageOptions = 'pl' | 'en';

export async function getStaticProps(context: GetStaticPropsContext) {
  // extract the locale identifier from the URL
  const { locale } = context;

  console.log('locale :>> ', locale);

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
}

const App: FC = () => {
  return <Home />;
};

export default App;
