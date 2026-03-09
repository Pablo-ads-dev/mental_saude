import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Dumbbell, Moon, UtensilsCrossed, Briefcase, Users, Wallet, HeartHandshake, X } from "lucide-react";
// Reaproveitando seu array de cards (com os títulos limpos conforme sugerido anteriormente)
const cards = [
  { icon: Dumbbell, title: "Atividade Física", summary: "Mover o corpo é uma das formas mais acessíveis de cuidar da mente.", detail: "Estudos publicados no The Lancet Psychiatry mostram que exercícios regulares reduzem sintomas de depressão e ansiedade. Não é preciso treinar intensamente — caminhadas de 30 minutos já produzem efeito significativo.", tip: "Dica prática: comece com 10 minutos de caminhada ao ar livre, 3 vezes por semana." },
  { icon: Moon, title: "Qualidade do Sono", summary: "Uma noite mal dormida afeta diretamente suas emoções e decisões.", detail: "A privação de sono está associada ao aumento de cortisol, irritabilidade e dificuldade de concentração. Segundo a National Sleep Foundation, adultos precisam de 7 a 9 horas de sono por noite.", tip: "Dica prática: crie uma rotina noturna — evite telas 1h antes de dormir e mantenha horários regulares." },
  { icon: UtensilsCrossed, title: "Alimentação", summary: "O que você come influencia diretamente como você se sente.", detail: "A psiquiatria nutricional revela que dietas ricas em ultraprocessados aumentam o risco de depressão. Alimentos com ômega-3, magnésio e vitaminas do complexo B favorecem a produção de neurotransmissores.", tip: "Dica prática: inclua frutas, verduras e sementes nas refeições diárias." },
  { icon: Briefcase, title: "Trabalho", summary: "Trabalho é parte da vida, mas não deve custar sua saúde.", detail: "A OMS reconhece o burnout como fenômeno ocupacional. Jornadas excessivas, falta de autonomia e ambientes tóxicos estão entre os principais fatores de adoecimento mental no trabalho.", tip: "Dica prática: faça pausas de 5 minutos a cada hora e defina limites claros de horário." },
  { icon: Users, title: "Pressão Social", summary: "Comparação constante é um dos maiores sabotadores do bem-estar.", detail: "Pesquisas da American Psychological Association indicam que o uso excessivo de redes sociais está associado a aumento de ansiedade e baixa autoestima, especialmente entre jovens.", tip: "Dica prática: limite o tempo em redes sociais e pratique gratidão diária." },
  { icon: Wallet, title: "Finanças", summary: "A insegurança financeira gera estresse crônico que afeta corpo e mente.", detail: "Estudos do Money and Mental Health Policy Institute mostram que pessoas com dívidas têm 3x mais chances de desenvolver problemas de saúde mental. Organização financeira é também autocuidado.", tip: "Dica prática: anote seus gastos por uma semana — consciência é o primeiro passo." },
  { icon: HeartHandshake, title: "Relações Sociais", summary: "Conexões genuínas são um dos pilares da saúde emocional.", detail: "O Harvard Study of Adult Development, com mais de 80 anos de pesquisa, concluiu que a qualidade dos relacionamentos é o maior preditor de bem-estar e longevidade.", tip: "Dica prática: reserve tempo semanal para estar com pessoas que fazem bem a você." },
];

// ... (array cards mantido igual)

const CarouselSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 340;
      scrollRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
    }
  };

  return (
    <section id="temas" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">Tudo está conectado</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Explore como diferentes áreas da vida impactam sua saúde mental.</p>
        </div>

        <div className="relative">
          {/* Botões */}
          <button onClick={() => scroll("left")} className="absolute -left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-card shadow-lg hidden md:flex border border-border">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => scroll("right")} className="absolute -right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-card shadow-lg hidden md:flex border border-border">
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carrossel */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-2 py-4 items-start snap-x snap-mandatory md:px-10"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div key={i} className="flex-shrink-0 w-[300px] snap-center">
                  <motion.div
                    whileHover={{ y: -5 }}
                    onClick={() => setExpandedIndex(i)}
                    className="h-full rounded-2xl bg-card p-6 cursor-pointer border border-border shadow-md hover:shadow-xl transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">{card.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{card.summary}</p>
                    <p className="text-[10px] font-bold uppercase text-primary mt-4">Ler mais</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Overlay do Card Expandido (Fora do fluxo do carrossel) */}
      <AnimatePresence>
        {expandedIndex !== null && (
          <>
            {/* Fundo escurecido/blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedIndex(null)}
              className="fixed inset-0 bg-background/60 backdrop-blur-md z-[100]"
            />

            {/* Card Modal */}
            <motion.div
              layoutId={`card-${expandedIndex}`}
              initial={{ opacity: 0, scale: 0.9, y: 20, x: "-50%" }}
              animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, scale: 0.9, y: 20, x: "-50%" }}
              className="fixed left-1/2 top-[15%] md:top-[25%] w-[90%] max-w-[500px] bg-card border border-border p-8 rounded-3xl shadow-2xl z-[101]"
              style={{ x: "-50%" }}
            >
              <button
                onClick={() => setExpandedIndex(null)}
                className="absolute right-4 top-4 p-2 hover:bg-accent rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6">
                {(() => {
                  const Icon = cards[expandedIndex].icon;
                  return <Icon className="w-8 h-8 text-primary" />;
                })()}
              </div>

              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                {cards[expandedIndex].title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {cards[expandedIndex].detail}
              </p>

              <div className="p-4 bg-accent/50 rounded-2xl border border-primary/10">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Dica Prática</p>
                <p className="text-foreground/90 font-medium italic">
                  "{cards[expandedIndex].tip}"
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CarouselSection;