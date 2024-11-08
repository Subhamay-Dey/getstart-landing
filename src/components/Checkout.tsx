'use client'

import { useState } from 'react'
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

  const handlePayment = async () => {
    setStatusMessage('');
    if (!isValidEmail(email)) {
      toast.warning("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    const isRazorpayLoaded = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");
    
    if (!isRazorpayLoaded) {
      toast.error("Failed to load Razorpay. Please try again.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/createPayment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          productId: "getstart-saas-kit",
          currency,
          email 
        }),
      });
    
      const orderData: RazorpayOrderResponse = await response.json();
    
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
        amount: orderData.amount.toString(),
        currency: orderData.currency,
        name: "GetStart Kit",
        image: "/logo.png",
        description: "Get your SaaS kit for one-time payment",
        order_id: orderData.id,
        handler: async function (response: any) {
          const zipSent = await sendZipFile(response.razorpay_payment_id);
          if (zipSent) {
            setStatusMessage("Payment successful! The zip file has been sent to your email.");
            toast.success("Payment successful! The zip file has been sent to your email.");
          } else {
            setStatusMessage("Payment successful! There was an issue sending the zip file. Our team will contact you shortly.");
            toast.error("Payment successful! However, there was an issue sending the zip file. Our team will contact you shortly.");
          }
        },
        prefill: {
          email: email,
          contact: "",
        },
        theme: {
          color: "#A594F9"
        },
      };
    
      const rzp1 = new window.Razorpay(options);
      rzp1.open();    
    } catch (error) {
      console.log("Error during payment", error);
      toast.error("There was an error initiating the payment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                onClick={handlePayment}
                disabled={!isValidEmail(email) || isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Proceed to Checkout"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
