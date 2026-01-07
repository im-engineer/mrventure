'use client';

import { motion } from 'framer-motion';
import { Zap, Code2, Database, Cloud, Cpu, Shield, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export default function TechnologiesPage() {
  const sections = [
    {
      title: "Frontend Technologies",
      subtitle: "Modern frameworks for exceptional user experiences",
      icon: Code2,
      color: "from-cyan-500 to-blue-500",
      items: [
        { name: "React", desc: "Component-based UI library", percent: 95 },
        { name: "TypeScript", desc: "Type-safe JavaScript", percent: 90 },
        { name: "Tailwind CSS", desc: "Utility-first CSS framework", percent: 95 },
        { name: "Next.js", desc: "React framework for production", percent: 88 },
      ],
    },
    {
      title: "Backend Technologies",
      subtitle: "Robust server-side solutions",
      icon: Code2,
      color: "from-green-500 to-emerald-500",
      items: [
        { name: "Node.js", desc: "JavaScript runtime", percent: 92 },
        { name: "Python", desc: "Versatile programming language", percent: 90 },
        { name: "Java Spring", desc: "Enterprise Java framework", percent: 85 },
        { name: "GraphQL", desc: "API query language", percent: 87 },
      ],
    },
    {
      title: "Database Solutions",
      subtitle: "Scalable data management systems",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      items: [
        { name: "PostgreSQL", desc: "Advanced SQL database", percent: 93 },
        { name: "MongoDB", desc: "NoSQL document database", percent: 90 },
        { name: "Redis", desc: "In-memory data store", percent: 88 },
        { name: "Elasticsearch", desc: "Search and analytics engine", percent: 85 },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      subtitle: "Scalable cloud platforms",
      icon: Cloud,
      color: "from-blue-500 to-indigo-500",
      items: [
        { name: "AWS", desc: "Amazon Web Services", percent: 94 },
        { name: "Google Cloud", desc: "GCP platform", percent: 88 },
        { name: "Azure", desc: "Microsoft cloud platform", percent: 86 },
        { name: "Docker", desc: "Containerization platform", percent: 92 },
      ],
    },
    {
      title: "AI & Machine Learning",
      subtitle: "Intelligent automation and analytics",
      icon: Cpu,
      color: "from-purple-500 to-pink-500",
      items: [
        { name: "TensorFlow", desc: "ML framework", percent: 85 },
        { name: "PyTorch", desc: "Deep learning library", percent: 83 },
        { name: "OpenAI", desc: "GPT integration", percent: 88 },
        { name: "Scikit-learn", desc: "ML library for Python", percent: 87 },
      ],
    },
    {
      title: "Security & DevOps",
      subtitle: "Enterprise-grade security and automation",
      icon: Shield,
      color: "from-pink-500 to-rose-500",
      items: [
        { name: "Kubernetes", desc: "Container orchestration", percent: 89 },
        { name: "Jenkins", desc: "CI/CD automation", percent: 86 },
        { name: "OAuth 2.0", desc: "Authorization framework", percent: 92 },
        { name: "Terraform", desc: "Infrastructure as code", percent: 84 },
      ],
    },
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional",
    "Microsoft Azure Expert",
    "ISO 27001 Certified",
    "SOC 2 Type II Compliant",
    "HIPAA Compliant",
    "GDPR Compliant",
    "PCI DSS Certified",
  ];

  const stats = [
    { value: "50+", label: "Technologies Mastered" },
    { value: "1000+", label: "AI Models Trained" },
    { value: "99.99%", label: "Infrastructure Uptime" },
    { value: "100%", label: "Security Compliance" },
  ];

  return (
    <>
      {/* Hero Header */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Badge className="bg-white/20 backdrop-blur border-white/30 text-white px-6 py-3 text-base sm:text-lg">
              Technology Stack
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal">
              Cutting-Edge Technology
            </h1>
            <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
              We leverage the latest and most powerful technologies to build scalable, secure, and innovative solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Sections */}
      {sections.map((section, index) => (
        <section key={index} className={`py-16 sm:py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-purple-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left"
            >
              <div className={`w-16 h-16 sm:w-20 sm:h-20 ${section.color} rounded-2xl flex items-center justify-center shadow-lg text-white flex-shrink-0`}>
                <section.icon className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{section.title}</h2>
                <p className="text-lg sm:text-xl text-gray-600 mt-2">{section.subtitle}</p>
              </div>
            </motion.div>

            {/* Tech Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {section.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">{item.name}</h3>
                      <p className="text-sm sm:text-base text-gray-600 mt-1">{item.desc}</p>
                    </div>
                    <Badge className={`${section.color} text-white text-sm sm:text-base`}>
                      {item.percent}%
                    </Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: i * 0.1 }}
                      className={`h-full rounded-full bg-gradient-to-r ${section.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Certifications & Compliance */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-purple-900 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Certifications & Compliance</h2>
            <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">Certified and compliant with industry-leading standards</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur rounded-3xl p-6 sm:p-8 flex flex-col items-center gap-4"
              >
                <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-white/70" />
                <p className="text-sm sm:text-base text-center">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <h3 className="text-4xl sm:text-5xl font-bold text-purple-600 mb-2">{stat.value}</h3>
                <p className="text-base sm:text-lg text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-28 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
          >
            Want to Learn More?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover how our technology stack can power your next project
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white rounded-full px-8 sm:px-16 py-7 sm:py-10 text-md sm:text-xl font-normal shadow-2xl">
              Schedule a Tech Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}