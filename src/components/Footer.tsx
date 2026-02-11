import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Heart className="w-4 h-4 text-primary" />
          <span className="font-bold text-foreground">MenteSã</span>
        </div>
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-2">
          Conteúdo informativo baseado em evidências científicas. Não substitui diagnóstico ou
          atendimento profissional.
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} MenteSã. Feito com propósito.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
