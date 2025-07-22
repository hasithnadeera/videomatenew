import PropTypes from 'prop-types';
import React, { memo } from 'react';
import Image from 'next/image';

const SocialIcon = memo(function SocialIcon({ name, href, icon: iconProp }) {
  // Check if the icon is already a React element (for backward compatibility)
  const isReactElement = React.isValidElement(iconProp);
  
  return (
    <a
      href={href}
      className="text-white hover:text-white transition-colors duration-200 social-icon-hover"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
    >
      {isReactElement ? (
        iconProp
      ) : typeof iconProp === 'string' ? (
        <Image 
          src={iconProp} 
          alt={`${name} icon`} 
          width={24} 
          height={24}
          className="filter brightness-0 invert"
        />
      ) : null}
    </a>
  );
});

SocialIcon.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]).isRequired
};

export default SocialIcon;