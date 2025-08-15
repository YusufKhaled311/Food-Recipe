import React from 'react'
import FooterStyle from './Footer.module.css'
import SocialIcons from '../Social_Icons/Social_Icons'

export default function Footer() {
  return (
    <>
      <div className='  flex flex-col  justify-center items-center py-5 '>
       <SocialIcons/>
        <p className='text-[0.85rem] font-[500]    py-2  mt-2'>© 2025 Yusuf Khaled ™. All Rights Reserved.</p>
      </div>
    </>
  )
}
