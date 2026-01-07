'use client';

import { use } from 'react';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const articles: Record<string, any> = {
  "future-of-ecommerce-ai": {
    title: "The Future of Ecommerce: How AI is Transforming Online Shopping",
    date: "2024-12-15",
    readTime: "8 min read",
    author: "Sarah Johnson",
    role: "Chief Technology Officer",
    category: "Technology",
    tags: ["AI", "Ecommerce", "Innovation"],
    imageUrl: "https://www.shutterstock.com/image-photo/full-length-happy-excited-asian-260nw-2612019205.jpg",
    intro: "Discover how artificial intelligence is revolutionizing the ecommerce landscape and what it means for businesses in 2025.",
    content: [
      "Artificial Intelligence is no longer a futuristic concept—it's reshaping the ecommerce industry today. From personalized product recommendations to intelligent chatbots, AI is enhancing every aspect of the online shopping experience.",
      "In this comprehensive guide, we'll explore the latest AI trends in ecommerce and how businesses can leverage them for growth.",
    ],
    takeaways: [
      "Understanding the latest technology trends is crucial for business success",
      "Implementation strategies should be tailored to your specific needs",
      "Continuous learning and adaptation are key to staying competitive",
    ],
  },
  "healthcare-trends-2025": {
    title: "Healthcare Technology Trends to Watch in 2025",
    date: "2024-12-05",
    readTime: "10 min read",
    author: "Jennifer Martinez",
    role: "Healthcare Solutions Director",
    category: "Healthcare",
    tags: ["Healthcare", "Technology", "Innovation"],
    imageUrl: "https://www.shutterstock.com/shutterstock/photos/212251981/display_1500/stock-photo-modern-hospital-style-building-212251981.jpg",
    intro: "From telemedicine to AI diagnostics, discover the technologies shaping the future of healthcare delivery.",
    content: [
      "Healthcare technology is evolving rapidly, driven by the need for better patient outcomes and operational efficiency. In 2025, we're seeing unprecedented innovation in areas like telemedicine, AI diagnostics, and patient engagement.",
      "This article explores the key trends that healthcare providers should watch and adopt.",
    ],
    takeaways: [
      "Understanding the latest technology trends is crucial for business success",
      "Implementation strategies should be tailored to your specific needs",
      "Continuous learning and adaptation are key to staying competitive",
    ],
  },
  "cloud-computing-enterprise": {
    title: "Why Cloud Computing is Essential for Modern Enterprises",
    date: "2024-11-28",
    readTime: "7 min read",
    author: "David Park",
    role: "Cloud Architecture Lead",
    category: "Cloud",
    tags: ["Cloud", "Enterprise", "Infrastructure"],
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    intro: "Understanding the benefits and best practices of cloud adoption for enterprise software solutions.",
    content: [
      "Cloud computing has become the backbone of modern enterprise operations. It offers scalability, cost-efficiency, and flexibility that traditional infrastructure simply can't match.",
      "Discover why cloud adoption is no longer optional for businesses that want to stay competitive.",
    ],
    takeaways: [
      "Understanding the latest technology trends is crucial for business success",
      "Implementation strategies should be tailored to your specific needs",
      "Continuous learning and adaptation are key to staying competitive",
    ],
  },
  "cybersecurity-best-practices": {
    title: "Cybersecurity Best Practices for Software Applications",
    date: "2024-11-20",
    readTime: "9 min read",
    author: "Alex Thompson",
    role: "Security Architect",
    category: "Security",
    tags: ["Security", "Best Practices", "Compliance"],
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    intro: "Essential security measures every business should implement to protect their data and customers.",
    content: [
      "In today's digital landscape, cybersecurity is paramount. Data breaches can cost businesses millions and damage reputation beyond repair.",
      "Learn the essential security practices that every software application should implement.",
    ],
    takeaways: [
      "Understanding the latest technology trends is crucial for business success",
      "Implementation strategies should be tailored to your specific needs",
      "Continuous learning and adaptation are key to staying competitive",
    ],
  },
  "api-integration-guide": {
    title: "The Complete Guide to API Integration for Business Applications",
    date: "2024-11-15",
    readTime: "11 min read",
    author: "Maria Rodriguez",
    role: "Integration Specialist",
    category: "Development",
    tags: ["API", "Integration", "Development"],
    imageUrl: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    intro: "Learn how to leverage APIs to connect your systems and create seamless workflows.",
    content: [
      "API integration is the key to creating connected, efficient business systems. Whether you're connecting payment processors, CRM systems, or third-party services, APIs make it possible.",
      "This comprehensive guide covers everything you need to know about API integration.",
    ],
    takeaways: [
      "Understanding the latest technology trends is crucial for business success",
      "Implementation strategies should be tailored to your specific needs",
      "Continuous learning and adaptation are key to staying competitive",
    ],
  },
  "digital-transformation-education": {
    title: "Digital Transformation in Education: Beyond the Classroom",
    date: "2024-12-10",
    readTime: "6 min read",
    author: "Dr. Michael Chen",
    role: "Education Technology Expert",
    category: "Education",
    tags: ["Education", "Digital Transformation", "EdTech"],
    imageUrl: "https://media.istockphoto.com/id/545634390/photo/typing-on-a-tablet.jpg?s=612x612&w=0&k=20&c=CPZVKbxkPDHsO8HqwZuFru9KmezQc5egPFv298h4kjA=",
    intro: "Explore how modern school management systems are revolutionizing education and creating better learning outcomes.",
    content: [
      "The education sector is undergoing a massive digital transformation. Modern school management systems are not just about digitizing paperwork—they're about creating connected learning ecosystems.",
      "Learn how schools are using technology to improve student outcomes and operational efficiency.",
    ],
    takeaways: [
      "Understanding the latest technology trends is crucial for business success",
      "Implementation strategies should be tailored to your specific needs",
      "Continuous learning and adaptation are key to staying competitive",
    ],
  },
};

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const article = articles[slug];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-purple-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-purple-600 hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="py-8 bg-purple-50 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/blog" className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium">
            <ArrowLeft className="w-5 h-5" /> Back to Blog
          </Link>
        </div>
      </section>

      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <Badge className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3">
              {article.category}
            </Badge>
            {article.tags.map((tag: string, i: number) => (
              <Badge key={i} variant="outline" className="px-4 py-2 border-gray-300">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8 max-w-5xl mx-auto">
            {article.title}
          </h1>

          <div className="flex items-center justify-center gap-6 text-gray-600 mb-12">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{article.readTime}</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full" />
              <div>
                <p className="font-semibold text-gray-900 text-lg">{article.author}</p>
                <p className="text-gray-600">{article.role}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="p-3 bg-white rounded-full shadow hover:shadow-md transition">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-3 bg-white rounded-full shadow hover:shadow-md transition">
                <Bookmark className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-purple-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src={article.imageUrl} alt={article.title} className="w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-50">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">{article.intro}</p>
          {article.content.map((para: string, i: number) => (
            <p key={i} className="text-gray-700 mb-8 leading-relaxed">{para}</p>
          ))}

          <div className="bg-purple-100 rounded-3xl p-12 my-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Key Takeaways</h3>
            <ol className="space-y-6">
              {article.takeaways.map((takeaway: string, i: number) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-lg text-gray-700">{takeaway}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}