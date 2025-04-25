export default function AcademicsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <div className="z-10 max-w-5xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">Academics at Honey Convent School</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Curriculum</h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <p>
              At Honey Convent School, we follow the [Board/Curriculum Name] curriculum, enhanced with additional activities and learning opportunities that promote holistic development. Our academic program is designed to foster critical thinking, creativity, and a love for learning among students of all ages.
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Pre-Primary Section (Nursery to KG)</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">
              Our pre-primary education focuses on developing basic cognitive, motor, and social skills through play-based learning and interactive activities.
            </p>
            <h3 className="text-xl font-medium mb-3">Key Features:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Activity-based learning approach</li>
              <li>Development of pre-reading and pre-writing skills</li>
              <li>Basic numerical concepts</li>
              <li>Language development through stories and rhymes</li>
              <li>Creative arts and physical activities</li>
              <li>Social skills and emotional development</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Primary Section (Classes 1-5)</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">
              The primary section builds a strong foundation in core subjects while encouraging curiosity and exploration.
            </p>
            <h3 className="text-xl font-medium mb-3">Subjects Taught:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>English</li>
              <li>Hindi / Regional Language</li>
              <li>Mathematics</li>
              <li>Environmental Studies</li>
              <li>General Knowledge</li>
              <li>Computer Education</li>
              <li>Arts and Crafts</li>
              <li>Physical Education</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Middle Section (Classes 6-8)</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">
              The middle section introduces students to more advanced concepts and specialized subjects.
            </p>
            <h3 className="text-xl font-medium mb-3">Subjects Taught:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>English</li>
              <li>Hindi / Regional Language</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>Social Science</li>
              <li>Computer Science</li>
              <li>Third Language (Optional)</li>
              <li>Art Education</li>
              <li>Health and Physical Education</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Secondary Section (Classes 9-10)</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">
              The secondary section prepares students for board examinations while developing critical thinking and analytical skills.
            </p>
            <h3 className="text-xl font-medium mb-3">Subjects Taught:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>English</li>
              <li>Hindi / Regional Language</li>
              <li>Mathematics</li>
              <li>Science (Physics, Chemistry, Biology)</li>
              <li>Social Science (History, Geography, Political Science, Economics)</li>
              <li>Information Technology</li>
              <li>Health and Physical Education</li>
              <li>Art Education</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Senior Secondary Section (Classes 11-12)</h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <p className="mb-4">
              The senior secondary section offers specialized streams to help students prepare for higher education and career choices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Science Stream</h3>
              <p className="mb-4">Our Science stream focuses on developing a strong foundation in scientific principles and analytical thinking.</p>
              <h4 className="font-medium mb-2">Core Subjects:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>English</li>
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Mathematics / Biology</li>
                <li>Computer Science / Physical Education (Optional)</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Commerce Stream</h3>
              <p className="mb-4">Our Commerce stream provides a comprehensive understanding of business, economics, and financial concepts.</p>
              <h4 className="font-medium mb-2">Core Subjects:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>English</li>
                <li>Accountancy</li>
                <li>Business Studies</li>
                <li>Economics</li>
                <li>Mathematics / Informatics Practices (Optional)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 