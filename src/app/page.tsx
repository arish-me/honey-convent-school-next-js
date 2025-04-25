import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, GraduationCap, Users, BookOpen, Clock, Calendar, Trophy } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
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
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-md">
                Welcome to Honey Convent School
              </h1>
              <p className="mx-auto max-w-[800px] text-blue-100 md:text-xl lg:text-2xl font-light">
                Nurturing young minds and shaping future leaders since <span className="font-medium">1995</span>
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

      {/* Stats section */}
      <section className="w-full py-12 bg-blue-900 text-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">30+</div>
              <p className="text-blue-200">Years of Excellence</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">5000+</div>
              <p className="text-blue-200">Happy Students</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">100+</div>
              <p className="text-blue-200">Qualified Teachers</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">98%</div>
              <p className="text-blue-200">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-action section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200/50 bg-[size:20px_20px]"></div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block p-1 bg-blue-100 rounded-full mb-4">
                <div className="px-4 py-1 bg-blue-600 text-white font-medium rounded-full text-sm">
                  Join Us Today
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                Begin Your Child's Journey With Us
              </h2>
              <p className="text-gray-600 md:text-xl">
                Discover the benefits of quality education in a nurturing environment. 
                Our dedicated faculty ensures each student receives personalized attention for overall growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full shadow-md">
                  <Link href="/admissions">Apply for Admission</Link>
                </Button>
                <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg rounded-full">
                  <Link href="/contact">Schedule a Visit</Link>
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-tr from-blue-100 to-blue-50 h-[400px] rounded-2xl flex items-center justify-center shadow-xl overflow-hidden relative">
              <div className="absolute inset-2 bg-white/60 backdrop-blur-sm rounded-xl"></div>
              <div className="relative z-10 text-center p-6">
                <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Admission Timeline</h3>
                <div className="space-y-3 mt-6">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">Form Submission</p>
                      <p className="text-sm text-gray-600">Now Open - March 30, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">Entrance Test</p>
                      <p className="text-sm text-gray-600">April 15, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">Session Begins</p>
                      <p className="text-sm text-gray-600">June 1, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <h3 className="text-2xl font-bold text-center text-blue-900 mb-8">Quick Links</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Button asChild variant="outline" className="h-auto py-8 flex flex-col items-center justify-center rounded-xl border-blue-200 hover:border-blue-600 hover:bg-blue-50 transition-all group">
              <Link href="/about">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Users className="h-6 w-6 text-blue-600 group-hover:text-white" />
                </div>
                <span className="text-lg font-medium text-blue-900">About Us</span>
                <span className="text-sm text-gray-500 mt-1">Our vision and mission</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-8 flex flex-col items-center justify-center rounded-xl border-blue-200 hover:border-blue-600 hover:bg-blue-50 transition-all group">
              <Link href="/academics">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <BookOpen className="h-6 w-6 text-blue-600 group-hover:text-white" />
                </div>
                <span className="text-lg font-medium text-blue-900">Academics</span>
                <span className="text-sm text-gray-500 mt-1">Curriculum & programs</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-8 flex flex-col items-center justify-center rounded-xl border-blue-200 hover:border-blue-600 hover:bg-blue-50 transition-all group">
              <Link href="/admissions">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <GraduationCap className="h-6 w-6 text-blue-600 group-hover:text-white" />
                </div>
                <span className="text-lg font-medium text-blue-900">Admissions</span>
                <span className="text-sm text-gray-500 mt-1">Enroll your child</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-8 flex flex-col items-center justify-center rounded-xl border-blue-200 hover:border-blue-600 hover:bg-blue-50 transition-all group">
              <Link href="/fees-structure">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Trophy className="h-6 w-6 text-blue-600 group-hover:text-white" />
                </div>
                <span className="text-lg font-medium text-blue-900">Fees Structure</span>
                <span className="text-sm text-gray-500 mt-1">Transparent fee details</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
