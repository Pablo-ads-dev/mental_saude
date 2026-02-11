import { motion } from "framer-motion";
import { Ear, Users, MessageCircleHeart, Shield } from "lucide-react";

const tips = [
  {
    icon: Ear,
    title: "Escuta Ativa",
    description:
      "Ouça sem julgar. Demonstrar presença e atenção genuína é o primeiro passo para acolher alguém.",
  },
  {
    icon: Users,
    title: "Ambiente Seguro",
    description:
      "Crie espaços onde colaboradores se sintam à vontade para falar sobre saúde mental sem estigma.",
  },
  {
    icon: MessageCircleHeart,
    title: "Comunicação Empática",
    description:
      "Use linguagem acolhedora e evite minimizar sentimentos. Frases como 'é só se acalmar' podem afastar.",
  },
  {
    icon: Shield,
    title: "Políticas de Apoio",
    description:
      "Implemente programas de assistência ao colaborador e flexibilize horários quando necessário.",
  },
];

const CorporateSection = () => {
  return (
    <section id="empresas" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Orientações Corporativas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Como sua empresa pode contribuir para a saúde mental dos colaboradores.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-card-foreground mb-1">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;
