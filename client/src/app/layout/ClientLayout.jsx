"use client";

import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  // Hide navbar on /Login and /Signup
  const hideNavbar = pathname === "/LogIn" || pathname === "/SignUp";

  return (
    <div>
      {!hideNavbar && <Navbar />}
      {/* {<Navbar />} */}
      {children}
    </div>
  );
}
