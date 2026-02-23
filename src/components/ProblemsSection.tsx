import { motion } from "framer-motion";
import { TrendingDown, DollarSign, UserX, Briefcase, Users, UtensilsCrossed, Activity, Flame } from "lucide-react";

const problems = [
  { icon: TrendingDown, title: "Impacto social", desc: "Pressão por produtividade e comparação constante nas redes sociais." },
  { icon: DollarSign, title: "Dificuldades financeiras", desc: "Dívidas e incerteza econômica geram estresse crônico." },
  { icon: UserX, title: "Exclusão social", desc: "Solidão e isolamento afetam diretamente a saúde emocional." },
  { icon: Briefcase, title: "Trabalho", desc: "Ambientes tóxicos, sobrecarga e falta de reconhecimento." },
  { icon: Users, title: "Pressão social", desc: "Expectativas externas que ignoram limites individuais." },
  { icon: UtensilsCrossed, title: "Alimentação", desc: "Padrões alimentares desequilibrados afetam o humor e a energia." },
  { icon: Activity, title: "Estilo de vida", desc: "Sedentarismo e falta de rotina comprometem o bem-estar." },
  { icon: Flame, title: "Burnout", desc: "Esgotamento físico e emocional por excesso de demandas." },
];

const ProblemsSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Problemas reais, impactos reais
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Se você se identifica com algum desses fatores, saiba que isso é mais comum do que parece — e que existe caminho.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl bg-card p-5 shadow-card hover:shadow-card-hover transition-shadow border border-border"
              >
                <Icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
