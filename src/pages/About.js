import FameCard from "@/components/FameCard";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import img1 from "../Images/david.jpg";
import img2 from "../Images/steffen.jpg";
import img3 from "../Images/itay.jpg";
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

function About() {
  return (
    <>
      <NavBar />
      <div id="about" className="pt-36 px-8 sm:px-24">
        <h1 className={`text-center text-3xl text-secondary ${inter.className}`}>About Us</h1>
        <p className={`${poppins.className} text-center text-sm sm:text-lg mt-8`}>
          Welcome to Systrocode Travel, your premier partner in discovering the
          world! Founded with the passion to make traveling easier and more
          accessible, we are committed to offering top-notch travel services
          tailored to each traveler&apos;s needs. At Systrocode Travel, we believe
          that the journey is just as important as the destination.
        </p>
      </div>

      <div className="my-24 bg-base-200 h-fit px-5 py-8 sm:px-12 sm:py-16">
        <div className={`${roboto.className} text-3xl text-center mb-12`}>Hall of fame</div>
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 lg:gap-16 items-center">
          <FameCard
            name="Erik Smith"
            designation="Founder and President"
            img={img1}
          />
          <FameCard
            name="Alexander Barsky"
            designation="Vice president and Director"
            img={img3}
          />
          <FameCard
            name="Tim Huntly"
            designation="Managing Director"
            img={img2}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
