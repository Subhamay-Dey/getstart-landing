'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Checkout() {
  const [location, setLocation] = useState('india')
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <Image
          src="/productImg.png"
          alt="SaaS Product"
          width={600}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>
      <Card className="w-full md:w-1/2 max-w-md">
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
          <CardDescription>Choose your payment option</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup value={location} onValueChange={setLocation} className="mb-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="india" id="india" />
              <Label htmlFor="india">India</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="international" id="international" />
              <Label htmlFor="international">Outside India</Label>
            </div>
          </RadioGroup>

          {location === 'india' ? (
            <div className="h-64 flex items-center justify-center rounded-lg">
              <img src='/qrGpay.jpeg' alt='gpayQR' className='w-[60%] h-auto'/>
            </div>
          ) : (
            <div>
              <p className="mb-4 text-sm text-gray-600">We are currently accepting payments from India only. Enter your email to join the waitlist for international access.</p>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4"
              />
              <Button className="w-full">Request Access</Button>
            </div>
          )}
        </CardContent>
        <CardFooter>
          {location === 'india' && (
            <Button className="w-full flex">
                <img src='/search.png' alt='gpay' className='size-5'/>
                <p>Complete Purchase of $19</p>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}