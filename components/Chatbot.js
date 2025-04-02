import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();
      const botMessage = { role: "assistant", content: data.choices[0].message.content };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Fehler beim Abrufen der Antwort:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
        >
          💬 KI Chat
        </button>
      )}

      {isOpen && (
        <div className="w-80 bg-white rounded-lg shadow-lg flex flex-col">
          <div className="bg-blue-900 text-white p-4 flex justify-between items-center rounded-t-lg">
            <h3 className="text-lg font-semibold">Chatbot</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-300"
            >
              ✖
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto" style={{ maxHeight: "300px" }}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 rounded-lg max-w-xs ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                  >
                    {msg.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-center items-center mt-4">
                <div className="loader border-t-4 border-blue-900 border-solid rounded-full w-6 h-6 animate-spin"></div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-200 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault(); // Verhindert einen Zeilenumbruch
                  handleSend();
                }
              }}
              placeholder="Frage etwas..."
              className="flex-grow border border-gray-300 rounded-l-lg p-2"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              className="bg-blue-900 text-white px-4 rounded-r-lg hover:bg-blue-700"
              disabled={isLoading}
            >
              {isLoading ? "..." : "Senden"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

