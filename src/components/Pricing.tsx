'use client'

import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Link from "next/link"
import {motion} from "framer-motion"

export default function Pricing() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center px-6">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
      >
      <h2 className='px-3 bg-gradient-to-b from-gray-900 via-black to-gray-600 bg-clip-text tracking-tighter text-transparent text-4xl lg:text-6xl font-black text-center dark:from-white dark:via-gray-200 dark:to-gray-400 py-4'>
          Get your kit today
      </h2>
      </motion.div>
      <Card className="w-full max-w-sm border-2 relative mt-[30px] md:mt-[60px]">
      <div className="absolute -top-3 -right-3">
        <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
          Popular
        </span>
      </div>
      <CardHeader className="text-center">
        <h3 className="text-2xl font-semibold text-muted-foreground">PRO</h3>
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-4xl font-bold">$12</span>
          <span className="text-sm text-muted-foreground">one-time payment</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {[
            "Clean and Modern UI",
            "0Auth authentication with NextAuth (Google and Github)",
            "Database setup with prisma and mongodb",
            "Backend with nextapi",
            "Mailing with nodemailer",
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={'https://subhraneel0.gumroad.com/l/bjmeg'} target="_blank" className="flex justify-center items-center w-full">
          <Button className="w-full bg-primary hover:bg-primary/90">
            Subscribe
            <motion.div
                className="inline-flex"
                whileHover={{ x: 5 }}
                >
                    <ArrowRight/>
                </motion.div>
          </Button>
        </Link>
      </CardFooter>
      <div className="px-6 pb-6 text-center">
        <p className="text-sm text-muted-foreground">
          Ideal for developers building side projects and saas
        </p>
      </div>
    </Card>
    </div>
  )
}