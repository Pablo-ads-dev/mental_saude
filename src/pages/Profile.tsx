import { useState } from "react";
import { SideBar } from "@/components/SideBar";
import { User, Mail, Phone, Lock, Save, X, Edit3, ShieldCheck, Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Utilizando o seu Type
export type Profile = {
    name?: string,
    phone?: string
}

export default function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false);
    const [userProfile, setUserProfile] = useState<Profile>({
        name: "Gabriel Silva",
        phone: "(11) 99999-9999"
    });

    const [email, setEmail] = useState("gabriel@mentesa.com");
    const [password, setPassword] = useState("");

    return (
        <div className="flex min-h-screen bg-background transition-colors duration-500 selection:bg-primary/30">
            <SideBar />

            <main className="flex-1 md:ml-64 p-6 md:p-12 lg:p-20 pb-32">
                <div className="max-w-5xl mx-auto space-y-10">
                    
                    {/* Header com Identidade Visual */}
                    <header className="flex flex-col md:flex-row items-center gap-8 border-b border-border/50 pb-10">
                        <div className="relative group">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] bg-gradient-to-br from-purple-light to-purple-dark p-1 shadow-2xl shadow-primary/20 rotate-0 group-hover:rotate-3 transition-transform duration-500">
                                <div className="w-full h-full rounded-[1.8rem] bg-card flex items-center justify-center overflow-hidden">
                                    <User className="text-muted-foreground w-12 h-12" />
                                </div>
                            </div>
                            <button className="absolute -bottom-2 -right-2 p-3 bg-primary text-white rounded-2xl shadow-xl hover:scale-110 transition-all border-4 border-background">
                                <Camera size={18} />
                            </button>
                        </div>

                        <div className="text-center md:text-left space-y-2">
                            <h1 className="text-4xl md:text-5xl font-display font-black text-foreground tracking-tight">
                                Sua <span className="text-gradient-purple">Conta</span>
                            </h1>
                            <p className="text-muted-foreground text-lg font-medium max-w-md">
                                Gerencie suas informações e mantenha sua conta segura e atualizada.
                            </p>
                        </div>
                    </header>

                    {/* Card de Informações Estilo Glass */}
                    <Card className="glass-card border-border/50 shadow-card rounded-[32px] overflow-hidden relative">
                        {/* Botão de Edição Flutuante Interno */}
                        <div className="absolute top-6 right-6 z-10">
                            {!isEditing ? (
                                <Button 
                                    onClick={() => setIsEditing(true)}
                                    className="bg-primary/10 hover:bg-primary text-primary hover:text-white font-bold rounded-2xl px-4 py-4 h-auto transition-all gap-2"
                                >
                                    <Edit3 size={20} /> Editar Perfil
                                </Button>
                            ) : (
                                <div className="flex gap-3 animate-in fade-in slide-in-from-right-4">
                                    <Button 
                                        onClick={() => setIsEditing(false)} 
                                        variant="ghost" 
                                        className="text-muted-foreground hover:bg-red-700/10 hover:text-red-700 rounded-2xl px-4 py-4 h-auto font-bold"
                                    >
                                        <X size={20} /> Cancelar
                                    </Button>
                                    <Button 
                                        onClick={() => setIsEditing(false)} 
                                        className="bg-primary hover:bg-primary/90 text-white rounded-2xl px-4 py-4 h-auto font-bold shadow-lg shadow-primary/20 gap-2"
                                    >
                                        <Save size={20} /> Salvar Alterações
                                    </Button>
                                </div>
                            )}
                        </div>

                        <CardContent className="p-8 md:p-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                
                                <MenteSaInput 
                                    label="Nome Completo"
                                    icon={<User size={20} />}
                                    isEditing={isEditing}
                                    value={userProfile.name}
                                    onChange={(v) => setUserProfile({...userProfile, name: v})}
                                />

                                {/* <MenteSaInput 
                                    label="E-mail"
                                    icon={<Mail size={20} />}
                                    isEditing={isEditing}
                                    value={email}
                                    onChange={setEmail}
                                    type="email"
                                /> */}

                                <MenteSaInput 
                                    label="Celular"
                                    icon={<Phone size={20} />}
                                    isEditing={isEditing}
                                    value={userProfile.phone}
                                    onChange={(v) => setUserProfile({...userProfile, phone: v})}
                                />

                                {/* <MenteSaInput 
                                    label="Nova Senha"
                                    icon={<Lock size={20} />}
                                    isEditing={isEditing}
                                    value={password}
                                    onChange={setPassword}
                                    placeholder={isEditing ? "Digite para alterar" : "••••••••••••"}
                                    type="password"
                                /> */}
                            </div>

                            {/* Detalhe de Segurança */}
                            <div className="mt-16 p-6 rounded-[24px] bg-primary/5 border border-primary/10 flex items-center justify-between">
                                <div className="flex items-center gap-4 text-primary">
                                    <div className="p-3 bg-primary/10 rounded-2xl">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Privacidade de Dados</p>
                                        <p className="text-xs text-muted-foreground">Suas informações são protegidas por criptografia de ponta.</p>
                                    </div>
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary/40 hidden md:block">
                                    ID: MS-882910
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}

// Subcomponente de Input Estilizado
function MenteSaInput({ label, icon, value, isEditing, onChange, type = "text", placeholder }: any) {
    return (
        <div className="space-y-3 group">
            <label className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/60 ml-2 group-focus-within:text-primary transition-colors">
                {label}
            </label>
            
            <div className={`
                flex items-center gap-4 px-6 py-5 rounded-[22px] border transition-all duration-500
                ${isEditing 
                    ? "bg-card border-primary/40 shadow-[0_10px_30px_rgba(var(--primary),0.1)] ring-4 ring-primary/5" 
                    : "bg-muted/30 border-transparent opacity-80"
                }
            `}>
                <span className={`${isEditing ? 'text-primary' : 'text-muted-foreground'} transition-colors duration-500`}>
                    {icon}
                </span>
                
                <input 
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => onChange(e.target.value)}
                    disabled={!isEditing}
                    className="bg-transparent w-full outline-none text-lg font-bold text-foreground disabled:cursor-not-allowed placeholder:text-muted-foreground/30"
                />
            </div>
        </div>
    );
}