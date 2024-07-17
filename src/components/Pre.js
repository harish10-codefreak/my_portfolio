// src/components/Pre.js
import React from 'react';
import { quantum } from 'ldrs';
import './pre.css'; // Assuming you have some CSS for the loader

quantum.register();

const Pre = ({ load }) => {
  return (
    <div className={`preloader ${load ? 'visible' : 'hidden'}`}>
      <l-quantum size="45" speed="1.75" color="black"></l-quantum>
    </div>
  );
};

export default Pre;
