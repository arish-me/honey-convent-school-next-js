import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header/Header"
import Footer from "./footer/Footer"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Honey Convent School",
  description: "Quality education from Nursery to 12th grade with Commerce and Science streams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex min-h-screen flex-col bg-background antialiased`}>
        <Header/>
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
