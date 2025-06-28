import "./globals.css";
import Navbar from "./components/navbar.js"

export const metadata = {
  title: "Askpi",
  description: "A maths doubt solving app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
         {children}
         <Navbar/>
        
        
      </body>
    </html>
  );
}
