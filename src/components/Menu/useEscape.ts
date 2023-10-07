import { useEffect } from 'react';

export const useEscape = (onEscape: () => void) => {
  useEffect(() => {
    const handleEsc = (event: { key: string }) => {
      if (event.key === 'Escape') onEscape();
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onEscape]);
};
