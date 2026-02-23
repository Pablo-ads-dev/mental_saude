import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-primary fill-primary/30" />
          <span className="font-display font-bold text-foreground">MenteSã</span>
        </div>
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-4">
          Conteúdo informativo baseado em evidências científicas. 
          Esta plataforma não substitui atendimentos de emergência, não realiza diagnóstico e não prescreve tratamento.
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} MenteSã. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
