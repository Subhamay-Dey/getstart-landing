import React from 'react'
import { ArcadeEmbed } from './ArcadeEmbed'

export default function DIY() {
  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center'>
        <h1 className='bg-gradient-to-b from-gray-900 via-black to-gray-600 bg-clip-text tracking-tighter text-transparent text-4xl lg:text-6xl font-black text-center dark:from-white dark:via-gray-200 dark:to-gray-400'>
          Try it yourself
        </h1>
        <div className='w-[60%]'>
            <ArcadeEmbed/>
        </div>
    </div>
  )
}
