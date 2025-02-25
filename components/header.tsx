"use client";

import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-300">
            PhysioWell
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex items-center space-x-6">
            <NavigationMenuItem>
              <Link href="/" passHref>
                <NavigationMenuLink className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/services" passHref>
                <NavigationMenuLink className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Services
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" passHref>
                <NavigationMenuLink className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/team" passHref>
                <NavigationMenuLink className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Team
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/testimonials" passHref>
                <NavigationMenuLink className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Testimonials
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/gallery" passHref>
                <NavigationMenuLink className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Gallery
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Link href="/contact" passHref>
            <Button
              className="animate-pulse"
              style={{ animation: "heartbeat 1.5s ease-in-out infinite" }}
            >
              Contact
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
          <SheetContent side="left" className="p-4">
            <div className="flex justify-between items-center mb-4">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                PhysioWell
              </Link>
              <SheetClose asChild>
                <Button variant="ghost" className="p-2">
                  <X className="h-6 w-6 text-gray-700" />
                </Button>
              </SheetClose>
            </div>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                About Us
              </Link>
              <Link
                href="/team"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Team
              </Link>
              <Link
                href="/testimonials"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Testimonials
              </Link>
              <Link
                href="/gallery"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Gallery
              </Link>
              <Link href="/contact" className="block mt-4">
                <Button
                  className="w-full animate-pulse"
                  style={{ animation: "heartbeat 1.5s ease-in-out infinite" }}
                >
                  Contact
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <style jsx>{`
        @keyframes heartbeat {
          0% {
            transform: scale(1);
          }
          14% {
            transform: scale(1.1);
          }
          28% {
            transform: scale(1);
          }
          42% {
            transform: scale(1.1);
          }
          70% {
            transform: scale(1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;