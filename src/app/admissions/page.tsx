export default function AdmissionsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <div className="z-10 max-w-5xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">Admissions</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Admission Process</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-6">
              Honey Convent School welcomes applications from students who wish to be part of our educational journey. Our admission process is designed to be transparent and fair, with a focus on identifying students who will benefit from and contribute to our learning environment.
            </p>
            
            <h3 className="text-xl font-medium mb-3">General Admission Guidelines</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Admissions are typically open from [month] to [month] each year</li>
              <li>Applications are considered on a first-come, first-served basis, subject to availability of seats</li>
              <li>The school reserves the right to determine the final selection of candidates</li>
              <li>Age criteria must be strictly adhered to for each class level</li>
            </ul>
            
            <h3 className="text-xl font-medium mb-3">Age Criteria</h3>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b">Class</th>
                    <th className="py-2 px-4 border-b">Age Requirement (as of March 31st)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Nursery</td>
                    <td className="py-2 px-4 border-b">3+ years</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">LKG</td>
                    <td className="py-2 px-4 border-b">4+ years</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">UKG</td>
                    <td className="py-2 px-4 border-b">5+ years</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Class 1</td>
                    <td className="py-2 px-4 border-b">6+ years</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Higher Classes</td>
                    <td className="py-2 px-4 border-b">Age appropriate to the class</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Application Process</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ol className="list-decimal pl-6 mb-6 space-y-4">
              <li>
                <strong>Collection of Application Form</strong>
                <p className="mt-1">Application forms can be collected from the school office during working hours or downloaded from our website.</p>
              </li>
              <li>
                <strong>Submission of Completed Form</strong>
                <p className="mt-1">Submit the completed application form along with all required documents to the school office.</p>
              </li>
              <li>
                <strong>Entrance Assessment</strong>
                <p className="mt-1">For classes 1 and above, students may be required to take an entrance assessment appropriate to their age and grade level.</p>
              </li>
              <li>
                <strong>Interview</strong>
                <p className="mt-1">Shortlisted candidates and their parents may be called for an interview with the school administration.</p>
              </li>
              <li>
                <strong>Admission Confirmation</strong>
                <p className="mt-1">Selected candidates will receive an admission confirmation letter. Parents must complete the admission process by paying the required fees within the specified timeframe.</p>
              </li>
            </ol>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Required Documents</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Completed application form</li>
              <li>Birth certificate (original and photocopy)</li>
              <li>Transfer Certificate from previous school (for students seeking admission to Class 2 and above)</li>
              <li>Report card/Progress report of the previous academic year</li>
              <li>Four recent passport-size photographs of the student</li>
              <li>Address proof of parents/guardians</li>
              <li>Aadhar card of the student (if available)</li>
              <li>Medical certificate (if required)</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact for Admissions</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">For any queries regarding the admission process, please contact:</p>
            <div>
              <p><strong>Admissions Office</strong></p>
              <p>Phone: [Admissions Office Phone Number]</p>
              <p>Email: [Admissions Email]</p>
              <p>Working Hours: Monday to Friday, 9:00 AM to 2:00 PM</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 