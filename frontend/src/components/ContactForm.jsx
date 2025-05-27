"use client";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { API_PATHS } from "@/utils/apiPaths";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    // projectDetails:"",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_PATHS.SERVICES.BOOK, formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    console.log("hello");
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Get Your Booking Now</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you soon
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">First Name</label>
                <Input
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Last Name</label>
                <Input
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address</label>
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Phone Number</label>
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Service Needed</label>
              <Select
                onValueChange={(value) => handleInputChange("service", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="installation">
                    Roof Installation
                  </SelectItem>
                  <SelectItem value="repair">Roof Repair</SelectItem>
                  <SelectItem value="maintenance">Roof Maintenance</SelectItem>
                  <SelectItem value="emergency">Emergency Service</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Project Details</label>
              <Textarea
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                rows={4}
              />
            </div>

            <Button size="lg" className="w-full">
              Get Your Booking Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default ContactForm;
