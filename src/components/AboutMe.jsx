import React from 'react';

import style from '../CSS/style.css';

export default function About() {
  return (
    <div className="bg-light d-flex flex-column scrollable-content pt-5 pb-5">
      <div className="container">
        <h1 className="text-center">About Page</h1>
        <div className="d-flex justify-content-center ">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hi, my name is Fernando Sanchez
            Gutierrez and I am currently enrolled in a Web Development bootcamp
            imparted by Technologico de Monterrey partenered with edx. Over the
            last 6 months I have learned the MERN stack as well as other
            important technologies including SQL, handlebars, web and third
            party APIs.
          </p>
        </div>
      </div>
    </div>
  );
}
