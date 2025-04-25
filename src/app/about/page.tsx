import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="container max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          About Honey Convent School
        </h1>
        <p className="text-muted-foreground md:text-xl max-w-[800px]">
          A center of excellence committed to nurturing young minds since [founding year].
        </p>
      </div>
      
      <Tabs defaultValue="history" className="mb-12">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="history">Our History</TabsTrigger>
          <TabsTrigger value="mission">Our Mission</TabsTrigger>
          <TabsTrigger value="values">Our Values</TabsTrigger>
          <TabsTrigger value="leadership">Leadership</TabsTrigger>
        </TabsList>
        
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Our History</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Founded in [founding year], Honey Convent School has been a beacon of quality education in the region for over [X] years. The school was established by [Founder's Name] with a vision to provide holistic education that nurtures not just the mind, but also the body and soul of each student.
              </p>
              <p>
                What began as a small establishment with just a few classrooms has now grown into a comprehensive educational institution spanning from Nursery to 12th grade, with specialized streams in Commerce and Science for senior secondary students.
              </p>
              <p>
                Throughout our journey, we have consistently upheld our founding principles while adapting to modern educational needs and technological advancements.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="mission">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                At Honey Convent School, our mission is to provide a nurturing environment where students can develop their intellectual, physical, emotional, and spiritual potential.
              </p>
              <p className="font-medium">We strive to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Impart quality education that prepares students for academic excellence and lifelong learning</li>
                <li>Foster critical thinking, creativity, and problem-solving skills</li>
                <li>Nurture ethical values, integrity, and respect for diversity</li>
                <li>Develop leadership qualities and social responsibility</li>
                <li>Provide a safe and inclusive learning environment for all students</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="values">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We pursue excellence in all aspects of education, encouraging our students to strive for their personal best in academics, sports, arts, and character development.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We uphold honesty, ethical conduct, and moral strength as fundamental aspects of our educational philosophy.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Respect</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We foster respect for self, others, diversity, and the environment, teaching our students to appreciate differences and collaborate effectively.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="leadership">
          <Card>
            <CardHeader>
              <CardTitle>School Leadership</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Principal</h3>
                <p className="text-muted-foreground">[Principal's Name] - [Brief background and qualifications]</p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Management Committee</h3>
                <p className="text-muted-foreground">Our school is guided by a management committee comprising experienced educators, community leaders, and dedicated individuals who bring their expertise to ensure the school's continuous growth and development.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Achievements</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                    <div className="h-2 w-2 rounded-full bg-primary-foreground"></div>
                  </div>
                  <p>[Achievement 1: e.g., Academic records, awards, etc.]</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                    <div className="h-2 w-2 rounded-full bg-primary-foreground"></div>
                  </div>
                  <p>[Achievement 2: e.g., Sports achievements]</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                    <div className="h-2 w-2 rounded-full bg-primary-foreground"></div>
                  </div>
                  <p>[Achievement 3: e.g., Cultural recognition]</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                    <div className="h-2 w-2 rounded-full bg-primary-foreground"></div>
                  </div>
                  <p>[Achievement 4: e.g., Community service]</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">School Infrastructure</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                    <div className="h-2 w-2 rounded-full bg-primary-foreground"></div>
                  </div>
                  <p>[Infrastructure 1: e.g., Modern classrooms]</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                    <div className="h-2 w-2 rounded-full bg-primary-foreground"></div>
                  </div>
                  <p>[Infrastructure 2: e.g., Science and computer labs]</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                    <div className="h-2 w-2 rounded-full bg-primary-foreground"></div>
                  </div>
                  <p>[Infrastructure 3: e.g., Sports facilities]</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                    <div className="h-2 w-2 rounded-full bg-primary-foreground"></div>
                  </div>
                  <p>[Infrastructure 4: e.g., Library resources]</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 