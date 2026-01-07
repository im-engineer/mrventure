'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ServicesPage() {
  const services = [
    {
      title: "Ecommerce Solutions",
      subtitle: "Scale Your Online Business",
      description:
        "Build and scale your online empire with our AI-powered ecommerce platform. Complete with smart inventory management, seamless payment processing, advanced analytics, and omnichannel selling capabilities.",
      features: [
        "Smart Analytics Dashboard",
        "Mobile-First Design",
        "Secure Payment Gateway",
        "Real-time Sales Tracking",
      ],
      price: "$99/month",
      iconColor: "bg-gradient-to-br from-cyan-500 to-blue-500",
      imageUrl: "https://flatlogic.com/blog/wp-content/uploads/2019/09/Screen-Shot-2019-09-17-at-5.11.27-PM-1024x578.png", // Professional ecommerce dashboard
      imageLeft: true,
    },
    {
      title: "School Management System",
      subtitle: "Modernize Education",
      description:
        "Revolutionary educational platform that streamlines every aspect of school operations. Manage students, faculty, attendance, grades, and parent communication with powerful automation and insights.",
      features: [
        "Student Information Portal",
        "AI-Powered Attendance",
        "Grade Management",
        "Parent Communication Hub",
      ],
      price: "$149/month",
      iconColor: "bg-gradient-to-br from-green-500 to-emerald-500",
      imageUrl: "https://s3-alpha.figma.com/hub/file/2188759242062963773/a7fd5e67-5e3c-4109-bf49-c01c4fd0c90d-cover.png", // Clean school management dashboard
      imageLeft: false,
    },
    {
      title: "Hospital Management System",
      subtitle: "Transform Healthcare Delivery",
      description:
        "Transform healthcare delivery with our comprehensive hospital management solution. From intelligent patient records to automated scheduling, billing integration, and complete pharmacy management.",
      features: [
        "Electronic Health Records",
        "Automated Scheduling",
        "Billing & Insurance System",
        "HIPAA Compliance",
      ],
      price: "$499/month",
      iconColor: "bg-gradient-to-br from-purple-500 to-pink-500",
      imageUrl: "https://s3.envato.com/files/654970629/08_patient-details.jpg", // Modern hospital EMR dashboard
      imageLeft: true,
    },
  ];

  return (
    <>
      {/* Hero Header */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto"
          >
            Comprehensive software solutions designed to transform your business operations and drive growth
          </motion.p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                service.imageLeft ? '' : 'lg:[&>div:nth-child(1)]:order-2 lg:[&>div:nth-child(2)]:order-1'
              }`}
            >
              {/* Image - Always first on mobile */}
              <div className="relative order-1">
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-auto">
                  <img
                    src={service.imageUrl}
                    alt={`${service.title} dashboard`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 sm:space-y-8 order-2 text-center lg:text-left">
                <div className="flex flex-col sm:flex-row items-center gap-6 lg:items-start">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 ${service.iconColor} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/30 rounded-xl" />
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-normal text-gray-900">{service.title}</h2>
                    <p className="text-lg sm:text-xl text-purple-600 font-medium mt-2">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 justify-center lg:justify-start">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing + Button */}
                <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 justify-center lg:justify-start">
                  <Badge className="bg-purple-100 text-purple-700 px-6 py-3 text-base sm:text-lg font-medium rounded-full">
                    Starting at {service.price}
                  </Badge>
                  <Button
                    size="lg"
                    className={`rounded-full px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-semibold shadow-xl ${
                      service.iconColor.includes('blue')
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600'
                        : service.iconColor.includes('green')
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'
                        : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                    } text-white`}
                  >
                    Learn More →
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Custom Solution CTA */}
      <section className="py-16 sm:py-24 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Need a Custom Solution?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            We offer tailored solutions to meet your unique business requirements
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-10 sm:px-12 py-7 sm:py-8 text-lg sm:text-xl font-semibold shadow-2xl">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}