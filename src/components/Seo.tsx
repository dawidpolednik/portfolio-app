import Head from 'next/head';
import { title } from 'process';
import { FC, PropsWithChildren } from 'react';

type SeoProps = PropsWithChildren<{
  title: string;
  description: string;
  canonicalUrl: string;
  robots?: string[];
  og: {
    title?: string;
    description?: string;
    imageSrc: string;
  };
  locale: string;
}>;

export const Seo: FC<SeoProps> = ({
  title,
  description,
  canonicalUrl,
  robots,
  og,
  locale,
  children,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel='canonical' href={canonicalUrl} />
      <meta name='description' content={description} />
      <meta name='robots' content={robots?.join(', ') ?? 'noindex, nofollow'} />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:title' content={og?.title || title} />
      {og?.imageSrc && <meta property='og:image' content={og.imageSrc} />}
      {(og?.description || description) && (
        <meta
          property='og:description'
          content={og?.description || description}
        />
      )}
      <meta property='og:type' content='website' />
      <meta property='og:locale' content={locale} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:title' content={title} />
      {children}
    </Head>
  );
};
