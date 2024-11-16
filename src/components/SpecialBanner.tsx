import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const SpecialBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary-600/10 via-primary-600/5 to-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-3 flex items-center justify-center sm:justify-between">
          <div className="flex items-center gap-2 text-primary-600">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-medium">
              New: AI-Powered Content Creation Services Available!
            </span>
          </div>
          <button className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary-700 hover:text-primary-800 transition-colors">
            Learn More
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SpecialBanner; 