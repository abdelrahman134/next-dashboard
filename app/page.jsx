"use client"
import Image from 'next/image'
import { auth } from './auth'
import { redirect } from 'next/navigation'

export default async function  Home() {
  if(true)  redirect("/login")
  return (
   <h2>Homepage</h2>
  )
}
