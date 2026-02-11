import { motion } from "framer-motion";
import { Phone, ExternalLink } from "lucide-react";

const UrgencySection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center bg-gradient-to-br from-[hsl(270,60%,40%)] to-[hsl(270,50%,50%)] rounded-3xl p-10 md:p-14 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(270,60%,60%,0.3),_transparent_50%)]" />
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/15 mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Precisa de ajuda agora?
            </h2>
            <p className="text-white/85 mb-8 max-w-lg mx-auto leading-relaxed">
              Se você ou alguém que conhece está em crise, ligue para o CVV. O serviço é gratuito,
              sigiloso e funciona 24 horas.
            </p>
            <a
              href="tel:188"
              className="inline-flex items-center gap-3 bg-white text-[hsl(270,60%,35%)] font-bold px-8 py-4 rounded-full text-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Ligar 188
            </a>
            <a
              href="https://www.cvv.org.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 text-white/70 text-sm mt-4 hover:text-white/90 transition-colors"
            >
              cvv.org.br <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UrgencySection;
