import React, { FC } from 'react';
interface SocialLinkProps {
  href: string;
  className: string;
}

const SocialMedia: FC<SocialLinkProps> = ({ href, className }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <i className={`${className} `} aria-hidden="true"></i>
    </a>
  );
};
export default SocialMedia;
