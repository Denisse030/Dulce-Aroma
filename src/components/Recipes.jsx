import React, { useState, useEffect } from 'react';
import { assets, recipesData } from '../assets/assets';

const Recipes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) setCardsToShow(3);
      else if (window.innerWidth >= 640) setCardsToShow(2);
      else setCardsToShow(1);
    };
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const maxIndex = recipesData.length + 1 - cardsToShow;
  
  const nextRecipe = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };
  const prevRecipe = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="container mx-auto p-14 md:p-20 w-full bg-[#f9dfca] rounded-2xl shadow-md shadow-[#8f564530] flex flex-col mt-10" id="Recipes">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl sm:text-4xl font-serif text-[#8f5645] font-bold tracking-wide">
          Pastry Recipes
        </h1>
        <div className="h-1 w-16 bg-[#c29b86] rounded-full mt-2 mb-6"></div>
        <p className="text-[rgb(143,86,69)] max-w-88 text-center leading-relaxed mb-10">
          Bake a little happiness with our pastry recipes—flaky croissants, sweet treats, and comforting delights that warm your heart.
        </p>
      </div>

      <div className="flex justify-end items-center mb-8 gap-2">
        <button onClick={prevRecipe} className="p-3 bg-[#c29b86] rounded shadow hover:bg-[#b87a65] transition-colors" aria-label="Previous Recipe">
            <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button onClick={nextRecipe} className="p-3 bg-[#c29b86] rounded shadow hover:bg-[#b87a65] transition-colors" aria-label="Next Recipe">
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      <div className="overflow-x-auto snap-x snap-mandatory">
        <div className="flex gap-8 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}>
          {recipesData.map((recipe, index) => (
            <div key={index} className={`flex-none ${cardsToShow === 1 ? 'w-full' : cardsToShow === 2 ? 'w-1/2' : 'w-1/3'} relative`}>
              <img className="w-full h-auto rounded-xl shadow-lg shadow-[#8f564530] mb-2" src={recipe.image} alt={recipe.title}/>
              <a href={recipe.image} download className="inline-block px-3 py-2 bg-[#c29b86] text-white rounded hover:bg-[#b87a65] transition-colors text-sm">Download</a>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
