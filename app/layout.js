"use client"
import "./globals.css";
import Navbar from "./components/navbar.js"
import { usePathname } from "next/navigation";



export default function RootLayout({ children }) {
  const pathname = usePathname()
  const NavbarHiddenPages=["/login"]   // list of pages that do not need layout 
  const shouldHideNavbar= NavbarHiddenPages.includes(pathname)

  return (
    <html lang="en">
      <body>
         { !shouldHideNavbar && <Navbar/>}
         {children}
         
        
        
      </body>
    </html>
  );
}
