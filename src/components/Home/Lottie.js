// src/components/Home/LottieAnimation.js
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../Assets/home-logo.json'; // Replace with the path to your animation file

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <Lottie options={defaultOptions} height={400} width={400} />;
};

export default LottieAnimation;
