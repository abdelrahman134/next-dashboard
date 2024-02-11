"use client"
import Image from 'next/image'
import { auth } from './auth'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'

export default async function  Home() {
  const route = useRouter()
  if(true) return route.push("/login")
  return (
   <h2>Homepage</h2>
  )
}
