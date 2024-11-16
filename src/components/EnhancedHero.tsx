import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Palette, Video, Code } from 'lucide-react';

const taglines = [
  'AI-Powered Solutions',
  'Stunning Graphics',
  'Engaging Content',
  'Creative Development'
];

const skills = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'AI Content',
    description: 'Cutting-edge AI solutions'
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: 'Design',
    description: 'Beautiful visual experiences'
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: 'Motion',
    description: 'Dynamic animations'
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Development',
    description: 'Modern web solutions'
  }
];

const EnhancedHero = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [isHovered, setIsHovered] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-32 lg:pt-36 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent" />
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              Hi, I'm M. Sadeq Shahnavazi
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTagline}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="block mt-2 text-primary-600"
                >
                  {taglines[currentTagline]}
                </motion.span>
              </AnimatePresence>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-xl text-gray-600 max-w-2xl"
            >
              Crafting digital experiences that inspire and innovate. 
              Let's bring your vision to life with cutting-edge technology and creative excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.title}
                  onHoverStart={() => setIsHovered(skill.title)}
                  onHoverEnd={() => setIsHovered(null)}
                  className="relative"
                >
                  <button className="px-4 py-2 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2">
                    {skill.icon}
                    <span>{skill.title}</span>
                  </button>
                  {isHovered === skill.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full mt-2 p-2 bg-white rounded-lg shadow-lg text-sm text-gray-600 whitespace-nowrap"
                    >
                      {skill.description}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 flex gap-4"
            >
              <button className="btn-primary group">
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
                alt="M. Sadeq Shahnavazi"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">5+ Years</p>
                  <p className="text-sm text-gray-600">of Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero; 