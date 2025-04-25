import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, GraduationCap, Users, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Welcome to Honey Convent School
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Nurturing young minds and shaping future leaders since [founding year]
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild className="bg-primary">
                <Link href="/admissions">Apply for Admission</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Highlights
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Providing excellence in education from nursery to 12th grade
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive curriculum from Nursery to 12th grade with Commerce and Science streams.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/academics" className="text-primary inline-flex items-center text-sm">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Holistic Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Focus on academic, physical, emotional, and spiritual growth of each student.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/about" className="text-primary inline-flex items-center text-sm">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Modern Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  State-of-the-art infrastructure and technology-enabled learning spaces.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/about" className="text-primary inline-flex items-center text-sm">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Call-to-action section */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join Our School Community
              </h2>
              <p className="text-gray-500 md:text-xl">
                Discover the benefits of quality education in a nurturing environment. 
                Our dedicated faculty ensures each student receives personalized attention.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-primary">
                  <Link href="/admissions">Admissions</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="bg-gray-200 h-[300px] rounded-lg flex items-center justify-center">
              <span className="text-gray-500">School Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="w-full py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button asChild variant="outline" className="h-auto py-6 flex flex-col items-center justify-center">
              <Link href="/about">
                <span className="text-lg font-medium">About Us</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-6 flex flex-col items-center justify-center">
              <Link href="/academics">
                <span className="text-lg font-medium">Academics</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-6 flex flex-col items-center justify-center">
              <Link href="/admissions">
                <span className="text-lg font-medium">Admissions</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-6 flex flex-col items-center justify-center">
              <Link href="/fees-structure">
                <span className="text-lg font-medium">Fees Structure</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
