import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-300 mt-12">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="text-sm text-gray-500">
          © {currentYear} Getstart. All rights reserved.
        </div>
        <nav className="flex space-x-4">
          <Link href="https://github.com/Subhamay-Dey" className="text-gray-800 hover:text-gray-900">
            <span className="sr-only">Github</span>
            <FaFacebook className="h-6 w-6" />
          </Link>
          <Link href="https://x.com/Subhraneel55545" className="text-gray-800 hover:text-gray-900">
            <span className="sr-only">Twitter</span>
            <FaTwitter className="h-6 w-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/subhamay-dey-5b8273292/" className="text-gray-800 hover:text-gray-900">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="h-6 w-6" />
          </Link>
        </nav>
      </div>
    </footer>
  )
}