import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link href="/" className="flex-shrink-0 flex items-center font-bold text-xl text-blue-600">
                  Honey Convent School
                </Link>
              </div>
              <nav className="hidden md:flex space-x-8 items-center">
                <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
                <Link href="/academics" className="text-gray-700 hover:text-blue-600">Academics</Link>
                <Link href="/admissions" className="text-gray-700 hover:text-blue-600">Admissions</Link>
                <Link href="/fees-structure" className="text-gray-700 hover:text-blue-600">Fees</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
              </nav>
            </div>
          </div>
        </header>
        {children}
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Honey Convent School</h3>
                <p className="text-gray-300">Providing quality education since [founding year].</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <p className="text-gray-300">[School Address]</p>
                <p className="text-gray-300">Phone: [School Phone]</p>
                <p className="text-gray-300">Email: [School Email]</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                  <li><Link href="/academics" className="text-gray-300 hover:text-white">Academics</Link></li>
                  <li><Link href="/admissions" className="text-gray-300 hover:text-white">Admissions</Link></li>
                  <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
              <p>&copy; {new Date().getFullYear()} Honey Convent School. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
