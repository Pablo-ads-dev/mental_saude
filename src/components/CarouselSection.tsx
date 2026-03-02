import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Dumbbell, Moon, UtensilsCrossed, Briefcase, Users, Wallet, HeartHandshake } from "lucide-react";

const cards = [
  {
    icon: Dumbbell,
    title: "Saúde Mental x Atividade Física",
    summary: "Mover o corpo é uma das formas mais acessíveis de cuidar da mente.",
    detail: "Estudos publicados no The Lancet Psychiatry mostram que exercícios regulares reduzem sintomas de depressão e ansiedade. Não é preciso treinar intensamente — caminhadas de 30 minutos já produzem efeito significativo.",
    tip: "Dica prática: comece com 10 minutos de caminhada ao ar livre, 3 vezes por semana.",
  },
  {
    icon: Moon,
    title: "Saúde Mental x Sono",
    summary: "Uma noite mal dormida afeta diretamente suas emoções e decisões.",
    detail: "A privação de sono está associada ao aumento de cortisol, irritabilidade e dificuldade de concentração. Segundo a National Sleep Foundation, adultos precisam de 7 a 9 horas de sono por noite.",
    tip: "Dica prática: crie uma rotina noturna — evite telas 1h antes de dormir e mantenha horários regulares.",
  },
  {
    icon: UtensilsCrossed,
    title: "Saúde Mental x Alimentação",
    summary: "O que você come influencia diretamente como você se sente.",
    detail: "A psiquiatria nutricional revela que dietas ricas em ultraprocessados aumentam o risco de depressão. Alimentos com ômega-3, magnésio e vitaminas do complexo B favorecem a produção de neurotransmissores.",
    tip: "Dica prática: inclua frutas, verduras e sementes nas refeições diárias.",
  },
  {
    icon: Briefcase,
    title: "Saúde Mental x Trabalho",
    summary: "Trabalho é parte da vida, mas não deve custar sua saúde.",
    detail: "A OMS reconhece o burnout como fenômeno ocupacional. Jornadas excessivas, falta de autonomia e ambientes tóxicos estão entre os principais fatores de adoecimento mental no trabalho.",
    tip: "Dica prática: faça pausas de 5 minutos a cada hora e defina limites claros de horário.",
  },
  {
    icon: Users,
    title: "Saúde Mental x Pressão Social",
    summary: "Comparação constante é um dos maiores sabotadores do bem-estar.",
    detail: "Pesquisas da American Psychological Association indicam que o uso excessivo de redes sociais está associado a aumento de ansiedade e baixa autoestima, especialmente entre jovens.",
    tip: "Dica prática: limite o tempo em redes sociais e pratique gratidão diária.",
  },
  {
    icon: Wallet,
    title: "Saúde Mental x Finanças",
    summary: "A insegurança financeira gera estresse crônico que afeta corpo e mente.",
    detail: "Estudos do Money and Mental Health Policy Institute mostram que pessoas com dívidas têm 3x mais chances de desenvolver problemas de saúde mental. Organização financeira é também autocuidado.",
    tip: "Dica prática: anote seus gastos por uma semana — consciência é o primeiro passo.",
  },
  {
    icon: HeartHandshake,
    title: "Saúde Mental x Relações Sociais",
    summary: "Conexões genuínas são um dos pilares da saúde emocional.",
    detail: "O Harvard Study of Adult Development, com mais de 80 anos de pesquisa, concluiu que a qualidade dos relacionamentos é o maior preditor de bem-estar e longevidade.",
    tip: "Dica prática: reserve tempo semanal para estar com pessoas que fazem bem a você.",
  },
];

const CarouselSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 340;
      scrollRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
    }
  };

  const autoScroll = useCallback(() => {
    if (scrollRef.current && !isHovered) {
      const el = scrollRef.current;
      const cardWidth = 300; // Ajuste para a largura do seu card + gap

      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Pula um bloco inteiro de forma suave
        el.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }
  }, [isHovered]);

  useEffect(() => {
    const interval = setInterval(autoScroll, 2500); // Espera 3s e pula
    return () => clearInterval(interval);
  }, [autoScroll]);

  const toggleCard = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="temas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Tudo está conectado
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore como diferentes áreas da vida impactam sua saúde mental — e descubra pequenas mudanças que fazem diferença.
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-card shadow-card text-muted-foreground hover:text-primary transition-colors hidden md:flex"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-card shadow-card text-muted-foreground hover:text-primary transition-colors hidden md:flex"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-2 py-4 snap-x snap-mandatory md:px-10"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {cards.map((card, i) => {
              const Icon = card.icon;
              const isExpanded = expandedIndex === i;
              return (
                <motion.div
                  key={i}
                  onClick={() => toggleCard(i)}
                  className="flex-shrink-0 w-[300px] snap-center rounded-2xl bg-card p-6 cursor-pointer transition-all duration-300 border border-border"
                  style={{
                    boxShadow: isExpanded
                      ? "0 20px 60px -10px hsl(267 55% 63% / 0.5), 0 8px 24px -4px hsl(272 91% 76% / 0.3)"
                      : "0 12px 40px -8px hsl(267 55% 63% / 0.35), 0 4px 16px -4px hsl(272 91% 76% / 0.2)",
                  }}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 24px 64px -10px hsl(267 55% 63% / 0.55), 0 12px 32px -4px hsl(272 91% 76% / 0.35)",
                  }}
                  layout
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">{card.summary}</p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-foreground/80 mb-3 leading-relaxed">{card.detail}</p>
                        <p className="text-sm font-medium text-primary">{card.tip}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <p className="text-xs text-muted-foreground mt-3">
                    {isExpanded ? "Toque para fechar" : "Toque para saber mais"}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
