import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Brain, Camera, Code, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Robust Road Lane Detection',
    description: 'Computer vision based lane detection system designed for challenging conditions using geometric constraints and real-time optimization to maintain stable detection under glare, shadows and low visibility.',
    image: 'https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'OpenCV', 'Computer Vision', 'Machine Learning'],
    icon: Camera,
    gradient: 'from-blue-500 to-cyan-500',
    github : "https://github.com/rayan-nixon003/Robust_Road_Lane_Detection-"
  },
  {
    title: 'Smart Collaboration Platform',
    description: 'Full-stack collaboration platform with real-time chat, kanban boards and file sharing built using React, Node.js and PostgreSQL to enable efficient team collaboration.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    icon: Sparkles,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'ASP.NET Web Application',
    description: 'Developed a secure ASP.NET web application with role-based authentication, authorization and session management integrating third-party APIs and database backed user profiles.',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['ASP.NET', 'C#', '.NET', 'SQL'],
    icon: Code,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Predictive Churn Analysis',
    description: 'Built machine learning models to predict customer churn using Python, Pandas and Scikit-learn with dashboards for business stakeholders to monitor churn risk and take preventive action.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Machine Learning'],
    icon: Brain,
    gradient: 'from-yellow-500 to-orange-500',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">Portfolio</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Showcasing innovative solutions at the intersection of AI and software development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className={`absolute top-6 right-6 w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 text-sm font-medium rounded-full border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>

                    
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-full font-semibold border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button>
                </div>
              </div>

              <motion.div
                className={`absolute inset-0 border-2 border-transparent rounded-3xl pointer-events-none`}
                whileHover={{
                  borderImage: `linear-gradient(to right, #3b82f6, #a855f7) 1`,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
