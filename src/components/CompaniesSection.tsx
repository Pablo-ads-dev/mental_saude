import { motion } from "framer-motion";
import { Building2, Ear, HandHeart, ShieldCheck, HeartPulse } from "lucide-react";

const practices = [
  { icon: Ear, title: "Escuta ativa", desc: "Ouvir sem julgamento é o primeiro passo para apoiar um colaborador." },
  { icon: HeartPulse, title: "Sinais observáveis", desc: "Mudanças de comportamento, isolamento e queda de desempenho merecem atenção." },
  { icon: HandHeart, title: "Oferta de apoio", desc: "Oferecer recursos e encaminhamento para profissionais qualificados." },
  { icon: ShieldCheck, title: "Normalização do cuidado", desc: "Criar cultura organizacional que valorize a saúde mental." },
];

const CompaniesSection = () => {
  return (
    <section id="empresas" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Building2 className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Colaboradores saudáveis, empresas mais fortes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A saúde mental no ambiente corporativo impacta diretamente produtividade, retenção e clima organizacional. 
            Líderes que acolhem e agem fazem a diferença.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {practices.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center p-6 rounded-xl bg-card border border-border shadow-card"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-display font-medium hover:opacity-90 transition-opacity">
            Comece pela escuta
          </button>
          <p className="text-xs text-muted-foreground mt-3 italic">
            Promover saúde mental também é liderança.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
