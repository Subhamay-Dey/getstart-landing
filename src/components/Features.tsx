import Showcase from "./Showcase";


export default function Features() {
  

  return (
    <div className="w-full mx-auto px-4 flex flex-col justify-center items-center">
      <div className="text-center mb-8">
      <span className="flex-col flex lg:pt-[130px] pt-[50px]">
        <h1 className='px-3 bg-gradient-to-b from-gray-900 via-black to-gray-600 bg-clip-text tracking-tighter text-transparent text-4xl lg:text-6xl font-black text-center dark:from-white dark:via-gray-200 dark:to-gray-400'>
           Save more than 20 hours on setup
        </h1>
      </span>
      </div>
      <Showcase/>
    </div>
  )
}