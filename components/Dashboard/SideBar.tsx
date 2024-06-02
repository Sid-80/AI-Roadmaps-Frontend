"use client";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { logOut } from "@/Redux/Auth/auth-slice";

export default function SideBar() {
  const dispatch = useDispatch();

  return (
    <div className="p-10 flex flex-col items-center justify-between bg-[#D2DAFF] text-[#1B262C]">
      <div>
        <h1>Logo</h1>

        <div className="flex flex-col py-10">
          <Button>Generate New</Button>
        </div>
      </div>

      <div className="flex gap-4">
        <Button variant={"secondary"} onClick={() => dispatch(logOut())}>
          Logout
        </Button>
      </div>
    </div>
  );
}
