import { motion } from "framer-motion";
import { Dumbbell, Gamepad2, Users, Brain, Pill, Heart, Lightbulb, GraduationCap, ShieldCheck } from "lucide-react";

const solutions = [
  { icon: Dumbbell, title: "Atividades físicas", desc: "Exercícios regulares reduzem estresse e melhoram o humor.", size: "large" },
  { icon: Brain, title: "Psicólogos", desc: "Terapia é um espaço seguro de autoconhecimento e acolhimento.", size: "large" },
  { icon: Users, title: "Inclusão social", desc: "Participar de grupos e comunidades fortalece vínculos.", size: "small" },
  { icon: Gamepad2, title: "Lazer", desc: "Hobbies e descanso são essenciais.", size: "small" },
  { icon: Pill, title: "Medicação", desc: "Tratamento especializado e humano.", size: "small" },
  { icon: Heart, title: "Comunidade", desc: "Grupos de apoio mútuo e escuta.", size: "large" },
  { icon: Lightbulb, title: "Conteúdo", desc: "Informação como ferramenta de autocuidado.", size: "small" },
  { icon: GraduationCap, title: "Finanças", desc: "Organização que traz paz mental.", size: "small" },
  { icon: ShieldCheck, title: "Segurança", desc: "Uma base sólida para sua estabilidade.", size: "small" },
];

const SolutionsSection = () => {
  return (
    <section id="apoio" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Recursos</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mt-2 mb-4">
            Caminhos para o bem-estar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Não existe fórmula única. Explore diferentes abordagens e descubra o que faz sentido para o seu momento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 h-full">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            const isLarge = s.size === "large";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                className={`
                  relative group overflow-hidden p-6 rounded-3xl border border-border 
                  bg-gradient-to-br from-card to-background
                  hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all
                  ${isLarge ? "md:col-span-1 md:row-span-2" : "md:col-span-1 md:row-span-1"}
                `}
              >
                {/* Background Decorativo sutil */}
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Icon size={120} />
                </div>

                <div className={`flex ${isLarge ? "flex-col h-full" : "flex-row items-center"} gap-4`}>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <div className={isLarge ? "mt-4" : ""}>
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>

                {isLarge && (
                    <div className="mt-auto pt-6">
                        <span className="text-xs font-medium text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                            Saiba mais →
                        </span>
                    </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;