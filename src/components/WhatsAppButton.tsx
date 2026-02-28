import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phone = "5511999999999";
  const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
    >
      <MessageCircle className="w-6 h-6 text-foreground" />
    </a>
  );
};

export default WhatsAppButton;
