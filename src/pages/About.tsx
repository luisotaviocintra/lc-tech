import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { TechButton } from "@/components/ui/tech-button";
import { Target, Users, Lightbulb, Award, ArrowRight } from "lucide-react";
import teamWorkImage from "@/assets/team-work.jpg";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Missão",
      description: "Oferecer soluções tecnológicas inovadoras e suporte técnico de excelência, conectando pessoas e empresas ao futuro digital."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Visão",
      description: "Ser referência em tecnologia e inovação, transformando desafios em oportunidades através da tecnologia."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Valores",
      description: "Compromisso, inovação, qualidade e transparência em cada projeto. Nosso foco é sempre o sucesso do cliente."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-tech-dark via-background to-tech-gray/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Sobre a <span className="text-tech-cyan">LC Tech</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Conheça nossa história, nossa visão e o compromisso que nos move 
                a entregar sempre o melhor em tecnologia e inovação.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Nossa <span className="text-tech-neon">História</span>
                </h2>
                <div className="space-y-4 text-gray-400 text-lg">
                  <p>
                    A LC Tech nasceu da paixão pela tecnologia e do desejo de democratizar 
                    o acesso a soluções digitais de qualidade. Fundada com o propósito de 
                    conectar pessoas e empresas ao futuro digital.
                  </p>
                  <p>
                    Desde o início, nossa missão tem sido clara: oferecer soluções 
                    tecnológicas completas, desde o desenvolvimento de sistemas 
                    personalizados até a assistência técnica especializada.
                  </p>
                  <p>
                    Hoje, somos uma empresa consolidada que combina expertise técnica 
                    com atendimento humanizado, sempre buscando superar as expectativas 
                    dos nossos clientes.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={teamWorkImage} 
                  alt="Equipe LC Tech trabalhando em projetos tecnológicos"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-tech-blue/20 to-tech-cyan/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-tech-gray/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Nossos <span className="text-tech-cyan">Princípios</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Os valores que guiam nossa empresa e definem a qualidade dos nossos serviços
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="tech-card border-tech-cyan/20 text-center">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 rounded-full bg-gradient-to-br from-tech-cyan to-tech-blue">
                        <div className="text-white">{value.icon}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-tech-blue/10 to-tech-cyan/10 rounded-2xl p-8 md:p-12 border border-tech-cyan/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-tech-neon to-tech-cyan mr-4">
                      <Award className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Nosso Compromisso
                    </h3>
                  </div>
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    Estamos comprometidos com a inovação constante e o suporte técnico 
                    de qualidade. Cada projeto é tratado com dedicação exclusiva, 
                    garantindo resultados que superam expectativas.
                  </p>
                  <TechButton variant="techNeon" size="lg" className="group">
                    Trabalhe Conosco
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </TechButton>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-tech-cyan mb-2">2+</div>
                    <div className="text-gray-400">Anos de Experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-tech-neon mb-2">110+</div>
                    <div className="text-gray-400">Projetos Concluídos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-tech-blue mb-2">24h</div>
                    <div className="text-gray-400">Suporte Técnico</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-tech-cyan mb-2">100%</div>
                    <div className="text-gray-400">Satisfação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;