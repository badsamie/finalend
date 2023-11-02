import React, { useState } from "react";

const flags = ["🇺🇸", "🇰🇷", "🇨🇳", "🇹🇷"];

const FlagSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    if (currentIndex < flags.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-1/2 mx-auto p-4">
      <div className="flex justify-center items-center">
        <button onClick={goToPrev} className="px-2 py-1 mr-2 bg-violet-300">
        ←
        </button>
        <span className="text-4xl">{flags[currentIndex]}</span>
        <button onClick={goToNext} className="px-2 py-1 ml-2 bg-violet-300 ">
          →
        </button>
      </div>
    </div>
  );
};

export default FlagSlider;
