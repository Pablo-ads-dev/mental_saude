import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Stethoscope, Youtube } from "lucide-react";

const references = [
  { icon: GraduationCap, title: "Professores e pesquisadores", desc: "Conteúdos baseados em pesquisas acadêmicas de universidades reconhecidas." },
  { icon: BookOpen, title: "Artigos científicos", desc: "Informações extraídas de publicações revisadas por pares e diretrizes clínicas." },
  { icon: Stethoscope, title: "Psicólogos e psiquiatras", desc: "Orientações de profissionais com formação comprovada em saúde mental." },
  { icon: Youtube, title: "Criadores com formação", desc: "Conteúdo digital produzido por profissionais qualificados e responsáveis." },
];

const ReferencesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Dicas e referências científicas
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Todo o conteúdo desta plataforma é baseado em evidências e produzido por profissionais qualificados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {references.map((r, i) => {
            const Icon = r.icon;
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
                <h3 className="font-display font-semibold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
