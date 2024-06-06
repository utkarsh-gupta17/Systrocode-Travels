import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { servicesData } from "@/components/servicesData";
import ServiceCard from "../components/ServiceCard";
import { tourData } from "@/components/tourData";
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

function Services() {
  return (
    <div>
      <NavBar />
      <div id="about" className="pt-36 px-8 sm:px-24">
        <h1 className={`${inter.className} text-center text-3xl text-secondary mt-12 mb-8`}>
          Services
        </h1>
        <div className="flex flex-wrap gap-8 flex-col md:flex-row justify-center items-center">
          {servicesData.map((el) => (
            <ServiceCard
              key={el.id}
              icon={el.icon}
              title={el.title}
              data={el.data}
            />
          ))}
        </div>
      </div>
      <div id="about" className="pt-36 px-8 sm:px-24">
        <h1 className={`${inter.className} text-center text-3xl text-secondary mt-12 mb-8`}>
          All inclusive tour
        </h1>
        <div className="flex flex-wrap gap-8 flex-col md:flex-row justify-center items-center">
          {tourData.map((el) => (
            <ServiceCard
              key={el.id}
              icon={el.icon}
              title={el.title}
              data={el.data}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
