import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { TechButton } from "@/components/ui/tech-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  MessageCircle 
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar o mailto com os dados do formulário
    const subject = `Contato LC Tech - ${formData.name}`;
    const body = `Nome: ${formData.name}%0D%0AE-mail: ${formData.email}%0D%0ATelefone: ${formData.phone}%0D%0A%0D%0AMensagem:%0D%0A${formData.message}`;
    const mailtoUrl = `mailto:luisotaviocintra@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Abrir cliente de e-mail
    window.location.href = mailtoUrl;
    
    // Mostrar toast de sucesso
    toast({
      title: "Mensagem enviada!",
      description: "Seu cliente de e-mail foi aberto. Em breve entraremos em contato.",
    });
    
    // Limpar formulário
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-mail",
      content: "luisotaviocintra@gmail.com",
      action: () => window.location.href = "mailto:luisotaviocintra@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      content: "(16) 99267-7961",
      action: () => window.location.href = "tel:+5516992677961"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      content: "(16) 99267-7961",
      action: () => window.open("https://wa.me/5516992677961", "_blank")
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      content: "Ribeirão Preto, SP - Brasil",
      action: null
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-1 bg-gradient-to-br from-tech-dark via-background to-tech-gray/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Entre em <span className="text-tech-cyan">Contato</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Pronto para transformar sua ideia em realidade? 
                Vamos conversar sobre como podemos ajudar você!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Envie sua <span className="text-tech-neon">Mensagem</span>
                  </h2>
                  <p className="text-gray-400">
                    Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                  </p>
                </div>

                <Card className="tech-card border-tech-cyan/20">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-white">Nome *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="bg-tech-gray border-tech-cyan/30 text-white placeholder:text-gray-500 focus:border-tech-cyan"
                            placeholder="Seu nome completo"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-white">E-mail *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="bg-tech-gray border-tech-cyan/30 text-white placeholder:text-gray-500 focus:border-tech-cyan"
                            placeholder="seu@email.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white">Telefone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="bg-tech-gray border-tech-cyan/30 text-white placeholder:text-gray-500 focus:border-tech-cyan"
                          placeholder="(11) 99999-9999"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-white">Mensagem *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="bg-tech-gray border-tech-cyan/30 text-white placeholder:text-gray-500 focus:border-tech-cyan resize-none"
                          placeholder="Descreva seu projeto ou necessidade..."
                        />
                      </div>

                      <TechButton 
                        type="submit" 
                        variant="techNeon" 
                        size="lg" 
                        className="w-full group"
                      >
                        <Send className="w-4 h-4" />
                        Enviar Mensagem
                      </TechButton>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Informações de <span className="text-tech-cyan">Contato</span>
                  </h2>
                  <p className="text-gray-400">
                    Entre em contato através dos canais abaixo ou visite nosso escritório.
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <Card 
                      key={index} 
                      className={`tech-card border-tech-cyan/20 ${info.action ? 'cursor-pointer hover:border-tech-cyan/40' : ''} transition-all duration-300`}
                      onClick={info.action || undefined}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-lg bg-tech-cyan/10 text-tech-cyan">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                            <p className="text-gray-400">{info.content}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Business Hours */}
                <Card className="tech-card border-tech-neon/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-tech-neon/10 text-tech-neon">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white mb-3">Horário de Atendimento</h3>
                        <div className="space-y-2 text-gray-400">
                          <div className="flex justify-between">
                            <span>Segunda - Sexta</span>
                            <span>08:00 - 18:00</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sábado</span>
                            <span>09:00 - 14:00</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Domingo</span>
                            <span>Fechado</span>
                          </div>
                          <div className="pt-2 border-t border-tech-neon/20">
                            <div className="flex justify-between text-tech-neon font-semibold">
                              <span>Suporte Emergencial</span>
                              <span>24/7</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-tech-gray/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-tech-blue/10 to-tech-cyan/10 rounded-2xl p-8 border border-tech-cyan/20">
              <MessageSquare className="w-16 h-16 text-tech-cyan mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Precisa de Atendimento Imediato?
              </h3>
              <p className="text-gray-400 mb-6">
                Para emergências técnicas ou dúvidas urgentes, entre em contato diretamente via WhatsApp.
              </p>
              <TechButton 
                variant="techNeon" 
                size="lg"
                onClick={() => window.open("https://wa.me/5516992677961", "_blank")}
                className="group"
              >
                <MessageCircle className="w-5 h-5" />
                Chamar no WhatsApp
              </TechButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;