import React from 'react'
import img1 from "../Images/france1.jpg";
import img2 from "../Images/france2.jpg";
import img3 from "../Images/france3.jpg";
import img4 from "../Images/left.png";
import Image from 'next/image';
import { Poppins,Roboto } from 'next/font/google';
const poppins = Poppins({ 
  subsets: ['latin'],
  weight:'400'
 });
const roboto = Roboto({ 
  subsets: ['latin'],
  weight:'400'
 });

const France = () => {
  return (
    <div className='flex-col items-center justify-center mt-10'>
      
      <div className="w-96 carousel rounded-box sm:ml-[40rem]">
        <div className="carousel-item w-full">
          <Image src={img1} className="w-6xl" alt="Tailwind CSS Carousel component" />
        </div> 
        <div className="carousel-item w-full">
          <Image src={img2} className="w-full" alt="Tailwind CSS Carousel component" />
        </div> 
        <div className="carousel-item w-full">
          <Image src={img3} className="w-full" alt="Tailwind CSS Carousel component" />
        </div> 
      </div>
      <div className='flex items-center justify-center '>
        <h1 className={`text-center ${poppins.className} pr-4`}>Swipe Left for a Visual Treat</h1>
        <Image src={img4} className="w-6xl" alt="Tailwind CSS Carousel component" />
      </div>

      <div className='text-center mt-4'>
        <h1 className={`font-bold text-xl ${roboto.className}`}>France</h1>
        <p className={`${poppins.className} width-3/4 mx-10  mt-4`}>France, renowned for its captivating charm and rich cultural heritage, is a top destination for travelers seeking a blend of history, art, cuisine, and scenic beauty. Paris, the iconic capital, mesmerizes with landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral, offering a romantic and artistic ambiance. Beyond the bustling city, the picturesque countryside awaits, with the lavender fields of Provence, the vineyards of Bordeaux, and the stunning châteaux of the Loire Valley. The French Riviera entices with glamorous beaches and Mediterranean allure, while the Alps offer exhilarating skiing adventures. Culinary delights abound, from gourmet restaurants to quaint bistros, making every meal a delightful experience. Whether exploring historic sites, indulging in fine dining, or simply enjoying the scenic landscapes, France promises an unforgettable travel experience.</p>
      </div>
    </div>
  )
}

export default France