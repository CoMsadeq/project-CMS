import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, Palette, Video, Globe, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'AI-Powered Content',
    description: 'Leverage cutting-edge AI technology to create engaging content.'
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: 'Graphic Design',
    description: 'Create stunning visuals that capture attention and convey your message.'
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: 'Motion Graphics',
    description: 'Bring your ideas to life with dynamic motion graphics and animations.'
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Web Development',
    description: 'Build modern, responsive websites that drive results.'
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Social Media',
    description: 'Engage your audience across all social media platforms.'
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: 'Religious Content',
    description: 'Create meaningful religious content that resonates with your audience.'
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900"
          >
            Everything you need to succeed
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Our comprehensive suite of services helps you create, grow, and succeed in the digital world.
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="text-primary-600 mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;