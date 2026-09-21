
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("https://formspree.io/f/mrpgajny", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast({
        title: "Message envoyé !",
        description: "Je vous répondrai dans les plus brefs délais.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer le message. Veuillez réessayer.",
      });
    }
  } catch (error) {
    toast({
      title: "Erreur",
      description: "Une erreur est survenue. Veuillez réessayer.",
    });
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Contactez-moi</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Prête à discuter de votre prochain projet ? N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Informations de contact */}
          <div className="animate-slide-in-left">
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-6 sm:mb-8">Restons en contact</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="text-primary w-5 h-5 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Email</h4>
                  <p className="text-gray-600 text-sm sm:text-base">elkhadirioula@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="text-primary w-5 h-5 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Téléphone</h4>
                  <p className="text-gray-600 text-sm sm:text-base">06 17 29 79 60</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="text-primary w-5 h-5 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Localisation</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Casablanca , Maroc</p>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-br from-primary to-primary-royal rounded-xl text-white">
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Disponible pour de nouveaux projets</h4>
              <p className="text-blue-100 text-sm sm:text-base">
                Je suis actuellement disponible pour des missions de développement 
                web full-stack. N'hésitez pas à me faire part de vos besoins !
              </p>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="animate-fade-in-up">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300 text-sm sm:text-base"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300 text-sm sm:text-base"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300 text-sm sm:text-base"
                    placeholder="Sujet de votre message"
                />
              </div>

              <div className="mb-4 sm:mb-6">
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300 resize-none text-sm sm:text-base"
                    placeholder="Décrivez votre projet ou votre demande..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-primary-royal transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Send size={20} />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
