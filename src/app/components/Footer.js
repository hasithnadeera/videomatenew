"use client";

import Image from 'next/image';
import { memo } from 'react';
import { usePathname } from 'next/navigation';
import SocialIcon from './SocialIcon';
import { SOCIAL_ICONS } from '../constants';

const Footer = memo(function Footer() {
  const pathname = usePathname();
  const isBlogPage = pathname.startsWith('/blog');

  return (
    <footer className={`py-8 md:py-12 px-4 pb-16 md:pb-20 ${isBlogPage ? 'bg-white' : ''}`}>
      <div className={`h-px w-11/12 md:w-5/8 mx-auto bg-gradient-to-r from-[#C79FFF] to-[#B47DFF] mb-12 md:mb-20 ${isBlogPage ? 'hidden' : ''}`} />
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Left side: Logo and address */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <Image
              src={isBlogPage ? "/logo-black.svg" : "/logo.png"}
              alt="Videomate Logo"
              width={160}
              height={48}
              className="object-contain md:w-[200px] md:h-[60px]"
            />
            <div className={`mt-3 md:mt-2 text-xs md:text-sm text-center md:text-left ${isBlogPage ? 'text-black' : 'text-white'}`}>
              <p>2nd Floor, No 150, Panadura Road,</p>
              <p>Horana, Sri Lanka</p>
            </div>
          </div>

          {/* Right side: Social icons and copyright */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-2">
              {SOCIAL_ICONS.map((social, index) => (
                <SocialIcon
                  key={index}
                  name={social.name}
                  href={social.url}
                  icon={social.icon}
                  isBlogPage={isBlogPage}
                />
              ))}
            </div>
            {/* Mobile: Two lines */}
            <div className={`block md:hidden text-xs leading-relaxed text-center ${isBlogPage ? 'text-black' : 'text-white'}`}>
              <p>© 2025 Videomate</p>
              <p>World-class edits at Asia-smart prices.</p>
            </div>
            {/* Desktop: One line */}
            <p className={`hidden md:block text-sm leading-relaxed ${isBlogPage ? 'text-black' : 'text-white'}`}>
              © 2025 Videomate — World-class edits at Asia-smart prices.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;