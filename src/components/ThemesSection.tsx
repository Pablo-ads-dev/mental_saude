import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, CloudRain, Flame, HeartCrack, Sparkles, ShieldCheck } from "lucide-react";

const themes = [
  {
    icon: Brain,
    title: "Ansiedade",
    color: "hsl(270, 60%, 50%)",
    summary: "Preocupação excessiva, inquietação e tensão constante.",
    detail:
      "A ansiedade é uma resposta natural do corpo, mas quando se torna persistente pode afetar a qualidade de vida. Técnicas de respiração, mindfulness e acompanhamento profissional são caminhos eficazes.",
  },
  {
    icon: CloudRain,
    title: "Depressão",
    color: "hsl(250, 50%, 45%)",
    summary: "Tristeza prolongada, perda de interesse e energia.",
    detail:
      "A depressão é um transtorno que vai além da tristeza comum. Envolve alterações no sono, apetite e concentração. O tratamento combina psicoterapia e, quando necessário, medicação.",
  },
  {
    icon: Flame,
    title: "Burnout",
    color: "hsl(280, 55%, 50%)",
    summary: "Esgotamento físico e mental causado pelo trabalho.",
    detail:
      "Reconhecido pela OMS como fenômeno ocupacional, o burnout se manifesta por exaustão, cinismo e redução da eficácia profissional. Limites saudáveis e pausas são fundamentais.",
  },
  {
    icon: HeartCrack,
    title: "Luto",
    color: "hsl(260, 45%, 48%)",
    summary: "Processo de adaptação a perdas significativas.",
    detail:
      "O luto é uma experiência individual e não linear. Não há um tempo certo para superar. Permitir-se sentir e buscar apoio emocional são passos importantes no processo.",
  },
  {
    icon: Sparkles,
    title: "Autoestima",
    color: "hsl(290, 50%, 52%)",
    summary: "A percepção e o valor que atribuímos a nós mesmos.",
    detail:
      "A autoestima saudável é construída com autoconhecimento, aceitação e prática de autocompaixão. Fatores sociais, familiares e culturais influenciam diretamente essa percepção.",
  },
  {
    icon: ShieldCheck,
    title: "Resiliência",
    color: "hsl(265, 55%, 48%)",
    summary: "Capacidade de se adaptar diante das adversidades.",
    detail:
      "Resiliência não é ausência de sofrimento, mas a habilidade de atravessar momentos difíceis e se reconstruir. Pode ser desenvolvida com apoio social e estratégias de enfrentamento.",
  },
];

const ThemesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="temas" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Temas em Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Informações acolhedoras sobre os temas mais buscados em saúde mental.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:hidden">
            Toque em um card para saber mais
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                onMouseEnter={() => setExpandedIndex(index)}
                onMouseLeave={() => setExpandedIndex(null)}
                onClick={() =>
                  setExpandedIndex(isExpanded ? null : index)
                }
                className="group relative rounded-2xl border border-border bg-card p-6 cursor-pointer transition-shadow duration-300 hover:shadow-xl"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${theme.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: theme.color }} />
                </div>

                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {theme.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {theme.summary}
                </p>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {theme.detail}
                        </p>
                      </div>
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
