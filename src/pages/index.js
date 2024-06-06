import Contacts from "@/pages/contacts";
import Destination from "@/pages/destination";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Landing from "@/components/Landing";
import NavBar from "@/components/NavBar";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "./Testimonials";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // console.log(process.env);
  return (
    <div>
      <NavBar />
      <Landing />
      <Hero />

      <Destination />
      <Testimonials />
      <Footer />
    </div>
  );
}
