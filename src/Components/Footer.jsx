import React from 'react';
import { Code, Heart } from 'lucide-react';
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 justify-between">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-blue-500 dark:text-blue-400" />
              <span className="text-xl font-bold">Ayush Gawali</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500">
              Full-stack MERN developer passionate about creating modern web applications that solve real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 justify-self-center">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    // onClick={() => {
                    //   const element = document.getElementById(item.toLowerCase());
                    //   if (element) {
                    //     element.scrollIntoView({ behavior: 'smooth' });
                    //   }
                    // }}
                    className="text-gray-400 dark:text-gray-500 hover:text-blue-500 hover:underline dark:hover:text-blue-500 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 justify-self-center">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li>Web Development</li>
              <li>Full Stack Web Development</li>
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Rest API</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              © {new Date().getFullYear()} Ayush Gawali. All rights reserved.
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-sm flex items-center justify-center space-x-1 mt-4 md:mt-0">
              {/* Created using modern tech */}
              <Code className="w-4 h-4 mt-0.5" />
              {/* <span>Built with React & Tailwind CSS</span> */}
              <span className='flex items-center justify-center gap-1.5'>
                <span>Built with</span>
                <span className='text-blue-400'>
                  <FaReact />
                </span>
                &
                <span className='text-blue-400'>
                  <RiTailwindCssFill />
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;