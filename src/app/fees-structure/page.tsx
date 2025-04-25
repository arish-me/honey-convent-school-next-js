export default function FeesStructurePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <div className="z-10 max-w-5xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">Fees Structure</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Academic Year [Current Year]-[Next Year]</h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <p className="mb-4">
              At Honey Convent School, we strive to provide quality education at affordable fees. Our fee structure is designed to cover the essential expenses of maintaining educational excellence while keeping education accessible.
            </p>
            <p>
              The fee structure for the academic year [Current Year]-[Next Year] is as follows:
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">One-Time Fees (New Admissions)</h2>
          <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-md">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 border-b text-left">Fee Type</th>
                  <th className="py-3 px-4 border-b text-right">Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b">Registration Fee</td>
                  <td className="py-3 px-4 border-b text-right">[Amount]</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Admission Fee</td>
                  <td className="py-3 px-4 border-b text-right">[Amount]</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Caution Money (Refundable)</td>
                  <td className="py-3 px-4 border-b text-right">[Amount]</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Annual Fees</h2>
          <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-md">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 border-b text-left">Fee Type</th>
                  <th className="py-3 px-4 border-b text-right">Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b">Annual Development Fee</td>
                  <td className="py-3 px-4 border-b text-right">[Amount]</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Computer Lab Fee</td>
                  <td className="py-3 px-4 border-b text-right">[Amount]</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Science Lab Fee (Classes 6-12 only)</td>
                  <td className="py-3 px-4 border-b text-right">[Amount]</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Sports and Activities Fee</td>
                  <td className="py-3 px-4 border-b text-right">[Amount]</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Examination Fee</td>
                  <td className="py-3 px-4 border-b text-right">[Amount]</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Quarterly Tuition Fees</h2>
          <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-md">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 border-b text-left">Class</th>
                  <th className="py-3 px-4 border-b text-right">Quarterly Fee (₹)</th>
                  <th className="py-3 px-4 border-b text-right">Annual Fee (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b">Nursery - KG</td>
                  <td className="py-3 px-4 border-b text-right">[Amount]</td>
                  <td className="py-3 px-4 border-b text-right">[Amount]</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Classes 1-5</td>
                  <td className="py-3 px-4 border-b text-right">[Amount]</td>
                  <td className="py-3 px-4 border-b text-right">[Amount]</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Classes 6-8</td>
                  <td className="py-3 px-4 border-b text-right">[Amount]</td>
                  <td className="py-3 px-4 border-b text-right">[Amount]</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Classes 9-10</td>
                  <td className="py-3 px-4 border-b text-right">[Amount]</td>
                  <td className="py-3 px-4 border-b text-right">[Amount]</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Classes 11-12 (Science)</td>
                  <td className="py-3 px-4 border-b text-right">[Amount]</td>
                  <td className="py-3 px-4 border-b text-right">[Amount]</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Classes 11-12 (Commerce)</td>
                  <td className="py-3 px-4 border-b text-right">[Amount]</td>
                  <td className="py-3 px-4 border-b text-right">[Amount]</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Optional Fees</h2>
          <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-md">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 border-b text-left">Service</th>
                  <th className="py-3 px-4 border-b text-right">Monthly Fee (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b">School Transport (Depending on distance)</td>
                  <td className="py-3 px-4 border-b text-right">[Amount Range]</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Lunch Program</td>
                  <td className="py-3 px-4 border-b text-right">[Amount]</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Extra-curricular Activities</td>
                  <td className="py-3 px-4 border-b text-right">[Amount]</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Fee Payment Guidelines</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
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
            
            <div className="bg-gray-100 p-4 rounded-md mt-6">
              <p className="font-semibold">Note:</p>
              <p>The Management reserves the right to revise the fee structure if necessary. Any changes will be communicated to parents in advance.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 