import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

// Define categories
const categories = ['All', 'AI Development', 'Graphic Design', 'Animation'];

// Define project interface
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  tools?: string[];
  size?: 'normal' | 'large';
}

// Projects data
const projects: Project[] = [
  {
    id: 1,
    title: 'AI Content Platform',
    description: 'Automated content generation system with advanced AI integration',
    category: 'AI Development',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    link: '#',
    tools: ['AI', 'React', 'Node.js'],
    size: 'large'
  },
  {
    id: 2,
    title: 'Brand Identity Design',
    description: 'Complete visual identity system for a tech startup',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=800',
    link: '#',
    tools: ['Figma', 'Illustrator']
  },
  {
    id: 3,
    title: 'Motion Graphics Series',
    description: 'Educational animation series for social media',
    category: 'Animation',
    image: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?auto=format&fit=crop&q=80&w=800',
    link: '#',
    tools: ['After Effects', 'Premier Pro']
  }
];

const FeaturedWork: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-36 w-72 h-72 bg-primary-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-600 mb-8"
          >
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Featured Projects</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900"
          >
            Our Latest Work
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Showcasing impactful projects across design, AI, and social media
          </motion.p>

          {/* Category Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 flex flex-wrap justify-center gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${
                  project.size === 'large' ? 'md:col-span-2' : ''
                }`}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Overlay */}
                  <motion.div 
                    initial={false}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0,
                      y: hoveredProject === project.id ? 0 : 20 
                    }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end text-white"
                  >
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-primary-200">
                        {project.category}
                      </p>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-sm text-gray-200">
                        {project.description}
                      </p>
                      
                      {/* Tools */}
                      {project.tools && (
                        <div className="flex gap-2 mt-4">
                          {project.tools.map((tool) => (
                            <span 
                              key={tool}
                              className="px-2 py-1 rounded-full bg-white/10 text-xs"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <a 
                        href={project.link}
                        className="mt-4 inline-flex items-center text-sm font-medium text-white hover:text-primary-200 transition-colors"
                      >
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <button className="btn-primary group">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWork; 
