import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        // style={{
        //   backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600"><rect fill="%23374151" width="1000" height="600"/><polygon fill="%236B7280" points="0,300 100,250 200,300 300,200 400,250 500,150 600,200 700,100 800,150 900,50 1000,100 1000,600 0,600"/><polygon fill="%234B5563" points="0,400 150,350 300,400 450,300 600,350 750,250 900,300 1000,200 1000,600 0,600"/></svg>')`,
        // }}
      >
        <Image src="https://www.urdesignmag.com/wp-content/uploads/2019/09/key-components-of-a-roofing-website-design-you-should-have-for-yours-1.jpg" />
      </div> */}
      <div className="absolute inset-0">
        <Image
          src="https://www.urdesignmag.com/wp-content/uploads/2019/09/key-components-of-a-roofing-website-design-you-should-have-for-yours-1.jpg"
          alt="Roofing background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Professional
            <span className="text-orange-500 block">Roofing Services</span>
          </h1>
          <p className="text-xl text-white mb-8 leading-relaxed">
            Protecting your home with quality craftsmanship and reliable
            service. We deliver exceptional roofing solutions that stand the
            test of time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group">
              <Link href="/contact">
              Get Your Booking Now
              </Link>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-gray-800"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero