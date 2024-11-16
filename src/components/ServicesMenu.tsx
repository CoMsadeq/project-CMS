import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Palette, 
  Video, 
  Globe, 
  BookOpen, 
  Code,
  Search,
  MessageSquare
} from 'lucide-react';

const services = [
  {
    id: 'ai-content',
    icon: <Sparkles className="h-6 w-6" />,
    title: 'AI-Powered Content',
    description: 'Create engaging content using cutting-edge AI technology',
    category: 'AI',
    features: ['Content Generation', 'AI Copywriting', 'Smart Editing']
  },
  {
    id: 'graphic-design',
    icon: <Palette className="h-6 w-6" />,
    title: 'Graphic Design',
    description: 'Professional design services for all your visual needs',
    category: 'Design',
    features: ['Logo Design', 'Brand Identity', 'Marketing Materials']
  },
  {
    id: 'motion-graphics',
    icon: <Video className="h-6 w-6" />,
    title: 'Motion Graphics',
    description: 'Stunning animations and video content creation',
    category: 'Video',
    features: ['2D/3D Animation', 'Video Editing', 'Visual Effects']
  },
  {
    id: 'social-media',
    icon: <Globe className="h-6 w-6" />,
    title: 'Social Media',
    description: 'Strategic social media management and content creation',
    category: 'Marketing',
    features: ['Content Strategy', 'Community Management', 'Analytics']
  },
  {
    id: 'religious-content',
    icon: <BookOpen className="h-6 w-6" />,
    title: 'Religious Content',
    description: 'Thoughtful Islamic content and Quranic resources',
    category: 'Religious',
    features: ['Quran Videos', 'Islamic Graphics', 'Educational Content']
  },
  {
    id: 'web-development',
    icon: <Code className="h-6 w-6" />,
    title: 'Web Development',
    description: 'Modern web solutions for your digital presence',
    category: 'Development',
    features: ['Website Design', 'Web Apps', 'E-commerce']
  }
];

const categories = ['All', 'AI', 'Design', 'Video', 'Marketing', 'Religious', 'Development'];

const ServicesMenu: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [hoveredService, setHoveredService] = React.useState<string | null>(null);

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Search and Filter Section */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              className="relative group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary-50 text-primary-600">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features Preview on Hover */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: hoveredService === service.id ? 1 : 0,
                  height: hoveredService === service.id ? 'auto' : 0
                }}
                className="mt-4 pt-4 border-t border-gray-100"
              >
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <button className="mt-4 text-sm font-medium text-primary-600 hover:text-primary-700 group-hover:underline">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 py-8 px-4 rounded-2xl bg-gradient-to-r from-primary-50 to-primary-100">
          <h3 className="text-2xl font-bold text-gray-900">
            Need Help Choosing a Service?
          </h3>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Our team is here to help you find the perfect solution for your needs.
          </p>
          <button className="mt-6 btn-primary inline-flex items-center">
            Contact Us
            <MessageSquare className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesMenu; 