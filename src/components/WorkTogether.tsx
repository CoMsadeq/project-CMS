import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const WorkTogether = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-white/90 mb-8"
          >
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-medium">Let's create something amazing</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            Ready to Start Your Project?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-white/90 max-w-2xl mx-auto"
          >
            Let's collaborate to bring your vision to life with cutting-edge technology 
            and creative excellence
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="px-8 py-4 bg-white text-primary-600 rounded-full hover:shadow-lg transition-all duration-200 group">
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-200">
              View Services
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether; 