import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Receba conteúdos que cuidam de você
          </h2>
          <p className="text-muted-foreground mb-8">
            Dicas de saúde mental, bem-estar, hábitos saudáveis e organização emocional e financeira — direto no seu e-mail.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                required
                className="flex-1 px-5 py-3 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-display font-medium hover:opacity-90 transition-opacity"
              >
                Inscrever-se
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 text-primary font-medium"
            >
              <CheckCircle className="w-5 h-5" />
              Inscrição realizada com sucesso!
            </motion.div>
          )}

          <p className="text-xs text-muted-foreground mt-4">
            Sem spam. Você pode cancelar quando quiser.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
