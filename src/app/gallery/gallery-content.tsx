'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SCHOOL_NAME } from "@/lib/constants";
import { X } from 'lucide-react';

export default function GalleryContent() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryCategories = [
    {
      id: "campus",
      name: "Campus",
      images: [
        {
          src: "/gallery/campus-1.jpg",
          alt: "School Building Front View",
          caption: "Our main school building featuring modern architecture",
        },
        {
          src: "/gallery/campus-2.jpg",
          alt: "School Playground",
          caption: "Spacious playground with sports facilities",
        },
        {
          src: "/gallery/campus-3.jpg",
          alt: "School Library",
          caption: "Well-stocked library with diverse collection of books",
        },
        {
          src: "/gallery/campus-4.jpg",
          alt: "Computer Lab",
          caption: "State-of-the-art computer lab with modern equipment",
        },
        {
          src: "/gallery/campus-5.jpg",
          alt: "Science Laboratory",
          caption: "Fully equipped science laboratory for practical learning",
        },
        {
          src: "/gallery/campus-6.jpg",
          alt: "School Courtyard",
          caption: "Beautiful courtyard where students gather during breaks",
        },
      ],
    },
    {
      id: "events",
      name: "Events & Celebrations",
      images: [
        {
          src: "/gallery/event-1.jpg",
          alt: "Annual Day Celebration",
          caption: "Students performing at our Annual Day function",
        },
        {
          src: "/gallery/event-2.jpg",
          alt: "Sports Day",
          caption: "Students participating in various sports competitions",
        },
        {
          src: "/gallery/event-3.jpg",
          alt: "Independence Day Celebration",
          caption: "Flag hoisting ceremony on Independence Day",
        },
        {
          src: "/gallery/event-4.jpg",
          alt: "Science Exhibition",
          caption: "Innovative student projects at our annual Science Exhibition",
        },
        {
          src: "/gallery/event-5.jpg",
          alt: "Cultural Program",
          caption: "Students showcasing cultural diversity through performances",
        },
        {
          src: "/gallery/event-6.jpg",
          alt: "Parents' Day",
          caption: "Interaction between parents and teachers during Parents' Day",
        },
      ],
    },
    {
      id: "academics",
      name: "Academic Activities",
      images: [
        {
          src: "/gallery/academic-1.jpg",
          alt: "Classroom Session",
          caption: "Interactive learning in our modern classrooms",
        },
        {
          src: "/gallery/academic-2.jpg",
          alt: "Science Project",
          caption: "Students working on scientific experiments",
        },
        {
          src: "/gallery/academic-3.jpg",
          alt: "Group Discussion",
          caption: "Students engaged in collaborative learning",
        },
        {
          src: "/gallery/academic-4.jpg",
          alt: "Art Class",
          caption: "Developing creativity through art education",
        },
        {
          src: "/gallery/academic-5.jpg",
          alt: "Mathematics Competition",
          caption: "Students participating in mathematics competition",
        },
        {
          src: "/gallery/academic-6.jpg",
          alt: "Reading Session",
          caption: "Fostering love for reading through dedicated sessions",
        },
      ],
    },
    {
      id: "sports",
      name: "Sports & Games",
      images: [
        {
          src: "/gallery/sports-1.jpg",
          alt: "Cricket Match",
          caption: "Annual inter-house cricket tournament",
        },
        {
          src: "/gallery/sports-2.jpg",
          alt: "Basketball Game",
          caption: "Students playing basketball at our sports complex",
        },
        {
          src: "/gallery/sports-3.jpg",
          alt: "Athletics Meet",
          caption: "Running competition during Annual Sports Day",
        },
        {
          src: "/gallery/sports-4.jpg",
          alt: "Yoga Session",
          caption: "Students practicing yoga for physical and mental wellbeing",
        },
        {
          src: "/gallery/sports-5.jpg",
          alt: "Football Match",
          caption: "Exciting football match between house teams",
        },
        {
          src: "/gallery/sports-6.jpg",
          alt: "Indoor Games",
          caption: "Students engaged in indoor sports activities",
        },
      ],
    },
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Placeholder images function - replace this with actual images when available
  const getPlaceholderImage = (index: number) => {
    const colors = [
      'bg-blue-200', 'bg-yellow-200', 'bg-green-200', 
      'bg-purple-200', 'bg-pink-200', 'bg-orange-200'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-yellow-500 opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-300 opacity-10 blur-3xl"></div>
      
      <div className="container max-w-6xl mx-auto py-12 px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center mb-10">
          <div className="inline-block p-2 bg-blue-800/60 rounded-full backdrop-blur-sm mb-4">
            <div className="px-4 py-1 bg-yellow-500 text-blue-900 font-bold rounded-full text-sm">
              School Memories
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
            Photo Gallery
          </h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            A glimpse into the vibrant life at {SCHOOL_NAME}
          </p>
        </div>
        
        <Tabs defaultValue="campus" className="mb-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-blue-50">
            {galleryCategories.map((category) => (
              <TabsTrigger 
                key={category.id}
                value={category.id} 
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {galleryCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {category.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
                    onClick={() => openLightbox(image.src)}
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <div className={`absolute inset-0 ${getPlaceholderImage(index)} flex items-center justify-center`}>
                        <span className="text-gray-600">{image.alt}</span>
                      </div>
                      {/* Uncomment when real images are available */}
                      {/* <Image 
                        src={image.src} 
                        alt={image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      /> */}
                    </div>
                    <div className="p-4 bg-white">
                      <p className="text-sm text-gray-600">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="bg-blue-50 rounded-lg p-6 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Request a School Tour</h2>
          <p className="mb-4 max-w-2xl mx-auto">
            Want to experience our campus in person? Schedule a visit to our school and see our facilities firsthand.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us for a Visit
          </a>
        </div>
        
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Stay Updated</h2>
          <p className="max-w-2xl mx-auto">
            Follow us on social media to see more photos and stay updated with the latest events and activities at our school.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="p-3 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="p-3 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="p-3 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" className="p-3 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </button>
          <div 
            className="relative max-w-4xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gray-800 h-full w-full flex items-center justify-center">
              {/* Uncomment when real images are available */}
              {/* <Image 
                src={selectedImage} 
                alt="Enlarged view"
                fill
                className="object-contain"
              /> */}
              <div className="text-white">Image Preview (Replace with actual image)</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 