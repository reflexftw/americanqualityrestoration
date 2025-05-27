"use client"

import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Services", "About", "Projects", "Contact"];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/logo.jpg" width={50} height={50} alt="logo"/>
            <span
              className={`text-2xl font-bold ${
                isScrolled ? "text-gray-800" : "text-gray-800"
              }`}
            >
              American Quality Restoration
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`${item.toLowerCase()}`}
                className={`font-medium hover:text-orange-500 transition-colors ${
                  isScrolled ? "text-gray-600" : "text-white"
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div
              className={`flex items-center space-x-2 ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              <Phone className="h-4 w-4 text-black" />
              <span className="font-semibold text-black">(555) 123-4567</span>
            </div>
            <Button size="sm">Book Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`md:hidden ${
              isScrolled ? "text-gray-800" : "text-gray-600"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <Card className="md:hidden mt-4">
            <CardContent className="p-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`${item.toLowerCase()}`}
                  className="block py-2 text-gray-800 hover:text-orange-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Separator className="my-4" />
              <div className="flex items-center space-x-2 text-gray-800 mb-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <Button size="sm" className="w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </header>
  );
};

export default Header