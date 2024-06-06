import { useState } from "react";
import Tours from "./Tours";
import Hotels from "./Hotels";
import Flights from "./Flights";
import Visa from "./Visa";
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

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState("tours");
  return (
    <div className=" w-5/6 mx-auto">
      <div className={`h-fit w-full bg-base-100 shadow-lg relative -top-36 ${inter.className}`}>
        <div>
          <ul className="flex">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={
                  activeTab === tab.name
                    ? "px-4 py-2 sm:px-10 sm:py-6 text-lg cursor-pointer "
                    : "px-4 py-2 sm:px-10 sm:py-6 text-lg text-base-100 bg-secondary cursor-pointer hover:bg-base-100 hover:text-base-content"
                }
                onClick={() => setActiveTab(tab.name)}
              >
                <span className="hidden sm:block">{tab.label}</span>
                <span className="sm:hidden">
                  {activeTab === tab.name ? (
                    <Image src={tab.icon} alt="icon" width={32} height={32} />
                  ) : (
                    <Image src={tab.wicon} alt="icon" width={32} height={32} />
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          {activeTab === "tours" && <Tours />}
          {activeTab === "hotels" && <Hotels />}
          {activeTab === "flights" && <Flights />}
          {activeTab === "visa" && <Visa />}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
