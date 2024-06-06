import Image from "next/image";
import { Poppins,Roboto,Inter } from 'next/font/google';
const poppins = Poppins({ 
  subsets: ['latin'],
  weight:'400'
 });
const roboto = Roboto({ 
  subsets: ['latin'],
  weight:'400'
 });
const inter = Inter({ 
  subsets: ['latin'],
  weight:'400'
 });


function FameCard({ name, designation, img }) {
  return (
    <div className="card w-62 sm:w-96 bg-base-100 shadow-xl">
      <figure className="px-5 pt-5 md:px-10 sm:pt-10 sm:px-7">
        <Image src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className={`${inter.className} card-title text-xl`}>{name}</h2>
        <p className={`${poppins.className} text-sm lg:text-base`}>{designation}</p>
      </div>
    </div>
  );
}

export default FameCard;
