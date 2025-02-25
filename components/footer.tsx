import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">PhysioWell Clinic</h3>
            <p>Expert Physiotherapy for Your Health & Wellness</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li>
                <Link href="/privacy-terms" className="hover:text-blue-600">
                  Privacy Policy & Terms
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Facebook />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Twitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-sm text-center">
          &copy; {new Date().getFullYear()} PhysioWell Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

