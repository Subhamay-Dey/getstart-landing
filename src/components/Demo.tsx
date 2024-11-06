import React from 'react'
import Bentogrid from './Bentogrid'

export default function Demo() {
  return (
    <div className='min-h-screen w-full justify-center items-center flex flex-col mt-[70px] lg:mt-[100px]'>
        <h2 className='bg-gradient-to-b from-gray-900 via-black to-gray-600 bg-clip-text tracking-tighter text-transparent text-4xl lg:text-6xl font-black text-center dark:from-white dark:via-gray-200 dark:to-gray-400'>
          With built-in-tools
        </h2>
        <h2 className='bg-gradient-to-b from-gray-900 via-black to-gray-600 bg-clip-text tracking-tighter text-transparent text-4xl lg:text-6xl font-black text-center dark:from-white dark:via-gray-200 dark:to-gray-400'>
          to increase your productivity
        </h2>
        <Bentogrid/>
    </div>
  )
}
