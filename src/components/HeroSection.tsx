import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-light/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-glow/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary-foreground/70 font-body text-sm tracking-widest uppercase mb-4">
            Você não está sozinho(a)
          </p>
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6 max-w-4xl mx-auto">
            Cuidar da mente é um{" "}
            <span className="text-purple-glow">ato de coragem</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Informação acolhedora, baseada em evidências científicas, para ajudar você a entender, 
            cuidar e transformar sua saúde mental — no seu tempo, do seu jeito.
          </p>

          <motion.a
            href="#temas"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 text-primary-foreground px-8 py-4 rounded-full font-display font-medium text-lg hover:bg-primary-foreground/25 transition-colors"
          >
            Entender minha saúde mental
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-primary-foreground/50 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
