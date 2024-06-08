"use client";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { logOut } from "@/Redux/Auth/auth-slice";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import NewFile from "./NewFile";
export default function SideBar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className="hidden  p-8 sm:flex flex-col items-center justify-between bg-[#D2DAFF] text-[#1B262C]">
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-3">
          <Image
            onClick={() => setOpen(!open)}
            className="w-5 h-5 cursor-pointer"
            width={5}
            height={5}
            src={"/bars3.svg"}
            alt=""
          />
          <Link
            href={"/dashboard"}
            className={`${open ? "" : "hidden"} text-sm font-semibold`}
          >
            AI-Roadmaps
          </Link>
        </div>

        <div className="flex flex-col py-10">
          <Button  className="flex gap-3">
            <Image
              className="w-5 h-5"
              width={5}
              height={5}
              src={"/document.svg"}
              alt=""
            />
            <p className={`${open ? "" : "hidden"}`}><NewFile/></p>
          </Button>
        </div>
      </div>

      <div className="flex gap-4">
        <Button variant={"secondary"} onClick={() => dispatch(logOut())} className="flex gap-3">
          <p className={`${open ? "" : "hidden"} text-sm font-semibold`}>Logout</p>
          <Image
            onClick={() => setOpen(!open)}
            className="w-5 h-5"
            width={5}
            height={5}
            src={"/logout.svg"}
            alt=""
          />
        </Button>
      </div>
    </div>
  );
}
