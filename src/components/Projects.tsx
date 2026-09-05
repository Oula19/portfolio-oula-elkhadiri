
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Zina Naturals",
      description: "Boutique e-commerce de cosmétiques naturels développée avec HTML, CSS, JS et PHP. Interface moderne et responsive avec système de panier et gestion des commandes.",
      image: "/zina.png",
      technologies: ["HTML", "CSS", "React" ,"Talwind-CSS"],
      liveUrl: "https://zinanaturals.netlify.app/"
    },
    {
      title: "Gestion de Pharmacie",
      description: "Application complète de gestion de pharmacie avec React et Tailwind CSS. Gestion du stock, des ordonnances et interface administrateur intuitive.",
      image: "/pharmacie.png",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Laravel"],
      liveUrl: "https://gestionpharmacie.netlify.app/"
    },
    {
title: "MedConvoy Compass",
description: "Application web dédiée à la gestion et à la planification des convois médicaux, développée lors de mon stage de fin d’études chez Synertic. Gestion des utilisateurs, patients, véhicules, équipes et missions avec une interface moderne et sécurisée.",
image: "/convoi.png",
technologies: ["React", "Spring Boot", "MySQL", "JWT", "Docker"],
liveUrl: null

    },
    {
      title: "Location de Voitures",
      description: "Application de réservation de véhicules avec dashboard administrateur. Système de réservation en temps réel et gestion complète du parc automobile.",
      image: "/location.png",
      technologies: ["React", "Talwind-CSS","Laravel", "MySQL", "Html" ],
      liveUrl: "https://location-des-voiture.netlify.app/"
    },
    {
      title: "Gestion de Coopérative",
      description: "Application complète React + Laravel pour gérer les membres, finances et événements d'une coopérative. Interface riche avec tableaux de bord détaillés.",
      image: "/cooperative.png",
      technologies: ["React", "Laravel", "MySQL", "Chart.js", "Talwind-CSS"],
      liveUrl: null
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Mes Projets</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations, des e-commerces aux applications métiers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-royal transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      Voir le site
                    </a>
                  )}
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
