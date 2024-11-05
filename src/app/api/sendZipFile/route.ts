import { Resend } from 'resend';
import path from 'path';
import fs from 'fs';
import { promises as fsPromises } from 'fs';
import Razorpay from 'razorpay';
import { NextRequest, NextResponse } from 'next/server';

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_SECRET_ID!,
});

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { email, paymentId } = await request.json();
    if (!email || !paymentId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    try {
      const payment = await razorpay.payments.fetch(paymentId);
      if (payment.status !== 'captured') {
        return NextResponse.json({ error: 'Payment not successful' }, { status: 400 });
      }
    } catch (error) {
      console.log('Razorpay verification failed:', error);
      return NextResponse.json({ error: 'Payment verification failed' }, { status: 400 });
    }

    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Your GetStart Kit',
        html: `<div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
                <h2 style="font-size: 24px; color: #3a86ff; margin-bottom: 10px;">Thank you for purchasing GetStart Kit!</h2>
                <p style="font-size: 16px; color: #333333; margin-bottom: 20px;">
                  Your payment has been successfully processed. You can download your GetStart Kit from the link below:
                </p>
                <a href="https://drive.google.com/file/d/10dS_NxS50yitA-ro-lzrZCW0w5rbJiVh/view?usp=sharing" 
                  style="display: inline-block; padding: 12px 20px; font-size: 16px; color: #ffffff; background-color: #3a86ff; border-radius: 4px; text-decoration: none; transition: background-color 0.3s;">
                  Download GetStart Kit
                </a>
                <p style="font-size: 14px; color: #666666; margin-top: 20px;">If you have any questions, feel free to reach out to us!</p>
              </div>`,
      });

      console.log("Email sent successfully");
      return NextResponse.json({ message: 'Zip file sent successfully' }, { status: 200 });
    } catch (error) {
      console.error("Error:", error);
      return NextResponse.json({ error: 'Error sending getstart email' }, { status: 500 });
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
