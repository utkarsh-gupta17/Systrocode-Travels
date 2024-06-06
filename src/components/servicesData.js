import { IoAirplaneOutline } from "react-icons/io5";
import { LuHotel } from "react-icons/lu";
import { LiaCcVisa } from "react-icons/lia";
import { IoCarOutline } from "react-icons/io5";
import { BiTrip } from "react-icons/bi";
import { CiAirportSign1 } from "react-icons/ci";

export const servicesData = [
  {
    id: 0,
    icon: <LuHotel className="h-12 w-12 text-secondary" />,
    title: "Hotel Booking",
    data: "Find the perfect hotel for your stay, no matter your budget or needs. Get the best deals from the inventory of 300,000+ hotels.",
  },
  {
    id: 1,
    icon: <LiaCcVisa className="h-12 w-12 text-secondary" />,
    title: "Visa Services",
    data: "We'll help you get a visa to all the major countries you need for your trip, so you can relax and enjoy your vacation.",
  },
  {
    id: 2,
    icon: <IoCarOutline className="h-12 w-12 text-secondary" />,
    title: "Car Rental",
    data: "Rent a car for your trip and explore at your own pace. Blueberry has complete car rental solutions for you.",
  },
  {
    id: 3,
    icon: <IoAirplaneOutline className="h-12 w-12 text-secondary" />,
    title: "Flight Booking",
    data: "Book your flights quickly and easily with our secure online system. Be ready to get discounted deals at Blueberry",
  },
  {
    id: 4,
    icon: <BiTrip className="h-12 w-12 text-secondary" />,
    title: "Tour Packages",
    data: "Explore our customized tour packages and create memories for a lifetime. Explore the destination with excitement and ease.",
  },
  {
    id: 6,
    icon: <CiAirportSign1 className="h-12 w-12 text-secondary" />,
    title: "Airport Pickup",
    data: "Efficient airport pickup service for a seamless start to your journey, ensuring convenience and comfort upon arrival.",
  },
];
