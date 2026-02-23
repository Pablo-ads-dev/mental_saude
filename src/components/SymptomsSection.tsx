import { motion } from "framer-motion";
import { Battery, Brain, Frown, Zap, BedDouble, Focus } from "lucide-react";

const symptoms = [
  { icon: Battery, label: "Cansaço excessivo", desc: "Sensação constante de fadiga, mesmo após descansar." },
  { icon: Brain, label: "Ansiedade constante", desc: "Preocupação excessiva que interfere no dia a dia." },
  { icon: Frown, label: "Falta de motivação", desc: "Dificuldade em encontrar sentido ou prazer nas atividades." },
  { icon: Zap, label: "Irritabilidade", desc: "Reações desproporcionais a situações cotidianas." },
  { icon: BedDouble, label: "Alterações no sono", desc: "Insônia, sono excessivo ou sono não reparador." },
  { icon: Focus, label: "Dificuldade de concentração", desc: "Mente dispersa, esquecimentos frequentes." },
];

const SymptomsSection = () => {
  return (
    <section id="sintomas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Sinais de que algo precisa de atenção
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-2">
            Estes são alguns sinais que podem indicar que sua saúde mental precisa de cuidado. 
            Identificar é o primeiro passo.
          </p>
          <p className="text-xs text-muted-foreground italic max-w-md mx-auto">
            ⚠️ Esta seção tem caráter informativo e não substitui avaliação profissional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {symptoms.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border shadow-card"
              >
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{s.label}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SymptomsSection;
