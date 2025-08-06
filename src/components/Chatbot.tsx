import { useState } from "react";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const botResponses = {
  default: "Thanks for your interest! I'm Jonathan's portfolio assistant. You can ask me about his experience, skills, projects, or how to contact him.",
  experience: "Jonathan has several years of experience in software development, specializing in full-stack web development and Linux system administration. He's passionate about open-source technologies and has worked on various projects using React, Node.js, Python, and more.",
  skills: "Jonathan's technical skills include: Frontend development (React, TypeScript, HTML/CSS), Backend development (Node.js, Python, Express), Linux system administration, DevOps practices, Database management (PostgreSQL, MongoDB), and Git version control.",
  projects: "Jonathan has worked on various projects including web applications, automation scripts, and system administration tools. Check out the Projects section above to see his featured work!",
  contact: "You can reach Jonathan through the contact form above, or connect with him on LinkedIn and GitHub. He's always open to discussing new opportunities and interesting projects!",
  linux: "Jonathan is a passionate Linux enthusiast with experience in various distributions including Ubuntu, Arch Linux, and CentOS. He enjoys system administration, shell scripting, and server management.",
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Jonathan's portfolio assistant. Feel free to ask me about his experience, skills, or projects!",
      isBot: true
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("experience") || message.includes("work") || message.includes("background")) {
      return botResponses.experience;
    } else if (message.includes("skill") || message.includes("technology") || message.includes("tech")) {
      return botResponses.skills;
    } else if (message.includes("project") || message.includes("portfolio") || message.includes("work")) {
      return botResponses.projects;
    } else if (message.includes("contact") || message.includes("reach") || message.includes("email")) {
      return botResponses.contact;
    } else if (message.includes("linux") || message.includes("system") || message.includes("admin")) {
      return botResponses.linux;
    } else {
      return botResponses.default;
    }
  };

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false
    };

    const botMessage: Message = {
      id: messages.length + 2,
      text: getBotResponse(inputValue),
      isBot: true
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed top-6 left-6 h-14 w-14 rounded-full shadow-primary transition-all duration-300 ${
          isOpen ? "scale-0" : "scale-100"
        }`}
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat window */}
      {isOpen && (
        <Card className={`fixed top-6 left-6 w-80 h-96 flex flex-col shadow-card transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5 text-primary" />
              <span className="font-semibold">Ask about Jonathan</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.isBot ? (
                      <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    ) : (
                      <User className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    )}
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1"
              />
              <Button onClick={sendMessage} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}