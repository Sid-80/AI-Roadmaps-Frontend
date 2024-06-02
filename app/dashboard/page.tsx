"use client"
import { RootState } from '@/Redux/store'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Page() {
  const router = useRouter();
  const isLoggedIn = useSelector((state:RootState)=>state.auth.isAuth);

  if(!isLoggedIn) return router.push('/login')

  return (
    <div></div>
  )
}
