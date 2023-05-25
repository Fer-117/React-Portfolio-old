import React from 'react';

export default function Home() {
  return (
    <div className="container pt-5 pb-5 mb-2">
      <h1>Resume</h1>
      <p>This is where my resume goes</p>
      <embed
        src="../Assets/Resume-Fernando-Sanchez.pdf"
        type="application/pdf"
        width="100%"
        height="600px"
      />
    </div>
  );
}
