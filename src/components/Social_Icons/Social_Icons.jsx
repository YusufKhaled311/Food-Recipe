import React from 'react'


export default function SocialIcons() {
  return (
  <>
  
   <div className='social_icon flex gap-4 '>
          <div className={`rounded-md bg-[#458964] hover:bg-[#21463e]  transition duration-300 cursor-pointer  text-white flex justify-center items-center w-[30px] h-[30px]  `}>
            <i className="fa-brands fa-linkedin-in"></i>       </div>
          <div className={`rounded-md  bg-[#458964] hover:bg-[#21463e]  transition duration-300 cursor-pointer  text-white flex justify-center items-center w-[30px] h-[30px] `}>
            <i className="fa-brands fa-facebook-f   "></i>          </div>
          <div className={`rounded-md  bg-[#458964] hover:bg-[#21463e]  transition duration-300 cursor-pointer  text-white flex justify-center items-center w-[30px] h-[30px] `}>
            <i className="fa-brands fa-github"></i>
          </div>

        </div>
  
  </>
  )
}
