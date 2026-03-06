import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Eye } from 'lucide-react';

const techStack = [
  { name: 'Python', color: 'from-blue-400 to-blue-600' },
  { name: '.NET', color: 'from-purple-400 to-purple-600' },
  { name: 'OpenCV', color: 'from-cyan-400 to-cyan-600' },
  { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600' },
  { name: 'Machine Learning', color: 'from-pink-400 to-pink-600' },
  { name: 'React', color: 'from-blue-400 to-cyan-500' },
  { name: 'C++', color: 'from-green-400 to-green-600' },
  { name: 'Blazor', color: 'from-purple-400 to-pink-500' },
];

const interests = [
  {
    icon: Code2,
    title: 'Software Development',
    description: 'Creating scalable and maintainable applications',
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Building intelligent systems that learn and adapt',
  },
  
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Enabling machines to see and understand the world',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">About Me</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl blur-2xl opacity-30" />
              <div className="relative aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                    JD
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Passionate Developer Building the Future
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a developer with a passion for creating innovative solutions using cutting-edge technologies.
              With expertise in AI, software development, and computer vision, I bring ideas to life through
              elegant code and intuitive design.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My journey in technology is driven by curiosity and a desire to solve complex problems.
              I believe in continuous learning and staying at the forefront of technological advancement.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                  className={`px-4 py-2 bg-gradient-to-r ${tech.color} text-white rounded-full text-sm font-semibold text-center shadow-lg hover:scale-105 transition-transform`}
                >
                  {tech.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <interest.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">{interest.title}</h4>
              <p className="text-gray-600 leading-relaxed">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
