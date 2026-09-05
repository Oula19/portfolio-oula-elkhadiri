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
          <h2 className="text-4xl font-bold text-primary mb-4">Formation Académique</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mon parcours éducatif dans le domaine de l'informatique
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={edu.institution}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-center gap-3 mb-2 md:mb-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{edu.institution}</h3>
                    <p className="text-lg text-gray-700 font-semibold">{edu.degree}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={18} />
                  <span className="font-medium">{edu.period}</span>
                </div>
              </div>

              {edu.description && (
                <p className="text-gray-700 leading-relaxed">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
