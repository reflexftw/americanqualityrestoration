import { Award } from "lucide-react";
import { Shield } from "lucide-react";
import { Hammer } from "lucide-react";
import { Users } from "lucide-react";

const Stats = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Customers" },
    { icon: Hammer, number: "1000+", label: "Projects Completed" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Shield, number: "100%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="py-16 bg-orange-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <stat.icon className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats