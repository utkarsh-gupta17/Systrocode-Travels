import React from "react";
import Slider from "react-slick";

import testimonialData from "./testimonialData";
import Card from "./Card";

function TestimonialBox() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-5/6 mx-auto">
      <Slider {...settings}>
        {testimonialData.map((el, i) => {
          return (
            <Card
              title={el.name}
              body={el.data}
              key={i}
              isTestmonial={"true"}
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default TestimonialBox;
