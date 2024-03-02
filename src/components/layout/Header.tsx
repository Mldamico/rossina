"use client";
import { useUiStore } from "@/store/ui/ui-store";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

export const Nav = () => {
  const openMenu = useUiStore((state) => state.openSideMenu);

  return (
    <div className="w-full bg-red-500 h-28 flex justify-between items-center px-4 sm:px-20 shadow-lg">
      <h1 className="text-white  text-2xl sm:text-4xl">Lenceria Rossina</h1>
      <div className="sm:hidden">
        <button onClick={() => openMenu()}>
          <CiMenuBurger size={36} color="white" />
        </button>
      </div>
      <div className="hidden sm:flex">
        <nav className="flex gap-4">
          <div>
            <Link
              href={"/"}
              className="text-white sm:px-2 md:px-4 py-2 hover:border-b-2 hover:border-white transition-all duration-75"
            >
              Inicio
            </Link>
          </div>
          <div>
            <Link
              href={"/productos"}
              className="text-white sm:px-2 md:px-4 py-2 hover:border-b-2 hover:border-white transition-all duration-75"
            >
              Productos
            </Link>
          </div>
          <div>
            <Link
              href={"/contacto"}
              className="text-white sm:px-2 md:px-4 py-2 hover:border-b-2 hover:border-white transition-all duration-75"
            >
              Contacto
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
