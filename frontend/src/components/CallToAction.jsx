import { Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";


const CallToAction = () => {
  return (
    <div className="">
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Experience the RoofPro difference. Contact us today for your free
            consultation and estimate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-orange-500 hover:bg-gray-100"
            >
              <Phone className="h-5 w-5 mr-2" />
              (555) 123-ROOF
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-black hover:text-orange-500"
            >
              <Mail className="h-5 w-5 mr-2" />
              <Link href="/contact">Get Your Booking</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;
