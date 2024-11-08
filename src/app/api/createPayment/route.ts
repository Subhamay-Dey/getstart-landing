import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { kv } from '@vercel/kv'; // or use your preferred database
import nodemailer from 'nodemailer';

// Validate environment variables
if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || !process.env.RAZORPAY_SECRET_ID) {
  throw new Error('Missing required Razorpay credentials');
}

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_SECRET_ID!,
});

// Price mapping with currency-specific prices
const PRODUCT_PRICES = {
  'getstart-saas-kit': {
    INR: 999,
    USD: 12
  }
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { productId, currency = 'INR', email, metadata = {} } = body;
    
    // Get amount from product price mapping based on currency
    const amount = PRODUCT_PRICES[productId as keyof typeof PRODUCT_PRICES]?.[currency as 'INR' | 'USD'];
    if (!amount) {
      return NextResponse.json(
        { error: `Invalid product or currency combination` },
        { status: 400 }
      );
    }
    
    // Create order with additional metadata
    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100),
      currency: currency.toUpperCase(),
      notes: {
        ...metadata,
        email,
        productId
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: Math.round(amount * 100),
      currency: currency,
    });

  } catch (error) {
    console.error('API Error Details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      error
    });
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Payment initialization failed' },
      { status: 500 }
    );
  }
}