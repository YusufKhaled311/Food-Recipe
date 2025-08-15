import React from 'react';
import { Link } from 'react-router-dom';

export default function Recipes({ meal }) {
  return (
    <main>
      
      <Link to={`/recipeDetails/${meal.idMeal}`}>
        <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col group">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-40 object-cover rounded-xl group-hover:scale-110 transition-all duration-500"
          />
          <div className="mt-4 text-center">  
            <h2 className="font-semibold text-gray-800 text-[0.9rem] truncate whitespace-nowrap overflow-hidden" title={meal.strMeal} >
              {meal.strMeal}
            </h2>

            {/* <div className="flex items-center justify-center mt-1">
              <span className="ml-2 text-sm text-gray-600">
                <i className="fa-solid fa-earth-americas text-[#21463e] me-2"></i>
                <span>Egyptian</span>
              </span>
            </div> */}
          </div>

     
          <div className="mt-4 flex justify-center items-center border-t pt-3">
            <button className="hover:cursor-pointer group-hover:bg-[#21463e] hover:bg-[#21463e] bg-[#07120f] dancing-font text-[1.2rem] font-bold text-white px-4 py-1 rounded-full w-full transition">
              View Recipe
            </button>
          </div>
        </div>
      </Link>
    </main>
  );
}
