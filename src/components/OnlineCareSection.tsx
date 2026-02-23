import { motion } from "framer-motion";
import { Video, Calendar, Phone, Building2, GraduationCap, HeartPulse } from "lucide-react";

const OnlineCareSection = () => {
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
            Atendimento online e acesso ao cuidado
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Conectamos você a profissionais qualificados e orientamos sobre serviços gratuitos disponíveis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Online */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border shadow-card"
          >
            <h3 className="font-display font-bold text-xl text-foreground mb-6">Atendimento Online</h3>
            <div className="space-y-4">
              {[
                { icon: Video, text: "Consultas por videochamada com psicólogos qualificados" },
                { icon: Calendar, text: "Agendamento online simples e flexível" },
                { icon: HeartPulse, text: "Orientação para escolha do profissional ideal" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-sm text-foreground/80">{item.text}</p>
                </div>
              ))}
            </div>
            <button className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-display font-medium hover:opacity-90 transition-opacity text-sm">
              Agendar atendimento
            </button>
          </motion.div>

          {/* Public */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border shadow-card"
          >
            <h3 className="font-display font-bold text-xl text-foreground mb-6">Serviços Gratuitos e Públicos</h3>
            <div className="space-y-4">
              {[
                { icon: Building2, text: "CAPS — Centros de Atenção Psicossocial" },
                { icon: Phone, text: "CVV — Ligue 188 (24h, gratuito)" },
                { icon: GraduationCap, text: "Clínicas-escola de universidades" },
                { icon: HeartPulse, text: "Psicólogos e psiquiatras pelo SUS" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-sm text-foreground/80">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground italic">
              Estes serviços são mantidos pelo poder público e estão disponíveis gratuitamente para a população.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OnlineCareSection;
