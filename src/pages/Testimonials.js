import TestimonialBox from "@/components/TestimonialBox";

function Testimonials() {
  return (
    <div id="testimonials" className="pt-36">
      <div className="pt-12 pb-16  bg-base-200 flex flex-col gap-10 items-center justify-between">
        <h1 className="mx-8 text-primary text-lg sm:text-3xl text-center">
          What our clients say about us?
        </h1>
        <TestimonialBox />
      </div>
    </div>
  );
}

export default Testimonials;
