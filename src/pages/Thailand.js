import React from 'react'
import img1 from "../Images/thai1.png";
import img2 from "../Images/thai2.jpg";
import img3 from "../Images/thai3.jpg";
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

const Thailand = () => {
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
        <h1 className={`font-bold text-xl ${roboto.className}`}>Thailand:Land of Smiles</h1>
        <p className={`${poppins.className} width-3/4 mx-10  mt-4`}>Thailand, often referred to as the "Land of Smiles," is a premier destination for travelers seeking a blend of cultural richness, natural beauty, and vibrant urban life. Visitors can explore the bustling city of Bangkok, with its dazzling temples like Wat Arun and the Grand Palace, or dive into the tropical paradise of islands such as Phuket and Koh Samui, known for their stunning beaches and crystal-clear waters. Adventure enthusiasts can trek through the lush jungles of Chiang Mai and Chiang Rai, discovering hidden waterfalls and interacting with local hill tribes. Thailand also offers an array of culinary delights, from street food markets to high-end restaurants, showcasing the country's famous cuisine. Whether you're looking for relaxation, adventure, or cultural immersion, Thailand promises an unforgettable travel experience.</p>
      </div>
    </div>
  )
}

export default Thailand