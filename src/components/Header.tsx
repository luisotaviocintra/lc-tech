import { useState } from "react";
import { Link } from "react-router-dom";
import { TechButton } from "@/components/ui/tech-button";
import { Menu, X, Cpu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-tech-blue to-tech-cyan">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">LC Tech</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-tech-cyan transition-colors duration-300"
            >
              Início
            </Link>
            <Link 
              to="/sobre" 
              className="text-muted-foreground hover:text-tech-cyan transition-colors duration-300"
            >
              Sobre Nós
            </Link>
            <Link 
              to="/contato" 
              className="text-muted-foreground hover:text-tech-cyan transition-colors duration-300"
            >
              Contato
            </Link>
            <TechButton variant="techPrimary" size="sm">
              <a
                href="https://wa.me/5516992677961?text=Preciso%20de%20um%20orçamento"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
              </a>
            </TechButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-muted-foreground hover:text-tech-cyan transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-card border-b border-border shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 text-muted-foreground hover:text-tech-cyan transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/sobre" 
                className="block px-3 py-2 text-muted-foreground hover:text-tech-cyan transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link 
                to="/contato" 
                className="block px-3 py-2 text-muted-foreground hover:text-tech-cyan transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <div className="px-3 py-2">
                <TechButton variant="techPrimary" size="sm" className="w-full">
                  Solicitar Orçamento
                </TechButton>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;