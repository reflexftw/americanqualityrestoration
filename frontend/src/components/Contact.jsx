"use client"

import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import ContactForm from "./ContactForm";

const Contacts = () => {

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Your <span className="text-orange-500">Booking</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to get started? Contact us today for a free, no-obligation
              estimate.
            </p>

            <div className="space-y-6">
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
                    123 Main St, Your City, ST 12345
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ContactForm/>
        </div>
      </div>
    </section>
  );
};
export default Contacts