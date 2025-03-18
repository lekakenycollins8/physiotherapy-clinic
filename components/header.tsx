import React from "react";
import Link from "next/link";
import { Menu, X, MapPin, Phone, Mail, Facebook, Twitter, Instagram,  Star } from "lucide-react";  
import { FaTiktok } from "react-icons/fa";

// Shadcn UI Components
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <>
      {/* Topbar - visible only on desktop */}
      <div className="hidden lg:block w-full bg-gray-900 px-5">
        <div className="container mx-auto flex justify-between items-center h-12">
          <div className="flex items-center space-x-4">
            <a href="/contact" className="text-white flex items-center">
              <MapPin className="text-blue-600 w-4 h-4 mr-2" />
              <span className="text-sm">Travel House, Muindi Mbingu Street directly opposite City Hall. Annexe, 5th Floor</span>
            </a>
            <a href="/contact" className="text-white flex items-center">
              <Phone className="text-blue-600 w-4 h-4 mr-2" />
              <span className="text-sm">+254 706 143 886</span>
            </a>
            <a href="/contact" className="text-white flex items-center">
              <Mail className="text-blue-600 w-4 h-4 mr-2" />
              <span className="text-sm">motionworksphysiotherapy@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <a href="https://www.facebook.com/share/166DAkaVuM/" className="bg-white border rounded-full p-2 flex items-center justify-center w-8 h-8">
              <Facebook className="w-4 h-4 text-gray-700" />
            </a>
            <a href="https://x.com/MotionworksP?t=-mzwmz8IpMUh2vCuO0BBaA&s=09" className="bg-white border rounded-full p-2 flex items-center justify-center w-8 h-8">
              <Twitter className="w-4 h-4 text-gray-700" />
            </a>
            <a href="https://www.instagram.com/motionworksphysiotherapy?igsh=NjdjZjNyZ25rYXR2" className="bg-white border rounded-full p-2 flex items-center justify-center w-8 h-8">
              <Instagram className="w-4 h-4 text-gray-700" />
            </a>
            <a href="https://www.tiktok.com/@motionworksphysio?_t=ZM-8uR34CIfwLm&_r=1" className="bg-white border rounded-full p-2 flex items-center justify-center w-8 h-8">
              <FaTiktok className="w-4 h-4 text-gray-700" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 lg:px-5 py-3 lg:py-4 flex justify-between items-center">
          {/* Logo */}
            <Link href="/" className="flex items-center">
            <img
              src="/logo.jpg"
              alt="MotionWorks Physiotherapy Logo"
              className="h-16 w-auto mr-3"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-300">
              MotionWorks
              </span>
              <span className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-300">
              Physiotherapy
              </span>
            </div>
            </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex items-center space-x-6">
              <NavigationMenuItem>
                <Link href="/" passHref>
                  <NavigationMenuLink className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/services" passHref>
                  <NavigationMenuLink className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                    Services
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" passHref>
                  <NavigationMenuLink className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              
              <NavigationMenuItem>
                <Link href="/contact" passHref>
                  <NavigationMenuLink className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Appointment Button */}
          <div className="hidden md:block">
            <Link href="/contact" passHref>
              <Button
                className="rounded-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation using Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden p-2">
                <Menu className="h-6 w-6 text-gray-700" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-4">
              <div className="flex justify-between items-center mb-4">
                <Link href="/" className="flex items-center">
                  <Star className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-xl font-bold text-blue-600">Motionworks Physiotherapy</span>
                </Link>
              </div>
              <nav className="space-y-2">
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium"
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium"
                >
                  About Us
                </Link>
                
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium"
                >
                  Contact
                </Link>
                
                {/* Mobile Contact Info */}
                <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                  <a href="#" className="flex items-center px-4 py-2 text-gray-700">
                    <MapPin className="text-blue-600 w-4 h-4 mr-2" />
                    <span className="text-sm">Find A Location</span>
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-700">
                    <Phone className="text-blue-600 w-4 h-4 mr-2" />
                    <span className="text-sm">+254 706 143 886</span>
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-700">
                    <Mail className="text-blue-600 w-4 h-4 mr-2" />
                    <span className="text-sm">motionworksphysiotherapy@gmail.com</span>
                  </a>
                </div>
                
                <Link href="/contact" className="block mt-4">
                  <Button
                    className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Book Appointment
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
};

export default Header;