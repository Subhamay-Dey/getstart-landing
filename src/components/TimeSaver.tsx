"use client"

import { Cloud } from "lucide-react"
import { useEffect, useState } from "react"

export default function Component() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const tasks = [
    { time: "4 hrs", task: "to set up emails" },
    { time: "6 hrs", task: "designing a landing page" },
    { time: "4 hrs", task: "to handle Stripe webhooks" },
    { time: "2 hrs", task: "for SEO tags" },
    { time: "1 hr", task: "applying for Google Oauth" },
    { time: "3 hrs", task: "for DNS records" },
    { time: "2 hrs", task: "for protected API routes" },
    { time: "∞ hrs", task: "overthinking..." },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-300 to-base-100 flex flex-col items-center justify-center p-4">
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
        <h1 className="text-4xl font-bold text-base-content mb-4 typing-animation">
          The Traditional Way
        </h1>
        <p className="text-base-content/70 text-lg animate-fade-in">
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
              <span className="text-error font-mono animate-pulse">= 22+ hours</span>
              <span className="text-neutral-content">of headaches</span>
              <Cloud className="w-5 h-5 text-neutral-content/70 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      <div className={`mt-8 flex flex-col items-center gap-2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
           style={{ animationDelay: '2s' }}>
        <div className="divider divider-vertical">
          <span className="text-base-content/60 text-sm font-medium hover:animate-pulse">
            There&apos;s an easier way
          </span>
        </div>
      </div>
    </div>
  )
}