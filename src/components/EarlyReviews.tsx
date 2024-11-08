'use client'
import Marquee from './ui/marquee'
import {motion} from 'framer-motion'
export default function EarlyReviews() {


  return (
    <div className='flex flex-col min-h-screen w-full justify-center items-center'>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='bg-gradient-to-b from-gray-900 via-black to-gray-600 bg-clip-text tracking-tighter text-transparent text-4xl lg:text-6xl font-black text-center dark:from-white dark:via-gray-200 dark:to-gray-400'
        >Early Reviews</motion.h1>

        <Marquee className="w-full">
            <div className="flex gap-4 px-4">
                <div className='flex gap-4 mt-12'>
                    <blockquote className="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr"><a href="https://twitter.com/Subhraneel55545?ref_src=twsrc%5Etfw">@Subhraneel55545</a>, seems interesting. what features stood out most? productivity tools certainly help.</p>&mdash; Martin The M (@Saas_Dude) <a href="https://twitter.com/Saas_Dude/status/1854797703546286450?ref_src=twsrc%5Etfw">November 8, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

                    <blockquote className="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">All the bestt bro!, ui looks amazing🔥🔥</p>&mdash; Ayush Oswal (@Oswal_ayushh) <a href="https://twitter.com/Oswal_ayushh/status/1853817244771639413?ref_src=twsrc%5Etfw">November 5, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

                    <blockquote className="twitter-tweet" data-conversation="none" data-theme="light"><p lang="en" dir="ltr"><a href="https://twitter.com/Subhraneel55545?ref_src=twsrc%5Etfw">@Subhraneel55545</a>, looks like a handy kit for boosting that productivity game. What features stand out the most to you?</p>&mdash; Sheibban Pervez (@Sheibban) <a href="https://twitter.com/Sheibban/status/1854797572721750412?ref_src=twsrc%5Etfw">November 8, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

                    <blockquote className="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr"><a href="https://twitter.com/Subhraneel55545?ref_src=twsrc%5Etfw">@Subhraneel55545</a>, that saas kit looks intriguing. always on the lookout for tools to enhance productivity. have you tried it out yet?</p>&mdash; Samuel Duc (@samm_duc) <a href="https://twitter.com/samm_duc/status/1854797185352602060?ref_src=twsrc%5Etfw">November 8, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

                    <blockquote className="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr"><a href="https://twitter.com/Subhraneel55545?ref_src=twsrc%5Etfw">@Subhraneel55545</a>, impressive milestone. wishing you a successful launch and growth.</p>&mdash; Martin The M (@Saas_Dude) <a href="https://twitter.com/Saas_Dude/status/1854151499443552465?ref_src=twsrc%5Etfw">November 6, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

                    <blockquote className="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr"><a href="https://twitter.com/Subhraneel55545?ref_src=twsrc%5Etfw">@Subhraneel55545</a>, that sounds like a smart solution. streamlining those repetitive tasks can really boost creativity. what features are you most excited about?</p>&mdash; Samuel Duc (@samm_duc) <a href="https://twitter.com/samm_duc/status/1852313080069292065?ref_src=twsrc%5Etfw">November 1, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                </div>
            </div>
        </Marquee>
    </div>
  )
}
