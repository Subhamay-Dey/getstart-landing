import React from 'react'
import ShinyButton from './ui/shiny-button'

export default function Herosection() {
  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center'>
      <h1 className='leading-tight text-7xl font-black text-center max-w-4xl'>Build and launch your next project faster</h1>
      <p className='mt-8 text-2xl leading-normal max-w-3xl text-center'>SaaS kit with clean UI, authentication, payments, and simple docs, focus on what matters.</p>
      <ShinyButton className='px-8 py-4 mt-[45px] rounded-xl shadow-2xl text-black font-bold'>Get kit ✨</ShinyButton>
    </div>
  )
}
