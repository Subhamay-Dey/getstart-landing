import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { kv } from '@vercel/kv';

interface StoredOrder {
  amount: number;
  // add other properties as needed
}

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-razorpay-signature');

    // Verify webhook signature
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET!)
      .update(body)
      .digest('hex');

    if (signature !== expectedSignature) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      );
    }

    const payment = JSON.parse(body);
    const orderId = payment.payload.payment.entity.order_id;
    
    // Retrieve stored order details
    const storedOrder = await kv.get<StoredOrder>(`order:${orderId}`);
    
    if (!storedOrder) {
      throw new Error('Order not found');
    }

    // Verify amount matches
    if (payment.payload.payment.entity.amount !== storedOrder.amount) {
      console.error('Amount mismatch detected!');
      // Handle fraud attempt (e.g., notify admin, mark transaction as suspicious)
      return NextResponse.json(
        { error: 'Payment verification failed' },
        { status: 400 }
      );
    }

    // Process successful payment
    // Update your database, fulfill order, etc.

    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error('Webhook processing failed:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
} 