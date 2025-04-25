import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <div className="z-10 max-w-5xl w-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
          Welcome to Honey Convent School
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Nurturing young minds and shaping future leaders since [founding year]
        </p>
        <div className="mb-12 bg-gray-100 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-md">
              <h3 className="text-lg font-medium mb-2">Academic Excellence</h3>
              <p>Comprehensive curriculum from Nursery to 12th grade with Commerce and Science streams</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-md">
              <h3 className="text-lg font-medium mb-2">Holistic Development</h3>
              <p>Focus on academic, physical, emotional, and spiritual growth of each student</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-md">
              <h3 className="text-lg font-medium mb-2">Modern Facilities</h3>
              <p>State-of-the-art infrastructure and technology-enabled learning spaces</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
          <Link href="/about" className="p-4 bg-blue-600 text-white rounded-md text-center hover:bg-blue-700">
            About Us
          </Link>
          <Link href="/academics" className="p-4 bg-blue-600 text-white rounded-md text-center hover:bg-blue-700">
            Academics
          </Link>
          <Link href="/admissions" className="p-4 bg-blue-600 text-white rounded-md text-center hover:bg-blue-700">
            Admissions
          </Link>
          <Link href="/fees-structure" className="p-4 bg-blue-600 text-white rounded-md text-center hover:bg-blue-700">
            Fees Structure
          </Link>
          <Link href="/contact" className="p-4 bg-blue-600 text-white rounded-md text-center hover:bg-blue-700">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
