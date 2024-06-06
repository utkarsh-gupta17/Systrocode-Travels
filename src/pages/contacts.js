import { useRouter } from "next/router";

function Contacts() {
  const router = useRouter();
  return (
    <div className="pt-48" id="contacts">
      <h1 className="text-center text-3xl text-secondary">Contact Us</h1>
      <div className="flex flex-col mb-12 sm:flex-row justify-center w-5/6 max-w-[1000px] mx-auto mt-12">
        <div
          className="grid h-fit hover:bg-secondary hover:cursor-pointer hover:text-secondary-content py-12 flex-grow card bg-base-200 rounded-box place-items-center"
          onClick={() => router.push("https://wa.me/919672040456")}
        >
          <h1 className="text-lg font-semibold">Call us at</h1>
          <p className="text-sm sm:text-base">+919672040456</p>
        </div>
        <div className="divider divider-vertical sm:divider-horizontal">OR</div>
        <div
          className="grid h-fit py-12 hover:bg-secondary hover:cursor-pointer hover:text-secondary-content flex-grow card bg-base-200 rounded-box place-items-center"
          onClick={() => router.push("mailto:Info.redberrytravels@gmail.com")}
        >
          <h1 className="text-lg font-semibold">Mail us at</h1>
          <p className="text-sm sm:text-base">systrocode@gmail.com</p>
        </div>
      </div>
      <div className="bg-base-200 p-2 sm:p-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14245.177902778574!2d75.83271894576438!3d26.798750660323105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9baf21ccb87%3A0xbc9889f9ef6b234b!2sJhelum%20Apartment!5e0!3m2!1sen!2sin!4v1714561417401!5m2!1sen!2sin"
          width="800"
          height="600"
          style={{ border: 0 }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="mx-auto my-10 w-full"
        ></iframe>
      </div>
    </div>
  );
}

export default Contacts;

// Info.redberrytravels@gmail.com
//+91 707 33 777 02
