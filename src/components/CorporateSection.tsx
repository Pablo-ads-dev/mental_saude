import { motion } from "framer-motion";
import { Building2, Users, HeartHandshake } from "lucide-react";

const points = [
  { icon: Building2, title: "Ambiente saudável", text: "Empresas que investem em saúde mental têm equipes mais engajadas e produtivas." },
  { icon: Users, title: "Escuta ativa", text: "Líderes que praticam escuta ativa criam ambientes de confiança e pertencimento." },
  { icon: HeartHandshake, title: "Apoio genuíno", text: "Programas de bem-estar devem ir além do discurso e oferecer suporte real." },
];

const CorporateSection = () => (
  <section id="corporativo" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Saúde Mental no Trabalho</h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">O bem-estar começa onde passamos a maior parte do nosso dia.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {points.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5">
                <Icon size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default CorporateSection;
