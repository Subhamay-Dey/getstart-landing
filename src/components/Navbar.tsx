"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const components = [
  {
      "title": "Clean UI with Next.js",
      "image": "/nextjs.png",
      "description": "Beautiful, intuitive UI built with Next.js.",
  },
  {
      "title": "Pre-Built SEO",
      "image": "/seo.png",
      "description": "SEO-ready for better search visibility.",
  },
  {
      "title": "Auth with NextAuth",
      "image": "/nextauth.png",
      "description": "Secure authentication with NextAuth integration.",
  },
  {
      "title": "Mailing with Mailgun",
      "image": "/mailgun.png",
      "description": "Email integration using Mailgun API.",
  },
  {
      "title": "Backend Routes",
      "image": "/nodejs.png",
      "description": "Pre-configured Next.js API routes for backend.",
  },
  {
      "title": "MongoDB with Prisma",
      "image": "/db.png",
      "description": "Database setup with MongoDB and Prisma ORM.",
  }
];
const useCases = [
  {
    title: "For Your Next Side Project",
    description: "Perfect for quickly launching small projects.",
  },
  {
    title: "Build & Launch Your SaaS",
    description: "Accelerate SaaS development with pre-built features.",
  },
  {
    title: "Focus on Core Features",
    description: "Skip repetitive setup and focus on what matters.",
  },
  {
    title: "Save 20+ Hours",
    description: "Cut down setup time with a ready-to-go template.",
  },
];


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="absolute top-0 py-6 px-7 lg:px-10 flex justify-between items-center w-full">
      <span className="flex gap-2 items-center">
        <h2 className="bg-gradient-to-b from-gray-900 via-black to-gray-600 bg-clip-text tracking-tighter text-transparent text-xl font-black text-center dark:from-white dark:via-gray-200 dark:to-gray-400">
          Getstart
        </h2>
        <Image src="/logo.png" alt="logo" width={28} height={28} />
      </span>

      <div className="hidden lg:flex gap-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>What you get</NavigationMenuTrigger>
              <NavigationMenuContent>
              <ul className="grid grid-cols-2 gap-3 p-4 md:w-[500px] lg:w-[600px]">
                {components.map((component) => (
                  <div key={component.title} className="flex items-center justify-center space-x-2">
                    <img src={component.image} alt={`${component.title} icon`} className="w-6 h-6" />
                    <ListItem title={component.title}>
                      {component.description}
                    </ListItem>
                  </div>
                ))}
              </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Use Cases</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid grid-cols-2 gap-3 p-4 md:w-[500px] lg:w-[600px]">
                  {useCases.map((component) => (
                    <ListItem key={component.title} title={component.title}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Button variant="ghost" size="lg">
                  Pricing
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Button variant="ghost" size="lg">
                  How it Works
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <Menu className="h-20 w-20" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[350px]">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <span className="font-bold text-lg">Getstart</span>
              <Image src="/logo.png" alt="logo" width={28} height={28} />
            </Link>
            <NavigationMenu orientation="vertical">
              <NavigationMenuList className="flex-col items-start space-y-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger>What you get</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[calc(300px-2rem)] gap-3 p-4 sm:w-[calc(350px-2rem)]">
                      {components.map((component) => (
                        <div key={component.title} className="flex items-center justify-center space-x-2">
                        <img src={component.image} alt={`${component.title} icon`} className="w-6 h-6" />
                        <ListItem title={component.title}>
                          {component.description}
                        </ListItem>
                      </div>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Use Cases</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[calc(300px-2rem)] gap-3 p-4 sm:w-[calc(350px-2rem)]">
                      {useCases.map((component) => (
                        <ListItem key={component.title} title={component.title}>
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Button
                      variant="ghost"
                      size={'lg'}
                      onClick={() => setIsOpen(false)}
                    >
                      Pricing
                    </Button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Button
                      size={'lg'}
                      variant="ghost"
                      onClick={() => setIsOpen(false)}
                    >
                      How it Works
                    </Button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </SheetContent>
      </Sheet>

      <Button size="sm" className="hidden lg:inline-flex">
        Get Kit ✨
      </Button>
    </nav>
  )
};

const ListItem = ({
  title,
  href,
  children,
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
}) => (
  <li>
    <NavigationMenuLink asChild>
      {href ? (
        <a
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      ) : (
        <div
          className="block select-none space-y-1 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </div>
      )}
    </NavigationMenuLink>
  </li>
);

