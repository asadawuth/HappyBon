export default function page() {
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
              src="forproductpage/product1.png"
              alt="layout1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="relative w-full overflow-hidden px-2 sm:p-2 md:p-4 lg:p-4 xl:p-6 2xl:p-8">
          <img
            src="forproductpage/product2.png"
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

        <div className="relative w-full overflow-hidden px-2 py-1 sm:p-2 md:p-4 lg:p-4 xl:p-6 2xl:p-8">
          <img
            src="forproductpage/product6.png"
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
              src="forproductpage/product7.png"
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
            src="forproductpage/product8.png"
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
