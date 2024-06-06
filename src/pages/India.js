import React from 'react'
import img1 from "../Images/india1.jpeg";
import img2 from "../Images/india2.jpg";
import img3 from "../Images/india3.jpg";
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

const India = () => {
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
        <h1 className={`font-bold text-xl ${roboto.className}`}>India</h1>
        <p className={`${poppins.className} width-3/4 mx-10  mt-4`}>India, a land of diverse cultures and breathtaking landscapes, is a mesmerizing destination for travelers seeking a rich tapestry of experiences. From the majestic Himalayas in the north to the serene backwaters of Kerala in the south, India's geography offers a variety of stunning vistas. The bustling cities of Delhi, Mumbai, and Bangalore showcase a blend of historical monuments and modern marvels, while the timeless beauty of the Taj Mahal in Agra epitomizes architectural splendor. Spiritual seekers can find solace in the sacred city of Varanasi or the tranquil ashrams of Rishikesh. India's vibrant festivals, such as Diwali and Holi, provide a glimpse into its colorful traditions and joyous celebrations. Culinary enthusiasts will relish the diverse flavors, from spicy street food to sophisticated regional cuisines. Whether you're exploring ancient temples, trekking through lush jungles, or lounging on pristine beaches, India offers a unique and unforgettable travel adventure.</p>
      </div>
    </div>
  )
}

export default India