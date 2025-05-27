import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Clock } from "lucide-react";
import { Shield } from "lucide-react";
import { Award } from "lucide-react";
import { Users } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose <span className="text-orange-500">American Quality Restoration?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With over 15 years of experience in the roofing industry, we've
              built our reputation on quality workmanship, reliable service, and
              customer satisfaction.
            </p>

            <div className="space-y-6">
              {[
                "Licensed and insured professionals",
                "High-quality materials and warranties",
                "Competitive pricing and free estimates",
                "Emergency services available 24/7",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button size="lg">
                <Link href="/about">
                Learn More About Us
                </Link>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-none">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Clock className="h-12 w-12 mx-auto mb-4 opacity-80" />
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-lg opacity-90">Emergency Service</div>
                </div>
                <div className="text-center">
                  <Shield className="h-12 w-12 mx-auto mb-4 opacity-80" />
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-lg opacity-90">Satisfaction</div>
                </div>
                <div className="text-center">
                  <Award className="h-12 w-12 mx-auto mb-4 opacity-80" />
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-lg opacity-90">Years Experience</div>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 opacity-80" />
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-lg opacity-90">Happy Clients</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default About