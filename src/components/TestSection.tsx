import { useState } from "react";
import { motion } from "framer-motion";

const questions = [
  { q: "Com que frequência você se sente sobrecarregado(a)?", options: ["Raramente", "Às vezes", "Frequentemente", "Sempre"] },
  { q: "Você tem dormido bem nas últimas semanas?", options: ["Muito bem", "Razoavelmente", "Com dificuldade", "Quase não durmo"] },
  { q: "Consegue sentir prazer em atividades que gosta?", options: ["Sempre", "Na maioria das vezes", "Raramente", "Nunca"] },
  { q: "Como está sua energia no dia a dia?", options: ["Ótima", "Boa", "Baixa", "Muito baixa"] },
  { q: "Você tem alguém com quem conversar sobre seus sentimentos?", options: ["Sim, sempre", "Às vezes", "Raramente", "Não tenho ninguém"] },
];

const TestSection = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  const handleAnswer = (optIndex: number) => {
    const next = [...answers, optIndex];
    setAnswers(next);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setDone(true);
    }
  };

  const score = answers.reduce((a, b) => a + b, 0);
  const maxScore = questions.length * 3;

  const getMessage = () => {
    const pct = score / maxScore;
    if (pct <= 0.25) return { title: "Tudo parece bem! 💚", text: "Seus indicadores sugerem equilíbrio emocional. Continue cuidando de si." };
    if (pct <= 0.5) return { title: "Atenção leve 💛", text: "Alguns sinais merecem atenção. Que tal investir mais em autocuidado?" };
    if (pct <= 0.75) return { title: "Cuide-se 🧡", text: "Há indicadores que pedem atenção. Considere conversar com um profissional." };
    return { title: "Busque ajuda ❤️", text: "Os sinais sugerem que você pode se beneficiar de acompanhamento profissional. Não hesite em buscar ajuda." };
  };

  const reset = () => { setCurrent(0); setAnswers([]); setDone(false); };

  return (
    <section id="teste" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Como você está?</h2>
          <p className="text-muted-foreground text-lg">Um teste rápido e não-clínico para refletir sobre seu bem-estar.</p>
        </motion.div>

        {!done ? (
          <motion.div key={current} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-card rounded-2xl border border-border p-8">
            <p className="text-xs text-muted-foreground mb-2">{current + 1} de {questions.length}</p>
            <h3 className="text-xl font-semibold text-card-foreground mb-6">{questions[current].q}</h3>
            <div className="flex flex-col gap-3">
              {questions[current].options.map((opt, i) => (
                <button key={i} onClick={() => handleAnswer(i)} className="text-left px-5 py-3 rounded-xl border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium">
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-card rounded-2xl border border-border p-8 text-center">
            <h3 className="text-2xl font-bold text-card-foreground mb-3">{getMessage().title}</h3>
            <p className="text-muted-foreground mb-6">{getMessage().text}</p>
            <p className="text-xs text-muted-foreground mb-6">⚠️ Este teste não substitui avaliação profissional.</p>
            <button onClick={reset} className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
              Refazer teste
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TestSection;
