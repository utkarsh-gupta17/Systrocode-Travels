import Card from "../components/Card";
import { destinationData } from "../components/destinationData";

function Destination() {
  return (
    <div id="destination" className="">
      <h2 className="text-center text-3xl text-secondary">Top Destination</h2>
      <p className="text-center text-sm mx-8 mt-4 md:text-lg text-base-content">
        Where do you wanna go? How much you wanna explore?
      </p>
      <div className="w-fit items-center justify-center mx-auto flex gap-5 md:gap-10 mt-10 flex-wrap">
        {destinationData.map((el, i) => {
          return (
            <Card title={el.title} body={el.body} img={el.image} key={i} />
          );
        })}
      </div>
    </div>
  );
}

export default Destination;
