import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Heart, Send, User } from "lucide-react";

const AIDoctor = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content: "Hello! I'm your AI Health Assistant. I have access to your health profile and can provide personalized medical guidance. How can I help you today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newUserMessage = {
      id: messages.length + 1,
      role: "user",
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newUserMessage]);
    setInputMessage("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        role: "assistant",
        content: getAIResponse(inputMessage),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const getAIResponse = (query) => {
    // Placeholder AI responses
    const responses = [
      "Based on your health profile, I recommend focusing on a balanced diet rich in vegetables and lean proteins. Your current weight of 73.2 kg is trending in the right direction.",
      "Given your pre-diabetic status from your recent lab report, it's important to maintain stable blood sugar levels. I suggest limiting simple carbohydrates and focusing on whole grains.",
      "Your blood pressure readings look good. Continue with your current diet and exercise routine. Remember to stay hydrated and limit sodium intake.",
      "For your heart health, I recommend incorporating more Omega-3 rich foods like salmon, which I see you've been enjoying from your recent meal plans.",
      "Based on your activity level and goals, your current calorie intake of 1800 calories per day is appropriate for gradual, sustainable weight loss."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const quickQuestions = [
    "What should I eat for breakfast?",
    "Explain my recent lab results",
    "Tips for better sleep",
    "Is my weight progress healthy?"
  ];

  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-12rem)] flex flex-col">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-foreground mb-2">AI Health Assistant</h1>
          <p className="text-muted-foreground text-lg">Get instant medical guidance based on your health profile</p>
        </div>

        <Card className="glass-card flex-1 flex flex-col">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <Avatar className={`h-10 w-10 flex-shrink-0 ${
                  message.role === 'assistant' 
                    ? 'bg-gradient-to-br from-primary to-primary-glow' 
                    : 'bg-gradient-to-br from-secondary to-blue-500'
                }`}>
                  <div className="h-full w-full flex items-center justify-center">
                    {message.role === 'assistant' ? (
                      <Heart className="h-5 w-5 text-white" />
                    ) : (
                      <User className="h-5 w-5 text-white" />
                    )}
                  </div>
                </Avatar>

                <div className={`flex-1 ${message.role === 'user' ? 'text-right' : ''}`}>
                  <div
                    className={`inline-block max-w-[80%] p-4 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-gradient-to-br from-primary to-primary-glow text-white'
                        : 'glass-card'
                    }`}
                  >
                    <p className={message.role === 'user' ? 'text-white' : 'text-foreground'}>
                      {message.content}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{message.timestamp}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-6 pb-4">
              <p className="text-sm text-muted-foreground mb-3">Quick questions:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="text-sm h-auto py-3 px-4 hover:bg-primary hover:text-white smooth-transition"
                    onClick={() => setInputMessage(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-6 border-t border-border">
            <div className="flex gap-3">
              <Input
                placeholder="Ask me anything about your health..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="glass-input flex-1 h-12"
              />
              <Button
                className="medical-gradient text-white h-12 px-6"
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              AI responses are for informational purposes only. Always consult healthcare professionals for medical advice.
            </p>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AIDoctor;
