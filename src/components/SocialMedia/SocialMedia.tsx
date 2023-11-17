import { FC, useMemo } from 'react';
import FacebookIcon from '~/images/facebook-icon.svg';
import LinkedinIcon from '~/images/linkedin-icon.svg';
import GithubIcon from '~/images/github-icon.svg';
import StackoverflowIcon from '~/images/stackoverflow-icon.svg';

type SocialLinkProps = SocialMedium;

const SocialMedia: FC<SocialLinkProps> = ({ href, type }) => {
  const icon = useMemo(() => {
    switch (type) {
      case 'facebook':
        return <FacebookIcon />;
      case 'linkedin':
        return <LinkedinIcon />;
      case 'github':
        return <GithubIcon />;
      case 'stackoverflow':
        return <StackoverflowIcon />;
    }
  }, [type]);

  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      {icon}
    </a>
  );
};
export default SocialMedia;
