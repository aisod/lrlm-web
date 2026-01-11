import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, role, phone, message } = body;

    // Validate required fields
    if (!name || !email || !company) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Configuration for different form submission services
    const FORM_SERVICE = process.env.DEMO_FORM_SERVICE || 'console'; // Options: 'console', 'formspree', 'webhook', 'email'

    switch (FORM_SERVICE) {
      case 'formspree':
        // Formspree integration
        const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
        if (!formspreeEndpoint) {
          throw new Error('FORMSPREE_ENDPOINT environment variable not set');
        }

        const formspreeResponse = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            company,
            role,
            phone,
            message,
            subject: 'New Demo Request from Website',
          }),
        });

        if (!formspreeResponse.ok) {
          throw new Error('Formspree submission failed');
        }
        break;

      case 'webhook':
        // Generic webhook integration
        const webhookUrl = process.env.DEMO_FORM_WEBHOOK_URL;
        if (!webhookUrl) {
          throw new Error('DEMO_FORM_WEBHOOK_URL environment variable not set');
        }

        const webhookResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': process.env.DEMO_FORM_API_KEY ? `Bearer ${process.env.DEMO_FORM_API_KEY}` : undefined,
          },
          body: JSON.stringify({
            type: 'demo_request',
            data: body,
            timestamp: new Date().toISOString(),
          }),
        });

        if (!webhookResponse.ok) {
          throw new Error('Webhook submission failed');
        }
        break;

      case 'email':
        // Email service integration (you could integrate with SendGrid, Mailgun, etc.)
        console.log('Email would be sent to:', process.env.CONTACT_EMAIL);
        console.log('Demo request details:', body);
        // TODO: Implement actual email sending
        break;

      case 'console':
      default:
        // Log to console for development/testing
        console.log('=== NEW DEMO REQUEST ===');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Company:', company);
        console.log('Role:', role);
        console.log('Phone:', phone);
        console.log('Message:', message);
        console.log('Timestamp:', body.timestamp);
        console.log('========================');
        break;
    }

    return NextResponse.json({
      success: true,
      message: 'Demo request submitted successfully'
    });

  } catch (error) {
    console.error('Demo form submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}