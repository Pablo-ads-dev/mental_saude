import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const UrgencySection = () => (
  <section id="urgencia" className="py-24 px-6" style={{ background: "linear-gradient(135deg, hsl(270 50% 30%), hsl(270 60% 50%))" }}>
    <div className="max-w-3xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Phone size={48} className="text-white/80 mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Precisa de ajuda agora?</h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Se você ou alguém que conhece está em crise, ligue para o CVV. O serviço é gratuito, sigiloso e funciona 24 horas.
        </p>
        <a
          href="tel:188"
          className="inline-flex items-center gap-3 bg-white text-primary font-bold px-10 py-5 rounded-full text-xl hover:bg-white/90 transition-colors"
        >
          <Phone size={24} /> Ligue 188
        </a>
        <p className="text-white/60 text-sm mt-6">Centro de Valorização da Vida • cvv.org.br</p>
      </motion.div>
    </div>
  </section>
);

export default UrgencySection;
