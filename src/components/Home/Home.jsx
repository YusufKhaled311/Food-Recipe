import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Category from '../Category/Category';
import Recipes from '../Recipes/Recipes';
import { BounceLoader } from 'react-spinners';

export default function Home({ searchTerm }) {
  const [allCategory, setAllCategory] = useState([]);
  const [allMeals, setAllMeals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch categories 
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(
          'https://www.themealdb.com/api/json/v1/1/categories.php'
        );
        setAllCategory(data.categories);
      } catch (error) {
        console.log('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch meals
  const fetchMeals = useCallback(async () => {
    setLoading(true);
    try {
      let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      if (searchTerm.trim()) {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
      } else if (selectedCategory) {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
      } else {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`;
      }

      const { data } = await axios.get(url);
      setAllMeals(data.meals || []);
    } catch (error) {
      console.error('Error fetching meals:', error);
      setAllMeals([]);
    } finally {
      setLoading(false);
    }
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  return (
    <>
      <h1 className="capitalize text-[1.2rem] text-center sm:text-start text-[#21463e] md:text-[1.6rem] main-font py-3.5 font-bold">
        learn, cook, & eat your food
      </h1>

     
      {!searchTerm && (
        <div className="flex gap-3.5 flex-wrap pb-2 sm:w-3/4 w-full">
         
          {allCategory.map((category) => (
            <Category
              key={category.idCategory}
              category={category}
              onCategoryClick={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
          ))}
        </div>
      )}



      {/* Recipes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
        {loading ? (
          <p className="col-span-full h-screen text-center flex justify-center items-center">
               <BounceLoader  color="#458964" size={100}  /> </p> )
                : allMeals.length > 0 ? (  allMeals.map((meal) => <Recipes key={meal.idMeal} meal={meal} />)) : (
          <p className="col-span-full text-center text-red-600">
            No meals found.
          </p>
        )}
      </div>
    </>
  );
}
