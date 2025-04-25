import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Clock, Calendar } from 'lucide-react';

export default function CTA  () {
    return(
        <>
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
        </>
    )
}