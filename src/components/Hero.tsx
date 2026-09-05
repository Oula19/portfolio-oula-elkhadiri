
import { Github, Linkedin, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen hero-gradient flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-white animate-slide-in-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Oula
            <br />
            <span className="text-primary-light">Elkhadiri</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100">
            Développeuse Full Stack
          </p>
          <p className="text-lg mb-8 text-blue-100/90 leading-relaxed">
            Passionnée par la création d'applications web modernes et performantes.
            Spécialisée en React, Laravel et solutions innovantes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
  href="https://drive.google.com/file/d/12dnCVV3QnOs0U5CCF_eQSxCaF1JqAk0f/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
>
  <Download size={20} />
  Télécharger CV
</a>

            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
            >
              Me contacter
            </button>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/Oula19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-light transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/oula-elkhadiri-792b0b283/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-light transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>

        <div className="flex justify-center animate-fade-in">
          <div className="relative">
            <div className="w-80 h-80 bg-white/20 rounded-full flex items-center justify-center glass-effect animate-float">
              <div className="w-64 h-64 bg-white/30 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden">
  <img
    src="/src/assets/profile.jpg"
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
