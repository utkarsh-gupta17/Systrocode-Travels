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

function FameCard({ title, data, icon }) {
  return (
    <div className="card w-62 sm:w-96 bg-base-100 shadow-xl hover:shadow-none hover:cursor-pointer">
      <figure className="px-5 pt-5 sm:px-10 sm:pt-10 ">{icon}</figure>
      <div className="card-body items-center text-center">
        <h2 className={`${poppins.className} card-title`}>{title}</h2>
        <p className={`${roboto.className}`}>{data}</p>
      </div>
    </div>
  );
}

export default FameCard;
