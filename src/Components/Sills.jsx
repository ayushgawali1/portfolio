import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { 
          name: "React", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          color: "from-blue-400 to-blue-600"
        },
        { 
          name: "JavaScript", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "from-yellow-400 to-yellow-600"
        },
        { 
          name: "HTML", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          color: "from-orange-400 to-orange-600"
        },
        { 
          name: "CSS", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          color: "from-blue-400 to-blue-600"
        },
        { 
          name: "Tailwind CSS", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
          color: "from-cyan-400 to-cyan-600"
        }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { 
          name: "Node.js", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          color: "from-green-400 to-green-600"
        },
        { 
          name: "Express.js", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          color: "from-gray-400 to-gray-600"
        },
        { 
          name: "REST API", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
          color: "from-green-400 to-green-600"
        }
      ]
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: [
        { 
          name: "MongoDB", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          color: "from-green-400 to-green-600"
        }
      ]
    },
    {
      title: "Version Control Tools",
      icon: "🔧",
      skills: [
        { 
          name: "Git", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          color: "from-orange-400 to-orange-600"
        },
        { 
          name: "GitHub", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          color: "from-gray-400 to-gray-600"
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto hidden">
            My expertise in the MERN stack and modern web development tools
          </p>
        </div>

        {/* Skills by Category */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    {/* Skill Icon */}
                    <div className="relative mb-3">
                      <div className={`w-16 h-16 mx-auto rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 p-2`}>
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const target = e.target ;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `<span class="text-white font-bold text-lg">${skill.name.charAt(0)}</span>`;
                            }
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Skill Name */}
                    <div className="text-center">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;