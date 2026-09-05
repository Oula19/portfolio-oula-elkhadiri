import { Heart, Code, Film, BookOpen, Palette } from "lucide-react";

const Interests = () => {
  const interests = [
    {
      icon: Code,
      title: "Développement web",
      description: "Passionnée par la création de sites et applications web modernes"
    },
    {
      icon: Film,
      title: "Films, séries, storytelling",
      description: "Intéressée par la narration et l'analyse de contenus audiovisuels"
    },
    {
      icon: BookOpen,
      title: "Lecture, créativité",
      description: "Lecture régulière pour nourrir ma créativité et ma curiosité"
    },
    {
      icon: Palette,
      title: "Design",
      description: "Intéressée par le design d'interface et l'expérience utilisateur"
    }
  ];

  return (
    <section id="interests" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Centres d'Intérêt</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mes passions en dehors du développement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {interests.map((interest, index) => (
            <div 
              key={interest.title}
              className="bg-accent rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <interest.icon className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{interest.title}</h3>
              <p className="text-gray-600 leading-relaxed">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
