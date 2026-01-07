'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ProductsPage() {
  const products = [
    {
      name: "Nexus Commerce",
      category: "Ecommerce",
      subtitle: "Next-Gen Ecommerce Platform",
      description: "A complete ecommerce solution powered by AI and machine learning, designed to scale with your business from startup to enterprise.",
      features: [
        "AI-powered product recommendations",
        "One-click checkout",
        "Multi-currency support",
      ],
      version: "v3.2.1",
      releaseDate: "2024-12-15",
      imageUrl: "https://www.shutterstock.com/image-photo/full-length-happy-excited-asian-260nw-2612019205.jpg",
      categoryColor: "from-cyan-500 to-blue-500",
      badgeColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
    {
      name: "EduMaster Pro",
      category: "Education",
      subtitle: "Complete School Management Suite",
      description: "An all-in-one school management platform that brings together students, teachers, parents, and administrators in a unified digital ecosystem.",
      features: [
        "Automated attendance tracking",
        "Grade calculation engine",
        "Parent-teacher messaging",
      ],
      version: "v2.8.0",
      releaseDate: "2024-11-20",
      imageUrl: "https://media.istockphoto.com/id/545634390/photo/typing-on-a-tablet.jpg?s=612x612&w=0&k=20&c=CPZVKbxkPDHsO8HqwZuFru9KmezQc5egPFv298h4kjA=",
      categoryColor: "from-green-500 to-emerald-500",
      badgeColor: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
    {
      name: "MediCore HMS",
      category: "Healthcare",
      subtitle: "Advanced Hospital Management",
      description: "A comprehensive hospital information system designed for modern healthcare facilities, ensuring better patient care and operational efficiency.",
      features: [
        "HIPAA compliant EHR",
        "Appointment scheduling",
        "Insurance claim processing",
      ],
      version: "v4.1.2",
      releaseDate: "2024-12-01",
      imageUrl: "https://www.shutterstock.com/shutterstock/photos/212251981/display_1500/stock-photo-modern-hospital-style-building-212251981.jpg",
      categoryColor: "from-purple-500 to-pink-500",
      badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
  ];

  return (
    <>
      {/* Hero Header */}
      <section className="py-32 bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-white/20 backdrop-blur border-white/30 text-white px-6 py-3 mb-8 text-lg">
              Our Products
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Enterprise Software Products
            </h1>
            <p className="text-xl opacity-90">
              Powerful, scalable solutions designed for modern businesses
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group"
              >
                <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
                  {/* Image with Version Badge */}
                  <div className="relative">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-6 right-6">
                      <Badge className={`${product.badgeColor} text-white px-4 py-2`}>
                        {product.version}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-6">
                    {/* Category Badge */}
                    <Badge className={`${product.badgeColor} text-white px-4 py-2`}>
                      {product.category}
                    </Badge>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-lg text-purple-600 font-medium">{product.subtitle}</p>
                    </div>

                    <p className="text-gray-600 leading-relaxed">{product.description}</p>

                    {/* Features */}
                    <ul className="space-y-3">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-purple-600 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar className="w-5 h-5" />
                        <span>{product.releaseDate}</span>
                      </div>
                      <a
                        href="#"
                        className="text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-2 group-hover:gap-3 transition-all"
                      >
                        Learn More <ArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-purple-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-12"
          >
            Try any of our products with a 30-day free trial
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white rounded-full px-12 py-8 text-xl font-semibold shadow-2xl">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-12 py-8 text-xl font-semibold border-gray-300 hover:bg-gray-50">
              Request Demo
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}