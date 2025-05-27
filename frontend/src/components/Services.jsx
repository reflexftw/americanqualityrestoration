import { Home } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Wrench } from "lucide-react";
import { Shield } from "lucide-react";
import { Zap } from "lucide-react";
import { CheckCircle } from "lucide-react";

const Services= () => {
  const services = [
    {
      icon: Home,
      title: "Roof Installation",
      description:
        "Complete roof installation services using premium materials and expert craftsmanship.",
      features: ["New Construction", "Roof Replacement", "Custom Designs"],
    },
    {
      icon: Wrench,
      title: "Roof Repair",
      description:
        "Quick and reliable roof repair services to fix leaks, damage, and wear.",
      features: ["Emergency Repairs", "Leak Detection", "Storm Damage"],
    },
    {
      icon: Shield,
      title: "Roof Maintenance",
      description:
        "Regular maintenance services to extend your roof's lifespan and prevent issues.",
      features: ["Inspections", "Cleaning", "Preventive Care"],
    },
    {
      icon: Zap,
      title: "Emergency Services",
      description:
        "24/7 emergency roofing services for urgent repairs and storm damage.",
      features: ["24/7 Availability", "Rapid Response", "Insurance Claims"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive roofing solutions for residential and
            commercial properties
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors">
                  <service.icon className="h-10 w-10 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-2xl mb-4">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 mb-6">
                  {service.description}
                </CardDescription>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center text-sm text-gray-600"
                    >
                      <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services