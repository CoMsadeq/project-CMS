import { motion } from 'framer-motion';
import { 
  Award, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Coffee,
  Code,
  ArrowRight
} from 'lucide-react';

const achievements = [
  {
    icon: <Award className="h-6 w-6" />,
    count: '5+',
    label: 'Years Experience',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    count: '100+',
    label: 'Projects Completed',
    color: 'bg-green-50 text-green-600'
  },
  {
    icon: <Heart className="h-6 w-6" />,
    count: '50+',
    label: 'Happy Clients',
    color: 'bg-red-50 text-red-600'
  }
];

const AboutMe = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Achievement Cards */}
            <div className="absolute -right-6 top-1/4 bg-white p-4 rounded-xl shadow-lg">
              <Coffee className="h-8 w-8 text-primary-600" />
              <p className="mt-2 font-bold">1000+ Hours</p>
              <p className="text-sm text-gray-600">of Coding</p>
            </div>
            <div className="absolute -left-6 bottom-1/4 bg-white p-4 rounded-xl shadow-lg">
              <Code className="h-8 w-8 text-primary-600" />
              <p className="mt-2 font-bold">Full Stack</p>
              <p className="text-sm text-gray-600">Developer</p>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Crafting Digital Excellence
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Hi, I'm CM Sadeq, a passionate full-stack developer and creative technologist.
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              With over 5 years of experience in web development and digital content creation,
              I specialize in building beautiful, functional websites and creating engaging content
              that drives results. My expertise spans across modern web technologies, AI integration,
              and Islamic content creation.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`mx-auto w-12 h-12 rounded-full ${item.color} flex items-center justify-center mb-3`}>
                    {item.icon}
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{item.count}</p>
                  <p className="text-sm text-gray-600">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Education & Expertise</h3>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary-600" />
                <div>
                  <p className="font-medium">Computer Science & Engineering</p>
                  <p className="text-sm text-gray-600">Leading University, 2019</p>
                </div>
              </div>
            </div>

            <button className="btn-primary group">
              Download Resume
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 