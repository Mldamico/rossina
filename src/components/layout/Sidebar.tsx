"use client";
import { useUiStore } from "@/store/ui/ui-store";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiStore } from "react-icons/bi";
import { BsMap } from "react-icons/bs";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";

export const Sidebar = () => {
  const isSideMenuOpen = useUiStore((state) => state.isSideMenuOpen);
  const closeMenu = useUiStore((state) => state.closeSideMenu);
  return (
    <div>
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        ></div>
      )}

      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-[80%] bg-white h-screen z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => closeMenu()}
        />
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full rounded pl-10 py-1 pr-10 border-b-2 text-xl border-red-200 focus:outline-none focus:border-red-500"
          />
        </div>

        <div className="ml-12 mt-8">
          <Link
            href="/"
            className="flex items-center mt-4 p-2 rounded transition-all"
          >
            <AiOutlineHome size={30} />
            <span className="ml-3 text-xl">Home</span>
          </Link>
          <Link
            href="/"
            className="flex items-center mt-4 p-2 rounded transition-all"
          >
            <BiStore size={30} />
            <span className="ml-3 text-xl">Productos</span>
          </Link>
          <Link
            href="/"
            className="flex items-center mt-4 p-2 rounded transition-all"
          >
            <BsMap size={30} />
            <span className="ml-3 text-xl">Contacto</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};
