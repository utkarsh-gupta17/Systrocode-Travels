import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
 
import logo from "../Images/Systrocode.png";
import { usePathname } from "next/navigation";
const navLinks = [
  { id: 1, name: "Home", path: "/", idname: "Home" },
  { id: 2, name: "Services", path: "/Services", idname: "Services" },
  { id: 3, name: "About", path: "/About", idname: "About" },
];

function NavBar() {
  const router = useRouter();
  const [showNav, setShowNav] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(function () {
    const handleScroll = () =>
      window.scrollY === 0 ? setIsScrolled(false) : setIsScrolled(true);
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative z-20">
      <div
        className={
          isScrolled || pathname !== "/"
            ? "fixed w-screen z-100 hidden lg:flex text-base-content justify-between px-10 pb-2 pt-2 text-lg bg-base-100 shadow-md"
            : "fixed w-screen z-100 hidden lg:flex text-neutral-content justify-between px-10 pb-2 pt-2 text-lg "
        }
      >
        <div>
          <Image src={logo} alt="Redberry Travels" className="w-24 h-24" />
        </div>
        <div className="flex gap-10 items-center">
          <ul className="flex gap-5 ">
            {navLinks.map((el) => {
              return (
                <li
                  key={el.id}
                  className={
                    pathname === el.path
                      ? `m-auto text-secondary border-b-2 border-secondary ${inter.className}`
                      : `m-auto hover:text-secondary hover:border-b-2 hover:border-secondary ${inter.className} `
                  }
                >
                  <Link href={el.path}>{el.name}</Link>
                </li>
              );
            })}
          </ul>
          <button
            className="bg-secondary text-white py-2 px-5 rounded-lg hover:bg-secondary/75"
            onClick={() => router.push("mailto:Info.redberrytravels@gmail.com")}
          >
            Book Now
          </button>
        </div>
      </div>

      <div
        className={
          isScrolled || pathname !== "/"
            ? "fixed w-screen flex items-center justify-between pr-8 md:px-20 lg:hidden bg-base-100 shadow-sm"
            : "fixed w-screen flex items-center justify-between pr-8 md:px-20 lg:hidden"
        }
      >
        <div>
          <Image src={logo} alt="Redberry Travels" className="w-24 h-24" />
        </div>
        <div className="" onClick={() => setShowNav((showNav) => !showNav)}>
          <div className="flex z-10 flex-col gap-1.5 h-fit w-7 cursor-pointer">
            <span
              className={!showNav ? "h-1 w-full bg-secondary" : "hidden"}
            ></span>
            <span
              className={!showNav ? "h-1 w-full bg-secondary" : "hidden"}
            ></span>
            <span
              className={!showNav ? "h-1 w-full bg-secondary" : "hidden "}
            ></span>
          </div>
        </div>
      </div>
      <div className={showNav ? "fixed top-0 z-10" : "hidden"}>
        <ul className="flex items-center justify-center h-screen w-screen gap-5 mx-auto flex-col bg-base-100/[0.8] p-3 text-center">
          {navLinks.map((el) => {
            return (
              <li
                key={el.id}
                className={
                  pathname === el.path
                    ? `text-secondary border-b-2 border-secondary ${inter.className}`
                    : `hover:text-secondary hover:border-b-2 hover:border-secondary ${inter.className} `
                }
                onClick={() => setShowNav((showNav) => !showNav)}
              >
                <Link href={el.path}>{el.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
