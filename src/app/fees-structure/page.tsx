import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FeesStructurePage() {
  return (
    <div className="container max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Fees Structure</h1>
        <p className="text-muted-foreground md:text-xl max-w-[800px]">
          Academic Year [Current Year]-[Next Year]
        </p>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About Our Fees</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            At Honey Convent School, we strive to provide quality education at affordable fees. Our fee structure is designed to cover the essential expenses of maintaining educational excellence while keeping education accessible.
          </p>
          <p>
            The fee structure for the academic year [Current Year]-[Next Year] is as follows:
          </p>
        </CardContent>
      </Card>
      
      <Accordion type="single" collapsible className="mb-12">
        <AccordionItem value="one-time">
          <AccordionTrigger>
            <h2 className="text-xl font-semibold">One-Time Fees (New Admissions)</h2>
          </AccordionTrigger>
          <AccordionContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Fee Type</TableHead>
                  <TableHead className="text-right">Amount (₹)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Registration Fee</TableCell>
                  <TableCell className="text-right">[Amount]</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Admission Fee</TableCell>
                  <TableCell className="text-right">[Amount]</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Caution Money (Refundable)</TableCell>
                  <TableCell className="text-right">[Amount]</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="annual">
          <AccordionTrigger>
            <h2 className="text-xl font-semibold">Annual Fees</h2>
          </AccordionTrigger>
          <AccordionContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Fee Type</TableHead>
                  <TableHead className="text-right">Amount (₹)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Annual Development Fee</TableCell>
                  <TableCell className="text-right">[Amount]</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Computer Lab Fee</TableCell>
                  <TableCell className="text-right">[Amount]</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Science Lab Fee (Classes 6-12 only)</TableCell>
                  <TableCell className="text-right">[Amount]</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sports and Activities Fee</TableCell>
                  <TableCell className="text-right">[Amount]</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Examination Fee</TableCell>
                  <TableCell className="text-right">[Amount]</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Quarterly Tuition Fees</CardTitle>
          <CardDescription>
            Tuition fees are to be paid on a quarterly basis as per the schedule
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Class</TableHead>
                <TableHead className="text-right">Quarterly Fee (₹)</TableHead>
                <TableHead className="text-right">Annual Fee (₹)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Nursery - KG</TableCell>
                <TableCell className="text-right">[Amount]</TableCell>
                <TableCell className="text-right">[Amount]</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Classes 1-5</TableCell>
                <TableCell className="text-right">[Amount]</TableCell>
                <TableCell className="text-right">[Amount]</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Classes 6-8</TableCell>
                <TableCell className="text-right">[Amount]</TableCell>
                <TableCell className="text-right">[Amount]</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Classes 9-10</TableCell>
                <TableCell className="text-right">[Amount]</TableCell>
                <TableCell className="text-right">[Amount]</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Classes 11-12 (Science)</TableCell>
                <TableCell className="text-right">[Amount]</TableCell>
                <TableCell className="text-right">[Amount]</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Classes 11-12 (Commerce)</TableCell>
                <TableCell className="text-right">[Amount]</TableCell>
                <TableCell className="text-right">[Amount]</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Optional Fees</CardTitle>
          <CardDescription>Additional services available on request</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead className="text-right">Monthly Fee (₹)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>School Transport (Depending on distance)</TableCell>
                <TableCell className="text-right">[Amount Range]</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Lunch Program</TableCell>
                <TableCell className="text-right">[Amount]</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Extra-curricular Activities</TableCell>
                <TableCell className="text-right">[Amount]</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Fee Payment Guidelines</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Fees must be paid quarterly (April, July, October, January)</li>
            <li>Payment should be made by the 10th of the fee month</li>
            <li>Late payment will incur a surcharge of [percentage/amount]</li>
            <li>Fees can be paid through online banking, UPI, or at the school office</li>
            <li>Cheques should be made in favor of "[School Account Name]"</li>
            <li>A receipt will be issued for all fee payments</li>
            <li>No reduction is made in fees for holidays or broken periods</li>
            <li>For withdrawal, one month's notice in writing or one month's fee in lieu of notice is required</li>
          </ul>
          
          <Alert>
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>Note</AlertTitle>
            <AlertDescription>
              The Management reserves the right to revise the fee structure if necessary. Any changes will be communicated to parents in advance.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
} 