"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, use } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isBlogPage = pathname.startsWith('/blog');

  const scrollToSection = (sectionId) => {
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    
    // If we're not on the home page, navigate there first
    if (pathname !== '/') {
      router.push('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop - 100,
            behavior: 'smooth'
          });
        } else if (sectionId === 'home') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // We're already on home page, just scroll
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop - 100,
            behavior: 'smooth'
          });
        } else if (sectionId === 'home') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  const handlePortfolioClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    router.push('/portfolio');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-center px-20 py-4 mt-8 gap-8 ">
      {/* Mobile Container */}
      <div className="md:hidden flex items-center justify-center w-full max-w-sm mx-auto bg-white/10 backdrop-blur-[50px] rounded-full px-6 py-4 border border-[#CFADFF] shadow-sm transition-all duration-300 ease-in-out">
        {/* Mobile Logo */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none relative z-50"
        >
          <Image 
             src={isBlogPage ? "/logo-black.svg" : "/logo.png"}
             alt="Videomate Logo"
             width={150}
             height={30}
             className={`object-contain transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
             style={{ transitionDelay: mobileMenuOpen ? '200ms' : '0ms' }}
           />
        </button>
      </div>
       
       {/* Desktop Layout */}
       <div className="hidden md:flex items-center justify-center gap-8 w-full ">
         {/* Logo - left */}
         <div className="flex items-center z-20 order-1">
           <div className="relative">
             <div 
               className="absolute inset-0 rounded-full blur-md hidden md:block"
               style={{ backgroundColor: '#B57FFE', opacity: 0.3 }}
             ></div>
            <Link href="/">
              <Image 
               src={isBlogPage ? "/logo-black.svg" : "/logo.png"}
               alt="Videomate Logo"
               width={180}
               height={36}
               className="object-contain relative z-10"
             />
            </Link>
           </div>
         </div>
         {/* Centered Nav Links - Desktop */}
         <div className="order-2 z-10">
           <div className="flex bg-white/10 backdrop-blur-[60px] rounded-full px-8 py-2 border border-[#CFADFF] shadow-sm font-bold text-lg relative">
             <NavLink href="#" onClick={() => scrollToSection('home')} pathname={pathname}>Home</NavLink>
             <NavLink href="/portfolio" onClick={handlePortfolioClick} pathname={pathname}>Portfolio</NavLink>
             
             <NavLink href="#" onClick={() => scrollToSection('testimonials')} pathname={pathname}>Testimonials</NavLink>
             <NavLink href="#" onClick={() => scrollToSection('FAQ')} pathname={pathname}>FAQs</NavLink>
             <NavLink href="/blog" pathname={pathname}>Blog</NavLink>
           </div>
         </div>
 
         {/* CTA Button - right (glassmorphism) */}
         <div className="z-30 order-3">
           <Link
             href="/call-booking"
             target="_blank"
             rel="noopener noreferrer"
             className="
               bg-gradient-to-r
               from-[#B47DFF]
               to-[#8F5CFF]
               text-white
               font-semibold
               text-lg
               px-8
               py-3
               rounded-full
               shadow-md
               transition
               hover:brightness-110
               flex items-center justify-center
               min-h-[48px]
               backdrop-blur-xl
               bg-white/10
               border border-white/20
             "
           >
             Book a call
           </Link>
         </div>
       </div>
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-x-0 top-8 flex items-start justify-center z-40 md:hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? '' : 'pointer-events-none'}`}
      >
        <div 
          className="bg-white/10 backdrop-blur-[50px] border border-[#CFADFF] shadow-lg mx-auto relative transition-all duration-500 ease-in-out overflow-hidden"  
          style={{
            width: mobileMenuOpen ? '90%' : 'calc(100% - 3rem)',
            maxWidth: '16rem',
            padding: mobileMenuOpen ? '2rem' : '0.75rem',
            borderRadius: mobileMenuOpen ? '2rem' : '9999px',
            transform: `scale(${mobileMenuOpen ? 1 : 0.98})`,
            transformOrigin: 'top center',
            opacity: mobileMenuOpen ? 1 : 0,
            height: mobileMenuOpen ? 'auto' : '0',
            minHeight: mobileMenuOpen ? '16rem' : '0',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            position: 'absolute',
            top: '16px',
            pointerEvents: mobileMenuOpen ? 'auto' : 'none'
          }}
        >
          {/* Only show close button when menu is open */}
          <button
            className={`absolute ${mobileMenuOpen ? 'top-6 left-6' : 'top-3 left-6'} text-white text-3xl transition-all duration-500 ease-in-out hover:rotate-90 hover:scale-110`}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            style={{
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? 'scale(1)' : 'scale(0.5)',
              pointerEvents: mobileMenuOpen ? 'auto' : 'none'
            }}
          >
            &times;
          </button>
          
          {/* Logo placeholder - intentionally empty to maintain layout */}
          <div 
            className="absolute left-6 top-3 transition-all duration-500 ease-in-out"
            style={{
              opacity: 0,
              pointerEvents: 'none'
            }}
          ></div>
          
          {/* Menu items */}
          <div 
            className="flex flex-col space-y-6 text-xl font-medium transition-all duration-500 ease-in-out" 
            style={{ 
              opacity: mobileMenuOpen ? 1 : 0, 
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
              marginTop: mobileMenuOpen ? '2.5rem' : '0',
              pointerEvents: mobileMenuOpen ? 'auto' : 'none',
              height: mobileMenuOpen ? 'auto' : '0',
              overflow: 'hidden'
            }}
          >
            <div className="transition-all duration-300 ease-in-out" style={{ transitionDelay: '150ms', opacity: mobileMenuOpen ? 1 : 0, transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)' }}>
              <NavLink href="#" onClick={() => scrollToSection('home')} pathname={pathname}>Home</NavLink>
            </div>
            <div className="transition-all duration-300 ease-in-out" style={{ transitionDelay: '200ms', opacity: mobileMenuOpen ? 1 : 0, transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)' }}>
              <NavLink href="/portfolio" onClick={handlePortfolioClick} pathname={pathname}>Portfolio</NavLink>
            </div>
            
            <div className="transition-all duration-300 ease-in-out" style={{ transitionDelay: '300ms', opacity: mobileMenuOpen ? 1 : 0, transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)' }}>
              <NavLink href="#" onClick={() => scrollToSection('testimonials')} pathname={pathname}>Testimonials</NavLink>
            </div>
            <div className="transition-all duration-300 ease-in-out" style={{ transitionDelay: '350ms', opacity: mobileMenuOpen ? 1 : 0, transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)' }}>
              <NavLink href="#" onClick={() => scrollToSection('FAQ')} pathname={pathname}>FAQs</NavLink>
            </div>
            <div className="transition-all duration-300 ease-in-out" style={{ transitionDelay: '250ms', opacity: mobileMenuOpen ? 1 : 0, transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)' }}>
              <NavLink href="/blog" pathname={pathname}>Blog</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children, active, onClick, pathname }) {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  // Check if we're on a blog page
  const isBlogPage = pathname && pathname.startsWith('/blog');
  
  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`px-5 py-2 rounded-full font-semibold transition
        ${active
          ? "text-purple-800"
          : isBlogPage
            ? "text-purple-800"
            : "text-white/90 hover:text-purple-300"
        }`}
    >
      {children}
    </Link>
  );
}
