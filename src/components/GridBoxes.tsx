export default function GridBoxes() {
    return (
      <div className="grid grid-cols-2 gap-4 p-4 max-w-md">
        <div className="bg-black bg-opacity-30 border border-gray-400 rounded-[24px] p-2 flex flex-col items-center justify-center gap-1 aspect-square ">
          <div className="w-20 h-20 relative">
            <img
              src="/nextauth.png"
              alt="NextAuth.js logo"
              className="object-contain"
              width={80}
              height={80}
            />
          </div>
          <span className="text-gray-100 font-medium text-[16px] mt-2">NextAuth</span>
        </div>
  
        <div className="bg-black bg-opacity-30 border border-gray-400 rounded-[24px] p-2 flex flex-col items-center justify-center gap-1 aspect-square ">
          <div className="w-20 h-20 relative">
            <img
              src="/nextjs.png"
              alt="Next.js logo"
              className="object-contain"
              width={80}
              height={80}
            />
          </div>
          <span className="text-gray-100 font-medium text-[16px] mt-2">Next.js</span>
        </div>
  
        <div className="bg-black bg-opacity-30 border border-gray-400 rounded-[24px] p-2 flex flex-col items-center justify-center gap-1 aspect-square ">
          <div className="w-20 h-20 relative">
            <img
              src="/prisma.png"
              alt="Prisma logo"
              className="object-contain"
              width={80}
              height={80}
            />
          </div>
          <span className="text-gray-100 font-medium text-[16px] mt-2">Prisma</span>
        </div>
  
        <div className="bg-black bg-opacity-30 border border-gray-400 rounded-[24px] p-2 flex flex-col items-center justify-center gap-1 aspect-square ">
          <div className="w-20 h-20 relative">
            <img
              src="/mongodb.png"
              alt="MongoDB logo"
              className="object-contain"
              width={80}
              height={80}
            />
          </div>
          <span className="text-gray-100 font-medium text-[16px] mt-2">MongoDB</span>
        </div>
      </div>
    )
  }
  