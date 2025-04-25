import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, Briefcase, GraduationCap, CalendarClock, MapPin } from "lucide-react";
import { Metadata } from "next";
import { SEO, SCHOOL_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Careers",
  description: `Join our team at ${SCHOOL_NAME}. We are looking for dedicated teaching professionals for primary, middle, and higher classes as well as sports teachers.`,
  keywords: SEO.KEYWORDS.CAREERS,
  alternates: {
    canonical: '/careers',
  },
  openGraph: {
    title: `Career Opportunities | ${SCHOOL_NAME}`,
    description: `Join our team at ${SCHOOL_NAME}. Explore teaching opportunities across various grade levels.`,
    url: `${SEO.CANONICAL_URL}/careers`,
    type: SEO.OG_TYPE,
  },
};

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: "Pre-Primary Teacher",
      department: "Pre-Primary Section",
      type: "Full-time",
      location: "On-campus",
      postedDate: "May 15, 2024",
      applyLink: "https://forms.gle/your-pre-primary-form-link",
      description: "We are seeking enthusiastic and nurturing Pre-Primary teachers who are passionate about early childhood education. The ideal candidate will have experience in teaching young children and be able to create an engaging and supportive learning environment.",
      requirements: [
        "Bachelor's or Master's degree in Early Childhood Education",
        "Minimum 2 years of teaching experience with pre-primary children",
        "Excellent communication and interpersonal skills",
        "Patience and creativity in teaching young children",
        "Knowledge of child development and age-appropriate teaching methods"
      ],
      responsibilities: [
        "Plan and implement creative lessons suitable for young learners",
        "Establish a nurturing and stimulating classroom environment",
        "Monitor and document children's progress",
        "Communicate effectively with parents",
        "Collaborate with other teachers and staff"
      ]
    },
    {
      id: 2,
      title: "Middle School Teacher",
      department: "Middle School Section (Classes 6-8)",
      type: "Full-time",
      location: "On-campus",
      postedDate: "May 12, 2024",
      applyLink: "https://forms.gle/your-middle-school-form-link",
      description: "We are looking for dedicated Middle School teachers with expertise in Mathematics, Science, Social Studies, or English. The ideal candidate will foster critical thinking and engage students in active learning.",
      requirements: [
        "Bachelor's or Master's degree in Education with specialization in relevant subject",
        "Minimum 3 years of teaching experience in middle school",
        "Strong subject knowledge and teaching skills",
        "Ability to incorporate technology in teaching",
        "Experience with CBSE curriculum preferred"
      ],
      responsibilities: [
        "Develop and deliver engaging lessons according to curriculum standards",
        "Assess student performance and provide constructive feedback",
        "Prepare students for examinations and competitions",
        "Participate in school events and parent-teacher meetings",
        "Mentor students in academic and co-curricular activities"
      ]
    },
    {
      id: 3,
      title: "Higher Secondary Teacher",
      department: "Higher Secondary Section (Classes 11-12)",
      type: "Full-time",
      location: "On-campus",
      postedDate: "May 10, 2024",
      applyLink: "https://forms.gle/your-higher-secondary-form-link",
      description: "We are hiring experienced Higher Secondary teachers for Science and Commerce streams. The successful candidate will prepare students for board examinations and competitive tests while fostering a deep understanding of the subject.",
      requirements: [
        "Master's degree in relevant subject (Physics, Chemistry, Mathematics, Biology, Commerce, Economics)",
        "Minimum 5 years of teaching experience at higher secondary level",
        "Experience with CBSE board curriculum and examinations",
        "Strong track record of student achievements",
        "Excellent communication and mentoring abilities"
      ],
      responsibilities: [
        "Teach specialized subjects according to CBSE curriculum",
        "Prepare students for board examinations and competitive tests",
        "Provide career guidance related to subject specialization",
        "Develop innovative teaching methods to enhance student understanding",
        "Evaluate student performance and provide detailed feedback"
      ]
    },
    {
      id: 4,
      title: "Physical Education Teacher",
      department: "Sports Department",
      type: "Full-time",
      location: "On-campus",
      postedDate: "May 8, 2024",
      applyLink: "https://forms.gle/your-sports-teacher-form-link",
      description: "We are seeking an energetic and skilled Physical Education Teacher to lead our sports program. The ideal candidate will organize sports activities, coach school teams, and promote physical fitness among students.",
      requirements: [
        "Bachelor's or Master's degree in Physical Education",
        "Sports coaching certifications in one or more sports",
        "Minimum 3 years of experience as a PE teacher",
        "Knowledge of various sports and fitness activities",
        "First aid certification"
      ],
      responsibilities: [
        "Conduct regular physical education classes for students across grades",
        "Coach school teams for inter-school competitions",
        "Organize sports events and annual sports day",
        "Maintain sports equipment and facilities",
        "Assess students' physical fitness and provide guidance for improvement"
      ]
    }
  ];

  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-yellow-500 opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-300 opacity-10 blur-3xl"></div>
      
      <div className="container max-w-6xl mx-auto py-12 px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center mb-10">
          <div className="inline-block p-2 bg-blue-800/60 rounded-full backdrop-blur-sm mb-4">
            <div className="px-4 py-1 bg-yellow-500 text-blue-900 font-bold rounded-full text-sm">
              Join Our Team
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
            Career Opportunities
          </h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Be a part of our mission to shape the future through quality education
          </p>
        </div>
        
        <Card className="mb-12 border-blue-100 shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Why Join Us?</h2>
              <p className="text-blue-100">
                Shape young minds in a collaborative and supportive environment
              </p>
            </div>
            <div className="md:w-2/3 p-6">
              <CardContent className="pt-4">
                <p className="text-lg mb-6">
                  At Honey Convent School, we believe that our teachers are our most valuable assets. We are committed to providing a supportive and collaborative work environment where educators can grow professionally while making a meaningful impact on students' lives.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Professional Growth</h3>
                    <p className="text-muted-foreground">Regular training and development opportunities to enhance teaching skills and stay updated with educational trends.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Collaborative Culture</h3>
                    <p className="text-muted-foreground">Work alongside dedicated professionals in a supportive and team-oriented environment.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Work-Life Balance</h3>
                    <p className="text-muted-foreground">We value the well-being of our staff and strive to maintain a healthy work-life balance.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Make an Impact</h3>
                    <p className="text-muted-foreground">Directly contribute to shaping the future by nurturing young minds and building character.</p>
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
        
        <h2 className="text-2xl font-bold mb-6 text-blue-800">Current Openings</h2>
        
        <div className="space-y-6 mb-12">
          {jobOpenings.map((job) => (
            <Card key={job.id} className="border-blue-100 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-2 bg-yellow-500"></div>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle className="text-blue-800">{job.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{job.department} | {job.type}</span>
                    </CardDescription>
                  </div>
                  <Link 
                    href={job.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors mt-2 md:mt-0 w-fit"
                  >
                    Apply Now <ExternalLink className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3 text-sm">
                  <div className="flex items-center gap-1 text-gray-600 bg-blue-50 px-3 py-1 rounded-full">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600 bg-blue-50 px-3 py-1 rounded-full">
                    <CalendarClock className="h-4 w-4" />
                    <span>Posted: {job.postedDate}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600 bg-blue-50 px-3 py-1 rounded-full">
                    <GraduationCap className="h-4 w-4" />
                    <span>Education Required</span>
                  </div>
                </div>
                
                <p>{job.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">Requirements</h3>
                    <ul className="space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <div className="mr-2 mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600">
                            <div className="h-1 w-1 rounded-full bg-white"></div>
                          </div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">Responsibilities</h3>
                    <ul className="space-y-1">
                      {job.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start">
                          <div className="mr-2 mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600">
                            <div className="h-1 w-1 rounded-full bg-white"></div>
                          </div>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-blue-50 bg-blue-50/50 flex justify-between items-center">
                <p className="text-sm text-gray-500">Share this opportunity with qualified candidates</p>
                <Link 
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Apply Now <ExternalLink className="h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Don't See a Position That Fits?</h2>
          <p className="mb-6 max-w-2xl mx-auto">We're always looking for talented educators. Send us your resume and we'll keep it on file for future openings.</p>
          <Button asChild className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold px-6 py-2 rounded-full">
            <Link href="mailto:honeyconventschoolsusner@gmail.com" target="_blank" rel="noopener noreferrer">
              Send Your Resume
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 