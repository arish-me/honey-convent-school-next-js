import Link from "next/link";
import Image from "next/image";
import { SCHOOL_NAME, SCHOOL_FULL_NAME, SCHOOL_LOCATION, SCHOOL_PHONE, SCHOOL_EMAIL, SCHOOL_ESTABLISHED, FACEBOOK_LINK, INSTAGRAM_LINK } from "@/lib/constants";

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
                      alt={`${SCHOOL_NAME} Logo`} 
                      width={50} 
                      height={50} 
                      className="rounded-full" 
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{SCHOOL_NAME}</h3>
                </div>
                <p className="text-gray-300">Providing quality education since {SCHOOL_ESTABLISHED}.</p>
                <div className="flex space-x-4 mt-4">
                  <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300 hover:text-blue-500 transition-colors">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300 hover:text-pink-500 transition-colors">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <p className="text-gray-300">{SCHOOL_FULL_NAME} {SCHOOL_LOCATION}</p>
                <p className="text-gray-300">Phone: {SCHOOL_PHONE}</p>
                <p className="text-gray-300">Email: {SCHOOL_EMAIL}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                  <li><Link href="/academics" className="text-gray-300 hover:text-white">Academics</Link></li>
                  <li><Link href="/gallery" className="text-gray-300 hover:text-white">Gallery</Link></li>
                  <li><Link href="/admissions" className="text-gray-300 hover:text-white">Admissions</Link></li>
                  <li><Link href="/fees-structure" className="text-gray-300 hover:text-white">Fees Structure</Link></li>
                  <li><Link href="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
                  <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
              <p>&copy; {new Date().getFullYear()} {SCHOOL_NAME}. All rights reserved.</p>
            </div>
          </div>
        </footer>
    )
}