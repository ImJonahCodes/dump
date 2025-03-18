import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowRight, Award, CheckCircle2, DollarSign, Leaf, Mail, MapPin, Phone, Truck } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-gradient-to-b from-black/70 to-black/50">
        <Image
          src="https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b"
          alt="Professional dumpster rental service"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Professional Dumpster Rental in Atlanta
          </h1>
          <p className="text-xl max-w-2xl text-gray-200 leading-relaxed">
            Reliable and affordable dumpster rental services for your construction,
            renovation, or cleanup projects.
          </p>
          <div className="flex gap-4 pt-4">
            <Button size="lg" className="text-lg bg-white text-black hover:bg-gray-100">
              Get a Quote
              <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white/10">
              <Phone className="mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Residential",
                description:
                  "Perfect for home renovations, cleanouts, and yard waste removal",
                image: "https://images.unsplash.com/photo-1590496793929-36417d3117de",
              },
              {
                title: "Commercial",
                description:
                  "Ideal for construction sites, retail locations, and office cleanouts",
                image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
              },
              {
                title: "Construction",
                description:
                  "Specialized solutions for construction debris and materials",
                image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
              },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="h-48 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dumpster Sizes Section */}
      <section id="sizes" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">Dumpster Sizes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                size: "10 Yard",
                dimensions: "12' x 8' x 4'",
                ideal: "Small renovations, garage cleanouts",
                price: "From $299",
              },
              {
                size: "20 Yard",
                dimensions: "16' x 8' x 5'",
                ideal: "Home remodeling, medium projects",
                price: "From $349",
              },
              {
                size: "30 Yard",
                dimensions: "20' x 8' x 6'",
                ideal: "Large construction, commercial use",
                price: "From $399",
              },
            ].map((dumpster, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary opacity-75" />
                <h3 className="text-2xl font-bold mb-4">{dumpster.size}</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Truck className="mr-2 h-5 w-5 text-primary" />
                    {dumpster.dimensions}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                    {dumpster.ideal}
                  </li>
                  <li className="text-xl font-bold mt-4">{dumpster.price}</li>
                </ul>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90">Reserve Now</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: "Fast Delivery",
                description: "Same-day or next-day delivery available across Atlanta metro area",
              },
              {
                icon: DollarSign,
                title: "Best Pricing",
                description: "Competitive rates with no hidden fees or surprise charges",
              },
              {
                icon: Award,
                title: "Premium Service",
                description: "Professional, reliable, and courteous service guaranteed",
              },
              {
                icon: Leaf,
                title: "Eco-Friendly",
                description: "Responsible waste management and recycling practices",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How long can I keep the dumpster?",
                answer: "Standard rental period is 7 days. Extended rentals are available at competitive rates.",
              },
              {
                question: "What can't I put in the dumpster?",
                answer: "Hazardous materials, chemicals, batteries, and certain electronics are prohibited.",
              },
              {
                question: "Do I need a permit?",
                answer: "Most residential properties don't require permits. We'll help determine if you need one.",
              },
              {
                question: "What areas do you service?",
                answer: "We serve the entire Atlanta metro area including Marietta, Decatur, and Sandy Springs.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions about our dumpster rental services? Contact us today
                for a free quote or to schedule your delivery.
              </p>
              <div className="space-y-6">
                <p className="flex items-center hover:text-primary transition-colors">
                  <Phone className="mr-2 h-5 w-5 text-primary" />
                  (404) 555-0123
                </p>
                <p className="flex items-center hover:text-primary transition-colors">
                  <Mail className="mr-2 h-5 w-5 text-primary" />
                  contact@atlantadumprental.com
                </p>
                <p className="flex items-center hover:text-primary transition-colors">
                  <MapPin className="mr-2 h-5 w-5 text-primary" />
                  Atlanta, GA
                </p>
              </div>
            </div>
            <Card className="p-8 shadow-lg">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}