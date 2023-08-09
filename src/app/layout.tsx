import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AuthProvider from "./providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NxtBlog",
  description: "A blog for the people by the people",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en" className="bg-slate-100  font-serif scroll-smooth">
      <body className={inter.className}>
      <AuthProvider>
        <NavBar />
        
        {children}
     
        <Footer />
        </AuthProvider>
      </body>
    </html>
   
  );
}
