import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardCheck, ArrowRight, RotateCcw } from "lucide-react";

const questions = [
  "Nas últimas semanas, tenho me sentido mais ansioso(a) ou preocupado(a) do que o normal.",
  "Tenho tido dificuldade para dormir ou meu sono não tem sido reparador.",
  "Sinto que perdi o interesse por atividades que antes me davam prazer.",
  "Tenho me sentido constantemente esgotado(a), mesmo após descansar.",
  "Tenho sentido dificuldade em me concentrar nas tarefas do dia a dia.",
];

const results = [
  {
    range: [0, 5],
    title: "Tudo parece bem 💚",
    message:
      "Seus indicadores sugerem um bom equilíbrio emocional no momento. Continue cuidando de si!",
  },
  {
    range: [6, 10],
    title: "Atenção leve 💛",
    message:
      "Alguns sinais merecem atenção. Considere reservar mais momentos para autocuidado e, se persistirem, busque orientação profissional.",
  },
  {
    range: [11, 15],
    title: "Busque apoio 🧡",
    message:
      "Os indicadores sugerem que você pode se beneficiar de acompanhamento profissional. Não hesite em buscar ajuda — cuidar da mente é um ato de coragem.",
  },
];

const TestSection = () => {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [showResult, setShowResult] = useState(false);

  const options = [
    { label: "Nunca", value: 0 },
    { label: "Às vezes", value: 1 },
    { label: "Frequentemente", value: 2 },
    { label: "Sempre", value: 3 },
  ];

  const allAnswered = answers.every((a) => a >= 0);
  const total = answers.reduce((sum, a) => sum + (a >= 0 ? a : 0), 0);
  const result = results.find((r) => total >= r.range[0] && total <= r.range[1]) || results[2];

  const handleAnswer = (qIndex: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = value;
    setAnswers(newAnswers);
  };

  const reset = () => {
    setAnswers(Array(questions.length).fill(-1));
    setShowResult(false);
  };

  return (
    <section id="teste" className="py-20 md:py-28 bg-accent/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <ClipboardCheck className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Autopercepção</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Como você está se sentindo?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Este teste não é um diagnóstico. É uma ferramenta de reflexão para ajudá-lo a perceber
            sinais que merecem atenção.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key="questions"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {questions.map((q, qIndex) => (
                  <motion.div
                    key={qIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: qIndex * 0.05 }}
                    className="bg-card rounded-xl p-5 border border-border"
                  >
                    <p className="text-sm font-medium text-card-foreground mb-3">
                      {qIndex + 1}. {q}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {options.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => handleAnswer(qIndex, opt.value)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            answers[qIndex] === opt.value
                              ? "bg-primary text-primary-foreground shadow-md"
                              : "bg-muted text-muted-foreground hover:bg-accent"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ))}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => allAnswered && setShowResult(true)}
                  disabled={!allAnswered}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-xl font-semibold disabled:opacity-40 transition-all"
                >
                  Ver Resultado <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card rounded-2xl p-8 border border-border text-center"
              >
                <h3 className="text-3xl font-bold text-card-foreground mb-4">{result.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">{result.message}</p>
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  <RotateCcw className="w-4 h-4" /> Refazer teste
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestSection;
