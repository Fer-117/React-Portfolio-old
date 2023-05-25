import React from 'react';

import header from '../CSS/header.css';

function Header({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs bg-primary justify-content-end fixed-top">
      <li className="nav-item header">
        <a
          href="#AboutMe"
          onClick={() => handlePageChange('AboutMe')}
          className={
            currentPage === 'AboutMe'
              ? 'nav-link active text-black '
              : 'nav-link text-black '
          }
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={
            currentPage === 'Portfolio'
              ? 'nav-link active text-black'
              : 'nav-link text-black'
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          className={
            currentPage === 'Contact'
              ? 'nav-link active text-black'
              : 'nav-link text-black'
          }
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          className={
            currentPage === 'Resume'
              ? 'nav-link active text-black'
              : 'nav-link text-black'
          }
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Header;
