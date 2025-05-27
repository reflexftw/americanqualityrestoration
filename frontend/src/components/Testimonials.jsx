import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Homeowner",
      rating: 5,
      text: "American Quality Restoration did an amazing job on our roof replacement. Professional, timely, and the quality is outstanding. Highly recommend!",
    },
    {
      name: "Mike Chen",
      location: "Business Owner",
      rating: 5,
      text: "Fast response for emergency repairs during the storm. They saved our business from major water damage. Excellent service!",
    },
    {
      name: "Lisa Rodriguez",
      location: "Property Manager",
      rating: 5,
      text: "We use American Quality Restoration for all our commercial properties. Consistent quality work and competitive pricing. Very satisfied!",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our <span className="text-orange-500">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-gray-800">
                    {testimonial.name}
                  </div>
                  <Badge variant="secondary" className="mt-1">
                    {testimonial.location}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
