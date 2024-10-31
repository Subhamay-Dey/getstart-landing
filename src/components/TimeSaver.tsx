"use client"

import { Cloud } from "lucide-react"
import { useEffect, useState } from "react"

export default function Component() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const tasks = [
    { time: "4 hrs", task: "to design the UI" },
    { time: "2 hrs", task: "to setup emails" },
    { time: "4 hrs", task: "to handle Stripe payments" },
    { time: "2 hrs", task: "integrating Secure authentication" },
    { time: "4 hr", task: "writing Backend API routes" },
    { time: "∞ hrs", task: "debugging..." },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .typing-animation {
          overflow: hidden;
          white-space: nowrap;
          animation: typing 2s steps(40, end);
        }

        .slide-in {
          opacity: 0;
          animation: slideIn 0.5s ease forwards;
        }

        .task-item {
          animation: slideIn 0.5s ease forwards;
          opacity: 0;
        }
      `}</style>

      <div className={`max-w-2xl w-full text-center mb-12 ${isVisible ? 'slide-in' : ''}`}>
        <h1 className="bg-gradient-to-b from-gray-900 via-black to-gray-600 bg-clip-text tracking-tighter text-transparent text-4xl lg:text-6xl font-black text-center dark:from-white dark:via-gray-200 dark:to-gray-400 mb-4 typing-animation">
          The Traditional Way
        </h1>
        <p className="mt-10 text-[15px] md:text-xl leading-relaxed animate-fade-in">
          Building a SaaS application the conventional way can be time-consuming and headache-inducing
        </p>
      </div>

      <div className={`card w-full max-w-md bg-neutral shadow-xl ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="card-body">
          <h2 className="card-title text-neutral-content animate-pulse">Time Breakdown</h2>
          
          <div className="space-y-3 mt-4">
            {tasks.map((item, index) => (
              <div
                key={index}
                className="task-item flex gap-3 items-center p-2 rounded-lg transition-all hover:bg-base-100/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-error font-mono whitespace-nowrap animate-pulse">
                  {index === 0 ? "" : "+"} {item.time}
                </span>
                <span className="text-neutral-content">{item.task}</span>
              </div>
            ))}

            <div 
              className="task-item flex gap-3 items-center pt-4 mt-4 border-t border-base-100/20"
              style={{ animationDelay: `${tasks.length * 0.1}s` }}
            >
              <span className="text-error font-mono animate-pulse">= 18+ hours</span>
              <span className="text-neutral-content">of headaches</span>
              <Cloud className="w-5 h-5 text-neutral-content/70 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}