"use client";

import ContactForm from "@/components/ContactForm";

import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";


const ContactPage = () => {
  
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white pt-28 pb-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get Your Free <span className="text-orange-500">Estimate</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Ready to get started? Contact us today for a free, no-obligation
              estimate.
            </p>
            <div className="flex gap-6 justify-center align-center">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Call Us</div>
                  <div className="text-gray-300">(555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email Us</div>
                  <div className="text-gray-300">info@americanqualityrestoration.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Visit Us</div>
                  <div className="text-gray-300">
                    123 Main St, City, ST 12345
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center align-center py-12">
        <div className="w-[30%]">
          <ContactForm/>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
