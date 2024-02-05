"use client"
import React, { useEffect, useState } from 'react';


function Header() {


 


  return (
        <>
          <div className=' w-full fixed top-0 xl:h-20  h-24  z-50 bg-gradient-radial from-pink-300 to-blue-400        xl:gap-20 gap-5 flex xl:flex-row flex-col overflow-hidden   shadow-lg   px-10'>
          <div className='flex flex-col justify-center'>
          <div className='flex '>
          <div className="h-12 p-1 overflow-hidden bg-transparent   ">
              <img className='w-full h-full object-fill  '  src="
              https://www.rembg.com/_next/static/media/bigicon.aa2f7c93.png
              " alt="" />
          </div>
          <h1 className=' text-nowrap pt-2 px-2 font-[ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji] text-3xl text-gray-200    font-bold'>Background Remover</h1>
          
          </div>
          
          </div>
          <div className=' flex xl:flex-col justify-center'>
      
          </div>
          
          </div>
        </>
          
        
    );
}

export default Header;