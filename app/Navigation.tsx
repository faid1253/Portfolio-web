'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
    const [isOpen, SetIsOpen] = useState (false);
    const pathname = usePathname();
    console.log('Current pathname:', pathname);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Content Creation', path: '/content' },
        { name: 'Projects', path: '/projects' }, 
        { name: 'Academics', path: '/academics' },
        { name: 'About Me', path: '/about' },
        { name: 'Mission', path: '/mission' },
        { name: 'Experience', path: '/experience' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
        { name: 'Learn More', path: '/learn' },
        { name: 'Background', path: '/background' },
      ];
    
      return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
          {/* Desktop Navigation */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/"className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent
                         hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300"
            >
                  Faidh Naife
                </Link>
              </div>
    
                   {/* Desktop Menu with improved layout */}
          <div className="hidden lg:block flex-grow"> {/* Changed from md to lg for more space */}
            <div className="flex items-center justify-end space-x-1"> {/* Reduced space between items */}
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-2 py-2 rounded-md text-sm font-medium transition-all duration-300 
                    ${pathname === item.path
                      ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 scale-105'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 hover:scale-105'
                    }
                    relative group`
                  }
                >
                  <span className="relative">
                    {item.name}
                    <span className={`absolute inset-x-0 bottom-0 h-0.5 transform scale-x-0 transition-transform duration-300 
                      ${pathname === item.path 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-x-100' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-x-100'}`
                    }/>
                  </span>
                </Link>
              ))}
            </div>
          </div>
              {/* Hamburger Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => SetIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Hamburger Icon */}
                  <svg
                    className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  {/* Close Icon */}
                  <svg
                    className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
    
           {/* Mobile Menu with enhanced animations */}
      <div 
        className={`${isOpen ? 'block' : 'hidden'} lg:hidden
          animate-fade-in transition-all duration-300 ease-in-out`
        }
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300
                ${pathname === item.path
                  ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5'
                }`}
              onClick={() => SetIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

    
    export default Navigation;