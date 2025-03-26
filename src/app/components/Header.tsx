'use client';
import { Link, usePathname } from '@/i18n/navigation';

import React from 'react';


const Header = () => {
  const pathname = usePathname();
  return (
    <header className="bg-background border-b border-gray-200 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Learning Board</div>
          
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link 
                  href="/"
                  className={`hover:text-blue-600 ${pathname === '/' ? 'text-blue-600 font-medium' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about"
                  className={`hover:text-blue-600 ${pathname === '/about' ? 'text-blue-600 font-medium' : ''}`}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;