import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from "next";
import { SEO, SCHOOL_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Academics",
  description: `Explore ${SCHOOL_NAME}'s academic programs from nursery to 12th grade, including specialized Science and Commerce streams. Our comprehensive curriculum focuses on holistic development and academic excellence.`,
  keywords: SEO.KEYWORDS.ACADEMICS,
  alternates: {
    canonical: '/academics',
  },
  openGraph: {
    title: `Academics | ${SCHOOL_NAME}`,
    description: `Explore ${SCHOOL_NAME}'s academic programs from nursery to 12th grade, including specialized Science and Commerce streams.`,
    url: `${SEO.CANONICAL_URL}/academics`,
    type: SEO.OG_TYPE,
  },
};

export default function AcademicsPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background decorative elements - adjusted for visibility */}
      <div className="absolute -top-10 -right-10 h-96 w-96 rounded-full bg-yellow-500 opacity-20 blur-3xl z-0"></div>
      <div className="absolute -bottom-20 -left-10 h-96 w-96 rounded-full bg-blue-300 opacity-20 blur-3xl z-0"></div>
      
      <div className="container max-w-6xl mx-auto py-12 px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center mb-10">
          <div className="inline-block p-2 bg-blue-800/60 rounded-full backdrop-blur-sm mb-4">
            <div className="px-4 py-1 bg-yellow-500 text-blue-900 font-bold rounded-full text-sm">
              Excellence in Education
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
            Academics at Honey Convent School
          </h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Providing quality education from Nursery to 12th grade with Commerce and Science streams
          </p>
        </div>
        
        <section className="mb-16">
          <Card className="border-blue-100 shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4">Our Curriculum</h2>
                <p className="text-blue-100">
                  Balanced, comprehensive, and focused on holistic development
                </p>
              </div>
              <div className="md:w-2/3 p-6">
                <CardContent className="pt-4">
                  <p className="text-lg">
                    At Honey Convent School, we follow the CBSE curriculum, enhanced with additional activities and learning opportunities that promote holistic development. Our academic program is designed to foster critical thinking, creativity, and a love for learning among students of all ages.
                  </p>
                </CardContent>
              </div>
            </div>
          </Card>
        </section>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-blue-800 text-center">Our Academic Structure</h2>
          
          <Card className="border-blue-100 shadow-md mb-12 overflow-hidden">
            <div className="h-2 bg-yellow-500"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-800">Pre-Primary Section (Nursery to KG)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Our pre-primary education focuses on developing basic cognitive, motor, and social skills through play-based learning and interactive activities.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-medium mb-3 text-blue-800">Key Features:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Activity-based learning approach</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Development of pre-reading and pre-writing skills</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Basic numerical concepts</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Language development through stories and rhymes</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Creative arts and physical activities</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Social skills and emotional development</p>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-blue-100 shadow-md mb-12 overflow-hidden">
            <div className="h-2 bg-yellow-500"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-800">Primary Section (Classes 1-5)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The primary section builds a strong foundation in core subjects while encouraging curiosity and exploration.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-medium mb-3 text-blue-800">Subjects Taught:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>English</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Hindi / Regional Language</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Mathematics</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Environmental Studies</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>General Knowledge</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Computer Education</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Arts and Crafts</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Physical Education</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-blue-100 shadow-md mb-12 overflow-hidden">
            <div className="h-2 bg-yellow-500"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-800">Middle Section (Classes 6-8)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The middle section introduces students to more advanced concepts and specialized subjects.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-medium mb-3 text-blue-800">Subjects Taught:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>English</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Hindi / Regional Language</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Mathematics</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Science</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Social Science</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Computer Science</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Third Language (Optional)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Art Education</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Health and Physical Education</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-blue-100 shadow-md mb-12 overflow-hidden">
            <div className="h-2 bg-yellow-500"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-800">Secondary Section (Classes 9-10)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The secondary section prepares students for board examinations while developing critical thinking and analytical skills.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-medium mb-3 text-blue-800">Subjects Taught:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>English</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Hindi / Regional Language</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Mathematics</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Science (Physics, Chemistry, Biology)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Social Science</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Information Technology</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Health and Physical Education</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <p>Art Education</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg shadow-lg mb-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Senior Secondary Section (Classes 11-12)</h2>
            <p className="text-center max-w-3xl mx-auto text-blue-100">
              The senior secondary section offers specialized streams to help students prepare for higher education and career choices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-blue-100 shadow-md hover:shadow-lg transition-shadow overflow-hidden h-full">
              <div className="h-2 bg-yellow-500"></div>
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-800">Science Stream</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <p>Our Science stream focuses on developing a strong foundation in scientific principles and analytical thinking.</p>
                <div className="space-y-4">
                  <h4 className="font-medium text-blue-800">Core Subjects:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <p>English</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <p>Physics</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <p>Chemistry</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <p>Mathematics / Biology</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <p>Computer Science / Physical Education (Optional)</p>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-blue-100 shadow-md hover:shadow-lg transition-shadow overflow-hidden h-full">
              <div className="h-2 bg-yellow-500"></div>
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-800">Commerce Stream</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <p>Our Commerce stream provides a comprehensive understanding of business, economics, and financial concepts.</p>
                <div className="space-y-4">
                  <h4 className="font-medium text-blue-800">Core Subjects:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <p>English</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <p>Accountancy</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <p>Business Studies</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <p>Economics</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <p>Mathematics / Informatics Practices (Optional)</p>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Join Our Academic Journey?</h2>
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