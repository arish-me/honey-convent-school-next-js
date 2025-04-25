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

export default function ContactPage() {
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
    <div className="container max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
        <p className="text-muted-foreground md:text-xl">We're here to help with any questions you might have</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>School Address</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Honey Convent School</p>
                  <p className="text-muted-foreground">[School Address Line 1]</p>
                  <p className="text-muted-foreground">[School Address Line 2]</p>
                  <p className="text-muted-foreground">[City, State, PIN]</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-primary" />
                <p><span className="font-medium">Phone:</span> [School Phone Number]</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-primary" />
                <p><span className="font-medium">Email:</span> [School Email]</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Office Hours</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center space-x-4">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p><span className="font-medium">Monday to Friday:</span> 8:00 AM - 3:00 PM</p>
                  <p><span className="font-medium">Saturday:</span> 8:00 AM - 12:00 PM</p>
                  <p><span className="font-medium">Sunday & Holidays:</span> Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>How to Reach Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-medium">By Public Transport:</p>
                <p className="text-muted-foreground">[Provide information about public transport options to reach the school]</p>
              </div>
              <div>
                <p className="font-medium">By Car:</p>
                <p className="text-muted-foreground">[Provide directions for reaching the school by car, mentioning major landmarks]</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
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
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Select 
                    value={formData.subject} 
                    onValueChange={handleSelectChange}
                    required
                  >
                    <SelectTrigger>
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
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-12 rounded-lg overflow-hidden shadow aspect-video">
        {/* Add Google Maps iframe here in production */}
        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-muted-foreground">
          Google Maps Location Placeholder<br />
          (Replace with actual Google Maps embed in production)
        </div>
      </div>
    </div>
  );
} 