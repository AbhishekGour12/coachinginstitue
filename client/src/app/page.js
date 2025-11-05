'use client'

import Link from "next/link";



export default function Home() {
 


  return (
    <>
      <Link href="/">Home</Link> <br />
      <Link href="/Login">Login</Link>
      <br />
      <Link href="/Register">Register</Link>
      <br />
      <Link href="/Contact">Contact</Link>
      <br />
      <Link href="/About">About</Link>
      <br />
    </>
  );
}
