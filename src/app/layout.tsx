import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";

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
    <html lang="en" className="bg-slate-100  font-serif">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
