'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { SCHOOL_FULL_NAME, SCHOOL_LOCATION, SCHOOL_PHONE, SCHOOL_EMAIL } from '@/lib/constants';

export default function Contact() {
  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-yellow-500 opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-300 opacity-10 blur-3xl"></div>
      
      <div className="container max-w-6xl mx-auto py-12 px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center mb-10">
          <div className="inline-block p-2 bg-blue-800/60 rounded-full backdrop-blur-sm mb-4">
            <div className="px-4 py-1 bg-yellow-500 text-blue-900 font-bold rounded-full text-sm">
              Get in Touch
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
            Contact Us
          </h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            We're here to help with any questions you might have
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-blue-100 shadow-md overflow-hidden">
              <div className="h-2 bg-yellow-500"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-800">School Address</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">{SCHOOL_FULL_NAME}</p>
                    <p className="text-muted-foreground">{SCHOOL_LOCATION}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>{SCHOOL_PHONE}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p>{SCHOOL_EMAIL}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-blue-100 shadow-md overflow-hidden">
              <div className="h-2 bg-yellow-500"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-800">Office Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="mb-2">
                      <span className="font-medium">Monday to Friday:</span>
                      <span className="ml-2">8:00 AM - 3:00 PM</span>
                    </div>
                    <div className="mb-2">
                      <span className="font-medium">Saturday:</span>
                      <span className="ml-2">8:00 AM - 12:00 PM</span>
                    </div>
                    <div>
                      <span className="font-medium">Sunday & Holidays:</span>
                      <span className="ml-2">Closed</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-blue-100 shadow-md overflow-hidden">
              <div className="h-2 bg-yellow-500"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-800">How to Reach Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-medium text-blue-800 mb-2">By Public Transport:</p>
                  <p className="text-muted-foreground">Regular bus services are available from nearby cities. The school is located along the main Susner Agar Road and is easily accessible by public transport.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-medium text-blue-800 mb-2">By Car:</p>
                  <p className="text-muted-foreground">The school is situated on the main Susner Agar Road. Look for the school's prominent signage near the entrance. There is ample parking space available within the school premises.</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Neeto Form Embed */}
          <Card className="border-blue-100 shadow-md overflow-hidden h-full">
            <div className="h-2 bg-yellow-500"></div>
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-blue-800">Send Us a Message</CardTitle>
            </CardHeader>
              <div 
                style={{ 
                  minHeight: "900px", 
                  width: "100%",
                  height: "auto" 
                }} 
                id="inline-embed-container" 
                className="overflow-visible"
              >
                {/* NeetoForm widget will be added here */}
              </div>
            <CardContent className="pt-6 pb-10 flex-grow">
            
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}