import Showcase from "./Showcase";


export default function Features() {
  

  return (
    <div className="w-full mx-auto px-4 flex flex-col justify-center items-center">
      <div className="text-center mb-8">
      <span className="flex-col flex lg:pt-[130px] pt-[50px]">
        <h1 className='bg-gradient-to-b from-gray-900 via-black to-gray-600 bg-clip-text tracking-tighter text-transparent text-3xl lg:text-5xl font-black text-center dark:from-white dark:via-gray-200 dark:to-gray-400'>
           Complete developer kit
        </h1>
        <h1 className='bg-gradient-to-b from-gray-900 via-black to-gray-600 bg-clip-text tracking-tighter text-transparent text-3xl lg:text-5xl font-black text-center dark:from-white dark:via-gray-200 dark:to-gray-400'>
          for your next project
        </h1>
      </span>
      </div>
      <Showcase/>
    </div>
  )
}