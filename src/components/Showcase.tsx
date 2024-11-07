"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { HiOutlineExternalLink } from "react-icons/hi";
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Showcase() {
  return (
    <div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">

          <div className="lg:w-[1240px] md:w-[840px] w-[360px] px-4">
            <div className="relative aspect-video rounded-lg border border-gray-800 bg-black shadow-2xl">
              <video
                className="h-full w-full rounded-lg object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="flex-1 py-8">
            <div className="flex justify-center items-center gap-3 flex-col md:flex-row">
              <Link href={'/checkout'}>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
                    Get Access - $19 USD
                    <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href={'https://getstart-lhzm.vercel.app/'} target="_blank">
                <Button variant="outline">
                  Live Preview
                  <HiOutlineExternalLink className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            {/* Technology Icons */}
            <div className="mt-12">
              <div className="flex flex-wrap items-center gap-2 justify-center lg:gap-6">
                {/* Next.js */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/nextjs.png"
                    alt="Next.js"
                    width={30}
                    height={30}
                    className="rounded-full bg-white p-1"
                  />
                </div>
                {/* MongoDB */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/mongodb.png"
                    alt="MongoDB"
                    width={30}
                    height={30}
                    className="rounded-full bg-white p-1"
                  />
                </div>
                {/* Shadcn */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/shadcn.png"
                    alt="Shadcn"
                    width={30}
                    height={30}
                    className="rounded-full bg-white p-1"
                  />
                </div>
                {/* Tailwind CSS */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/tailwind.png"
                    alt="Tailwind CSS"
                    width={30}
                    height={30}
                    className="rounded-full bg-white p-1"
                  />
                </div>
                {/* Razorpay */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/razorpay.png"
                    alt="Razorpay"
                    width={30}
                    height={30}
                    className="rounded-full bg-white p-1"
                  />
                </div>
                {/* Nodemailer */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/nodemailer.jpg"
                    alt="Resend"
                    width={30}
                    height={30}
                    className="rounded-full bg-white p-1"
                  />
                </div>
                {/* Prisma */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/prisma.png"
                    alt="Prisma"
                    width={30}
                    height={30}
                    className="rounded-full bg-white p-1"
                  />
                </div>
                {/* Next API */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/nextapi.png"
                    alt="Next API"
                    width={30}
                    height={30}
                    className="rounded-full bg-white p-1"
                  />
                </div>
                {/* NextAuth */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/nextauth.png"
                    alt="NextAuth"
                    width={30}
                    height={30}
                    className="rounded-full bg-white p-1"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}