"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
export default function Header() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(false);
  console.log(openDropdown);
  return (
    <>
      <div className="flex justify-between bg-black text-white w-full lg:p-4 xl:p-4 2xl:p-4 2xl:pt-8">
        <div className="flex items-start pt-2">
          <div className="flex flex-col xl:pt-6 2xl:pt-4 p-4">
            <div className="justify-start  xl:justify-center 2xl:justify-center flex">
              <Image
                src="/logoheader.png"
                alt="Logo"
                width={48}
                height={48}
                className="h-4 w-4 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-12 xl:h-12 2xl:w-12 2xl:h-12"
              />
            </div>
            <div className="">
              <span className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg font-not-italic mt-1">
                VIGLOBALIZE
              </span>
            </div>
          </div>
        </div>

        <div className="pr-0 xl:pr-48">
          <div className="hidden xl:flex flex-col p-4 gap-8 text-black">
            <div className="font-sans text-white text-center">
              LIFE&apos;S TASTY
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-center text-white">
              <a
                href="/home"
                className={`${
                  pathname === "/home" ? "text-blue-400" : "text-white"
                } hover:text-blue-400`}
              >
                Home
              </a>
              <a
                href="/product"
                className={`${
                  pathname === "/product" ? "text-blue-400" : "text-white"
                } hover:text-blue-400`}
              >
                Product
              </a>
              <a
                href="/service"
                className={`${
                  pathname === "/service" ? "text-blue-400" : "text-white"
                } hover:text-blue-400`}
              >
                Service
              </a>
              <a
                href="/ourbrand"
                className={`${
                  pathname === "/ourbrand" ? "text-blue-400" : "text-white"
                } hover:text-blue-400`}
              >
                Our Brand
              </a>
              <a
                href="/contact"
                className={`${
                  pathname === "/contact" ? "text-blue-400" : "text-white"
                } hover:text-blue-400`}
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="p-2 sm:p-4 md:p-4 xl:hidden cursor-pointer">
          <AiOutlineMenu
            className="text-white cursor-pointer hover:text-blue-400 2xl:text-black"
            onClick={() => setOpenDropdown(!openDropdown)}
          />
        </div>

        <div className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:block invisible"></div>
      </div>
      {openDropdown && (
        <div className="absolute top-20 right-2 bg-white border shadow-lg rounded-lg z-50 w-36 p-2 text-black">
          <ul className="flex flex-col gap-1">
            <li>
              <a
                href="/home"
                className="hover:text-blue-800 hover:bg-gray-200 block w-full px-2 py-1 rounded"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/product"
                className="hover:text-blue-800 hover:bg-gray-200 block w-full px-2 py-1 rounded"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="/service"
                className="hover:text-blue-500 hover:bg-gray-200 block w-full px-2 py-1 rounded"
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="/ourbrand"
                className="hover:text-blue-800 hover:bg-gray-200 block w-full px-2 py-1 rounded whitespace-nowrap"
              >
                Our Brand
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-800 hover:bg-gray-200 block w-full px-2 py-1 rounded"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
