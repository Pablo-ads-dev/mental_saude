import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function FloatingChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { id: 1, text: "Olá! Como posso ajudar você hoje?", sender: "bot" },
    ]);

    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll para a última mensagem sempre que a lista mudar
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    // 1. Adicione o useRef para o timer no topo do componente
    const botTimerRef = useRef<NodeJS.Timeout | null>(null);

    const handleSendMessage = () => {
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), text: input, sender: "user" };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");

        if (botTimerRef.current) {
            clearTimeout(botTimerRef.current);
        }

        botTimerRef.current = setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 1,
                    text: "Recebi suas mensagens! Estou analisando tudo e já te respondo.",
                    sender: "bot"
                }
            ]);

            botTimerRef.current = null;
        }, 1500);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleSendMessage();
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            {isOpen && (
                <Card className="w-80 h-[450px] shadow-2xl border-primary/20 flex flex-col animate-in slide-in-from-bottom-5 duration-300">
                    {/* Header */}
                    <CardHeader className="bg-primary text-primary-foreground p-4 flex flex-row items-center justify-between rounded-t-lg shrink-0">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <h3 className="font-semibold text-sm">Suporte Online</h3>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 hover:bg-white/20 text-white border-none"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </CardHeader>

                    {/* Área de Mensagens */}
                    <CardContent
                        ref={scrollRef}
                        className="flex-1 p-4 overflow-y-auto bg-slate-50 flex flex-col gap-3 custom-scrollbar"
                    >
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === "user"
                                    ? "bg-primary text-primary-foreground self-end rounded-br-none"
                                    : "bg-white border text-slate-700 self-start rounded-bl-none shadow-sm"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </CardContent>

                    {/* Input de Mensagem */}
                    <CardFooter className="p-3 rounded-b-lg border-t bg-white gap-2">
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Digite sua mensagem..."
                            className="flex-1 focus-visible:ring-primary"
                        />
                        <Button size="icon" onClick={handleSendMessage} disabled={!input.trim()}>
                            <Send className="h-4 w-4" />
                        </Button>
                    </CardFooter>
                </Card>
            )}

            {/* Botão Flutuante Principal */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                size="icon"
                className={`h-16 w-16 shadow-2xl transition-all duration-500 rounded-full ${isOpen ? "rotate-90 bg-red-600 hover:bg-red-700" : "bg-primary hover:scale-110"
                    }`}
            >
                {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageCircle className="h-6 w-6 text-white" />}
            </Button>
        </div>
    );
}