import React from 'react'
import CategoryStyle from './Category.module.css'



export default function Category({ category, onCategoryClick }) {
  return (
    <div
      onClick={() => {
        console.log("Clicked category:", category.strCategory);
        onCategoryClick(category.strCategory);
      }}
      className="cursor-pointer text-stone-700 main-font focus:!bg-[#21463E]  w-fit py-1.5 px-2.5 rounded-3xl border-1 hover:bg-[#21463E] hover:text-white transition duration-300">
     
      <p>{category.strCategory}</p>
    </div>
  );
}
