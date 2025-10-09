import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const listRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();
      const botMessage = { role: "assistant", content: data.choices?.[0]?.message?.content ?? "" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Fehler beim Abrufen der Antwort:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Entschuldige, da ist etwas schiefgelaufen. Bitte versuche es erneut." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isLoading, isOpen]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!isOpen ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Chat öffnen"
          className="group inline-flex items-center gap-3 rounded-full bg-brand-accent px-4 py-3 text-brand-primary shadow-card ring-1 ring-white/10 hover:opacity-95 active:opacity-90 transition"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary/20 text-brand-primary">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
              <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 5v-5H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
            </svg>
          </span>
          <span className="hidden sm:block font-semibold">Chat</span>
        </button>
      ) : null}

      {isOpen ? (
        <div
          className="w-[min(92vw,24rem)] sm:w-96 rounded-brand-2xl bg-brand-primary/95 supports-[backdrop-filter]:bg-brand-primary/80 backdrop-blur-md shadow-overlay ring-1 ring-white/10 overflow-hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative flex items-center justify-between px-4 py-3 bg-white/5">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-primary/20 text-brand-accent ring-1 ring-white/10">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                  <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 5v-5H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                </svg>
              </span>
              <h3 className="text-sm font-heading font-semibold">Nexgen Chat</h3>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Chat schließen"
              className="rounded-lg p-2 text-white/80 hover:text-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/60"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div ref={listRef} className="max-h-96 h-96 overflow-y-auto px-3 py-3 space-y-3">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`${
                    msg.role === "user"
                      ? "bg-brand-accent text-brand-primary"
                      : "bg-white/5 text-white/90 ring-1 ring-white/10"
                  } rounded-2xl px-3 py-2 max-w-[80%] whitespace-pre-wrap leading-relaxed shadow-card`}
                >
                  <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                    {msg.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}

            {isLoading ? (
              <div className="flex items-center gap-2 text-white/70">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-accent animate-pulse" aria-hidden="true" />
                <span className="text-sm">Denke nach…</span>
              </div>
            ) : null}
          </div>

          <div className="border-t border-white/10 p-3">
            <div className="flex items-center gap-2 rounded-xl bg-white/5 ring-1 ring-white/10 px-2 py-1 focus-within:ring-brand-accent/50">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Frage stellen…"
                className="flex-1 bg-transparent text-white placeholder-white/50 outline-none px-1 py-2"
                disabled={isLoading}
                aria-label="Nachricht eingeben"
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={isLoading}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-accent text-brand-primary hover:opacity-95 active:opacity-90 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-brand-accent/60"
                aria-label="Nachricht senden"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                  <path d="M3 11l18-8-8 18-2-7-8-3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Chatbot;

