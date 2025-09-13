import { TechButton } from "@/components/ui/tech-button";
import { ArrowRight, Zap, Code2 } from "lucide-react";
import techHeroImage from "@/assets/tech-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={techHeroImage} 
          alt="LC Tech - Tecnologia Avançada" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-tech-dark/80 via-tech-dark/70 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-3 h-3 bg-tech-cyan rounded-full tech-glow"></div>
      </div>
      <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-2 h-2 bg-tech-neon rounded-full tech-neon-glow"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-4 h-4 bg-tech-blue rounded-full tech-glow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo Icon */}
          <div className="flex justify-center mb-8">
            <div className="p-4 rounded-full bg-gradient-to-br from-tech-blue via-tech-cyan to-tech-neon animate-pulse-slow">
              <Zap className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white via-tech-cyan to-tech-neon bg-clip-text text-transparent">
              LC Tech
            </span>
          </h1>

          {/* Slogan */}
          <p className="text-2xl md:text-3xl text-tech-cyan mb-8 font-light">
            Tecnologia que move você
          </p>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Soluções digitais completas e assistência técnica especializada para 
            impulsionar seu negócio e resolver seus desafios tecnológicos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TechButton variant="techNeon" size="xl" className="group">
              <a
                href="https://wa.me/5516992677961?text=Preciso%20de%20um%20orçamento"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
              </a>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </TechButton>
            <TechButton variant="techGhost" size="xl" className="group">
              <Code2 className="w-5 h-5" />
              Nossos Serviços
            </TechButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-tech-cyan/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-tech-cyan mb-2">110+</div>
              <div className="text-gray-400">Projetos Concluídos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tech-neon mb-2">24/7</div>
              <div className="text-gray-400">Suporte Técnico</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tech-blue mb-2">100%</div>
              <div className="text-gray-400">Satisfação do Cliente</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-tech-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-tech-cyan rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;