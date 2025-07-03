"use client";
import dynamic from "next/dynamic";
const LeafletMap = dynamic(() => import("../../component/LeafletMap"), {
  ssr: false,
});
import Image from "next/image";
export default function page() {
  return (
    <div className="bg-[#212D39]">
      {/* layout1 */}
      <div className="w-full relative">
        <Image
          src="/forcontact/contact1.Webp"
          alt="Contact"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-9xl font-serif">
            Contact
          </h1>
        </div>
      </div>
      {/* layout1 */}
      {/* layout2 */}
      <div className=" px-8 flex flex-col gap-8">
        <div>
          <h1 className="text-[#FAE8CE] text-center text-sm sm:text-sm md:text-xl lg:text-3xl xl:text-3xl 2xl:text-5xl font-serif py-2">
            GET IN TOUCH
          </h1>
          <h1 className="text-white text-center text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-5xl 2xl:text-7xl font-serif py-2">
            Plan Your Meals at IV Food
          </h1>
        </div>
        <div className="w-full text-white py-4 px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 text-center">
            {/* Location */}
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/forcontact/logocontact1.Webp"
                alt="location"
                width={48}
                height={48}
                className="object-contain"
                loading="lazy"
              />
              <h1 className="font-semibold text-lg">Our Location</h1>
              <p className="text-sm text-center">
                A : 89/24, Bang Kaeo,
                <br />
                Bang Phli District, Samut Prakan 10540.
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/forcontact/logocontact2.Webp"
                alt="email"
                width={48}
                height={48}
                className="object-contain"
                loading="lazy"
              />
              <h1 className="font-semibold text-lg">Our Email</h1>
              <p className="text-sm text-center">
                E :{" "}
                <a href="mailto:vifooodlab@gmail.com" className="underline">
                  vifooodlab@gmail.com
                </a>
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/forcontact/logocontact3.Webp"
                alt="phone"
                width={48}
                height={48}
                className="object-contain"
                loading="lazy"
              />
              <h1 className="font-semibold text-lg">Our Phone</h1>
              <p className="text-sm text-center">P : (+66) 626265629</p>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/forcontact/logocontact4.Webp"
                alt="hours"
                width={48}
                height={48}
                className="object-contain"
                loading="lazy"
              />
              <h1 className="font-semibold text-lg">Open Hours</h1>
              <p className="text-sm text-center">
                W : Monday - Saturday
                <br />
                08:00 AM – 17:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* layout2 */}
      {/* layout3 */}
      <div
        className="p-6
       2xl:flex 2xl:flex-row 2xl:gap-6 
       xl:flex xl:flex-row xl:gap-6
       lg:flex lg:flex-row lg:gap-3
       md:flex md:flex-col md:gap-4
       sm:flex sm:flex-col sm:gap-4
       flex flex-col gap-4
       "
      >
        <div
          className="bg-[#fae8ce] rounded-2xl py-4
        2xl:w-2/3 xl:w-2/3 lg:w-2/3
        "
        >
          <div
            className="flex flex-col gap-6
          px-4 py-4  
          sm:px-8 sm:py-8  
          md:px-16 md:py-4
          lg:px-20 lg:py-4  
          xl:px-24 xl:py-6
          "
          >
            <div>
              <h1 className="text-bold text-3xl">Leave a Message</h1>
            </div>
            <div>
              <h1 className="text-bold text-xl">Your Name</h1>
              <hr className="mt-4" />
            </div>
            <div>
              <h1 className="text-bold text-xl">Your Email</h1>
              <hr className="mt-4" />
            </div>
            <div>
              <h1 className="text-bold text-xl">Message</h1>
              <hr className="mt-16" />
            </div>
            <div>
              <button
                className="bg-[#eb4563] py-4 rounded-xl text-white cursor-pointer
              px-6 sm:scroll-px-24
              "
              >
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="h-[500px]">
            <LeafletMap />
          </div>
        </div>
      </div>
      {/* layout3 */}
      {/* layout4 */}
      <div className="flex flex-col lg:flex-row gap-4 px-4 min-h-[700px]">
        {/* ซ้าย */}
        <div className="flex flex-col gap-2 w-full lg:w-1/3">
          <div className="flex-1">
            <Image
              loading="lazy"
              src="/forproductpage/product1.Webp"
              alt="image"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <Image
              loading="lazy"
              src="/forproductpage/product7.Webp"
              alt="image"
              width={800}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* กลาง */}
        <div className="w-full lg:w-1/3">
          <div className="h-full">
            <Image
              src="/forproductpage/product5.Webp"
              alt="image"
              width={800}
              height={800}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        {/* ขวา */}
        <div className="flex flex-col gap-2 w-full lg:w-1/3">
          <div className="flex-1">
            <Image
              src="/forproductpage/product6.Webp"
              alt="image"
              width={800}
              height={800}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex-1">
            <Image
              src="/forproductpage/product2.Webp"
              alt="image"
              width={800}
              height={800}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex-1">
            <Image
              loading="lazy"
              alt="image"
              width={800}
              height={800}
              src="/forproductpage/product8.Webp"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* layout4 */}
      {/* layout5 */}
      <div className="w-full bg-[#1E2A38] text-white py-12 flex flex-col md:flex-row">
        <div className="md:w-1/6 w-full flex justify-start items-center px-4 md:px-8 mb-6 md:mb-0">
          <div className="block md:hidden text-center w-full">
            <h1 className="text-2xl font-serif">IVFOOD</h1>
            <hr className="border-white border-t-2 w-1/2 mx-auto mt-2" />
          </div>

          {/* สำหรับหน้าจอ md ขึ้นไป */}
          <div className="hidden md:flex relative h-full items-center gap-4">
            {/* ตัวอักษรแนวตั้ง */}
            <h1
              className="text-4xl tracking-widest font-serif pr-6"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "upright",
              }}
            >
              DOOFIV
            </h1>

            {/* เส้นแนวตั้ง */}
            <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white" />
          </div>
        </div>

        {/* About Us */}
        <div className="md:w-1/3 w-full px-6 mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-sm mb-6">
            We continuously develop and innovate new bread recipes with our team
            of experts to ensure the best taste and quality in every bite.
          </p>
          <hr className="border-white my-4" />
          <h3 className="text-sm font-semibold mb-2">Our Social Media</h3>
          <div className="flex gap-4 cursor-pointer">
            <Image
              src="/forcontact/line.Webp"
              alt="Line"
              width={32}
              height={32}
              className="w-8 h-8"
            />

            <Image
              src="/forcontact/facebook.Webp"
              alt="Facebook"
              width={32}
              height={32}
              className="w-8 h-8 cursor-pointer"
            />

            <Image
              src="/forcontact/instagram.Webp"
              alt="Instagram"
              width={32}
              height={32}
              className="w-8 h-8 cursor-pointer"
            />
          </div>
        </div>

        {/* Our Location */}
        <div className="md:w-1/3 w-full px-6 mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">Our Location</h2>
          <p className="text-sm mb-2">
            A : 89/24, Bang Kaeo, Bang Phli District, Samut Prakan 10540.
          </p>
          <p className="text-sm mb-2">
            E :{" "}
            <a href="mailto:vifoodlab@gmail.com" className="underline">
              vifoodlab@gmail.com
            </a>
          </p>
          <p className="text-sm">P : (+66) 626265629</p>
        </div>

        {/* Open Hours */}
        <div className="md:w-1/3 w-full px-6">
          <h2 className="text-xl font-semibold mb-4">Open Hours</h2>
          <div className="text-sm space-y-1">
            <p>Mon – Tues&nbsp;&nbsp;&nbsp; 09:00 AM – 19:00 PM</p>
            <p>Wed – Thur&nbsp;&nbsp;&nbsp; 10:00 AM – 20:00 PM</p>
            <p>
              Friday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 13:00 PM –
              21:00 PM
            </p>
            <p>Saturday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 09:00 AM – 23:00 PM</p>
            <p>Sunday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CLOSED</p>
          </div>
        </div>
      </div>
      {/* layout5 */}
    </div>
  );
}
