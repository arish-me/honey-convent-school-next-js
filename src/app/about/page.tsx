export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <div className="z-10 max-w-5xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">About Honey Convent School</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our History</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">
              Founded in [founding year], Honey Convent School has been a beacon of quality education in the region for over [X] years. The school was established by [Founder's Name] with a vision to provide holistic education that nurtures not just the mind, but also the body and soul of each student.
            </p>
            <p className="mb-4">
              What began as a small establishment with just a few classrooms has now grown into a comprehensive educational institution spanning from Nursery to 12th grade, with specialized streams in Commerce and Science for senior secondary students.
            </p>
            <p>
              Throughout our journey, we have consistently upheld our founding principles while adapting to modern educational needs and technological advancements.
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">
              At Honey Convent School, our mission is to provide a nurturing environment where students can develop their intellectual, physical, emotional, and spiritual potential.
            </p>
            <p className="mb-4">
              We strive to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Impart quality education that prepares students for academic excellence and lifelong learning</li>
              <li>Foster critical thinking, creativity, and problem-solving skills</li>
              <li>Nurture ethical values, integrity, and respect for diversity</li>
              <li>Develop leadership qualities and social responsibility</li>
              <li>Provide a safe and inclusive learning environment for all students</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Excellence</h3>
              <p>We pursue excellence in all aspects of education, encouraging our students to strive for their personal best in academics, sports, arts, and character development.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Integrity</h3>
              <p>We uphold honesty, ethical conduct, and moral strength as fundamental aspects of our educational philosophy.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Respect</h3>
              <p>We foster respect for self, others, diversity, and the environment, teaching our students to appreciate differences and collaborate effectively.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">School Leadership</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">
              Honey Convent School is led by a dedicated team of educational professionals committed to maintaining high standards of academic excellence and student welfare.
            </p>
            <div className="mb-4">
              <h3 className="text-xl font-medium mb-2">Principal</h3>
              <p>[Principal's Name] - [Brief background and qualifications]</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Management Committee</h3>
              <p>Our school is guided by a management committee comprising experienced educators, community leaders, and dedicated individuals who bring their expertise to ensure the school's continuous growth and development.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 