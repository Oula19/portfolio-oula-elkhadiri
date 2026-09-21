import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "SYNERTIC",
      role: "Stage de Fin d'Études (PFE)",
      period: "Juin – Juillet 2026",
      description: "Développement de MedConvoy Compass, application de gestion des convois médicaux.",
      technologies: ["React.js", "Spring Boot", "MySQL", "JWT", "Docker"],
      details: [
         "Conception et développement complet de l’application Frontend et Backend.",
        "Développement et intégration des API REST avec Spring Boot.",
        "Développement des interfaces utilisateur avec React.js.",
        "Mise en place de l’authentification et de la gestion des accès avec JWT.",
        "Conception et gestion de la base de données MySQL.",
        "Réalisation des tests et vérifications fonctionnelles de l’application.",
        "Conteneurisation et déploiement de l’application avec Docker."
      ]
    },
    {
      company: "H.S.S.I Maroc",
      role: "Stage Développement Web",
      period: "Janvier – Février 2025",
      description: "Développement d'une application web de gestion de pharmacie.",
      technologies: ["React.js", "Tailwind CSS", "Laravel", "MySQL"],
      details: [
       "Développement des interfaces web avec React.js et Tailwind CSS.",
       "Développement et consommation d’API REST avec Laravel.",
       "Participation à la gestion et à l’intégration de la base de données MySQL."
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Expérience Professionnelle</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Mon parcours professionnel dans le développement web
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={exp.company}
              className="bg-accent rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div className="flex items-center gap-3 mb-2 sm:mb-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary">{exp.company}</h3>
                    <p className="text-base sm:text-lg text-gray-700 font-semibold">{exp.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
                  <Calendar className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">{exp.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Technologies utilisées :</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Responsabilités :</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm sm:text-base">
                  {exp.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
