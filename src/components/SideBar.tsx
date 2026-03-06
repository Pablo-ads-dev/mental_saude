import { 
  LayoutDashboard, 
  CheckCircle2, 
  GraduationCap, 
  Settings, 
  User,
  LogOut
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function SideBar() {
  const location = useLocation();

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", path: "/dash" },
    { icon: <CheckCircle2 size={20} />, label: "Hábitos", path: "/habitos" },
    { icon: <GraduationCap size={20} />, label: "Cursos", path: "/cursos" },
    { icon: <Settings size={20} />, label: "Configurações", path: "/config" },
    { icon: <User size={20} />, label: "Minha Conta", path: "/perfil" },
  ];

  return (
    <aside className="hidden md:flex h-screen w-64 flex-col bg-sidebar border-r border-sidebar-border fixed left-0 top-0 z-40">
      <div className="p-8">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 bg-primary rounded-xl flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
            <span className="font-display font-bold text-lg">M</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-foreground">
            MenteSã
          </span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                isActive 
                  ? "bg-primary text-primary-foreground shadow-card" 
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-sidebar-border">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-sm font-medium text-destructive hover:bg-destructive/10 rounded-2xl transition-colors">
          <LogOut size={20} />
          Sair da conta
        </button>
      </div>
    </aside>
  );
}