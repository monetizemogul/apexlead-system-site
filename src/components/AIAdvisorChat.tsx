import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  User, 
  Calendar, 
  ChevronDown,
  Minimize2,
  Phone,
  Video
} from 'lucide-react';
import { ChatMessage } from '../types';
import { BUSINESS_INFO } from '../data/mockData';

interface AIAdvisorChatProps {
  onOpenBooking: () => void;
  onOpenScanner: () => void;
}

export const AIAdvisorChat: React.FC<AIAdvisorChatProps> = ({ onOpenBooking, onOpenScanner }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      role: 'assistant',
      content: `👋 Hi! I am ApexAI, the Answer Engine Optimization (AEO) Consultant at ApexLead Systems (HQ in Belleview, MO). We service businesses everywhere via Zoom! How can I help you dominate AI search (ChatGPT, Gemini, Perplexity) or book a Zoom strategy call today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const QUICK_QUESTIONS = [
    'What is Answer Engine Optimization (AEO)?',
    'How do remote Zoom consultations work?',
    'Can I call or text 636-331-5369 directly?',
    'How do your packages & pricing work?',
  ];

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const content = textToSend || input.trim();
    if (!content || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();

      const assistantMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        content: data.content || `ApexLead Systems (HQ in Belleview, MO) provides complete AEO & AI Visibility for small businesses everywhere via Zoom. You can call/text us anytime at ${BUSINESS_INFO.phoneFormatted} or book a 1-on-1 Zoom strategy session!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-err-${Date.now()}`,
          role: 'assistant',
          content: `ApexLead Systems helps local businesses become the #1 recommended answer on ChatGPT, Gemini, and Perplexity. We are based in Belleview, MO and deliver 100% remote strategy via Zoom. Call or text us at ${BUSINESS_INFO.phoneFormatted} or run our free AI Scanner!`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      
      {/* Closed State Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          id="chat-toggle-floating-btn"
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-500 text-white font-bold text-xs sm:text-sm shadow-2xl shadow-indigo-600/40 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <div className="relative">
            <Bot className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border-2 border-slate-950 rounded-full animate-pulse" />
          </div>
          <span className="font-semibold">Ask AEO Consultant</span>
        </button>
      )}

      {/* Open State Chat Drawer */}
      {isOpen && (
        <div className="w-[340px] sm:w-[390px] h-[520px] rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header */}
          <div className="p-3.5 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-slate-950 p-0.5 border border-cyan-500/40 shadow-md shadow-cyan-500/20 overflow-hidden flex-shrink-0 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="ApexLead Systems"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>ApexAI Concierge</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <div className="text-[10px] text-emerald-400 font-medium">
                  AEO & Generative Search Strategist
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Minimize"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-slate-950/60 text-xs">
            {messages.map((m) => {
              const isAi = m.role === 'assistant';
              return (
                <div
                  key={m.id}
                  className={`flex items-start gap-2 ${isAi ? '' : 'flex-row-reverse'}`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px] ${
                      isAi
                        ? 'bg-indigo-600 text-white'
                        : 'bg-emerald-600 text-white'
                    }`}
                  >
                    {isAi ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                  </div>

                  <div
                    className={`p-3 rounded-2xl max-w-[82%] leading-relaxed ${
                      isAi
                        ? 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
                        : 'bg-indigo-600 text-white rounded-tr-none shadow-md'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{m.content}</p>
                    <span className="block text-[9px] text-slate-400 mt-1 opacity-70">
                      {m.timestamp}
                    </span>
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex items-center gap-2 text-slate-400 text-xs pl-2">
                <Bot className="w-3.5 h-3.5 text-indigo-400 animate-spin" />
                <span>ApexAI is thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="p-2 bg-slate-950 border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {QUICK_QUESTIONS.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(q)}
                className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 hover:border-indigo-500/50 text-slate-300 hover:text-white text-[10px] whitespace-nowrap transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about AEO, Zoom sessions, or 636-331-5369..."
              className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={isLoading || !input.trim()}
              className="p-2 rounded-xl bg-gradient-to-r from-indigo-600 to-emerald-500 text-white disabled:opacity-40 transition-opacity"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

    </div>
  );
};

