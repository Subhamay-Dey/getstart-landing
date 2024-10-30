"use client";

import * as React from "react";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa"; 
import ShinyButton from './ui/shiny-button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"; 
import { AnimatedSubscribeButton } from "./ui/animated-subscribe-button";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { Button } from "./ui/button";

const components = [
  
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function Herosection() {
  return (
    <div className='relative min-h-screen w-full flex flex-col justify-center items-center'>
      <nav className='absolute top-0 py-6 px-10 flex justify-between w-full'>
        <span className='flex gap-2'>
          <h2 className='bg-gradient-to-b from-gray-900 via-black to-gray-600 bg-clip-text tracking-tighter text-transparent text-xl font-black text-center dark:from-white dark:via-gray-200 dark:to-gray-400'>Getstart</h2>
          <img src="/logo.png" alt="logo" className='size-7' />
        </span>
        <div className='flex gap-2'>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  What you get
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid grid-cols-2 gap-3 p-4 md:w-[500px] lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem key={component.title} title={component.title} href={component.href}>
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Use Cases
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid grid-cols-2 gap-3 p-4 md:w-[500px] lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem key={component.title} title={component.title} href={component.href}>
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <Button variant="ghost" size={"lg"}>Pricing</Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Button>Get Kit ✨</Button>
      </nav>
      <span className="flex-col flex">
        <h1 className='bg-gradient-to-b from-gray-900 via-black to-gray-600 bg-clip-text tracking-tighter text-transparent text-6xl font-black text-center dark:from-white dark:via-gray-200 dark:to-gray-400'>
          Build and launch
        </h1>
        <h1 className='bg-gradient-to-b from-gray-900 via-black to-gray-600 bg-clip-text tracking-tighter text-transparent text-6xl font-black text-center dark:from-white dark:via-gray-200 dark:to-gray-400'>
          your next project faster
        </h1>
      </span>
      <p className='mt-10 text-xl leading-relaxed max-w-xl text-center'>
        SaaS kit with clean UI, authentication, payments, and simple docs, to focus on what matters.
      </p>
      <ShinyButton className='px-8 py-4 mt-[45px] rounded-xl shadow-2xl text-black font-bold'>
        Get kit ✨
      </ShinyButton>
    </div>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
