import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(270 50% 30%) 0%, hsl(270 60% 50%) 50%, hsl(270 90% 72%) 100%)" }}
    >
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Cuide da sua mente, transforme sua vida
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto"
        >
          Informação acessível e acolhedora sobre saúde mental para quem busca equilíbrio e bem-estar.
        </motion.p>

        <motion.a
          href="#temas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-colors text-sm"
        >
          Explorar Temas <ArrowDown size={16} />
        </motion.a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
