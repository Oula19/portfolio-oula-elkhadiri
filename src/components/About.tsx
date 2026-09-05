
const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold text-primary mb-6">À propos de moi</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Diplômée d'une Licence Professionnelle en Développement Informatique (Bac+3), spécialisée en développement web Full Stack. Compétente en conception d'applications web, développement d'API REST et gestion de bases de données. Sérieuse, autonome et motivée à évoluer dans le domaine informatique.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-accent rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-gray-600">Projets réalisés</div>
              </div>
              <div className="text-center p-4 bg-accent rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-gray-600">Années d'expérience</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-full max-w-md bg-gradient-to-br from-primary to-primary-royal rounded-2xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">Ma philosophie</h3>
                <p className="text-blue-100 leading-relaxed">
                  "Chaque ligne de code doit servir un objectif : améliorer l'expérience 
                  utilisateur, optimiser les performances ou simplifier la maintenance. 
                  C'est cette approche qui guide tous mes projets."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
