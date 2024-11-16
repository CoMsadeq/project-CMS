 
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Instagram, 
  Mail, 
  Calendar,
  Award,
  Code,
  Palette,
  Video,
  BookOpen,
  ArrowRight
} from 'lucide-react';

const skills = [
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Web Development',
    description: 'Full-stack development with modern technologies'
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: 'Graphic Design',
    description: 'Creative visual solutions for brands'
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: 'Motion Graphics',
    description: 'Engaging animations and video content'
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: 'Religious Content',
    description: 'Islamic and Quranic educational materials'
  }
];

const milestones = [
  {
    year: '2019',
    title: 'Founded CMSadeq Vision',
    description: 'Started the journey of digital innovation'
  },
  {
    year: '2020',
    title: 'Launched AI Services',
    description: 'Integrated cutting-edge AI solutions'
  },
  {
    year: '2021',
    title: 'Global Expansion',
    description: 'Extended services to international clients'
  },
  {
    year: '2022',
    title: 'Innovation Award',
    description: 'Recognized for creative excellence'
  }
];

const AboutMe = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
                alt="M. Sadeq Shahnavazi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -right-6 top-1/4 bg-white p-4 rounded-xl shadow-lg">
              <Award className="h-8 w-8 text-primary-600" />
              <p className="mt-2 font-bold">Visionary</p>
              <p className="text-sm text-gray-600">Founder</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              M. Sadeq Shahnavazi
            </h1>
            <p className="text-xl text-gray-600">
              Founder & Visionary at CMSadeq Vision
            </p>
            <p className="text-gray-600 leading-relaxed">
              A visionary entrepreneur with expertise in digital content creation, 
              graphic design, motion graphics, and web development. Driven by a passion 
              for innovation, I aim to bridge the gap between creativity and technology.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Linkedin className="h-5 w-5" />, href: '#' },
                { icon: <Instagram className="h-5 w-5" />, href: '#' },
                { icon: <Mail className="h-5 w-5" />, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          >
            Expertise & Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          >
            Journey & Milestones
          </motion.h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-24 pt-1">
                  <div className="flex items-center gap-2 text-primary-600">
                    <Calendar className="h-5 w-5" />
                    <span className="font-semibold">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-grow p-6 bg-white rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Have a project in mind or want to explore collaboration opportunities? 
            I'd love to hear from you.
          </p>
          <button className="btn-primary group">
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe; 