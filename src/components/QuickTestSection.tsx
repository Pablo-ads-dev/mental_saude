import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardCheck, RotateCcw, ArrowRight } from "lucide-react";

const questions = [
  "Tenho me sentido mais cansado(a) do que o normal, mesmo descansando.",
  "Tenho tido dificuldade em sentir prazer nas coisas que antes gostava.",
  "Tenho me preocupado de forma excessiva com o futuro.",
  "Tenho me sentido mais irritado(a) ou impaciente sem motivo aparente.",
  "Tenho tido dificuldade para dormir ou acordo cansado(a).",
  "Tenho me sentido sozinho(a) ou sem apoio.",
  "Tenho sentido que não dou conta das minhas responsabilidades.",
];

type Answer = "nunca" | "às vezes" | "frequentemente" | "sempre";
const options: { label: string; value: Answer; points: number }[] = [
  { label: "Nunca", value: "nunca", points: 0 },
  { label: "Às vezes", value: "às vezes", points: 1 },
  { label: "Frequentemente", value: "frequentemente", points: 2 },
  { label: "Sempre", value: "sempre", points: 3 },
];

const getResult = (score: number) => {
  if (score <= 7) return {
    level: "Atenção",
    color: "text-primary",
    message: "Seus indicadores sugerem que, no momento, sua saúde mental está relativamente estável. Continue cuidando de si — prevenção também é cuidado.",
  };
  if (score <= 14) return {
    level: "Alerta leve",
    color: "text-secondary",
    message: "Alguns sinais merecem sua atenção. Considere conversar com alguém de confiança ou buscar informações sobre autocuidado emocional.",
  };
  return {
    level: "Busque apoio",
    color: "text-purple-dark",
    message: "Os indicadores sugerem que você pode estar passando por um momento difícil. Procurar apoio profissional é um ato de cuidado e coragem — não hesite em buscar ajuda.",
  };
};

const QuickTestSection = () => {
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [showResult, setShowResult] = useState(false);
  const [testStarted, setTestStarted] = useState(false);

  const handleAnswer = (qIndex: number, value: Answer) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: value }));
  };

  const allAnswered = Object.keys(answers).length === questions.length;

  const score = Object.values(answers).reduce((sum, ans) => {
    const opt = options.find((o) => o.value === ans);
    return sum + (opt?.points ?? 0);
  }, 0);

  const result = getResult(score);

  const reset = () => {
    setAnswers({});
    setShowResult(false);
    setTestStarted(false);
  };

  return (
    <section id="teste" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <ClipboardCheck className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Como está sua saúde mental?
          </h2>
          <p className="text-muted-foreground">
            Um teste rápido e acolhedor de autopercepção. Responda com honestidade — não há respostas certas ou erradas.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!testStarted ? (
            <motion.div key="cta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Este teste leva menos de 2 minutos e pode ajudar você a refletir sobre como está se sentindo. É completamente anônimo e não substitui uma avaliação profissional.
                </p>
                <button
                  onClick={() => setTestStarted(true)}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-display font-medium hover:opacity-90 transition-opacity"
                >
                  Iniciar o teste <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ) : !showResult ? (
            <motion.div key="questions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="space-y-6">
                {questions.map((q, i) => (
                  <div key={i} className="bg-card rounded-xl p-5 border border-border shadow-card">
                    <p className="text-sm font-medium text-foreground mb-3">
                      {i + 1}. {q}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {options.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => handleAnswer(i, opt.value)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            answers[i] === opt.value
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <button
                  onClick={() => allAnswered && setShowResult(true)}
                  disabled={!allAnswered}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-display font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
                >
                  Ver resultado
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-card-hover text-center"
            >
              <p className={`font-display font-bold text-2xl mb-4 ${result.color}`}>{result.level}</p>
              <p className="text-foreground/80 leading-relaxed mb-6">{result.message}</p>
              <p className="text-xs text-muted-foreground italic mb-6">
                ⚠️ Este teste é apenas informativo e baseado em autopercepção. Não substitui avaliação de um profissional de saúde mental.
              </p>
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-sm"
              >
                <RotateCcw className="w-4 h-4" /> Refazer o teste
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default QuickTestSection;
