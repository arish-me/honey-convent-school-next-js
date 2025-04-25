'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function Contact () {
 const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      subject: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
      
      // Success
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
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
                    <p className="font-medium text-lg">Honey Convent School</p>
                    <p className="text-muted-foreground">Honey Convent Higher Secondary School</p>
                    <p className="text-muted-foreground">Susner Agar Road 465447</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>9644275012</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p>honeyconventschoolsusner@gmail.com</p>
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
          
          {/* Contact Form */}
          <Card className="border-blue-100 shadow-md overflow-hidden">
            <div className="h-2 bg-yellow-500"></div>
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-blue-800">Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {formSubmitted ? (
                <Alert className="bg-green-50 border-green-200">
                  <AlertTitle className="text-green-800 font-medium">Thank you for your message!</AlertTitle>
                  <AlertDescription className="text-green-700">
                    We will get back to you as soon as possible.
                  </AlertDescription>
                  <Button 
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4"
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </Alert>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>
                        {errorMessage}
                      </AlertDescription>
                    </Alert>
                  )}
                  
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-blue-800">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-blue-800">Email *</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-blue-800">Phone Number</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-blue-800">Subject *</Label>
                    <Select 
                      value={formData.subject} 
                      onValueChange={handleSelectChange}
                      required
                    >
                      <SelectTrigger className="border-blue-200 focus:border-blue-500">
                        <SelectValue placeholder="Please select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Admission Inquiry">Admission Inquiry</SelectItem>
                        <SelectItem value="Fee Structure">Fee Structure</SelectItem>
                        <SelectItem value="Academic Information">Academic Information</SelectItem>
                        <SelectItem value="Career Opportunities">Career Opportunities</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-blue-800">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 rounded-lg overflow-hidden shadow-lg bg-white p-3">
          <div className="aspect-video w-full h-80 bg-blue-50 flex items-center justify-center text-center">
            <div className="p-6 max-w-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">School Location Map</h3>
              <p className="text-muted-foreground mb-4">Honey Convent School is located on Susner Agar Road, easily accessible from major surrounding areas.</p>
              <p className="text-sm text-muted-foreground">Interactive map will be displayed here in production.</p>
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Get Directions</Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Visit Our School</h2>
          <p className="mb-6 max-w-2xl mx-auto">We welcome prospective parents and students to visit our campus. Come experience the vibrant learning environment we've created for our students.</p>
          <div className="flex justify-center flex-wrap gap-4">
            <Button className="px-6 py-3 rounded-full bg-yellow-500 text-blue-900 font-semibold hover:bg-yellow-400 shadow-md transition-all">
              Schedule a Visit
            </Button>
            <Button className="px-6 py-3 rounded-full bg-white text-blue-900 font-semibold hover:bg-blue-50 shadow-md transition-all">
              View Virtual Tour
            </Button>
          </div>
        </div>
      </div>
    </div>
  );