"use client";

import * as React from "react";
import ShinyButton from './ui/shiny-button';

import { AnimatedBeamDemo } from "./AnimatedBeamDemo";
import Navbar from "./Navbar";
import Link from "next/link";

export default function Herosection() {
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
      <Link href={"/"}>
        <ShinyButton className='px-8 py-4 mt-[25px] md:mt-[45px] rounded-xl shadow-2xl text-black font-bold'>
          Get kit ✨
        </ShinyButton>
      </Link>
      <AnimatedBeamDemo />
    </div>
  );
}
