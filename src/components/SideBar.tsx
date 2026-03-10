import {
  LayoutDashboard,
  CheckCircle2,
  GraduationCap,
  Settings,
  User,
  LogOut
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu, X } from "lucide-react"; // Importe novos ícones se quiser um menu lateral mobile, mas a Bottom Bar é melhor
import { ThemeToggle } from "./ThemeToggle";
export function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { signOutUser } = useAuth();

  const handleLogout = async () => {
    const confirmed = window.confirm("Você realmente deseja sair da sua conta?");
    if (confirmed) {
      try {
        await signOutUser();
        navigate("/");
      } catch (error) {
        console.error("Erro ao deslogar:", error);
      }
    }
  };

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Início", path: "/dash" }, // Mudei para "Início" pois cabe melhor na barra
    { icon: <CheckCircle2 size={20} />, label: "Hábitos", path: "/habits" },
    { icon: <GraduationCap size={20} />, label: "Cursos", path: "/courses" },
    { icon: <User size={20} />, label: "Perfil", path: "/profile" },
  ];

  return (
    <>
    <ThemeToggle/>
      {/* --- DESKTOP SIDEBAR (Visível apenas em md:) --- */}
      <aside className="hidden md:flex h-screen w-64 flex-col bg-sidebar border-r border-sidebar-border fixed left-0 top-0 z-40">
        <div className="p-8">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 bg-primary rounded-xl flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
              <span className="font-display font-bold text-lg">M</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-foreground">MenteSã</span>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${isActive ? "bg-primary text-primary-foreground shadow-card" : "text-muted-foreground hover:bg-accent"
                  }`}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-sidebar-border">
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 w-full text-sm font-medium text-destructive hover:bg-destructive/10 rounded-2xl transition-colors">
            <LogOut size={20} />
            Sair da conta
          </button>
        </div>
      </aside>

      {/* --- MOBILE BOTTOM BAR (Visível apenas abaixo de md:) --- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-t border-border px-2 pb-safe">
        <nav className="flex justify-around items-center h-16">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center gap-1 transition-colors ${isActive ? "text-primary" : "text-muted-foreground"
                  }`}
              >
                <div className={`p-1 rounded-xl transition-all ${isActive ? "bg-primary/10 scale-110" : ""}`}>
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-tighter">
                  {item.label}
                </span>
              </Link>
            );
          })}
          {/* Botão de Sair reduzido para o mobile */}
          <button onClick={handleLogout} className="flex flex-col items-center justify-center gap-1 text-destructive/70">
            <LogOut size={20} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Sair</span>
          </button>
        </nav>
      </div>
    </>
  );
}