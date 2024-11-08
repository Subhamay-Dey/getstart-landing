'use client'
import Marquee from './ui/marquee'
import {motion} from 'framer-motion'
import { Tweet } from 'react-tweet'

interface Tweet {
  author: string;
  handle: string;
  content: string;
  date: string;
  id: string;
}

const tweets: Tweet[] = [
  {
    author: "Martin The M",
    handle: "Saas_Dude",
    content: "@Subhraneel55545, seems interesting. what features stood out most? productivity tools certainly help.",
    date: "November 8, 2024",
    id: "1854797703546286450"
  },
  {
    author: "Ayush Oswal",
    handle: "Oswal_ayushh",
    content: "All the bestt bro!, ui looks amazing🔥🔥",
    date: "November 5, 2024",
    id: "1853817244771639413"
  },
  {
    author: "Sheibban Pervez",
    handle: "Sheibban",
    content: "@Subhraneel55545, looks like a handy kit for boosting that productivity game. What features stand out the most to you?",
    date: "November 8, 2024",
    id: "1854797572721750412"
  },
  {
    author: "Samuel Duc",
    handle: "samm_duc",
    content: "@Subhraneel55545, that saas kit looks intriguing. always on the lookout for tools to enhance productivity. have you tried it out yet?",
    date: "November 8, 2024",
    id: "1854797185352602060"
  },
  {
    author: "Martin The M",
    handle: "Saas_Dude",
    content: "@Subhraneel55545, impressive milestone. wishing you a successful launch and growth.",
    date: "November 6, 2024",
    id: "1854151499443552465"
  },
  {
    author: "Samuel Duc",
    handle: "samm_duc",
    content: "@Subhraneel55545, that sounds like a smart solution. streamlining those repetitive tasks can really boost creativity. what features are you most excited about?",
    date: "November 1, 2024",
    id: "1854797703546286450"
  }
];

export default function EarlyReviews() {


  return (
    <div className='flex flex-col py-[70px] mt-[40px] lg:py-[140px] lg:mt-[100px] w-full justify-center items-center'>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='bg-gradient-to-b from-gray-900 via-black to-gray-600 bg-clip-text tracking-tighter text-transparent text-4xl lg:text-6xl font-black text-center dark:from-white dark:via-gray-200 dark:to-gray-400'
        >Early Reviews</motion.h1>

        <Marquee className="w-full">
            <div className="flex gap-4 px-4">
                <div className='flex gap-4 mt-12'>
                    {tweets.map((tweet, index) => (
                      <div key={index} className="min-w-[350px]">
                        <Tweet id={tweet.id} />
                      </div>
                    ))}
                </div>
            </div>
        </Marquee>
    </div>
  )
}
