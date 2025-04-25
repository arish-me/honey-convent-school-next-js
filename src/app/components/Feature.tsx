import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, GraduationCap, Users, BookOpen } from 'lucide-react';
export default function Feature () {
    return(
        <>
        {/* Features section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block p-1 bg-blue-100 rounded-full mb-4">
              <div className="px-4 py-1 bg-blue-600 text-white font-medium rounded-full text-sm">
                Why Choose Us
              </div>
            </div>
            <div className="space-y-2 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                Excellence in Education
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Providing comprehensive education from nursery to 12th grade with a focus on holistic development
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all group">
              <div className="absolute top-0 left-0 right-0 h-2 bg-blue-600"></div>
              <CardHeader className="pb-2">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <GraduationCap className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl text-blue-800">Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive curriculum from Nursery to 12th grade with Commerce and Science streams. Our students consistently achieve outstanding results.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/academics" className="text-blue-600 inline-flex items-center text-sm font-medium group-hover:text-blue-700">
                  Learn More <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all group">
              <div className="absolute top-0 left-0 right-0 h-2 bg-yellow-500"></div>
              <CardHeader className="pb-2">
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                  <Users className="h-8 w-8 text-yellow-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl text-blue-800">Holistic Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Focus on academic, physical, emotional, and spiritual growth of each student with extensive co-curricular activities and sports.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/about" className="text-blue-600 inline-flex items-center text-sm font-medium group-hover:text-blue-700">
                  Learn More <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all group">
              <div className="absolute top-0 left-0 right-0 h-2 bg-green-600"></div>
              <CardHeader className="pb-2">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <BookOpen className="h-8 w-8 text-green-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl text-blue-800">Modern Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  State-of-the-art infrastructure with smart classrooms, extensive libraries, modern labs, and spacious playgrounds for complete development.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/about" className="text-blue-600 inline-flex items-center text-sm font-medium group-hover:text-blue-700">
                  Learn More <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      </>
    )
}