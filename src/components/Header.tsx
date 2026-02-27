import { useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Heart, LogIn, UserPlus, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Temas", href: "#temas" },
  { label: "Sintomas", href: "#sintomas" },
  { label: "Teste", href: "#teste" },
  { label: "Apoio", href: "#apoio" },
  { label: "Empresas", href: "#empresas" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 font-display font-bold text-lg text-foreground">
          <Heart className="w-6 h-6 text-primary fill-primary/30" />
          <span>MenteSã</span>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {user ? (
            <button
              onClick={signOut}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
            >
              <LogOut className="w-4 h-4" /> Sair
            </button>
          ) : (
            <>
              <a
                href="/auth"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
              >
                <LogIn className="w-4 h-4" /> Entrar
              </a>
              <a
                href="/auth?signup=true"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <UserPlus className="w-4 h-4" /> Cadastrar
              </a>
            </>
          )}

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors text-muted-foreground"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              {user ? (
                <button
                  onClick={() => { signOut(); setMenuOpen(false); }}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary py-1"
                >
                  <LogOut className="w-4 h-4" /> Sair
                </button>
              ) : (
                <>
                  <a href="/auth" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary py-1">
                    <LogIn className="w-4 h-4" /> Entrar
                  </a>
                  <a href="/auth?signup=true" className="flex items-center gap-2 text-sm font-medium text-primary py-1">
                    <UserPlus className="w-4 h-4" /> Cadastrar
                  </a>
                </>
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
