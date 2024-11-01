"use client";

import * as React from "react";
import ShinyButton from './ui/shiny-button';
import { AnimatedBeamDemo } from "./AnimatedBeamDemo";
import Navbar from "./Navbar";
import { loadRazorpayScript } from '@/lib/loadRazorpayScript';

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

export default function Herosection() {
  
  const handlePayment = async () => {
    const isRazorpayLoaded = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");
    
    if (!isRazorpayLoaded) {
      alert("Failed to load Razorpay. Please try again.");
      return;
    }

    try {
      const response = await fetch("/api/createPayment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: 159900 }), // amount in the smallest currency unit (1599 INR)
      });

      const orderData: RazorpayOrderResponse = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
        amount: orderData.amount.toString(),
        currency: orderData.currency,
        name: "GetStart Kit",
        description: "Get your SaaS kit for one-time payment",
        order_id: orderData.id,
        handler: function (response: any) {
          alert("Payment successful!");
          // Additional post-payment verification logic here
        },
        prefill: {
          name: "Your Name",
          email: "email@example.com",
          contact: "1234567890",
        },
        theme: {
          color: "#F37254",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error during payment", error);
      alert("There was an error initiating the payment. Please try again.");
    }
  };

  return (
    <div className='relative min-h-screen w-full flex flex-col justify-center items-center'>
      <Navbar />
      <span className="flex-col flex lg:pt-[170px] pt-[100px]">
        <h1 className='bg-gradient-to-b from-gray-900 via-black to-gray-600 bg-clip-text tracking-tighter text-transparent text-4xl lg:text-6xl font-black text-center dark:from-white dark:via-gray-200 dark:to-gray-400'>
          Build and launch
        </h1>
        <h1 className='bg-gradient-to-b from-gray-900 via-black to-gray-600 bg-clip-text tracking-tighter text-transparent text-4xl lg:text-6xl font-black text-center dark:from-white dark:via-gray-200 dark:to-gray-400'>
          your next project faster
        </h1>
      </span>
      <p className='text-muted-foreground mt-10 text-[15px] md:text-xl leading-relaxed max-w-xl text-center px-6'>
        SaaS kit with clean UI, authentication, payments, and simple docs, so you can focus on what matters.
      </p>

      <div onClick={handlePayment}>
        <ShinyButton className='px-8 py-4 mt-[25px] md:mt-[45px] rounded-xl shadow-2xl text-black font-bold'>
          Get kit ✨
        </ShinyButton>
      </div>
      <AnimatedBeamDemo />
    </div>
  );
}
