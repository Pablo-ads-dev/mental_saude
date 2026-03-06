import { useState } from "react";
import { SideBar } from "@/components/SideBar";
import { PlayCircle, Droplets, Moon, Brain, CheckCircle2, Wind } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function Dash() {
    const [mood, setMood] = useState<number | null>(null);

    const moods = [
        { emoji: "😔", label: "Triste", value: 1 },
        { emoji: "😐", label: "Ok", value: 2 },
        { emoji: "🙂", label: "Bem", value: 3 },
        { emoji: "😊", label: "Ótimo", value: 4 },
        { emoji: "🤩", label: "Radiante", value: 5 },
    ];

    return (
        <div className="flex min-h-screen w-full bg-background selection:bg-primary/20">
            <SideBar />
            
            <main className="flex-1 md:ml-64 pb-24 md:pb-8 transition-all duration-300 p-6 space-y-8">
                {/* 1. Header de Acolhimento - Usando font-display */}
                <header className="p-8 rounded-[--radius] bg-card shadow-card border border-border/50">
                    <h1 className="text-4xl font-display font-extrabold text-foreground">
                        Olá, <span className="text-gradient-purple">USUÁRIO</span>
                    </h1>
                    <p className="text-muted-foreground mt-2 text-lg font-medium">Como está sua mente hoje?</p>

                    <div className="flex justify-between mt-8 bg-muted/50 p-6 rounded-2xl border border-border">
                        {moods.map((m) => (
                            <button
                                key={m.value}
                                onClick={() => setMood(m.value)}
                                className={`flex flex-col items-center gap-2 transition-all duration-500 ${
                                    mood === m.value 
                                    ? "scale-110 drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]" 
                                    : "grayscale opacity-50 hover:opacity-100 hover:grayscale-0 hover:scale-105"
                                }`}
                            >
                                <span className="text-4xl">{m.emoji}</span>
                                <span className={`text-[10px] font-bold uppercase tracking-widest ${mood === m.value ? "text-primary" : "text-muted-foreground"}`}>
                                    {m.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* 2. Progresso Diário */}
                    <section className="space-y-4">
                        <h2 className="font-display font-bold text-foreground text-xl px-2">Progresso Diário</h2>
                        <Card className="glass-card shadow-card hover:shadow-card-hover transition-all duration-500 rounded-[--radius]">
                            <CardContent className="p-8 space-y-8">
                                <div className="flex justify-between items-end">
                                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-tighter">Meta Diária</span>
                                    <span className="text-2xl font-display font-black text-primary">65%</span>
                                </div>
                                <Progress value={65} className="h-4 bg-muted" />

                                <div className="grid grid-cols-3 gap-6">
                                    <HabitIcon icon={<Droplets className="text-purple-medium" />} label="Água" done />
                                    <HabitIcon icon={<Wind className="text-purple-light" />} label="Meditar" />
                                    <HabitIcon icon={<Moon className="text-purple-dark" />} label="Sono" done />
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* 3. Card de Cursos - Estilo Dark com seu Gradient Hero */}
                    <section className="space-y-4">
                        <h2 className="font-display font-bold text-foreground text-xl px-2">Sua Jornada</h2>
                        <Card className="overflow-hidden border-none shadow-card-hover gradient-hero text-white h-[240px] rounded-[--radius] relative group">
                            <CardContent className="relative z-20 p-8 h-full flex flex-col justify-between">
                                <div>
                                    <div className="bg-white/20 w-fit px-3 py-1 rounded-full backdrop-blur-md mb-3">
                                        <span className="text-[10px] uppercase tracking-[0.2em] font-black text-white">Em andamento</span>
                                    </div>
                                    <h3 className="text-2xl font-display font-bold leading-tight">Equilíbrio e Ansiedade</h3>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                                        <PlayCircle size={18} />
                                        <span>Aula 03 • 5 min restantes</span>
                                    </div>
                                    <Button className="bg-white text-purple-dark hover:bg-white/90 font-bold rounded-xl px-6 shadow-xl">
                                        Continuar
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                </div>

                {/* 4. Insight do Dia com estilo Glass */}
                <section>
                    <div className="p-10 rounded-[--radius] glass-card border-primary/20 shadow-card relative overflow-hidden group">
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                            <div className="bg-primary/10 p-5 rounded-3xl group-hover:rotate-12 transition-transform duration-500">
                                <Brain className="text-primary" size={40} />
                            </div>
                            <div className="text-center md:text-left">
                                <p className="text-2xl md:text-3xl font-display font-bold text-foreground leading-tight italic">
                                    "Cuidar da mente é um ato de <span className="text-gradient-purple">coragem.</span>"
                                </p>
                                <p className="text-muted-foreground text-sm mt-3 font-semibold tracking-wide">— Pílula de Autocuidado MenteSã</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

function HabitIcon({ icon, label, done = false }: { icon: React.ReactNode, label: string, done?: boolean }) {
    return (
        <div className="flex flex-col items-center gap-3 group cursor-pointer">
            <div className={`p-5 rounded-3xl relative transition-all duration-500 ${
                done 
                ? "bg-primary/10 border-2 border-primary/20 shadow-inner" 
                : "bg-background border-2 border-border shadow-sm hover:border-primary/50 hover:shadow-card"
            }`}>
                <div className={`transition-transform duration-500 ${done ? "scale-90 opacity-80" : "group-hover:scale-110"}`}>
                    {icon}
                </div>
                {done && (
                    <div className="absolute -top-2 -right-2 bg-primary rounded-full p-1.5 text-white shadow-lg border-2 border-card">
                        <CheckCircle2 size={12} strokeWidth={4} />
                    </div>
                )}
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${done ? "text-primary" : "text-muted-foreground"}`}>
                {label}
            </span>
        </div>
    );
}