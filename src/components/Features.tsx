'use client'

import { useState } from 'react'
import { AtSign, CreditCard, UserCircle2, Database, Search, Paintbrush, MoreHorizontal } from 'lucide-react'

interface TabContent {
  content: React.ReactNode
}

export default function Features() {
  const [activeTab, setActiveTab] = useState('emails')
  
  const tabs = [
    { id: 'emails', icon: AtSign, label: 'Emails' },
    { id: 'payments', icon: CreditCard, label: 'Payments' },
    { id: 'login', icon: UserCircle2, label: 'Login' },
    { id: 'database', icon: Database, label: 'Database' },
    { id: 'seo', icon: Search, label: 'SEO' },
    { id: 'style', icon: Paintbrush, label: 'Style' },
    { id: 'more', icon: MoreHorizontal, label: 'More' },
  ]

  const tabContent: Record<string, TabContent> = {
    emails: {
      content: (
        <>
          <ul className="space-y-2">
            <li className="flex items-center">✓ Send transactional emails</li>
            <li className="flex items-center">✓ DNS setup</li>
            <li className="flex items-center">✓ Webhook to receive & forward emails</li>
            <li className="flex items-center">✓ Time saved: 3 hours</li>
            <li className="flex items-center">✓ Headaches: 0</li>
          </ul>
          <div className="flex items-center gap-2 mt-4">
            <span>with</span>
            <span className="font-medium">Mailgun</span>
          </div>
        </>
      ),
    },
    payments: {
      content: (
        <>
          <ul className="space-y-2">
            <li className="flex items-center">✓ Process secure payments</li>
            <li className="flex items-center">✓ Multiple payment gateway integrations</li>
            <li className="flex items-center">✓ Subscription management</li>
            <li className="flex items-center">✓ Time saved: 5 hours</li>
            <li className="flex items-center">✓ Headaches: 0</li>
          </ul>
          <div className="flex items-center gap-2 mt-4">
            <span>with</span>
            <span className="font-medium">Stripe</span>
          </div>
        </>
      ),
    },
    login: {
      content: (
        <>
          <ul className="space-y-2">
            <li className="flex items-center">✓ Secure user authentication</li>
            <li className="flex items-center">✓ Social login integration</li>
            <li className="flex items-center">✓ Two-factor authentication</li>
            <li className="flex items-center">✓ Time saved: 4 hours</li>
            <li className="flex items-center">✓ Headaches: 0</li>
          </ul>
          <div className="flex items-center gap-2 mt-4">
            <span>with</span>
            <span className="font-medium">Auth0</span>
          </div>
        </>
      ),
    },
    database: {
      content: (
        <>
          <ul className="space-y-2">
            <li className="flex items-center">✓ Scalable database solutions</li>
            <li className="flex items-center">✓ Automatic backups and recovery</li>
            <li className="flex items-center">✓ Real-time data synchronization</li>
            <li className="flex items-center">✓ Time saved: 6 hours</li>
            <li className="flex items-center">✓ Headaches: 0</li>
          </ul>
          <div className="flex items-center gap-2 mt-4">
            <span>with</span>
            <span className="font-medium">MongoDB Atlas</span>
          </div>
        </>
      ),
    },
    seo: {
      content: (
        <>
          <ul className="space-y-2">
            <li className="flex items-center">✓ Automated meta tag generation</li>
            <li className="flex items-center">✓ Sitemap creation and submission</li>
            <li className="flex items-center">✓ Structured data implementation</li>
            <li className="flex items-center">✓ Time saved: 3 hours</li>
            <li className="flex items-center">✓ Headaches: 0</li>
          </ul>
          <div className="flex items-center gap-2 mt-4">
            <span>with</span>
            <span className="font-medium">Next.js SEO</span>
          </div>
        </>
      ),
    },
    style: {
      content: (
        <>
          <ul className="space-y-2">
            <li className="flex items-center">✓ Customizable UI components</li>
            <li className="flex items-center">✓ Responsive design templates</li>
            <li className="flex items-center">✓ Dark mode support</li>
            <li className="flex items-center">✓ Time saved: 8 hours</li>
            <li className="flex items-center">✓ Headaches: 0</li>
          </ul>
          <div className="flex items-center gap-2 mt-4">
            <span>with</span>
            <span className="font-medium">Tailwind CSS</span>
          </div>
        </>
      ),
    },
    more: {
      content: (
        <>
          <ul className="space-y-2">
            <li className="flex items-center">✓ API rate limiting</li>
            <li className="flex items-center">✓ Error tracking and monitoring</li>
            <li className="flex items-center">✓ Automated testing suite</li>
            <li className="flex items-center">✓ Time saved: 10 hours</li>
            <li className="flex items-center">✓ Headaches: 0</li>
          </ul>
          <div className="flex items-center gap-2 mt-4">
            <span>with</span>
            <span className="font-medium">Various Tools</span>
          </div>
        </>
      ),
    },
  }

  return (
    <div className="w-full mx-auto px-4 flex flex-col justify-center items-center">
      <div className="text-center mb-8">
      <span className="flex-col flex lg:pt-[130px] pt-[50px] space-y-3">
        <h2 className='bg-gradient-to-b from-gray-900 via-black to-gray-600 bg-clip-text tracking-tighter text-transparent text-3xl lg:text-5xl font-black text-center dark:from-white dark:via-gray-200 dark:to-gray-400'>
        The Complete Developer kit
        </h2>
        <h2 className='bg-gradient-to-b from-gray-900 via-black to-gray-600 bg-clip-text tracking-tighter text-transparent text-3xl lg:text-5xl font-black text-center dark:from-white dark:via-gray-200 dark:to-gray-400'>
        for your next project
        </h2>
      </span>
      <p className='text-muted-foreground mt-10 text-[16px] leading-relaxed max-w-xl text-center px-6'>
      GetStart is the ultimate full-stack kit designed for developers and entrepreneurs who want to focus on their core idea instead of spending endless hours setting up authentication, payments, and backend routes.
      </p>
      </div>
      <div className="flex flex-col gap-8 justify-start">
        <nav className="md:flex md:justify-evenly gap-6 mt-10 w-full grid grid-cols-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-2 p-2 transition-opacity ${
                activeTab === tab.id ? 'opacity-100' : 'opacity-50 hover:opacity-75'
              }`}
            >
              <tab.icon className="h-6 w-6" />
              <span className="text-sm">{tab.label}</span>
            </button>
          ))}
        </nav>
        <div className="min-h-[300px]">
          {tabContent[activeTab].content}
        </div>
      </div>
    </div>
  )
}