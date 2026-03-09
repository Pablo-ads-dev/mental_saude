import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardCheck, RotateCcw, ArrowRight, ArrowLeft } from "lucide-react";

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

const QuickTestSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [showResult, setShowResult] = useState(false);
  const [testStarted, setTestStarted] = useState(false);

  const handleAnswer = (value: Answer) => {
    setAnswers((prev) => ({ ...prev, [currentStep]: value }));
  };

  const isLastStep = currentStep === questions.length - 1;
  const canGoNext = answers[currentStep] !== undefined;

  const nextStep = () => {
    if (isLastStep) {
      setShowResult(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <section id="teste" className="py-20 bg-muted/50 overflow-hidden">
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
        </motion.div>

        <AnimatePresence mode="wait">
          {!testStarted ? (
            <motion.div
              key="cta"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center bg-card rounded-2xl p-8 border border-border shadow-card"
            >
              <p className="text-foreground/80 leading-relaxed mb-6">
                Este teste leva menos de 2 minutos e pode ajudar você a refletir sobre como está se sentindo. É completamente anônimo e não substitui uma avaliação profissional.
              </p>
              <button
                onClick={() => setTestStarted(true)}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-display font-medium hover:opacity-90 transition-opacity"
              >
                Iniciar o teste <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ) : !showResult ? (
            <motion.div
              key="question-wrapper"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Barra de Progresso */}
              <div className="w-full bg-muted rounded-full h-2 mb-8">
                <motion.div 
                  className="bg-primary h-2 rounded-full" 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
                <p className="text-[10px] text-muted-foreground mt-2 text-right uppercase font-bold tracking-wider">
                  Pergunta {currentStep + 1} de {questions.length}
                </p>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-card rounded-2xl p-8 border border-border shadow-card min-h-[250px] flex flex-col justify-center"
                >
                  <p className="text-lg md:text-xl font-medium text-foreground mb-8 text-center">
                    {questions[currentStep]}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {options.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleAnswer(opt.value)}
                        className={`px-4 py-4 rounded-xl text-sm font-semibold transition-all border-2 ${
                          answers[currentStep] === opt.value
                            ? "bg-primary border-primary text-primary-foreground shadow-lg scale-[1.02]"
                            : "bg-background border-transparent text-muted-foreground hover:border-primary/30 hover:bg-accent"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navegação */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground disabled:opacity-0 transition-all font-medium"
                >
                  <ArrowLeft className="w-4 h-4" /> Voltar
                </button>

                <button
                  onClick={nextStep}
                  disabled={!canGoNext}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-3 rounded-full font-display font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-all shadow-md"
                >
                  {isLastStep ? "Finalizar" : "Próxima"} <ArrowRight className="w-4 h-4" />
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
              <p className="font-display font-bold text-2xl mb-4 text-primary">
                Resultado Disponível
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Para saber a sua resposta detalhada e conferir o resultado, realize o login na sua conta.
              </p>

              <p className="text-xs text-muted-foreground italic mb-6">
                ⚠️ Este teste é apenas informativo e baseado em autopercepção. Não substitui avaliação de um profissional de saúde mental.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button
                  onClick={() => window.location.href = '/auth'}
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity w-full sm:w-auto"
                >
                  Fazer Login
                </button>
                <button
                  onClick={() => {
                    setCurrentStep(0);
                    setAnswers({});
                    setShowResult(false);
                    setTestStarted(false);
                  }}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground hover:underline font-medium text-sm"
                >
                  <RotateCcw className="w-4 h-4" /> Refazer o teste
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default QuickTestSection;