import Image from "next/image";
import logo from "../Images/Systrocode.png";
import { useEffect, useState } from "react";
import moment from "moment-timezone";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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

function Footer() {
  const router=useRouter();
  const [losAngelesTz, setLosAngelesTz] = useState();
  const [dubaiTz, setDubaiTz] = useState();
  const [bangkokTz, setBangkokTz] = useState();
  const [capetownTz, setCapetownTz] = useState();
  useEffect(() => {
    setInterval(() => {
      setLosAngelesTz(moment().tz("America/New_York").format("HH:mm"));
      setDubaiTz(moment().tz("Asia/Dubai").format("HH:mm"));
      setBangkokTz(moment().tz("Asia/Bangkok").format("HH:mm"));
      setCapetownTz(moment().tz("Africa/Kinshasa").format("HH:mm"));
    }, 1000);
  }, []);

  const date = new Date();
  const year = date.getFullYear();
  // console.log(moment.tz.names());
  return (
    <>
    <div>
      <div className={`bg-tmz-img text-base-100 flex flex-col gap-5 md:flex-row justify-around py-12 mt-24 text-xl lg:text-3xl  text-center ${poppins.className}`}>
        <div>
          New York <br />
          {losAngelesTz}
        </div>
        <div>
          Dubai <br />
          {dubaiTz}
        </div>
        <div>
          Bangkok <br />
          {bangkokTz}
        </div>
        <div>
          Kinshasa
          <br />
          {capetownTz}
        </div>
      </div>
      <footer className="flex flex-col lg:flex-row p-10 py-16 bg-base-200 text-base-content items-center">
        <aside className="p-4 lg:border-r-2 border-b-2 lg:border-b-0 border-base-300 basis-1/3 w-full flex flex-col justify-center items-center">
          <div>
            <Image
              src={logo}
              alt="Logo"
              height={200}
              width={200}
              className="mx-auto md:mx-8"
            />
          </div>
          <div className="flex gap-2 mx-8">
            <FaFacebookF className="bg-base-300 text-base-content p-2 h-10 w-10 hover:bg-primary hover:cursor-pointer rounded-md hover:text-primary-content"/>
            <RiInstagramFill className="bg-base-300 text-base-content p-2 h-10 w-10 hover:bg-primary hover:cursor-pointer rounded-md hover:text-primary-content"/>
            <ImLinkedin2 className="bg-base-300 text-base-content p-2 h-10 w-10 hover:bg-primary hover:cursor-pointer rounded-md hover:text-primary-content" />
            <FaYoutube className="bg-base-300 text-base-content p-2 h-10 w-10 hover:bg-primary hover:cursor-pointer rounded-md hover:text-primary-content" />
            <FaXTwitter className="bg-base-300 text-base-content p-2 h-10 w-10 hover:bg-primary hover:cursor-pointer rounded-md hover:text-primary-content" />
          </div>
        </aside>
        <nav className="text-base space-y-8 w-full lg:text-lg sm:p-8 p-2 lg:border-r-2 border-b-2 lg:border-b-0 border-base-300 basis-1/3 flex flex-col text-center md:text-left">
          <div>
            <h6 className={`footer-title text-lg lg:text-2xl ${poppins.className}`}>Services</h6>
            <div className="flex justify-center md:justify-start gap-3">
              <a className={`link link-hover ${inter.className}`}>Tours</a>
              <a className={`${inter.className} link link-hover`}>Hotels</a>
              <a className={`${inter.className} link link-hover`}>Flights</a>
              <a className={`${inter.className} link link-hover`}>Visa</a>
            </div>
          </div>
          <div>
            <h6 className={`footer-title text-lg lg:text-2xl ${poppins.className}`}>Contacts</h6>
            <div className={`${roboto.className} flex flex-col`}>
              <Link className="link link-hover" href="https://wa.me/919672040456">
                Call us at: +919672040456
              </Link>
              <Link
                className="link link-hover"
                href="mailto:systrocode@gmail.com"
              >
                Mail us at: systrocode@gmail.com
              </Link>
            </div>
          </div>
        </nav>

        <nav className="text-lg basis-1/3 p-2 sm:p-8 text-center md:text-left">
          <h6 className={`footer-title text-lg lg:text-2xl ${poppins.className}`}>
            Get Travel Updates
          </h6>
          <p className={`text-sm lg:text-base mb-4 ${inter.className}`}>
            Stay up-to-date on our latest travel news & deals Rest assured, we
            value your time and privacy and promise not to send you any spam
            emails.
          </p>
          <h6 className={`${poppins.className} footer-title text-lg lg:text-2xl`}>Address</h6>
          <p className={`${inter.className} text-sm lg:text-base`}>
            FLAT NO 28/C/80, JHELUM APARTMENT, NEAR DWARKAPURI CIRCLE, PRATAP
            NAGAR, JAIPUR - 302033
          </p>
        </nav>
      </footer>
      <div className={`bg-base-200 text-center pb-8 text-xl ${roboto.className}`}>
        &copy; {year} Systrocode. All rights reserved.
      </div>
    </div>

    </>
  );
}

export default Footer;
