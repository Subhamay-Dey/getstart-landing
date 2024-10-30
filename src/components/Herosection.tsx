import React from 'react'
import ShinyButton from './ui/shiny-button'

export default function Herosection() {
  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center'>
      <h1 className="bg-gradient-to-b from-gray-900 via-black to-gray-700 bg-clip-text tracking-tighter text-transparent leading-tight text-7xl font-black text-center max-w-4xl dark:from-white dark:via-gray-200 dark:to-gray-400">
        Build and launch your next project faster
      </h1>
      <p className='mt-10 text-2xl leading-relaxed max-w-2xl text-center'>SaaS kit with clean UI, authentication, payments, and simple docs, to focus on what matters.</p>
      <ShinyButton className='px-8 py-4 mt-[45px] rounded-xl shadow-2xl text-black font-bold'>Get kit ✨</ShinyButton>
    </div>
  )
}
