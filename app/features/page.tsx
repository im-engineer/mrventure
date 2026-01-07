'use client';

import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Globe, Database, Cpu, BarChart3, Plug, Smartphone, HeadphonesIcon, Lock, MapPin, Rocket, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function FeaturesPage() {
  const coreFeatures = [
    { icon: Zap, color: "from-orange-400 to-yellow-500", title: "Lightning Performance", desc: "Optimized infrastructure delivering sub-second response times globally with advanced caching" },
    { icon: ShieldCheck, color: "from-blue-500 to-cyan-500", title: "Enterprise Security", desc: "Military-grade encryption with advanced threat detection and real-time monitoring" },
    { icon: Globe, color: "from-blue-400 to-indigo-500", title: "Cloud Native", desc: "Built for the cloud with 99.99% uptime SLA and global CDN distribution" },
    { icon: Database, color: "from-green-500 to-emerald-500", title: "Real-time Sync", desc: "Instant data synchronization across all devices and platforms" },
  ];

  const advancedFeatures = [
    { icon: Cpu, color: "from-purple-500 to-pink-500", title: "AI-Powered", desc: "Machine learning algorithms that adapt and improve over time" },
    { icon: BarChart3, color: "from-pink-500 to-rose-500", title: "Unlimited Scaling", desc: "Grow without limits with auto-scaling infrastructure and resources" },
    { icon: BarChart3, color: "from-red-500 to-orange-500", title: "Advanced Analytics", desc: "Comprehensive dashboards and reporting with predictive insights" },
    { icon: Rocket, color: "from-orange-500 to-red-500", title: "Automation Engine", desc: "Powerful workflow automation to streamline your operations" },
  ];

  const integrationFeatures = [
    { icon: Plug, color: "from-green-500 to-teal-500", title: "API Integration", desc: "RESTful APIs and webhooks for seamless third-party integrations" },
    { icon: Database, color: "from-blue-400 to-cyan-500", title: "Microservices", desc: "Modular architecture for maximum flexibility and customization" },
    { icon: Smartphone, color: "from-purple-400 to-indigo-500", title: "Mobile Ready", desc: "Native mobile apps for iOS and Android with offline support" },
    { icon: HeadphonesIcon, color: "from-pink-500 to-rose-500", title: "24/7 Support", desc: "Expert technical support available around the clock worldwide" },
  ];

  const complianceFeatures = [
    { icon: Lock, color: "from-red-500 to-pink-500", title: "Data Privacy", desc: "GDPR, HIPAA, and SOC 2 compliant with complete data ownership" },
    { icon: MapPin, color: "from-blue-500 to-indigo-500", title: "Global Reach", desc: "Deployed across 50+ data centers in 6 continents" },
    { icon: Rocket, color: "from-orange-500 to-red-500", title: "Rapid Deployment", desc: "Go live in hours, not weeks, with our streamlined onboarding" },
    { icon: Award, color: "from-yellow-500 to-orange-500", title: "Award Winning", desc: "Recognized by industry leaders for innovation and excellence" },
  ];

  const renderFeatureGrid = (features: any[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          whileHover={{ scale: 1.05, y: -8 }}
          className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} p-4 shadow-lg flex items-center justify-center text-white`}>
            <feature.icon className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{feature.title}</h3>
          <p className="text-gray-600 text-center">{feature.desc}</p>
        </motion.div>
      ))}
    </div>
  );

  return (
    <>
      {/* Hero Header */}
      <section className="py-32 bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-white/20 backdrop-blur border-white/30 text-white px-6 py-3 mb-8 text-lg">
              Features
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Everything You Need to Succeed
            </h1>
            <p className="text-xl opacity-90">
              Comprehensive features designed to empower your business and drive innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Features</h2>
          <p className="text-xl text-gray-600 mb-16">Essential capabilities built into every product</p>
          {renderFeatureGrid(coreFeatures)}
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Capabilities</h2>
          <p className="text-xl text-gray-600 mb-16">Powerful features for enterprise needs</p>
          {renderFeatureGrid(advancedFeatures)}
        </div>
      </section>

      {/* Integration & Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Integration & Support</h2>
          <p className="text-xl text-gray-600 mb-16">Connect and get help when you need it</p>
          {renderFeatureGrid(integrationFeatures)}
        </div>
      </section>

      {/* Compliance & Quality */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Compliance & Quality</h2>
          <p className="text-xl text-gray-600 mb-16">Security and standards you can trust</p>
          {renderFeatureGrid(complianceFeatures)}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { value: "99.99%", label: "Uptime SLA" },
              { value: "< 100ms", label: "Response Time" },
              { value: "256-bit", label: "Encryption" },
              { value: "24/7", label: "Support" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-4xl lg:text-4xl font-normal mb-4">{stat.value}</h3>
                <p className="text-xl opacity-90">{stat.label}</p>
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
            Experience All Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-12"
          >
            Start your free trial today and explore everything our platform has to offer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white rounded-full px-16 py-10 text-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all">
              Start Free Trial
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}