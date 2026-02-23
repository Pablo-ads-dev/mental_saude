import { motion } from "framer-motion";
import { Phone, AlertTriangle } from "lucide-react";

const UrgencySection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-purple-dark text-primary-foreground p-8 md:p-12 text-center"
        >
          <AlertTriangle className="w-10 h-10 mx-auto mb-4 opacity-80" />
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
            Preciso de ajuda agora
          </h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8 leading-relaxed">
            Se você ou alguém que conhece está em crise, entre em contato imediatamente com um serviço de apoio. 
            Você não precisa enfrentar isso sozinho(a).
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:188"
              className="inline-flex items-center gap-2 bg-primary-foreground text-purple-dark px-8 py-4 rounded-full font-display font-bold hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              Ligar para o CVV — 188
            </a>
            <a
              href="https://www.cvv.org.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-display font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              Chat online — cvv.org.br
            </a>
          </div>

          <p className="text-xs text-primary-foreground/50 mt-6">
            O CVV atende 24 horas, por telefone, chat e e-mail. A ligação é gratuita.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UrgencySection;
