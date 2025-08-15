import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { BounceLoader } from 'react-spinners';

export default function RecipeDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        setLoading(true);
        setError("");

        const { data } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        if (!data.meals) {
          setError("Recipe not found");
          setMeal(null);
        } else {
          setMeal(data.meals[0]);
        }
      } catch (err) {
        setError("Failed to fetch recipe");
        setMeal(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchMealDetails();
  }, [id]);

  if (loading) {
    return (
      <div className='h-screen w-full flex justify-center items-center'>
        <BounceLoader color="#458964" size={100} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex flex-col justify-center items-center text-center p-5">
        <h2 className="text-2xl font-bold text-red-500 mb-4">{error}</h2>
        <Link to="/" className="text-[#21463e] underline">
          Back to Home
        </Link>
      </div>
    );
  }

  // Gather ingredients dynamically
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient) ingredients.push({ ingredient, measure });
  }

  const IMAGE_HEIGHT = 400;

  return (
    <main className="p-5">
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">

        {/* Image */}
        <div className="w-full lg:w-3/4 flex justify-center flex-col items-center order-1 lg:order-2">
          <div className='mb-5'>
            <h1 className="text-2xl md:text-3xl text-center font-bold text-[#21463e]">
              {meal.strMeal}
            </h1>
          </div>
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="rounded-2xl shadow-lg object-cover w-full max-w-[600px]"
            style={{ height: `${IMAGE_HEIGHT}px` }}
            loading="lazy"
          />
        </div>

        {/* Ingredients */}
        <div className='w-full lg:w-1/4 order-2 lg:order-1'>
          <div className='mb-5'>
            <div className='py-1.5 px-4 rounded-3xl text-[#21463e] flex items-center justify-center'>
              <i className="fa-solid fa-earth-europe"></i>
              <span className='px-2'>{meal.strArea}</span>
            </div>
          </div>
          <div
            className="bg-white rounded-xl p-4 shadow-md overflow-y-auto mt-6 lg:mt-0"
            style={{ height: `${IMAGE_HEIGHT}px` }}
          >
            <h3 className="capitalize font-bold pb-3 text-[1.2rem] text-stone-800 border-b border-stone-300 mb-3">
              Ingredients
            </h3>
            <div className="flex flex-col gap-2">
              {ingredients.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center px-3 py-2 text-[0.95rem] font-medium bg-gray-50 rounded hover:bg-green-50 transition"
                >
                  <span>{item.ingredient}</span>
                  <span className="font-bold text-[0.85rem]">{item.measure}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8 bg-white p-6 rounded-2xl shadow-md">
        <h3 className="font-bold mb-4 text-[1.3rem] text-[#21463e]">Instructions</h3>
        <p className="text-[0.95rem] leading-relaxed whitespace-pre-line">
          {meal.strInstructions}
        </p>
      </div>
    </main>
  );
}
