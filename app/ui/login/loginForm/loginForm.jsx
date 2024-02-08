"use client"

import { authenticate } from "@/app/lib/action";
import {useFormState} from "react-dom"
import styles from "./loginForm.module.css"
export default function LoginForm() {
const [state , formAction] = useFormState(authenticate,undefined)
  return (
    <form action={formAction} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state && state}  
    </form>
  );
}