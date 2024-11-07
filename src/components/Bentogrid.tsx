'use client'

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight, Zap } from "lucide-react"
import Image from "next/image"
import GridBoxes from "./GridBoxes"
import Link from "next/link"

export default function Bentogrid() {
  return (
    <div className="container mx-auto p-4 mt-4 lg:mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {/* Core Features Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="col-span-1 md:col-span-2 row-span-1"
        >
          <Card className="h-full min-h-[500px] bg-gradient-to-br from-purple-600 to-cyan-500 p-6 relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-[80%]">
              Clean and user-friendly interface. Easy to use and navigate.
              </h2>
              <Image src={'/grid1.png'} alt="i1"  width={500} height={500} className="items-center mt-12"/>

            </motion.div>
          </Card>
        </motion.div>

        {/* Time-Saving Stats Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="col-span-1 row-span-1"
        >
          <Card className="h-full min-h-[450px] bg-slate-900 p-6 flex flex-col items-center justify-center text-white">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
              className="rounded-full bg-slate-800 p-4 mb-4"
            >
              <Zap className="w-8 h-8" />
            </motion.div>
            <motion.h3
              className="text-6xl font-bold mb-2"
              whileHover={{ scale: 1.1 }}
            >
              80%
            </motion.h3>
            <p className="text-slate-400">Time Saved on Setup</p>
          </Card>
        </motion.div>

        {/* Developer-Centric Design Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="col-span-1 row-span-1"
        >
          <Card className="h-full min-h-[450px]  bg-slate-900 p-6 text-white">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex space-x-4 mb-6">
                <motion.div whileHover={{ y: -5 }} className="rounded-full bg-slate-800 p-2">
                  <Zap className="w-6 h-6" />
                </motion.div>
              </div>
              <h2 className="text-2xl font-bold mb-2">
                Tailored for developers who want a fast, reliable start.
              </h2>
              <Link href={'https://getstart-lhzm.vercel.app/'} target="_blank">
              <span className="mt-8 flex gap-1">
                Live preview
                <motion.div
                className="inline-flex"
                whileHover={{ x: 5 }}
                >
                    <ArrowRight/>
                </motion.div>
              </span>
              </Link>
            </motion.div>
          </Card>
        </motion.div>

        {/* Security Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="col-span-1 md:col-span-2 row-span-1"
        >
          <Card className="h-full min-h-[450px]  bg-gradient-to-br from-purple-600 to-cyan-500 p-6 text-white flex flex-col justify-center items-center overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 max-w-xl">
                Prioritizing security, privacy, and ease-of-use.
              </h2>
              <GridBoxes/>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
