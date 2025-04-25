import Link from "next/link";
import Image from "next/image";

export default function Footer ()
{
    return(
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white rounded-full p-1 shadow-md">
                    <Image 
                      src="/logo.png" 
                      alt="Honey Convent School Logo" 
                      width={50} 
                      height={50} 
                      className="rounded-full" 
                    />
                  </div>
                  <h3 className="text-lg font-semibold">Honey Convent School</h3>
                </div>
                <p className="text-gray-300">Providing quality education since 2009.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <p className="text-gray-300">Honey Convent Higher Secondary School Susner Agar Road 465447</p>
                <p className="text-gray-300">Phone: 9644275012</p>
                <p className="text-gray-300">Email: honeyconventschoolsusner@gmail.com</p>
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
    )
}