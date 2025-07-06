import React from 'react';
import { User, Award, Clock, Coffee } from 'lucide-react';
import { Code, Layers, Zap, Heart } from 'lucide-react';

const About = () => {

  const features = [
    {
      icon: <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices and modern standards."
    },
    {
      icon: <Layers className="w-8 h-8 text-green-600 dark:text-green-400" />,
      title: "Full Stack",
      description: "Complete MERN stack development from frontend UI to backend APIs and databases."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and seamless user experience."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600 dark:text-red-400" />,
      title: "User-Focused",
      description: "Creating intuitive interfaces that users love to interact with every day."
    }
  ];


  const stats = [
    { icon: Clock, label: 'Years Experience', value: '3+' },
    { icon: Award, label: 'Projects Completed', value: '20+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: User, label: 'Happy Clients', value: '15+' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate MERN stack developer dedicated to building modern web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm Ayush Gawali, a dedicated MERN stack developer with a passion for creating elegant, efficient, and user-friendly web applications.
              My journey in web development started 3 years ago, and I've been constantly learning and growing ever since.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I specialize in building full-stack applications using MongoDB, Express.js, React, and Node.js.
              I love turning complex problems into simple, beautiful solutions that provide exceptional user experiences.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing my knowledge through technical blog posts and mentoring other developers.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Clean Code'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center mb-3">
                  {feature.icon}
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">{feature.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-slate-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;