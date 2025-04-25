import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function AdmissionsPage() {
  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-yellow-500 opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-300 opacity-10 blur-3xl"></div>
      
      <div className="container max-w-6xl mx-auto py-12 px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center mb-10">
          <div className="inline-block p-2 bg-blue-800/60 rounded-full backdrop-blur-sm mb-4">
            <div className="px-4 py-1 bg-yellow-500 text-blue-900 font-bold rounded-full text-sm">
              Applications Open for 2024-25
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
            Admissions
          </h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Join our community of learners and begin your journey to excellence
          </p>
        </div>
        
        <section className="mb-12">
          <Card className="border-blue-100 shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4">Admission Process</h2>
                <p className="text-blue-100">
                  Simple, transparent, and focused on finding the right fit for your child
                </p>
              </div>
              <div className="md:w-2/3 p-6">
                <CardContent className="pt-4">
                  <p className="text-lg mb-6">
                    Honey Convent School welcomes applications from students who wish to be part of our educational journey. Our admission process is designed to be transparent and fair, with a focus on identifying students who will benefit from and contribute to our learning environment.
                  </p>
                  
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
                    <h3 className="text-xl font-medium mb-3 text-blue-800">General Admission Guidelines</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                          <div className="h-2 w-2 rounded-full bg-white"></div>
                        </div>
                        <p>Admissions are open from December to March each year</p>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                          <div className="h-2 w-2 rounded-full bg-white"></div>
                        </div>
                        <p>Applications are considered on a first-come, first-served basis, subject to availability of seats</p>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                          <div className="h-2 w-2 rounded-full bg-white"></div>
                        </div>
                        <p>The school reserves the right to determine the final selection of candidates</p>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                          <div className="h-2 w-2 rounded-full bg-white"></div>
                        </div>
                        <p>Age criteria must be strictly adhered to for each class level</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-3 text-blue-800">Age Criteria</h3>
                    <div className="overflow-x-auto mb-6 rounded-lg shadow border border-blue-100">
                      <Table>
                        <TableHeader className="bg-blue-50">
                          <TableRow>
                            <TableHead className="font-semibold">Class</TableHead>
                            <TableHead className="font-semibold">Age Requirement (as of March 31st)</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Nursery</TableCell>
                            <TableCell>3+ years</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">LKG</TableCell>
                            <TableCell>4+ years</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">UKG</TableCell>
                            <TableCell>5+ years</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Class 1</TableCell>
                            <TableCell>6+ years</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Higher Classes</TableCell>
                            <TableCell>Age appropriate to the class</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </section>
        
        <section className="mb-12">
          <Card className="border-blue-100 shadow-md overflow-hidden">
            <div className="h-2 bg-yellow-500"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-800">Application Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center md:transform md:transition-transform md:hover:scale-105">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">1</div>
                  <h3 className="font-semibold text-blue-800 mb-2">Collection of Application Form</h3>
                  <p className="text-sm">Application forms can be collected from the school office during working hours or downloaded from our website.</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg text-center md:transform md:transition-transform md:hover:scale-105">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">2</div>
                  <h3 className="font-semibold text-blue-800 mb-2">Submission of Completed Form</h3>
                  <p className="text-sm">Submit the completed application form along with all required documents to the school office.</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg text-center md:transform md:transition-transform md:hover:scale-105">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">3</div>
                  <h3 className="font-semibold text-blue-800 mb-2">Entrance Assessment</h3>
                  <p className="text-sm">For classes 1 and above, students may be required to take an entrance assessment appropriate to their age and grade level.</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg text-center md:transform md:transition-transform md:hover:scale-105">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">4</div>
                  <h3 className="font-semibold text-blue-800 mb-2">Interview</h3>
                  <p className="text-sm">Shortlisted candidates and their parents may be called for an interview with the school administration.</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg text-center md:transform md:transition-transform md:hover:scale-105">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">5</div>
                  <h3 className="font-semibold text-blue-800 mb-2">Admission Confirmation</h3>
                  <p className="text-sm">Selected candidates will receive an admission confirmation letter. Parents must complete the admission process by paying the required fees within the specified timeframe.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-blue-100 shadow-md overflow-hidden h-full">
            <div className="h-2 bg-yellow-500"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-800">Required Documents</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <p>Completed application form</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <p>Birth certificate (original and photocopy)</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <p>Transfer Certificate from previous school (for students seeking admission to Class 2 and above)</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <p>Report card/Progress report of the previous academic year</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <p>Four recent passport-size photographs of the student</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <p>Address proof of parents/guardians</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <p>Aadhar card of the student (if available)</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <p>Medical certificate (if required)</p>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-blue-100 shadow-md overflow-hidden h-full">
            <div className="h-2 bg-yellow-500"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-800">Contact for Admissions</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="mb-6">For any queries regarding the admission process, please contact:</p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="font-semibold text-blue-800 text-lg mb-3">Admissions Office</p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <p>Phone: 9644275012</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <p>Email: honeyconventschoolsusner@gmail.com</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </div>
                    <p>Working Hours: Monday to Friday, 9:00 AM to 2:00 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Begin Your Educational Journey with Us</h2>
          <p className="mb-6 max-w-2xl mx-auto">Take the first step towards providing your child with a quality education that focuses on holistic development.</p>
          <Link 
            href="/contact" 
            className="px-6 py-3 rounded-full bg-yellow-500 text-blue-900 font-semibold hover:bg-yellow-400 shadow-md transition duration-150 ease-in-out inline-block mr-4"
          >
            Contact Us
          </Link>
          <Link 
            href="/fees-structure" 
            className="px-6 py-3 rounded-full bg-white text-blue-900 font-semibold hover:bg-blue-50 shadow-md transition duration-150 ease-in-out inline-block"
          >
            View Fees Structure
          </Link>
        </div>
      </div>
    </div>
  );
} 