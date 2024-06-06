import Tabs from "./Tabs";
import tour from "../../public/suitcase.svg";
import hotel from "../../public/building.svg";
import flights from "../../public/flight.svg";
import visa from "../../public/visa.svg";
import wtour from "../../public/w-suitcase.svg";
import whotel from "../../public/w-building.svg";
import wflights from "../../public/w-flight.svg";
import wvisa from "../../public/w-visa.svg";

const tabs = [
  { id: 0, name: "tours", label: "Tours", icon: tour, wicon: wtour },
  { id: 1, name: "hotels", label: "Hotels", icon: hotel, wicon: whotel },
  { id: 2, name: "flights", label: "Flights", icon: flights, wicon: wflights },
  { id: 3, name: "visa", label: "Visa", icon: visa, wicon: wvisa },
];

function Hero() {
  return (
    <div className="relative">
      <Tabs tabs={tabs} />
    </div>
  );
}

export default Hero;
