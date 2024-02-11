// "use client"
import Image from 'next/image'
import { auth } from './auth'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import styles from "./ui/home.module.css"
export default function  Home() {
  // const route = useRouter()
  // if(true) return route.push("/login")
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <h2 className={styles.title}>Homepage</h2>
        

      <Link className={styles.link} href="/login">
        Login
      </Link>
      <Link className={styles.link} href="/dashboard">
        Dashboard
      </Link>
      </div>
    </div>
  );
}
