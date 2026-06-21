import { useState, useRef, useEffect, type FormEvent } from "react";
import { HardHat, Send, X, Bot } from "lucide-react";
import { cn } from "../utils/cn";
import { inputClassName } from "./ui";

const WhatsAppIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.482-1.459-1.656-1.756-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

type Message = {
  id: string;
  role: "ai" | "user";
  text: string;
};

export function FloatingWidgets() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "msg-1",
      role: "ai",
      text: "Hello! I am the WATPRO Project AI. What kind of engineering, infrastructure, or consulting requirements can I help you scope today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isChatOpen]);

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { id: `user-${Date.now()}`, role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Mock AI response
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          role: "ai",
          text: "Thank you for sharing your project details. A WATPRO senior consultant will review these requirements. Please use the WhatsApp button below or our Contact page if you need immediate assistance.",
        },
      ]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* AI Chat Modal */}
      {isChatOpen && (
        <div className="mb-2 flex h-[480px] w-[340px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.15)] backdrop-blur-3xl transition-all">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-700 border border-amber-400/30">
                <HardHat className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[13.5px] font-bold text-slate-900">Project AI</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-amber-700">
                  Requirement Scoping
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsChatOpen(false)}
              className="rounded-lg p-1.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50/50">
            <div className="flex flex-col gap-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex max-w-[85%] flex-col gap-1",
                    msg.role === "user" ? "self-end items-end" : "self-start items-start",
                  )}
                >
                  <div
                    className={cn(
                      "rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed shadow-sm",
                      msg.role === "user"
                        ? "rounded-br-sm bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900"
                        : "rounded-bl-sm border border-slate-200 bg-white text-slate-800",
                    )}
                  >
                    {msg.text}
                  </div>
                  <span className="px-1 text-[10px] text-slate-500">
                    {msg.role === "user" ? "You" : "WATPRO AI"}
                  </span>
                </div>
              ))}
              {isTyping && (
                <div className="self-start">
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: "0ms" }} />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Form */}
          <div className="border-t border-slate-200 bg-white p-3">
            <form onSubmit={handleSend} className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your requirements..."
                className={cn(
                  inputClassName,
                  "pr-12 py-2.5 min-h-0 bg-slate-50 rounded-xl border-slate-200 text-slate-900"
                )}
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="absolute right-1.5 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 text-white transition hover:bg-amber-600 disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Buttons */}
      <div className="flex flex-col gap-3">
        {/* AI Chat Button */}
        <button
          type="button"
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="group relative flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-slate-950 border border-white/15 shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all hover:scale-105 hover:border-amber-400/50 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
          aria-label="Open Project AI Chat"
        >
          {isChatOpen ? (
            <X className="h-6 w-6 text-slate-300" />
          ) : (
            <>
              <HardHat className="h-6 w-6 text-amber-400 transition-transform group-hover:scale-110" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-slate-950">
                <Bot className="h-2.5 w-2.5 text-white" />
              </span>
            </>
          )}
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/2348000001201"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_25px_rgba(37,211,102,0.35)] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50"
          style={{ backgroundColor: '#25D366' }}
          aria-label="Contact us on WhatsApp"
        >
          <WhatsAppIcon className="h-7 w-7 transition-transform group-hover:scale-110" style={{ color: '#ffffff' }} />
        </a>
      </div>
    </div>
  );
}
