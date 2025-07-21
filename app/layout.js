"use client"
import "./globals.css";
import Navbar from "./components/Navbar/navbar.js"
import { usePathname } from "next/navigation";
import Footer from "./components/Footer/Footer";



export default function RootLayout({ children }) {
  const pathname = usePathname()
  const NavbarHiddenPages=["/login"]   // list of pages that do not need layout 
  const shouldHideNavbar= NavbarHiddenPages.includes(pathname)
  const shouldHideFooter=NavbarHiddenPages.includes(pathname)

  return (
    <html lang="en">
      <body>
        
         { !shouldHideNavbar && <Navbar/>}
         {children}
         { !shouldHideNavbar && <Footer/>}
         

         
         
        
        
      </body>
    </html>
  );
}
