import { createRazorpayOrder } from '@/lib/razorpay';
import { NextResponse } from 'next/server';

const PRODUCT_PRICES = {
  'getstart-saas-kit': {
    USD: 12 * 100,
    INR: 999 * 100
  }
} as const;


type ProductId = keyof typeof PRODUCT_PRICES;


type ValidCurrency = keyof typeof PRODUCT_PRICES[ProductId];

export async function POST(req: Request) {
  try {
    const { productId, currency, email } = await req.json() as { 
      productId: ProductId;
      currency: ValidCurrency;
      email: string;
    };

    // Validate product exists
    if (!PRODUCT_PRICES[productId]) {
      return NextResponse.json(
        { error: 'Invalid product' },
        { status: 400 }
      );
    }

    // Get correct price from backend configuration
    const amount = PRODUCT_PRICES[productId][currency];

    // Validate currency is supported
    if (!amount) {
      return NextResponse.json(
        { error: 'Invalid currency' },
        { status: 400 }
      );
    }

    // Create Razorpay order with the server-side amount
    const order = await createRazorpayOrder({
      amount,
      currency,
      // Add any additional metadata needed
      metadata: {
        productId,
        email,
      }
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error('Payment creation error:', error);
    return NextResponse.json(
      { error: 'Payment creation failed' },
      { status: 500 }
    );
  }
}