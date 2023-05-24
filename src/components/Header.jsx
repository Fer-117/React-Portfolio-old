import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

import header from '../CSS/navigation.css';

function Header({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs header">
      <li className="nav-item">
        <a
          href="#AboutMe"
          onClick={() => handlePageChange('AboutMe')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          //  TODO: Add a comment explaining what this logic is doing

          className={
            currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Resume"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Header;
