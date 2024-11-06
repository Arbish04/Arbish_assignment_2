// components/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-400">About</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-400">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
