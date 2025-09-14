import { Card, CardContent } from "@/components/ui/card";
import { TechButton } from "@/components/ui/tech-button";
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Settings, 
  Monitor, 
  HardDrive, 
  Shield, 
  Wrench,
  ArrowRight 
} from "lucide-react";

const ServicesSection = () => {
  const digitalServices = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Desenvolvimento Web",
      description: "Sites responsivos e modernos com tecnologias atuais"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Sistemas SaaS",
      description: "Soluções sob demanda para automatizar seu negócio"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Apps Personalizados", 
      description: "Aplicativos móveis e web customizados para suas necessidades"
    }
  ];

  const technicalServices = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Reparo de PCs/Notebooks",
      description: "Diagnóstico e conserto de hardware e software"
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Backup e Formatação",
      description: "Proteção de dados e reinstalação de sistemas"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Remoção de Vírus",
      description: "Limpeza completa e proteção contra malwares"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Upgrades de Hardware",
      description: "Atualizações para melhor performance"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Suporte Técnico",
      description: "Assistência geral em informática e redes"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-background to-tech-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos <span className="text-tech-cyan">Serviços</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Oferecemos soluções completas em duas frentes principais para atender todas suas necessidades tecnológicas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Assistência Técnica */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-lg bg-gradient-to-br from-tech-neon to-tech-cyan mr-4">
                <Settings className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Assistência Técnica</h3>
            </div>
            
            <div className="space-y-6">
              {technicalServices.map((service, index) => (
                <Card key={index} className="tech-card border-tech-neon/20 hover:border-tech-neon/40 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-tech-neon/10 text-tech-neon group-hover:bg-tech-neon/20 transition-colors">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                        <p className="text-gray-400 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Soluções Digitais */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-lg bg-gradient-to-br from-tech-blue to-tech-cyan mr-4">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Soluções Digitais</h3>
            </div>
            
            <div className="space-y-6">
              {digitalServices.map((service, index) => (
                <Card key={index} className="tech-card border-tech-cyan/20 hover:border-tech-cyan/40 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-tech-cyan/10 text-tech-cyan group-hover:bg-tech-cyan/20 transition-colors">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                        <p className="text-gray-400 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-tech-blue/10 to-tech-cyan/10 rounded-2xl p-8 border border-tech-cyan/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para transformar sua ideia em realidade?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer com tecnologia de ponta
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TechButton variant="techNeon" size="lg" className="group">
                <a
                  href="https://wa.me/5516996322368?text=Preciso%20de%20um%20orçamento"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fale Conosco
                </a>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </TechButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;