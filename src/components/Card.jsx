import Image from "next/image";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { Poppins,Roboto } from 'next/font/google';
const poppins = Poppins({ 
  subsets: ['latin'],
  weight:'400'
 });
const roboto = Roboto({ 
  subsets: ['latin'],
  weight:'400'
 });

// Function to generate link based on title
const generateLink = (title) => {
  return `/${title.replace(/\s+/g, '-')}`;
};

function Card({ title, body, img, isTestmonial }) {
  if (isTestmonial === "true") {
    return (
      <div className="card card-compact shadow-md mb-4 py-8 flex flex-col md:flex-row items-center justify-between w-5/6 sm:w-5/6 lg:w-5/6 bg-base-100 mx-auto sm:px-12">
        <div className="avatar">
          <div className="rounded-full">
            <FaUserAlt className="w-12 h-12 text-secondary" />
          </div>
        </div>

        <div className="card-body">
          <h2 className={`card-title text-center md:text-left mx-auto md:mx-0 text-xl font-bold ${poppins.className}`}>
            {title}
          </h2>
          <p className={`text-center md:text-left ${roboto.className} text-lg`}>{body}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="card card-compact w-5/6 sm:w-60 lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <Image src={img} alt="Shoes" className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className={`card-title ${poppins.className} text-xl font-bold`}>{title}</h2>
        <p className={`${roboto.className}`}>{body}</p>
        <div className="card-actions justify-end">
          <Link href={generateLink(title)}>
          {/* <Link href="https://wa.me/919672040456"> */}
            <button className="btn btn-secondary text-base-100">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
