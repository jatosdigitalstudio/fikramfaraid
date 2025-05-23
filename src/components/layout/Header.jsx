'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#service' },
    { name: 'Team', path: '/#team' },
    { name: 'Client', path: '/#client' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router]);

  return (
    <nav className={`sticky w-full ${isScrolled ? "bg-white" : "bg-transparent"} top-0 transition-all !z-90 md:px-32`}>
      <div className="lg:container mx-auto p-6 ">
        <div className="flex justify-between items-center">
          <Link href="/">
            {
                isScrolled ? 
                <Image src="/Logo-fflaw.png" width={250} height={100} alt='Fikram Faraid & Co' />
                : <Image src="/Logo-fflaw-white.png" width={250} height={100} alt='Fikram Faraid & Co' />
            }
          </Link>


          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  href={item.path}
                  className={`${isScrolled ? 'text-black' : 'text-white'} font-reguler uppercase transition-colors hover-underline-animation`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>


          <button 
            className="md:hidden p-2 flex flex-col justify-center items-center"
            aria-label='hamburger'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span 
              className={`${isScrolled ?"bg-black":"bg-white"} block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5' }`} >
            </span>
            <span 
              className={`${isScrolled ?"bg-black":"bg-white"} block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 
                ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} >
            </span>
            <span className={`${isScrolled ?"bg-black":"bg-white"} block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
              ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} >
            </span>  
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="flex flex-col px-2 md:hidden my-4 space-y-4 transition-all duration-500 ease-out">
            {navItems.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${isScrolled ? 'text-black' : 'text-black'} font-medium transition-colors hover-underline-animation`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}