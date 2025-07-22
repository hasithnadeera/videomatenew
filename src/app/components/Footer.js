import Image from 'next/image';
import { memo } from 'react';
import SocialIcon from './SocialIcon';
import { SOCIAL_ICONS } from '../constants';

const Footer = memo(function Footer() {

  return (
    <footer className="py-12 px-4 pb-20">
  <div className="h-px w-5/8 mx-auto bg-gradient-to-r from-[#C79FFF] to-[#B47DFF] mb-20 " />
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Left side: Logo and address */}
          <div className="flex flex-col items-start mb-6 md:mb-0">
            <Image 
              src="/logo.png" 
              alt="Videomate Logo" 
              width={200} 
              height={60} 
              className="object-contain"
            />
            <div className="mt-2 text-sm text-white">
              <p>2nd Floor, No 150, Panadura Road,</p>
              <p>Horana, Sri Lanka</p>
            </div>
          </div>

          {/* Right side: Social icons and copyright */}
          <div className="flex flex-col items-end text-right">
            <div className="flex items-center space-x-4 mb-2">
              {SOCIAL_ICONS.map((social, index) => (
                <SocialIcon
                  key={index}
                  name={social.name}
                  href={social.url}
                  icon={social.icon}
                />
              ))}
            </div>
            <p className="text-sm text-white">
              © 2025 Videomate — World-class edits at Asia-smart prices.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;