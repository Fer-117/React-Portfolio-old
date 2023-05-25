import React from 'react';

export default function Footer() {
  return (
    <div className="bg-primary fixed-bottom d-flex align-items-center justify-content-evenly text-center">
      <ul className="list-unstyled">
        <li className="d-inline-block m-2">
          <a
            href="https://www.linkedin.com/in/fernando-sanchez-309848208/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fab fa-linkedin fa-lg"
              style={{ color: 'white', fontSize: '24px' }}
            ></i>
            {/* Font Awesome LinkedIn icon */}
          </a>
        </li>
        <li className="d-inline-block m-2">
          <a
            href="https://github.com/Fer-117"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fab fa-github fa-lg"
              style={{ color: 'white', fontSize: '24px' }}
            ></i>
            {/* Font Awesome GitHub icon */}
          </a>
        </li>
      </ul>
    </div>
  );
}
