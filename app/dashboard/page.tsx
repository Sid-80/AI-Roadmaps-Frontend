"use client"
import { RootState } from '@/Redux/store'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'
import ChatBox from '@/components/Dashboard/ChatBox'

export default function Page() {
  const router = useRouter();
  const isLoggedIn = useSelector((state:RootState)=>state.auth.isAuth);

  if(!isLoggedIn) return router.push('/login')

  return (
    <div>
      <div className=" absolute bottom-14 right-9 hover:cursor-pointer border-gray-700 border-2 rounded-lg bg-[#D2DAFF] text-[#1B262C] " >
        <ChatBox/>
      </div>
    </div>
  )
}
