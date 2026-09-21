import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Supemir",
      degree: "Licence Professionnelle Développement Informatique",
      period: "2025-2026",
      description: "Spécialisation en développement web Full Stack"
    },
    {
      institution: "OFPPT",
      degree: "Technicienne Spécialisée en Développement Digital - Option Web Full Stack",
      period: "2023-2025",
      description: "Formation complète en développement web front-end et back-end"
    },
    {
      institution: "Lycée May Ziada",
      degree: "Baccalauréat option Sciences de la Vie et de la Terre",
      period: "2023",
      description: ""
    }
  ];

  return (
    <section id="education" className="section-padding bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Formation Académique</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Mon parcours éducatif dans le domaine de l'informatique
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={edu.institution}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div className="flex items-center gap-3 mb-2 sm:mb-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary">{edu.institution}</h3>
                    <p className="text-base sm:text-lg text-gray-700 font-semibold">{edu.degree}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
                  <Calendar className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                  <span className="font-medium">{edu.period}</span>
                </div>
              </div>

              {edu.description && (
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
