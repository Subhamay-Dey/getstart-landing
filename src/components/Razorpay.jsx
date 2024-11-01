'use client'

import React, { useEffect } from 'react';

const Razorpay = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', 'pl_PFyerrFbk6pzRL');
    script.async = true;
    document.getElementById('razorpay-form').appendChild(script);
  }, []);

  return <form id="razorpay-form"></form>;
};

export default Razorpay;
