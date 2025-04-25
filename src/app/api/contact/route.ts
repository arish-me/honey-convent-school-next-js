import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Extract form data
    const { name, email, phone, subject, message } = body;
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // In a real application, you would:
    // 1. Store the message in a database
    // 2. Send an email notification to the school administration
    // 3. Send a confirmation email to the user
    
    // For this example, we'll just log the data and return a success response
    console.log('Contact form submission:', { name, email, phone, subject, message });
    
    // Return a success response
    return NextResponse.json(
      { message: 'Message received successfully! We will contact you soon.' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    
    // Return an error response
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again later.' },
      { status: 500 }
    );
  }
} 