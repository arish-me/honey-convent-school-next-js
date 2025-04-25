import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

export default function FeesStructurePage() {
  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-yellow-500 opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-300 opacity-10 blur-3xl"></div>
      
      <div className="container max-w-6xl mx-auto py-12 px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center mb-10">
          <div className="inline-block p-2 bg-blue-800/60 rounded-full backdrop-blur-sm mb-4">
            <div className="px-4 py-1 bg-yellow-500 text-blue-900 font-bold rounded-full text-sm">
              Academic Year 2024-25
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
            Fees Structure
          </h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Transparent pricing designed to provide quality education at affordable rates
          </p>
        </div>
        
        <Card className="mb-8 border-blue-100 shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 flex flex-col justify-center">
              <CardTitle className="text-2xl font-bold mb-4">About Our Fees</CardTitle>
              <p className="text-blue-100">
                Quality education at affordable rates
              </p>
            </div>
            <div className="md:w-2/3 p-6">
              <CardContent className="pt-4">
                <p className="mb-4 text-lg">
                  At Honey Convent School, we strive to provide quality education at affordable fees. Our fee structure is designed to cover the essential expenses of maintaining educational excellence while keeping education accessible.
                </p>
                <p>
                  The fee structure for the academic year 2024-25 is as follows:
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
        
        <Accordion type="single" collapsible className="mb-12">
          <AccordionItem value="one-time" className="border-blue-100 shadow-md rounded-lg mb-4 overflow-hidden">
            <div className="h-2 bg-yellow-500"></div>
            <AccordionTrigger className="px-6 py-4 hover:bg-blue-50 transition-colors">
              <h2 className="text-xl font-semibold text-blue-800">One-Time Fees (New Admissions)</h2>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 pt-2">
              <Table>
                <TableHeader className="bg-blue-50">
                  <TableRow>
                    <TableHead className="font-semibold">Fee Type</TableHead>
                    <TableHead className="text-right font-semibold">Amount (₹)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Registration Fee</TableCell>
                    <TableCell className="text-right">₹500</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Admission Fee</TableCell>
                    <TableCell className="text-right">₹5,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Caution Money (Refundable)</TableCell>
                    <TableCell className="text-right">₹2,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="annual" className="border-blue-100 shadow-md rounded-lg overflow-hidden">
            <div className="h-2 bg-yellow-500"></div>
            <AccordionTrigger className="px-6 py-4 hover:bg-blue-50 transition-colors">
              <h2 className="text-xl font-semibold text-blue-800">Annual Fees</h2>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 pt-2">
              <Table>
                <TableHeader className="bg-blue-50">
                  <TableRow>
                    <TableHead className="font-semibold">Fee Type</TableHead>
                    <TableHead className="text-right font-semibold">Amount (₹)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Annual Development Fee</TableCell>
                    <TableCell className="text-right">₹3,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Computer Lab Fee</TableCell>
                    <TableCell className="text-right">₹1,500</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Science Lab Fee (Classes 6-12 only)</TableCell>
                    <TableCell className="text-right">₹1,800</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sports and Activities Fee</TableCell>
                    <TableCell className="text-right">₹1,200</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Examination Fee</TableCell>
                    <TableCell className="text-right">₹1,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <Card className="mb-12 border-blue-100 shadow-md overflow-hidden">
          <div className="h-2 bg-yellow-500"></div>
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-800">Quarterly Tuition Fees</CardTitle>
            <CardDescription>
              Tuition fees are to be paid on a quarterly basis as per the schedule
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Table>
              <TableHeader className="bg-blue-50">
                <TableRow>
                  <TableHead className="font-semibold">Class</TableHead>
                  <TableHead className="text-right font-semibold">Quarterly Fee (₹)</TableHead>
                  <TableHead className="text-right font-semibold">Annual Fee (₹)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Nursery - KG</TableCell>
                  <TableCell className="text-right">₹5,000</TableCell>
                  <TableCell className="text-right">₹20,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Classes 1-5</TableCell>
                  <TableCell className="text-right">₹6,250</TableCell>
                  <TableCell className="text-right">₹25,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Classes 6-8</TableCell>
                  <TableCell className="text-right">₹7,500</TableCell>
                  <TableCell className="text-right">₹30,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Classes 9-10</TableCell>
                  <TableCell className="text-right">₹8,750</TableCell>
                  <TableCell className="text-right">₹35,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Classes 11-12 (Science)</TableCell>
                  <TableCell className="text-right">₹10,000</TableCell>
                  <TableCell className="text-right">₹40,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Classes 11-12 (Commerce)</TableCell>
                  <TableCell className="text-right">₹9,250</TableCell>
                  <TableCell className="text-right">₹37,000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card className="mb-12 border-blue-100 shadow-md overflow-hidden">
          <div className="h-2 bg-yellow-500"></div>
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-800">Optional Fees</CardTitle>
            <CardDescription>Additional services available on request</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Table>
              <TableHeader className="bg-blue-50">
                <TableRow>
                  <TableHead className="font-semibold">Service</TableHead>
                  <TableHead className="text-right font-semibold">Monthly Fee (₹)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">School Transport (Depending on distance)</TableCell>
                  <TableCell className="text-right">₹800 - ₹1,500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Lunch Program</TableCell>
                  <TableCell className="text-right">₹1,200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Extra-curricular Activities</TableCell>
                  <TableCell className="text-right">₹800</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card className="border-blue-100 shadow-md overflow-hidden mb-12">
          <div className="h-2 bg-yellow-500"></div>
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-800">Fee Payment Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <p>Fees must be paid quarterly (April, July, October, January)</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <p>Payment should be made by the 10th of the fee month</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <p>Late payment will incur a surcharge of 5% per month</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <p>Fees can be paid through online banking, UPI, or at the school office</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <p>Cheques should be made in favor of "Honey Convent School"</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <p>A receipt will be issued for all fee payments</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <p>No reduction is made in fees for holidays or broken periods</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <p>For withdrawal, one month's notice in writing or one month's fee in lieu of notice is required</p>
                </li>
              </ul>
            </div>
            
            <Alert className="border-blue-200 bg-blue-50">
              <InfoIcon className="h-5 w-5 text-blue-600" />
              <AlertTitle className="text-blue-800 font-medium">Note</AlertTitle>
              <AlertDescription>
                The Management reserves the right to revise the fee structure if necessary. Any changes will be communicated to parents in advance.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
        
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Have Questions About Our Fees?</h2>
          <p className="mb-6 max-w-2xl mx-auto">Our administrative team is ready to assist you with any queries regarding the fee structure or payment options.</p>
          <Link 
            href="/contact" 
            className="px-6 py-3 rounded-full bg-yellow-500 text-blue-900 font-semibold hover:bg-yellow-400 shadow-md transition duration-150 ease-in-out inline-block mr-4"
          >
            Contact Us
          </Link>
          <Link 
            href="/admissions" 
            className="px-6 py-3 rounded-full bg-white text-blue-900 font-semibold hover:bg-blue-50 shadow-md transition duration-150 ease-in-out inline-block"
          >
            Apply for Admission
          </Link>
        </div>
      </div>
    </div>
  );
} 