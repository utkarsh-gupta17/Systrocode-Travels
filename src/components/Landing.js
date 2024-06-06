import Link from "next/link";
import { useRouter } from "next/router";
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

function Landing() {
  const router = useRouter();
  return (
    <div id="home" className="bg-landing-img bg-cover h-screen w-full">
      <div className="bg-secondary-content/[0.3] h-screen w-full flex ">
        <div className="h-fit md:pl-12 flex flex-col gap-3 sm:gap-10 self-center ml-4 sm:ml-10">
          <h1 className={`${poppins.className} text-neutral-content text-3xl sm:text-5xl lg:text-7xl`}>
            Improve Your Life,
            <br /> Travel With Us
          </h1>
          <div className={` ${roboto.className} text-neutral-content md:w-1/2 w-4/5 text-xl`}>
            Take care of the hassles associated with business travel so you can
            focus on what matters most! Get customized business travel packages
            that meet your travel needs and are easy to use at a reasonable
            price.
          </div>
          <button
            onClick={() => router.push("https://wa.me/919672040456")}
            className={`w-fit bg-secondary py-2 px-5 text-sm sm:text-base sm:py-3 sm:px-8 rounded-lg text-gray-100 hover:bg-secondary/75 ${inter.className}`}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
