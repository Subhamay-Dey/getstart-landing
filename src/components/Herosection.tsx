"use client";

import * as React from "react";
import ShinyButton from './ui/shiny-button';
import { AnimatedBeamDemo } from "./AnimatedBeamDemo";
import Navbar from "./Navbar";
import Link from "next/link";
import {motion} from "framer-motion"

export default function Herosection() {

  return (
    <div className='relative min-h-screen w-full flex flex-col justify-center items-center'>
      <Navbar />
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
      >
      <span className="flex-col flex lg:pt-[170px] pt-[100px]">
        <div className="flex justify-center items-center">
          <a href="https://www.producthunt.com/posts/getstart?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-getstart" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=582885&theme=light" alt="Getstart - SaaS&#0032;kit&#0032;with&#0032;built&#0045;in&#0032;tools&#0032;to&#0032;boost&#0032;focus&#0032;and&#0032;productivity | Product Hunt" width="200" height="40" className="py-4"/></a>
        </div>
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
        </motion.div>

      <div>
        <Link href={'/checkout'}>
          <ShinyButton className='px-8 py-4 mt-[25px] md:mt-[45px] rounded-xl shadow-2xl text-zinc-900 font-bold bg-gradient-to-r from-[#A594F9] to-[#CDC1FF]'>
            Get kit ✨
          </ShinyButton>
        </Link>
      </div>
      <AnimatedBeamDemo />
    </div>
  );
}
