import { motion } from 'framer-motion';
import { Sparkles, Code, Palette, Video, Globe, BookOpen } from 'lucide-react';

const services = [
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: 'AI-Powered Content Creation',
    description: 'Leverage cutting-edge AI technology to create engaging content that resonates with your audience.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: 'Graphic Design',
    description: 'Create stunning visuals that capture attention and convey your message effectively.',
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: <Video className="h-8 w-8" />,
    title: 'Motion Graphics & Animation',
    description: 'Bring your ideas to life with dynamic motion graphics and captivating animations.',
    image: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Social Media Management',
    description: 'Engage your audience across all social platforms with strategic content and analytics.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: 'Religious Content',
    description: 'Create meaningful Quran and Islamic content that inspires and educates.',
    image: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Web Development',
    description: 'Build modern, responsive websites that drive results and enhance user experience.',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800'
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900"
          >
            Co.msadeq Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive solutions to help you create, grow, and succeed in the digital world
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-primary-600">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {service.description}
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