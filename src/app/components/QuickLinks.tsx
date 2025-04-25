import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, BookOpen, Trophy } from 'lucide-react';

export default function QuickLinks () {
    return(
        <>
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
        </>
    )
}