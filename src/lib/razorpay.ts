import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_SECRET_ID!,
});

export async function createRazorpayOrder({ amount, currency, metadata }: {
  amount: number;
  currency: string;
  metadata: Record<string, any>;
}) {
  return razorpay.orders.create({
    amount,
    currency,
    notes: metadata,
  });
} 