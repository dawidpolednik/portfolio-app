import { useInView } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

interface Config {
  sectionName:
    | 'aboutMe'
    | 'contact'
    | 'education'
    | 'projects'
    | 'technologies';
}

export const useHandleIdSection = ({ sectionName }: Config) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, {
    margin: '-200px',
  });

  const { replace, pathname } = useRouter();

  useEffect(() => {
    if (isInView) {
      console.log('sectionName :>> ', sectionName);
      replace({
        pathname,
        hash: sectionName,
      });
    }
  }, [isInView, sectionName, replace, pathname]);

  return {
    containerRef,
  };
};
