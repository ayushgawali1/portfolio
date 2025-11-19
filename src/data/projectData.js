import chatImage from "../assets/chatImg.jpg";
import aiContentImage from '../assets/contentImg.jpg';
import aiContentImg from '../assets/content.png';

export const featuredProjects = [
    {
        title: 'Chat App',
        description: 'A real-time messaging application built with React, Node.js, and Socket.io, supporting both one-to-one and group chats. It offers instant message delivery with typing indicators, online status, and a responsive UI for smooth user interaction.',
        // image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
        image: chatImage,
        technologies: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "Tailwind CSS"],
        liveUrl: 'https://chat-website-1-59if.onrender.com',
        githubUrl: 'https://github.com/ayushgawali1/chat-website',
        featured: true,
    },
    {
        title: 'AI Content Creator Platform',
        description: 'An AI-powered platform that helps users generate, edit, and enhance text and images using OpenAI and image-processing APIs. It features a secure Node.js backend and a sleek Next.js frontend for a seamless and modern content creation experience.',
        image: aiContentImg,
        technologies: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Gemini API", "ImageKit", "Tailwind CSS"],
        liveUrl: 'https://ai-content-create-klc7-m80fb2nex-ayush-gawalis-projects.vercel.app/',
        githubUrl: 'https://github.com/ayushgawali1/ai-content-create',
        featured: true,
    },
];



export const otherProjects = [
    {
        title: 'Weather Dashboard',
        description: 'Beautiful weather dashboard with location-based forecasts and interactive charts.',
        image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
        liveUrl: '#',
        githubUrl: '#',
        featured: false,
    },
    {
        title: 'Social Media API',
        description: 'RESTful API for social media application with authentication, posts, and user management.',
        image: 'https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Bcrypt'],
        liveUrl: '#',
        githubUrl: '#',
        featured: false,
    },
    {
        title: 'Recipe Finder',
        description: 'Recipe discovery app with search functionality, favorites, and meal planning features.',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'Redux', 'Recipe API', 'Local Storage'],
        liveUrl: '#',
        githubUrl: '#',
        featured: false,
    },
    {
        title: 'Portfolio Website',
        description: 'Responsive portfolio website with modern design and smooth animations.',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
        liveUrl: '#',
        githubUrl: '#',
        featured: false,
    },
];