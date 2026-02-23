import { motion } from "framer-motion";
import { Dumbbell, Gamepad2, Users, Brain, Pill, Heart, Lightbulb, GraduationCap, ShieldCheck } from "lucide-react";

const solutions = [
  { icon: Dumbbell, title: "Atividades físicas", desc: "Exercícios regulares reduzem estresse e melhoram o humor." },
  { icon: Gamepad2, title: "Momentos de lazer", desc: "Hobbies e descanso são essenciais para o equilíbrio emocional." },
  { icon: Users, title: "Inclusão social", desc: "Participar de grupos e comunidades fortalece vínculos afetivos." },
  { icon: Brain, title: "Psicólogos", desc: "Terapia é um espaço seguro de autoconhecimento e acolhimento." },
  { icon: Pill, title: "Medicação orientada", desc: "Quando necessário, o tratamento medicamentoso deve ser prescrito por profissional." },
  { icon: Heart, title: "Comunidade de apoio", desc: "Grupos de apoio mútuo oferecem escuta e identificação." },
  { icon: Lightbulb, title: "Conteúdo para o bem-estar", desc: "Informação de qualidade é ferramenta de autocuidado." },
  { icon: GraduationCap, title: "Educação financeira", desc: "Organizar finanças reduz uma das maiores fontes de estresse." },
  { icon: ShieldCheck, title: "Segurança e estabilidade", desc: "Construir uma base segura é fundamental para o bem-estar." },
];

const SolutionsSection = () => {
  return (
    <section id="apoio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Caminhos para o bem-estar
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Existem muitas formas de cuidar da saúde mental. Cada pessoa tem seu próprio ritmo e caminho.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{s.title}</h3>
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

export default SolutionsSection;
