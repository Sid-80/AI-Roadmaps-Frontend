import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function page() {
  return (
    <Card className="w-full flex flex-col md:flex-row max-w-lg md:max-w-2xl lg:max-w-4xl absolute bg-white shadow-xl rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto min-h-[30vh] md:min-h-[40vh] lg:min-h-[50vh]">
  <div className="w-full md:w-2/3 lg:w-3/4 p-4 md:p-6 flex flex-col items-center">
    <CardContent className="w-full">
      <form className="w-full">
        <div className="w-full items-center gap-4 justify-center flex flex-col">
          <h1 className="block text-2xl text-[#141E30] font-bold">Login in</h1>
          <div className="flex gap-2 justify-center">
            <a href="#" className=""><Image src="/fb.svg" alt="" width={30} height={24} /></a>
            <a href="#" className=""><Image src="/google.svg" alt="" width={30} height={24} /></a>
            <a href="#" className=""><Image src="/linkedin.svg" alt="" width={30} height={24} /></a>
          </div>
          <span className="text-[#141E30]">or use your account</span>
          <div className="flex flex-col space-y-1.5 w-full">
            <Input id="email" placeholder="Email" className="w-full" />
          </div>
          <div className="flex flex-col space-y-1.5 w-full">
            <Input id="password" placeholder="Password" className="w-full" />
          </div>
          <div className="flex flex-col space-y-1.5 w-full">
            <Input id="password" placeholder="Re-enter Password" className="w-full" />
          </div>
          <CardFooter className="flex mt-4 justify-center w-full">
            <Button>Login</Button>
          </CardFooter>
        </div>
      </form>
    </CardContent>
  </div>
  <div className="w-full md:w-1/2 lg:w-1/3 bg-[#243B55] flex items-center justify-center flex-col text-center p-4 md:p-6 rounded-b-lg md:rounded-bl-none md:rounded-r-lg min-h-[30vh] md:min-h-[40vh] lg:min-h-[50vh]">
    <CardHeader className="w-full">
      <CardTitle className="block text-2xl text-white font-bold">Welcome Back!</CardTitle>
      <CardDescription className="text-sm text-white leading-5 tracking-wide my-6 mt-[25px] mb-[35px] font-light">To keep connected with us please login with your personal info</CardDescription>
    </CardHeader>
  </div>
</Card>





  )
}