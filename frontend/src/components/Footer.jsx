

import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Image src="/logo.jpg" height={100} width={100} alt="logo"/>
              </div>
              <span className="text-2xl font-bold">American Quality Restoration</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional roofing services you can trust. Quality workmanship
              and reliable service.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Roof Installation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Roof Repair
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Emergency Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <div className="hover:text-orange-500 transition-colors">
                (555) 123-4567
              </div>
              <div className="hover:text-orange-500 transition-colors">
                info@americanqualityrestoration.com
              </div>
              <div className="hover:text-orange-500 transition-colors">
                123 Main St, Your City, ST 12345
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />
        <div className="text-center text-gray-400">
          <p>&copy; 2025 American Quality Restoration. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer