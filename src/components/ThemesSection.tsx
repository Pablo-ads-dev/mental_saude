import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Heart, Sun, Moon, Shield, Sparkles } from "lucide-react";

const themes = [
  {
    icon: Brain,
    title: "Ansiedade",
    short: "Entenda os sinais e aprenda a lidar.",
    detail: "A ansiedade é uma resposta natural do corpo, mas quando se torna crônica pode afetar a qualidade de vida. Identificar gatilhos, praticar respiração consciente e buscar ajuda profissional são passos fundamentais.",
    color: "270 60% 50%",
  },
  {
    icon: Heart,
    title: "Depressão",
    short: "Mais do que tristeza: reconheça e busque ajuda.",
    detail: "A depressão vai além de sentir-se triste. Envolve perda de interesse, alterações no sono e apetite. O tratamento combina terapia, apoio social e, quando indicado, medicação.",
    color: "330 60% 50%",
  },
  {
    icon: Sun,
    title: "Autocuidado",
    short: "Pequenos hábitos, grandes mudanças.",
    detail: "Autocuidado não é egoísmo. Reservar tempo para atividades prazerosas, manter rotinas saudáveis e respeitar seus limites são formas de fortalecer sua saúde mental.",
    color: "40 80% 50%",
  },
  {
    icon: Moon,
    title: "Sono",
    short: "A base invisível da saúde mental.",
    detail: "Dormir bem regula emoções, consolida memórias e restaura o corpo. Criar uma rotina noturna, evitar telas antes de dormir e manter horários regulares são essenciais.",
    color: "220 60% 50%",
  },
  {
    icon: Shield,
    title: "Resiliência",
    short: "Fortaleça-se diante das adversidades.",
    detail: "Resiliência é a capacidade de se adaptar às dificuldades. Construir redes de apoio, praticar gratidão e desenvolver flexibilidade emocional são caminhos para cultivá-la.",
    color: "150 50% 40%",
  },
  {
    icon: Sparkles,
    title: "Mindfulness",
    short: "Esteja presente, viva com intenção.",
    detail: "A atenção plena (mindfulness) reduz estresse e melhora o foco. Técnicas simples de meditação e consciência corporal podem ser praticadas em qualquer momento do dia.",
    color: "270 90% 72%",
  },
];

const ThemesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="temas" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Temas</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Explore conteúdos sobre saúde mental de forma acolhedora e informativa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme, index) => {
            const Icon = theme.icon;
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-2xl border border-border bg-card p-6 cursor-pointer overflow-hidden transition-shadow hover:shadow-lg"
                onMouseEnter={() => setExpandedIndex(index)}
                onMouseLeave={() => setExpandedIndex(null)}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `hsl(${theme.color} / 0.15)` }}
                >
                  <Icon size={24} style={{ color: `hsl(${theme.color})` }} />
                </div>

                <h3 className="text-xl font-bold text-card-foreground mb-2" style={{ fontFamily: "'DM Serif Display', serif" }}>
                  {theme.title}
                </h3>

                <p className="text-muted-foreground text-sm">{theme.short}</p>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border leading-relaxed">
                        {theme.detail}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
