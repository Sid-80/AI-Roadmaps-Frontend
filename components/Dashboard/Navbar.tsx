"use client";
import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const username:string = useSelector((state: RootState) => state.auth.username);

  return (
    <div className="flex bg-[#D2DAFF] text-[#1B262C] p-4 items-center justify-between">
      <div>
        <h1 className=" font-bold text-xl tracking-[2px] --font-roboto-mono">Welcome, {username}</h1>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
}
