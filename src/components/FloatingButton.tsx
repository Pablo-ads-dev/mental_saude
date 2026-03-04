import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingButton() {
    function handleChatOpen() {
        alert('abre o chat')
    }

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Button
                onClick={() => handleChatOpen()}
                size="icon"
                className="h-16 w-16 bg-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <MessageCircle className="h-6 w-6" />
            </Button>
        </div>
    )
}