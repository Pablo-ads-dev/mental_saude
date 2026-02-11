import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(270,60%,35%)] via-[hsl(270,50%,45%)] to-[hsl(270,40%,55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(270,60%,50%,0.3),_transparent_60%)]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2 mb-8"
          >
            <Heart className="w-4 h-4 text-white" />
            <span className="text-white/90 text-sm font-medium">Cuidar da mente também é saúde</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            MenteSã
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-light leading-relaxed">
            Acolhimento, informação e orientação para quem busca cuidar da saúde mental.
          </p>
          <p className="text-base text-white/70 mb-10 max-w-xl mx-auto">
            Conteúdo baseado em evidências científicas. Não substitui atendimento profissional.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#temas"
              className="bg-white text-[hsl(270,60%,35%)] font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
            >
              Explorar Temas
            </a>
            <a
              href="#teste"
              className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Fazer Autoavaliação
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 50C480 40 600 50 720 60C840 70 960 80 1080 75C1200 70 1320 50 1380 40L1440 30V120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
