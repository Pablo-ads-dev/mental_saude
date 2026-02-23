import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "O que é saúde mental?",
    a: "Saúde mental é um estado de bem-estar emocional, psicológico e social. Ela influencia como pensamos, sentimos e agimos diante dos desafios da vida. Cuidar da saúde mental é tão importante quanto cuidar da saúde física.",
  },
  {
    q: "O atendimento online é seguro e eficaz?",
    a: "Sim. Pesquisas indicam que a terapia online é tão eficaz quanto a presencial para muitas condições. Todos os profissionais da plataforma possuem registro ativo em seus conselhos profissionais.",
  },
  {
    q: "O teste do site substitui um diagnóstico?",
    a: "Não. O teste é uma ferramenta de autopercepção com caráter informativo. Ele não substitui avaliação profissional e não deve ser usado para autodiagnóstico.",
  },
  {
    q: "Quando devo procurar um profissional?",
    a: "Sempre que sentir que suas emoções estão interferindo no seu dia a dia, nos relacionamentos, no trabalho ou no sono. Buscar ajuda é um sinal de autocuidado, não de fraqueza.",
  },
  {
    q: "Os serviços públicos de saúde mental são confiáveis?",
    a: "Sim. O SUS oferece atendimento em saúde mental por meio dos CAPS, UBS e outros serviços. Profissionais do SUS seguem as mesmas diretrizes e formações dos setores privados.",
  },
  {
    q: "Preciso de receita para tomar medicação?",
    a: "Sim. Medicamentos para saúde mental só devem ser prescritos por médicos — psiquiatras ou, em alguns casos, clínicos gerais. Nunca se automedique.",
  },
  {
    q: "Esta plataforma prescreve tratamento?",
    a: "Não. A plataforma tem caráter informativo e de conexão com profissionais. Não realizamos diagnósticos, prescrições ou atendimentos de emergência.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Perguntas frequentes
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-display font-medium text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
