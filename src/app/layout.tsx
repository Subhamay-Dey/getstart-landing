import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DotPattern from "@/components/ui/dot-pattern";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Getstart",
  description: "Code Less Build more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div className="relative min-h-screen select-none">
              <DotPattern className="fixed inset-0 pointer-events-none bg-gray-100" />
                <div className="relative z-10">
                <Toaster richColors position="top-right" className="z-10 relative"/>
                  {children}
                </div>
      </div>
      </body>
    </html>
  );
}
