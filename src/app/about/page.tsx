import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-yellow-500 opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-300 opacity-10 blur-3xl"></div>
      
      <div className="container max-w-6xl mx-auto py-12 px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center mb-10">
          <div className="inline-block p-2 bg-blue-800/60 rounded-full backdrop-blur-sm mb-4">
            <div className="px-4 py-1 bg-yellow-500 text-blue-900 font-bold rounded-full text-sm">
              Established 2009
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
            About Honey Convent School
          </h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            A center of excellence committed to nurturing young minds since 2009.
          </p>
        </div>
        
        <Tabs defaultValue="history" className="mb-12">
          <TabsList className="grid w-full grid-cols-4 bg-blue-50">
            <TabsTrigger value="history" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Our History</TabsTrigger>
            <TabsTrigger value="mission" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Our Mission</TabsTrigger>
            <TabsTrigger value="values" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Our Values</TabsTrigger>
            <TabsTrigger value="leadership" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Leadership</TabsTrigger>
          </TabsList>
          
          <TabsContent value="history">
            <Card className="border-blue-100 shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-2">2009</h3>
                    <p className="text-blue-100">Year Established</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle className="text-blue-800">Our History</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Founded in 2009, Honey Convent School has been a beacon of quality education in the region for over 14 years. The school was established with a vision to provide holistic education that nurtures not just the mind, but also the body and soul of each student.
                    </p>
                    <p>
                      What began as a small establishment with just a few classrooms has now grown into a comprehensive educational institution spanning from Nursery to 12th grade, with specialized streams in Commerce and Science for senior secondary students.
                    </p>
                    <p>
                      Throughout our journey, we have consistently upheld our founding principles while adapting to modern educational needs and technological advancements.
                    </p>
                  </CardContent>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="mission">
            <Card className="border-blue-100 shadow-md">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <p className="text-lg">
                  At Honey Convent School, our mission is to provide a nurturing environment where students can develop their intellectual, physical, emotional, and spiritual potential.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <p className="font-medium text-blue-800 mb-4">We strive to:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <p>Impart quality education that prepares students for academic excellence and lifelong learning</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <p>Foster critical thinking, creativity, and problem-solving skills</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <p>Nurture ethical values, integrity, and respect for diversity</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <p>Develop leadership qualities and social responsibility</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <p>Provide a safe and inclusive learning environment for all students</p>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="values">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-blue-100 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-2 bg-yellow-500"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-blue-800">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We pursue excellence in all aspects of education, encouraging our students to strive for their personal best in academics, sports, arts, and character development.</p>
                </CardContent>
              </Card>
              
              <Card className="border-blue-100 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-2 bg-yellow-500"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-blue-800">Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We uphold honesty, ethical conduct, and moral strength as fundamental aspects of our educational philosophy.</p>
                </CardContent>
              </Card>
              
              <Card className="border-blue-100 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-2 bg-yellow-500"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-blue-800">Respect</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We foster respect for self, others, diversity, and the environment, teaching our students to appreciate differences and collaborate effectively.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="leadership">
            <Card className="border-blue-100 shadow-md">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardTitle>School Leadership</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">Principal</h3>
                  <div className="md:flex items-center gap-6">
                    <div className="rounded-full bg-blue-200 h-24 w-24 flex items-center justify-center mb-4 md:mb-0">
                      <div className="text-blue-800 font-bold">Principal</div>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Our Principal brings years of educational expertise and compassionate leadership to guide our school community toward academic excellence and personal development.</p>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">Management Committee</h3>
                  <p className="text-muted-foreground">Our school is guided by a management committee comprising experienced educators, community leaders, and dedicated individuals who bring their expertise to ensure the school's continuous growth and development.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Our Achievements</h2>
            <Card className="border-blue-100 shadow-md">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Consistent academic excellence with outstanding board exam results</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Regional and state-level achievements in sports competitions</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Recognition for cultural performances and arts</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Community service initiatives and environmental awareness programs</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">School Infrastructure</h2>
            <Card className="border-blue-100 shadow-md">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Modern classrooms with digital learning tools</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Well-equipped science and computer labs</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Sports facilities for indoor and outdoor games</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Library with a diverse collection of books and digital resources</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-blue-50 p-6 rounded-lg border-l-4 border-yellow-500 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Visit Our School</h2>
            <p className="mb-6">Experience the Honey Convent School difference firsthand. Schedule a visit to our campus to see our facilities and meet our staff.</p>
            <Link 
              href="/contact" 
              className="px-6 py-3 rounded-full bg-yellow-500 text-blue-900 font-semibold hover:bg-yellow-400 shadow-md transition duration-150 ease-in-out transform hover:scale-105 inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Join the Honey Convent School Family</h2>
          <p className="mb-6 max-w-2xl mx-auto">Admissions are open for the academic year 2024-25. Secure a bright future for your child with us.</p>
          <Link 
            href="/admissions" 
            className="px-6 py-3 rounded-full bg-yellow-500 text-blue-900 font-semibold hover:bg-yellow-400 shadow-md transition duration-150 ease-in-out inline-block"
          >
            Apply for Admission
          </Link>
        </div>
      </div>
    </div>
  );
} 