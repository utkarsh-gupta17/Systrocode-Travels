import { MdOutlineBedroomParent } from "react-icons/md";
import { RiBankLine } from "react-icons/ri";
import { MdOutlineDiscount } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaClockRotateLeft } from "react-icons/fa6";
import { BiTrip } from "react-icons/bi";

export const tourData = [
  {
    id: 9,
    icon: <MdOutlineBedroomParent className="h-12 w-12 text-secondary" />,
    title: "Accommodation",
    data: "The days of wasting time looking for a place to stay while attending a meeting are things of the past. Considering that we are now here!",
  },
  {
    id: 10,
    icon: <RiBankLine className="h-12 w-12 text-secondary" />,
    title: "Safe Transfer",
    data: "Don't worry; Redberry Travel's lockers will keep your funds safe. A secure system is used to protect your data",
  },
  {
    id: 11,
    icon: <MdOutlineDiscount className="h-12 w-12 text-secondary" />,
    title: "Multiple Excellent Offers",
    data: "Our top offers have been reserved for those who are actively seeking them. With Blueberry Travel, inexpensive travel is now feasible.",
  },
  {
    id: 12,
    icon: <IoLocationOutline className="h-12 w-12 text-secondary" />,
    title: "More than 200 Locations",
    data: "You can visit more than 200 locations with our travel card. All you have to do is decide and communicate the specifics.",
  },
  {
    id: 13,
    icon: <BiTrip className="h-12 w-12 text-secondary" />,
    title: "Tailored Journeys",
    data: "We are not fixed, but our packages are. We are constantly willing to provide fresh, personalized packages for our clients.",
  },
  {
    id: 14,
    icon: <FaClockRotateLeft className="h-12 w-12 text-secondary" />,
    title: "Round-the-clock Assistance",
    data: "Your constant companion is our round-the-clock travel assistance. Simply get in touch with us, and we'll be there to ensure that your trip is smooth and pleasurable.",
  },
];
