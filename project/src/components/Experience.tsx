import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Palette, Rocket } from 'lucide-react';

const processSteps = [
  {
    number: '01',
    title: 'Computer Vision Development',
    description: 'Developed intelligent vision-based systems using Python and OpenCV for object detection, image processing, and automation tasks.',
    icon: Search,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    title: 'Machine Learning Solutions',
    description: 'Built and experimented with machine learning models using Scikit-learn, Pandas, and NumPy for data-driven problem solving.',
    icon: Palette,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    number: '03',
    title: 'Full Stack Development',
    description: 'Developed modern web applications using .NET, ASP.NET, React, and JavaScript while focusing on clean architecture and scalable solutions.',
    icon: Rocket,
    gradient: 'from-green-500 to-emerald-500',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">My Process</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            My Technical Journey
          </h2>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            A systematic approach to delivering exceptional results
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 transform -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 h-full">
                  <div className="relative">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto lg:mx-0`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>

                    <div className={`absolute -top-4 -right-4 text-7xl font-bold bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent opacity-20`}>
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < processSteps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                  >
                    <div className="w-8 h-8 bg-white border-4 border-blue-500 rounded-full shadow-lg" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
