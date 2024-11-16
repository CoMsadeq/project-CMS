import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AI Content Platform',
    description: 'Automated content generation system with advanced AI integration',
    category: 'AI Development',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  {
    title: 'Brand Identity Design',
    description: 'Complete visual identity system for a tech startup',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  {
    title: 'Motion Graphics Series',
    description: 'Educational animation series for social media',
    category: 'Animation',
    image: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?auto=format&fit=crop&q=80&w=800',
    link: '#'
  }
];

const FeaturedWork = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900"
          >
            Featured Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Explore some of my recent projects that made an impact
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{project.category}</p>
                  <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                  <p className="text-sm mt-2">{project.description}</p>
                  <a 
                    href={project.link}
                    className="mt-4 inline-flex items-center text-sm font-medium hover:underline"
                  >
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 text-center"
        >
          <button className="btn-secondary group">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWork; 