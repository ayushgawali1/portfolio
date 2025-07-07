import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { featuredProjects, otherProjects } from '../data/projectData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto hidden">
            {/* A selection of my recent work and side projects */}
          </p>
        </div>

        {/* Featured Projects */}
        <FeaturedProjects />

        {/* Other Projects */}
        <OtherProjects />
      </div>

      {/* View More Project Button */}
      <MoreProjectsButton />


    </section>
  );
};

export default Projects;



const OtherProjects = () => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Other Projects</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={project.liveUrl}
                className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 text-sm"
              >
                <ExternalLink className="h-3 w-3" />
                <span>Live</span>
              </a>
              <a
                href={project.githubUrl}
                className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition-colors duration-200 text-sm"
              >
                <Github className="h-3 w-3" />
                <span>Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const FeaturedProjects = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 mb-16">
      {featuredProjects.map((project, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
        >
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={project.liveUrl}
                className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
              <a
                href={project.githubUrl}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition-colors duration-200"
              >
                <Github className="h-4 w-4" />
                <span>Code</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const MoreProjectsButton = () => {
  return (
    <div className="text-center mt-12">
      <a
        href="https://github.com/ayushgawali1?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
      >
        <Github className="w-5 h-5" />
        View All Projects on GitHub
      </a>
    </div>
  )
}