import { Locale } from 'next/dist/compiled/@vercel/og/satori';
import 'server-only';

export type LocaleType = 'pl' | 'en';

const dictionaries = {
  pl: () => import('@/dictionaries/pl.json').then(module => module.default),
  en: () => import('@/dictionaries/en.json').then(module => module.default),
};

export const getDictionary = async (locale: keyof typeof dictionaries) =>
  dictionaries[locale]();
