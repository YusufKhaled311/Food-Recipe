import React from 'react'
import SearchStyle from './Search.module.css'
import { Link } from 'react-router-dom'

export default function Search({setSearch}) {
  return (
    <>


      <div className=' w-3/4 md:w-1/2  mx-auto py-2  '>
        <div className="w-full">

          <div className="relative">
            <input className="w-full bg-transparent placeholder:text-[#458964] text-[#21463e] text-sm border border-stone-300 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-[#36695d] hover:border-[#36695d] shadow-sm focus:shadow" placeholder="Search recipes..."
              
            onChange={(e)=>setSearch(e.target.value)}
            />
            <button
              className="absolute top-1.5 right-1.5 flex  items-center justify-center rounded bg-[#458964] py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-[#21463e] focus:shadow-none active:bg-[#21463e] hover:bg-[#21463e] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ">
                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
              </svg>
              
            </button>
          </div>
        </div>

      

      </div>




    </>
  )
}
