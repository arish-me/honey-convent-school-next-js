import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { SCHOOL_NAME, SCHOOL_ESTABLISHED } from '@/lib/constants';

export default function Header () {
    return(
        <>
      {/* Hero section */}
      <section className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]"></div>
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-yellow-500 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-300 opacity-20 blur-3xl"></div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="inline-block p-2 bg-blue-800/60 rounded-full backdrop-blur-sm mb-4">
              <div className="px-4 py-1 bg-yellow-500 text-blue-900 font-bold rounded-full text-sm">
                Admissions Open for 2024-25
              </div>
            </div>
            
            {/* Added school logo */}
            <div className="bg-white rounded-full p-2 shadow-lg mb-4 border-4 border-yellow-400">
              <Image 
                src="/logo.png" 
                alt={`${SCHOOL_NAME} Logo`} 
                width={120} 
                height={120} 
                className="rounded-full" 
              />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-md">
                Welcome to {SCHOOL_NAME}
              </h1>
              <p className="mx-auto max-w-[800px] text-blue-100 md:text-xl lg:text-2xl font-light">
                Nurturing young minds and shaping future leaders since <span className="font-medium">{SCHOOL_ESTABLISHED}</span>
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <Link href="/admissions">Apply for Admission</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-medium px-8 py-6 text-lg rounded-full">
                <Link href="/about">Explore Our School</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent"></div>
      </section>
      </>
    )
}