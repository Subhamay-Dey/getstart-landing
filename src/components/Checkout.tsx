'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { loadRazorpayScript } from '@/lib/loadRazorpayScript';
import { Input } from './ui/input'
import { toast } from 'sonner'
import { motion, AnimatePresence } from 'framer-motion';

interface RazorpayOrderResponse {
  id: string;
  amount: number;
  currency: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CheckoutPage() {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD')
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | '' }>({ 
    text: '', 
    type: '' 
  });

  const productName = "Getstart: Best Nextjs SaaS kit"
  const productDescription = "Built-in authentication, database, backend, and payments"
  const priceUSD = 12
  const priceINR = 999

  const handleCurrencyChange = (value: string) => {
    setCurrency(value as 'USD' | 'INR')
  }

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const sendZipFile = async (paymentId: string) => {
    try {
      const response = await fetch("/api/sendZipFile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          email,
          paymentId 
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send zip file');
      }

      return true;
    } catch (error) {
      console.log("Error sending zip file:", error);
      return false;
    }
  }

  const handlePayment = async (selectedCurrency: 'INR' | 'USD') => {
    try {
      
      const response = await fetch('/api/createPayment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: 'getstart-saas-kit',
          currency: selectedCurrency,
          email: email,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Server error');
      }

      if (!data.orderId || !data.amount) {
        throw new Error('Invalid response from server');
      }

      // Initialize Razorpay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: 'GetStart',
        description: 'GetStart SaaS Kit Purchase',
        order_id: data.orderId,
        handler: async function(response: any) {
          try {
            setStatusMessage('Processing your order...');
            const zipFileSent = await sendZipFile(response.razorpay_payment_id);
            if (zipFileSent) {
              setMessage({ 
                text: 'Purchase successful! Check your email for the download.', 
                type: 'success' 
              });
            } else {
              setMessage({ 
                text: 'Purchase successful but failed to send files. Please contact support.', 
                type: 'error' 
              });
            }
          } catch (error) {
            console.error('Error after payment:', error);
            setMessage({ 
              text: 'Error processing your order. Please contact support.', 
              type: 'error' 
            });
          } finally {
            setStatusMessage('');
          }
        },
        prefill: {
          email: email,
        },
      };

      const razorpayInstance = new (window as any).Razorpay(options);
      razorpayInstance.open();

    } catch (error) {
      console.error('Client Error Details:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        error
      });
      // Add user-friendly error handling here
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-6xl w-full h-full overflow-hidden flex flex-col md:flex-row">
        <div className="flex flex-col md:flex-row h-full gap-14">
          {/* Left column - Image */}
          <div className="md:w-1/2 relative h-full">
            <Image
              width={700}
              height={700}
              src="/sidePicDesktop.png"
              alt="Getkit product image"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Right column - Product details */}
          <div className="md:w-1/2 p-8 flex flex-col justify-between h-full">
            <div>
              <h1 className="text-3xl font-bold mb-2">{productName}</h1>
              <p className="text-muted-foreground mb-6">{productDescription}</p>
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-bold">
                  {currency === 'USD' ? `$${priceUSD}` : `₹${priceINR}`}
                </span>
                <Select onValueChange={handleCurrencyChange} defaultValue={currency}>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="INR">INR</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className='flex flex-col space-y-3 mt-6'>
              <Input 
                type="email"
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                className="w-full" 
                size="lg" 
                onClick={() => handlePayment(currency)}
                disabled={!isValidEmail(email) || isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Proceed to Checkout"}
              </Button>
              
              <AnimatePresence mode="wait">
                {message.text && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className={`text-center ${
                      message.type === 'success' ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {message.text}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
