"use client";
import { useUiStore } from "@/store/ui/ui-store";
import React from "react";
import { CiMenuBurger } from "react-icons/ci";

export const Nav = () => {
  const openMenu = useUiStore((state) => state.openSideMenu);
  return (
    <div className="w-full bg-slate-500 h-28 flex justify-between items-center px-16">
      <h1 className="text-white  text-2xl sm:text-4xl">Lenceria Rossina</h1>
      <button onClick={() => openMenu()}>
        <CiMenuBurger size={36} color="white" />
      </button>
    </div>
  );
};
