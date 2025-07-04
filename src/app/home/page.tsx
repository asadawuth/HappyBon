import Image from "next/image";
export default function Page() {
  return (
    <>
      {/* layout 1 */}
      <div className="w-full relative">
        <Image
          src="/forhomepage/homeimage1.Webp"
          alt="image"
          width={1280}
          height={720}
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw, 1280px"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,..."
          className="w-full h-auto object-cover"
        />
      </div>
      {/* layout 1 */}
      {/* layout 2 */}
      <div className="text-3xl md:text-4xl xl:text-5xl 2xl:text-7xl font-serif text-center top-3 2xl:-mt-20">
        OUR &nbsp;MISSION
      </div>
      <div className="text-3xl md:text-4xl xl:text-5xl 2xl:text-7xl text-center font-serif">
        STATEMENT
      </div>
      <div className="flex flex-col xl:flex-row xl:justify-center xl:gap-14 pt-12 pb-12 px-6">
        {/* Box 1 */}
        <div className="flex flex-col gap-4 text-center max-w-xs mx-auto">
          <div>
            <h1 className="font-medium text-2xl">TO REDUCE FOOD</h1>
            <h1 className="font-medium text-2xl">WASTE</h1>
          </div>
          <div>
            <h6 className="text-xl">We use natural baking methods</h6>
            <h6 className="text-xl">and smart preservation</h6>
            <h6 className="text-xl">techniques to extend shelf</h6>
            <h6 className="text-xl">techniques to extend shelf life</h6>
            <h6 className="text-xl">and reduce unnecessary waste.</h6>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 xl:my-0 xl:mx-8">
          <div className="block xl:hidden w-2/3 h-[1px] bg-gray-300 mx-auto" />{" "}
          {/* horizontal */}
          <div className="hidden xl:block w-[1px] h-full bg-gray-300" />{" "}
          {/* vertical */}
        </div>

        {/* Box 2 */}
        <div className="flex flex-col gap-4 text-center max-w-xs mx-auto">
          <div>
            <h1 className="font-medium text-2xl">TO MINIMIZE</h1>
            <h1 className="font-medium text-2xl">ENVIRONMENTAL IMPACT</h1>
          </div>
          <div>
            <h6 className="text-xl">From low-impact packaging to</h6>
            <h6 className="text-xl">sustainable sourcing, every choice</h6>
            <h6 className="text-xl">we make is a step toward</h6>
            <h6 className="text-xl">healthier planet.</h6>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 xl:my-0 xl:mx-8">
          <div className="block xl:hidden w-2/3 h-[1px] bg-gray-300 mx-auto" />
          <div className="hidden xl:block w-[1px] h-full bg-gray-300" />
        </div>

        {/* Box 3 */}
        <div className="flex flex-col gap-4 text-center max-w-xs mx-auto">
          <div>
            <h1 className="font-medium text-2xl">TO SUPPORT PLANT-</h1>
            <h1 className="font-medium text-2xl">BASED INNOVATION</h1>
          </div>
          <div>
            <h6 className="text-xl">We champion creative, plant-based</h6>
            <h6 className="text-xl">recipes - making delicious baked</h6>
            <h6 className="text-xl">goods that everyone can enjoy,</h6>
            <h6 className="text-xl">with a lighter footprint.</h6>
          </div>
        </div>
      </div>
      {/* layout 2 */}
      {/* layout 3 */}
      <div className="w-full flex">
        <div className="w-1/3 bg-[#E2C79E] relative">
          <div
            className="
           absolute outline-2 outline-offset-2 outline-solid text-white px-auto shadow-lg
           2xl:top-30 2xl:left-[28rem] 2xl:h-[32rem] 2xl:w-[28rem] 2xl:p-6
           xl:top-16 xl:left-[16rem] xl:h-[28rem] xl:w-[20rem] xl:p-6
           lg:top-8 lg:left-[16rem] lg:h-[20rem] lg:w-[16rem] lg:p-6
           md:top-12  md:left-[10rem] md:h-[16rem] md:w-[16rem] md:p-6
           sm:top-4 sm:left-[1rem] sm:h-[13rem] sm:w-[17rem] sm:p-2
           top-2 left-[8px] h-[12rem] w-[17rem] pt-2 pl-2
           "
          >
            <div
              className="absolute 2xl:top-4 2xl:left-4 bg-black/80 2xl:p-6 px-auto shadow-lg 
             2xl:h-[32rem] 2xl:w-[28rem] flex flex-col 2xl:gap-32
             xl:h-[28rem] px-4 xl:gap-32 xl:w-[20rem]
             lg:h-[20rem] lg:px-2 lg:gap-24 lg:top-2 lg:left-2
             md:h-[16rem] md:px-2 md:gap-8 md:top-2 md:left-1
              
             "
            >
              <div className="text-xl sm:text-2xl font-sans pt-12">
                <div>
                  <h1 className="xl:3xl 2xl:text-5xl">RD We’re</h1>
                  <h1 className="xl:3xl 2xl:text-5xl">Proud of</h1>
                </div>
              </div>
              <div>
                <h6 className="2xl:text-2xl whitespace-nowrap">
                  We continuously develop and
                </h6>
                <h6 className="2xl:text-2xl whitespace-nowrap">
                  innovate new bread recipes with
                </h6>
                <h6 className="2xl:text-2xl whitespace-nowrap">
                  our team of experts to ensure the
                </h6>
                <h6 className="2xl:text-2xl whitespace-nowrap">
                  {" "}
                  best taste and quality in every bite.
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="w-2/3 h-auto">
          <img
            loading="lazy"
            src="forhomepage/homeimage2.Webp"
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* layout 3 */}
      {/* layout 4 */}
      <div className="bg-[#212D39] font-serif p-8 flex flex-col gap-8 sm:gap-8 md:gap-12 lg:gap-12 xl:gap-16 2xl:gap-16">
        <div>
          <h1 className="text-white text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl pt-12">
            Our Signature Products
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:justify-around md:items-center gap-8 lg:gap-4">
          {[
            { src: "/forhomepage/image1.Webp", alt: "image1" },
            { src: "/forhomepage/image2.Webp", alt: "image2" },
            { src: "/forhomepage/image3.Webp", alt: "image3" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#f5e8d8] rounded-xl shadow-lg p-4 hover:scale-95 transition-transform duration-300 w-full max-w-xs"
            >
              <div className="relative w-full h-[300px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  quality={100}
                  loading="lazy"
                  className="object-contain cursor-pointer w-full"
                  sizes="(max-width: 768px) 90vw, 384px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* layout 4 */}
      {/* Layout 5 */}
      <div className="relative w-full bg-black/25">
        {/* ✅ Background Image แบบเต็มหน้าจอ */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/forhomepage/bglasthome.Webp"
            alt="background"
            fill
            priority={false}
            quality={100}
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative z-10 px-4 text-white sm:px-8 sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-col 2xl:flex 2xl:flex-col">
          <div className="flex flex-col md:gap-4 xl:gap-28 2xl:gap-48">
            {/* Title & Paragraph */}
            <div className="w-full flex flex-col gap-0 sm:flex sm:flex-col sm:gap-4 sm:pt-2">
              <h1 className="text-xs sm:text-xl md:text-2xl lg:text-5xl 2xl:text-5xl font-serif">
                How It’s Made
              </h1>
              <p className="sm:pt-2 md:pt-4 lg:pt-4 pt-2 text-xs sm:text-xs md:text-xl 2xl:text-3xl 2xl:pl-28 xl:pt-8 2xl:pt-20 w-full sm:text-center">
                At ViFooddl, our in-house R&D team works tirelessly to develop
                and
                <br className="hidden sm:block" />
                refine recipes that meet global standards. From selecting
                premium
                <br className="hidden sm:block" />
                ingredients to designing scalable production processes, we
                ensure that
                <br className="hidden sm:block" />
                every product is crafted with precision, consistency, and care —
                ready to
                <br className="hidden sm:block" />
                be exported worldwide.
              </p>
            </div>

            {/* Circle icons */}
            <div className="w-full flex justify-center items-start gap-6 sm:gap-8 pt-6 sm:pt-10 px-4 sm:px-10 flex-wrap">
              {[
                {
                  src: "/forhomepage/logohome1.Webp",
                  alt: "Developed by R&D",
                  label: "Developed by R&D",
                },
                {
                  src: "/forhomepage/logohome2.Webp",
                  alt: "Trial Production",
                  label: "Trial Production",
                },
                {
                  src: "/forhomepage/logohome3.Webp",
                  alt: "Quality Assurance",
                  label: "Quality Assurance",
                },
                {
                  src: "/forhomepage/logohome4.Webp",
                  alt: "Packaging",
                  label: "Packaging product",
                },
                {
                  src: "/forhomepage/logohome5.Webp",
                  alt: "International Delivery",
                  label: "International Delivery",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center w-[100px] min-h-[80px]"
                >
                  <div
                    className="bg-[#F2E3C3] rounded-full flex items-center justify-center
              2xl:w-24 2xl:h-24 xl:w-24 xl:h-24 lg:w-16 lg:h-16 md:w-12 md:h-12 sm:w-10 sm:h-10 w-10 h-10"
                  >
                    <div className="relative w-6 h-6 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-10 lg:h-10 xl:w-10 xl:h-10 2xl:w-10 2xl:h-10">
                      <Image
                        quality={100}
                        src={item.src}
                        alt={item.alt}
                        fill
                        loading="lazy"
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <p
                    className="hide-xs text-[10px] sm:text-xs min-h-[32px] flex items-center justify-center leading-tight text-wrap
              mt-0 sm:mt-2 md:mt-2 lg:mt-2 xl:mt-2 2xl:mt-2"
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Layout 5 */}
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
              quality={100}
              src="/forcontact/line.Webp"
              alt="Line"
              width={32}
              height={32}
              className="w-8 h-8"
              fetchPriority="low"
            />

            <Image
              quality={100}
              src="/forcontact/facebook.Webp"
              alt="Facebook"
              width={32}
              height={32}
              className="w-8 h-8 cursor-pointer"
              fetchPriority="low"
            />

            <Image
              quality={100}
              src="/forcontact/instagram.Webp"
              alt="Instagram"
              width={32}
              height={32}
              className="w-8 h-8 cursor-pointer"
              fetchPriority="low"
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
    </>
  );
}
