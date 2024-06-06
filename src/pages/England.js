import React from 'react'
import img1 from "../Images/eng1.jpg";
import img2 from "../Images/eng2.jpg";
import img3 from "../Images/eng3.jpg";
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

const England = () => {
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
        <h1 className={`font-bold text-xl ${roboto.className}`}>England</h1>
        <p className={`${poppins.className} width-3/4 mx-10  mt-4`}>England, a country steeped in history and charm, offers a diverse array of experiences for travelers. London, the vibrant capital, entices visitors with iconic landmarks such as the Tower of London, Buckingham Palace, and the British Museum. Beyond the city/'s bustling streets, the serene countryside beckons with its rolling hills and quaint villages, like those found in the Cotswolds and Lake District. History enthusiasts can explore the ancient mysteries of Stonehenge or the majestic castles of Windsor and Warwick. Literary fans will delight in visiting Shakespeare's birthplace in Stratford-upon-Avon or the atmospheric moors of the Brontë sisters in Yorkshire. England's coastal towns, from the cliffs of Dover to the beaches of Cornwall, offer picturesque seaside escapes. With its rich cultural heritage, stunning landscapes, and world-renowned attractions, England promises a captivating and memorable travel experience.</p>
      </div>
    </div>
  )
}

export default England