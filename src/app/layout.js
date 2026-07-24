import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";



const poppines= Poppins({
  variable: "--font-poppines",
  subsets: ["latin"],
  weight:["400","500","600","700","800","900"]
})

export const metadata = {
  title: "Dragon News",
  description: "Best News Protal in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="light"
      lang="en"
      className={` h-full antialiased`}
    >
      <body  className={`${poppines.className} min-h-full flex flex-col`}>
        
        <main>{children}</main>
      </body>
    </html>
  );
}
