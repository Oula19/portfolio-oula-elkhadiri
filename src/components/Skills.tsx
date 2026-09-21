
const Skills = () => {
  const skillCategories = [
    {
      title: "Langages",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "PHP", level: 80 },
        { name: "Java", level: 75 }
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Spring Boot", level: 75 },
        { name: "Laravel", level: 85 },
        { name: "Express.js", level: 80 }
      ]
    },
    {
      title: "Bases de données",
      skills: [
        { name: "MySQL", level: 85 }
      ]
    },
    {
      title: "Outils",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "Postman", level: 80 }
      ]
    },
    {
      title: "Méthodologies",
      skills: [
        { name: "Agile", level: 85 },
        { name: "Scrum", level: 85 }
      ]
    },
    {
      title: "Autres",
      skills: [
        { name: "Développement Full Stack", level: 85 },
        { name: "WordPress", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Mes Compétences</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Une expertise technique diversifiée pour répondre à tous vos besoins de développement
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-4 sm:mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-primary-royal h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
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
