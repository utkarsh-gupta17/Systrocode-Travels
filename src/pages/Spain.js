import React from 'react'
import img1 from "../Images/spain1.jpg";
import img2 from "../Images/spain2.jpg";
import img3 from "../Images/spain3.jpg";
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

const Spain = () => {
  return (
    <div className='flex-col items-center justify-center mt-10'>
      
      <div className="sm:w-96 carousel rounded-box sm:ml-[40rem]">
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
        <h1 className={`font-bold text-xl ${roboto.className}`}>Spain</h1>
        <p className={`${poppins.className} width-3/4 mx-10  mt-4`}>Spain, a vibrant country known for its diverse culture, stunning landscapes, and rich history, is a top destination for travelers seeking an unforgettable experience. In Barcelona, visitors can marvel at Gaudí's architectural masterpieces such as the Sagrada Família and Park Güell, while the lively streets of Madrid offer world-class museums like the Prado and the Royal Palace. The southern region of Andalusia enchants with its Moorish heritage, exemplified by the breathtaking Alhambra in Granada and the historic streets of Seville. The Balearic Islands, including Ibiza and Mallorca, boast beautiful beaches and a vibrant nightlife. Spain's culinary delights, from tapas in bustling markets to fine dining in Michelin-starred restaurants, provide a feast for the senses. Whether exploring the picturesque villages of the Costa Brava, hiking in the Pyrenees, or enjoying a flamenco performance, Spain promises a travel experience filled with passion, beauty, and adventure.</p>
      </div>
    </div>
  )
}

export default Spain