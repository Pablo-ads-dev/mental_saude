import { motion } from "framer-motion";
import { Battery, Brain, Frown, Zap, BedDouble, Focus } from "lucide-react";
import { useState } from "react";

const symptoms = [
  { icon: Battery, label: "Cansaço excessivo", desc: "Sensação constante de fadiga, mesmo após descansar profundamente." },
  { icon: Brain, label: "Ansiedade constante", desc: "Preocupação excessiva que interfere nas tarefas simples do dia a dia." },
  { icon: Frown, label: "Falta de motivação", desc: "Dificuldade em encontrar sentido ou prazer em atividades que antes eram agradáveis." },
  { icon: Zap, label: "Irritabilidade", desc: "Reações emocionais desproporcionais ou impaciência com situações cotidianas." },
  { icon: BedDouble, label: "Alterações no sono", desc: "Dificuldade para adormecer, despertar precoce ou sono que não restaura energias." },
  { icon: Focus, label: "Dificuldade de concentração", desc: "Sensação de mente dispersa, esquecimentos frequentes e lentidão mental." },
];

const SymptomsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="sintomas" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Lado Esquerdo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 lg:sticky lg:top-24"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Sinais que o corpo <span className="text-primary italic">manifesta</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              A saúde mental não é invisível. Ela envia sinais através do comportamento, do sono e da energia vital. 
            </p>
            <div className="p-5 rounded-2xl bg-accent/20 border-l-4 border-primary/50 text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground block mb-1">Atenção profissional</strong>
              Esta lista é educativa. Se você se identifica com vários destes pontos, considere buscar um acolhimento especializado.
            </div>
          </motion.div>

          {/* Lado Direito */}
          <div 
            className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {symptoms.map((s, i) => {
              const Icon = s.icon;
              const isHovered = hoveredIndex === i;
              const isAnyHovered = hoveredIndex !== null;

              return (
                <motion.div
                  key={i}
                  onMouseEnter={() => setHoveredIndex(i)}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  animate={{ 
                    opacity: isAnyHovered ? (isHovered ? 1 : 0.4) : 1,
                    scale: isHovered ? 1.02 : 1 
                  }}
                  // O segredo está aqui: classes dinâmicas baseadas no estado isHovered
                  className={`
                    p-8 rounded-3xl border transition-all duration-300 cursor-default
                    ${isHovered 
                      ? 'bg-primary border-primary shadow-2xl shadow-primary/30' 
                      : 'bg-card border-border shadow-sm'
                    }
                  `}
                >
                  <div className={`
                    w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300
                    ${isHovered ? 'bg-white/20 text-white rotate-6' : 'bg-primary/10 text-primary'}
                  `}>
                    <Icon size={24} />
                  </div>

                  <h3 className={`
                    font-display font-bold text-xl mb-3 transition-colors duration-300
                    ${isHovered ? 'text-white' : 'text-foreground'}
                  `}>
                    {s.label}
                  </h3>
                  
                  <p className={`
                    leading-relaxed transition-colors duration-300
                    ${isHovered ? 'text-white/90' : 'text-muted-foreground'}
                  `}>
                    {s.desc}
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

export default SymptomsSection;