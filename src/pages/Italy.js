import React from 'react'
import img1 from "../Images/Italy1.jpg";
import img2 from "../Images/Italy2.jpg";
import img3 from "../Images/Italy3.jpg";
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

const Italy = () => {
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
        <h1 className={`font-bold text-xl ${roboto.className}`}>Italy</h1>
        <p className={`${poppins.className} width-3/4 mx-10  mt-4`}>Italy, a treasure trove of history, art, and culinary delights, is an enchanting destination for travelers seeking a blend of cultural immersion and scenic beauty. Rome, the Eternal City, captivates with its ancient ruins such as the Colosseum and the Roman Forum, alongside the grandeur of Vatican City. Florence, the birthplace of the Renaissance, dazzles with masterpieces like Michelangelo's David and Brunelleschi's Dome. Venice, with its romantic canals and gondolas, offers a unique and magical experience. The Amalfi Coast and Tuscany's rolling vineyards provide stunning landscapes perfect for relaxation and exploration. Italian cuisine, celebrated worldwide, promises unforgettable dining experiences, from authentic pizza and pasta to exquisite wines. Whether wandering through historic cities, savoring delicious food, or soaking in the picturesque countryside, Italy guarantees an unforgettable travel adventure filled with charm and elegance.</p>
      </div>
    </div>
  )
}

export default Italy