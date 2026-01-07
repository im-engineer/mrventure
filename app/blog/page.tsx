'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function BlogPage() {
  const categories = [
    { name: "All Posts", active: true },
    { name: "Technology", active: false },
    { name: "Education", active: false },
    { name: "Healthcare", active: false },
    { name: "Cloud", active: false },
    { name: "Security", active: false },
    { name: "Development", active: false },
  ];

  const featuredArticle = {
    title: "The Future of Ecommerce: How AI is Transforming Online Shopping",
    date: "2024-12-15",
    readTime: "8 min read",
    excerpt: "Discover how artificial intelligence is revolutionizing the ecommerce landscape and what it means for businesses in 2025.",
    author: "Sarah Johnson",
    role: "Chief Technology Officer",
    category: "Technology",
    imageUrl: "https://cdn.dribbble.com/userupload/9327116/file/original-227475a76530cc083675382a3d5338a9.png?format=webp", // Purple AI ecommerce dashboard
    slug: "future-of-ecommerce-ai",
  };

  const recentArticles = [
    {
      title: "Digital Transformation in Education: Beyond the Classroom",
      date: "2024-12-10",
      readTime: "6 min read",
      excerpt: "Explore how modern school management systems are revolutionizing education and creating better learning outcomes.",
      author: "Dr. Michael Chen",
      category: "Education",
      imageUrl: "https://s3-alpha.figma.com/hub/file/2188759242062963773/a7fd5e67-5e3c-4109-bf49-c01c4fd0c90d-cover.png", // Clean school management dashboard
      slug: "digital-transformation-education",
    },
    {
      title: "Healthcare Technology Trends to Watch in 2025",
      date: "2024-12-05",
      readTime: "10 min read",
      excerpt: "From telemedicine to AI diagnostics, discover the technologies shaping the future of healthcare delivery.",
      author: "Jennifer Martinez",
      category: "Healthcare",
      imageUrl: "https://s3.envato.com/files/654970629/08_patient-details.jpg", // Modern hospital EMR dashboard
      slug: "healthcare-trends-2025",
    },
    {
      title: "Why Cloud Computing is Essential for Modern Enterprises",
      date: "2024-11-28",
      readTime: "7 min read",
      excerpt: "Understanding the benefits and best practices of cloud adoption for enterprise software solutions.",
      author: "David Park",
      category: "Cloud",
      imageUrl: "https://www.slideteam.net/media/catalog/product/cache/1280x720/k/p/kpi_dashboard_for_monitoring_cloud_computing_infrastructure_slide01.jpg", // Cloud infrastructure dashboard
      slug: "cloud-computing-enterprise",
    },
    {
      title: "Cybersecurity Best Practices for Software Applications",
      date: "2024-11-20",
      readTime: "9 min read",
      excerpt: "Essential security measures every business should implement to protect their data and customers.",
      author: "Alex Thompson",
      category: "Security",
      imageUrl: "https://secureframe.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fsecureframe-com%2FZr1rfEaF0TcGI8lY_OverviewDashboard.png%3Fauto%3Dformat%2Ccompress&w=3840&q=75", // Cybersecurity monitoring dashboard
      slug: "cybersecurity-best-practices",
    },
    {
      title: "The Complete Guide to API Integration for Business Applications",
      date: "2024-11-15",
      readTime: "11 min read",
      excerpt: "Learn how to leverage APIs to connect your systems and create seamless workflows.",
      author: "Maria Rodriguez",
      category: "Development",
      imageUrl: "https://www.globalpaymentsintegrated.com/en-us/-/media/project/openedge/gpn/partners/developerresources/developer-toolkit/devdashboard.jpg", // API developer dashboard
      slug: "api-integration-guide",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Badge className="bg-white/20 backdrop-blur border-white/30 text-white px-6 py-3 text-base sm:text-lg">
              Blog & Insights
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal">
              Latest Articles & Insights
            </h1>
            <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and innovations in technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 sm:py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((cat, i) => (
              <Badge
                key={i}
                className={`px-5 sm:px-6 py-2 sm:py-3 text-base sm:text-lg cursor-pointer transition-all ${
                  cat.active
                    ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 sm:py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-4">Featured Article</h2>
            <p className="text-lg sm:text-xl text-gray-600">Our latest insights and updates</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image - Stacks on top on mobile */}
            <div className="order-1 lg:order-1 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-auto">
                <img
                  src={featuredArticle.imageUrl}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg">
                  {featuredArticle.category}
                </Badge>
              </div>
            </div>

            {/* Content */}
            <Card className="p-8 sm:p-12 shadow-xl order-2 lg:order-2">
              <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-6 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{featuredArticle.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{featuredArticle.readTime}</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-normal text-gray-900 mb-6">{featuredArticle.title}</h3>
              <p className="text-base sm:text-lg text-gray-600 mb-8">{featuredArticle.excerpt}</p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">{featuredArticle.author}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{featuredArticle.role}</p>
                  </div>
                </div>
                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  className="text-purple-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Read Full Article <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-4">Recent Articles</h2>
            <p className="text-lg sm:text-xl text-gray-600">Explore our latest posts and insights</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {recentArticles.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Badge className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-2 text-sm sm:text-base">
                      {article.category}
                    </Badge>
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-normal text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow text-sm sm:text-base">{article.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex-shrink-0" />
                        <p className="font-medium text-gray-900 text-sm sm:text-base">{article.author}</p>
                      </div>
                      <Link
                        href={`/blog/${article.slug}`}
                        className="text-purple-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all text-sm sm:text-base"
                      >
                        Read More <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}