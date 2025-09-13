import { Link } from "react-router-dom";
import { Cpu, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tech-dark border-t border-tech-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-tech-blue to-tech-cyan">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">LC Tech</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Soluções digitais completas e assistência técnica especializada. 
              Tecnologia que move você para o futuro.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-lg bg-tech-gray text-tech-cyan hover:bg-tech-cyan/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/lctecnologia_rp/" target="_blank" className="p-2 rounded-lg bg-tech-gray text-tech-cyan hover:bg-tech-cyan/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/luis-ot%C3%A1vio-cintra-0a048512a/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-tech-gray text-tech-cyan hover:bg-tech-cyan/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/luisotaviocintra" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-tech-gray text-tech-cyan hover:bg-tech-cyan/20 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-tech-cyan transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-tech-cyan transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-tech-cyan transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-tech-cyan transition-colors">
                  Serviços
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3 text-tech-cyan" />
                luisotaviocintra@gmail.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3 text-tech-cyan" />
                (16) 99267-7961
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin className="w-4 h-4 mr-3 text-tech-cyan mt-0.5" />
                Ribeirão Preto, SP - Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-tech-cyan/20 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 LC Tech. Todos os direitos reservados. 
            <span className="text-tech-cyan"> Tecnologia que move você.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;