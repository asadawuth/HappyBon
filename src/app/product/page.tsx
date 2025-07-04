import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="bg-[#51574c]">
        <div
          className="w-full flex p-2 sm:p-2 md:p-4 lg:p-4 xl:p-6 2xl:p-8 bg-[#51574c] h-auto
      "
        >
          {/* Left */}
          <div
            className="w-1/2 bg-[#212D39] flex flex-col text-white
        2xl:gap-54 xl:gap-44 md:gap-36 sm:gap-8
        "
          >
            <h1
              className=" text-4xl sm:text-7xl md:text-7xl xl:text-8xl 2xl:text-[10rem] font-serif leading-none
          2xl:pl-24 2xl:pt-12  xl:pt-24 xl:pl-24 md:pl-12 md:pt-24 sm:pl-8 sm:pt-20 pt-14 pl-2
          "
            >
              Focaccia
              <br />
              Bread
            </h1>
            <div className="w-full 2xl:pb-48 xl:pb-54 lg:pb-32 md:pb-24">
              <p
                className="text-[#212D39] bg-[#E2C79E] text-base md:text-lg p-4 font-bold w-full block text-left  md:pl-12  
              2xl:py-16 2xl:pl-32 xl:pl-24 xl:py-12 sm:pl-8 pl-4
            "
              >
                A soft, airy flatbread infused with <br /> olive oil and
                rosemary
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="w-1/2">
            <img
              src="forproductpage/product1.Webp"
              alt="layout1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="relative w-full overflow-hidden p-2 sm:p-2 md:p-4 lg:p-4 xl:p-6 2xl:p-8">
          <img
            loading="lazy"
            src="forproductpage/product2.Webp"
            alt="image"
            className="w-full"
          />
          <div
            className="absolute text-white
          2xl:bottom-32 2xl:left-40
          xl:bottom-28 xl:left-36
          lg:bottom-24 lg:left-36
          md:bottom-20 md:left-28
          sm:bottom-16 sm:left-20
          bottom-8 left-[4vh]
        "
          >
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-7xl font-serif font-semibold">
              Stromboli
            </h1>
            <p className="text-sm sm:text-2xl font-light mt-1">
              A golden-baked roll filled with rich cheese, cured meats,and
              savory sauce
            </p>
          </div>
        </div>

        <div className="relative w-full flex px-2 sm:px-2 md:px-4 lg:px-4 xl:px-6 2xl:px-8">
          {/* ซ้าย - รูปภาพ */}
          <div className="w-2/3">
            <img
              loading="lazy"
              src="forproductpage/product3.Webp"
              alt="Pizza Twist"
              className="w-full h-full object-cover"
            />
          </div>

          {/* ขวา - กล่องพื้นหลัง */}
          <div
            className="w-1/3 bg-[#e2c79e] relative
    pt-1 sm:pt-2 md:pt-8 lg:pt-8 xl:pt-32 2xl:pt-32
    hover:hidden hover:sm:block"
          >
            {/* กรอบขาว */}
            <div
              className="absolute border-2 border-white
      right-2 sm:right-12 md:right-16 lg:right-20 xl:right-40 2xl:right-48
      w-[22vh] sm:w-[20vh] md:w-[28vh] lg:w-[30vh] xl:w-[40vh] 2xl:w-[50vh]
      h-[29vh] sm:h-[32vh] md:h-[36vh] lg:h-[46vh] xl:h-[36vh] 2xl:h-[58vh]"
            >
              {/* กล่องดำด้านใน */}
              <div
                className="absolute bg-black/80 shadow-lg text-white
        p-2 sm:p-3 md:p-4 lg:p-4 xl:p-6 2xl:p-6 flex flex-col
        right-2 sm:right-4 md:right-3 lg:right-3 xl:right-6 2xl:right-4
        top-1 sm:top-2 md:top-2 lg:top-3 xl:top-6 2xl:top-6
        h-[29vh] sm:h-[30vh] md:h-[36vh] lg:h-[46vh] xl:h-[44vh] 2xl:h-[58vh]
        w-full"
              >
                {/* Title */}
                <div className="px-2 sm:px-3 md:px-4 lg:px-6 xl:px-12 2xl:px-4">
                  <h5 className="font-serif text-start text-xs sm:text-lg md:text-2xl lg:text-3xl xl:text-6xl 2xl:text-8xl">
                    Pizza
                  </h5>
                  <h5 className="font-serif text-end text-xs sm:text-lg md:text-2xl lg:text-3xl xl:text-6xl 2xl:text-8xl">
                    Twist
                  </h5>
                </div>

                {/* Description */}
                <div
                  className="mt-1 sm:mt-2 md:mt-2 lg:mt-2 xl:mt-4 2xl:mt-8 w-full max-w-md break-words 
                text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base 
                px-2 sm:px-3 md:px-4 lg:px-6 xl:px-6 2xl:px-6"
                >
                  <p>A fun, hand-twisted pizza roll with</p>
                  <p>melty cheese, savory fillings, and</p>
                  <p>golden crust.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex px-2 py-1 p-2 sm:p-2 md:p-4 lg:p-4 xl:p-6 2xl:p-8">
          {/* ซ้าย */}
          <div
            className="w-1/3 flex flex-col bg-[#212D39] 
          gap-8 2xl:gap-48 z-100
          "
          >
            <div className="pr-2">
              <img
                loading="lazy"
                src="forproductpage/product4.Webp"
                alt="image"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="">
              <h1
                className="text-[#e2c79e] 2xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-xl
              2xl:-rotate-[18deg] xl:-rotate-[18deg]
              2xl:text-start xl:text-end lg:text-center md:text-center sm:text-center text-center
              block 2xl:pl-52
              "
              >
                Au the flavor.
              </h1>
              <h1
                className="text-[#e2c79e] 2xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl
              2xl:-rotate-[18deg] xl:-rotate-[18deg] lg:-rotate-0
              2xl:text-end xl:text-end lg:text-center md:text-center sm:text-center text-center 
              "
              >
                we apped in one bitte
              </h1>
            </div>
          </div>

          {/* กลาง */}
          <div className="w-1/3 h-auto z-100">
            <img
              src="forproductpage/product5.Webp"
              alt="image"
              className="w-full h-full  object-cover"
            />
          </div>

          {/* ขวา - Calzone Box */}
          <div
            className="w-1/3 bg-[#212D39] p-6 
          2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center
          xl:flex xl:flex-col xl:justify-center xl:items-center
          md:flex md:flex-col md:justify-center md:items-center
          2xl:gap-28 xl:gap-24 lg:gap-16 md:gap-8 z-100
          "
          >
            <h1
              className="text-[#e2c79e] text-sm sm:text-5xl font-serif 
            2xl:text-8xl xl:text-6xl
            "
            >
              Calzone
            </h1>
            <p className="text-white text-sm leading-relaxed text-start 2xl:text-2xl">
              Calzone is an Italian oven–
              {/* <br /> */}
              baked turnover. A typical
              {/* <br /> */}
              calzone is made from salted
              {/* <br /> */}
              bread dough,
            </p>
          </div>
        </div>

        <div className="relative w-full overflow-hidden px-2 py-1 sm:p-2 md:p-4 lg:p-4 xl:p-6 2xl:p-8">
          <img
            loading="lazy"
            src="forproductpage/product6.Webp"
            alt="image"
            className="w-full"
          />
          <div
            className="absolute text-white
          2xl:bottom-32 2xl:left-40
          xl:bottom-28 xl:left-36
          lg:bottom-24 lg:left-36
          md:bottom-20 md:left-28
          sm:bottom-16 sm:left-20
          bottom-8 left-[4vh]
        "
          >
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-7xl font-serif font-semibold">
              Shio Bun
            </h1>
            <p className="text-sm sm:text-2xl font-light mt-1">
              Soft Japanese-style milk bun with a salty twist.
            </p>
          </div>
        </div>

        <div
          className="flex w-full h-[300px] md:h-[400px] lg:h-[500px]
        2xl:px-8 xl:px-6 lg:px-4 md:px-4 sm:px-2 px-2
        "
        >
          {/* Left - Image */}
          <div className="w-1/2 h-full">
            <img
              loading="lazy"
              src="forproductpage/product7.Webp"
              alt="Pizza Bite"
              className="w-full h-full"
            />
          </div>

          {/* Right - Two Sections */}
          <div className="w-1/2 h-full flex flex-col">
            <div className="bg-[#E2C79E] flex items-center justify-center h-1/2">
              <h1 className="text-3xl md:text-5xl font-serif text-[#212D39] text-center leading-snug">
                Pizza
                <br />
                Bite
              </h1>
            </div>
            <div className="bg-[#212D39] flex items-center justify-center h-1/2 px-4">
              <p className="text-white text-sm md:text-lg text-center">
                All the flavor of pizza,
                <br />
                in one perfect bite.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full overflow-hidden px-2 py-1 sm:p-2 md:p-4 lg:p-4 xl:p-6 2xl:p-8">
          <img
            loading="lazy"
            src="forproductpage/product8.Webp"
            alt="image"
            className="w-full"
          />
          <div
            className="absolute font-serif bg-opacity-100 text-white 
          2xl:top-48 2xl:left-16 2xl:text-9xl  
          xl:top-32 xl:left-14 xl:text-9xl
          lg:top-28 lg:left-12 lg:text-8xl  
          md:top-24 md:left-8 md:text-6xl
          sm:top-16 sm:left-6 sm:text-5xl
          top-12 left-4 text-4xl
        "
          >
            Hot bun
          </div>
        </div>
      </div>
      <div className="h-[8vh] sm:h-[2vh] md:h-[4vh] lg:h-[4vh] xl:h-[4vh] 2xl:h-[4vh] bg-[#212D39]"></div>
    </>
  );
}
