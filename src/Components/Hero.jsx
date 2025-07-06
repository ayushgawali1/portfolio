import React from 'react';
import { Github, Linkedin, Mail, Download, Eye, Code, Database, Server } from 'lucide-react';

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-gray-950 dark:via-blue-900/40 dark:to-purple-800/80 transition-colors duration-300 relative overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          {/* Main Title - Single Line */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
              Ayush Gawali
            </span>
          </h1>

          {/* Enhanced Subtitle with Gradient Text */}
          <p className="text-xl sm:text-2xl mb-4 max-w-4xl mx-auto leading-relaxed font-medium">
            <span className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
              Full-Stack
            </span>{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent font-bold">
              MERN
            </span>{' '}
            <span className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
              Developer
            </span>
          </p>

          {/* Description with Highlighted Technologies */}
          <div className="text-lg mb-10 max-w-3xl mx-auto mt-8">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Building scalable web applications with{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  React
                </span>
              </span>
              ,{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Node.js
                </span>
              </span>
              ,{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  MongoDB
                </span>
              </span>
              {' '}and modern technologies
            </p>
            <p className='text-gray-600 dark:text-gray-400 mt-2'>Passionate about creating scalable solutions and exceptional user experiences.</p>
            <p className='text-gray-600 dark:text-gray-400 mt-2'> I thrive on learning new tools, solving real-world problems, and taking on challenges.</p>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex justify-center items-center gap-8 mb-10">
            <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/50 px-4 py-2 rounded-full border border-gray-200 dark:border-slate-700 backdrop-blur-sm">
              <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-slate-300 text-sm font-medium">Frontend</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/50 px-4 py-2 rounded-full border border-gray-200 dark:border-slate-700 backdrop-blur-sm">
              <Server className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-gray-700 dark:text-slate-300 text-sm font-medium">Backend</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/50 px-4 py-2 rounded-full border border-gray-200 dark:border-slate-700 backdrop-blur-sm">
              <Database className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              <span className="text-gray-700 dark:text-slate-300 text-sm font-medium">Database</span>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href='#projects' className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-8 py-4 rounded-2xl hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 flex items-center space-x-2 bg-[length:200%_200%] animate-gradient">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Eye className="h-5 w-5 relative z-10" />
              <span className="relative z-10">View My Work</span>
            </a>
            <button className="group relative overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-2xl hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border border-gray-200/50 dark:border-gray-700/50 flex items-center space-x-2">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Download className="h-5 w-5 relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="group relative overflow-hidden p-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <Github className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 relative z-10" />
            </a>
            <a
              href="#"
              className="group relative overflow-hidden p-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <Linkedin className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 relative z-10" />
            </a>
            <a
              href="#"
              className="group relative overflow-hidden p-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <Mail className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 relative z-10" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero