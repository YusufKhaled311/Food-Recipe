import React from 'react'
import LayoutStyle from './Layout.module.css'
import Search from '../Search/Search'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import RecipeDetails from '../RecipeDetails/RecipeDetails'


export default function Layout({setSearch}) {

  return (
    <>

      <Navbar setSearch={setSearch} />


      <div className='bg-[#E5EBE0] min-h-screen px-8 mx-auto '>

        <Outlet />
      </div>






      <Footer />


    </>
  )
}
