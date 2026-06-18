import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';

const TroubleshootingGuide = () => {
  const navigate = useNavigate();
  const { standardPricing, applianceTypes, commonProblems, technicians, repairRequests } = useData();
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'bot',
      text: "Hello! 👋 I'm your SparkServ service assistant. How can I help you today? You can ask me about:\n\n• Appliance troubleshooting\n• Service pricing\n• Our technicians\n• Repair requests\n• Booking a service",
    },
  ]);
  const [input, setInput] = useState('');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { id: messages.length + 1, role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    const userInput = input.toLowerCase();
    setInput('');
    setTimeout(() => {
      const botResponse = getBotResponse(userInput);
      setMessages(prev => [...prev, { id: prev.length + 1, role: 'bot', text: botResponse }]);
    }, 500);
  };

  const getBotResponse = (input) => {
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! How can I assist you today? Feel free to ask about our services, appliances, pricing, or technicians.";
    }
    if (input.includes('price') || input.includes('cost') || input.includes('how much')) {
      let response = "Here are our standard service prices:\n\n";
      standardPricing.forEach(p => {
        response += `• ${p.service}: ${p.price}\n`;
      });
      response += "\nWould you like to know more about any specific service?";
      return response;
    }
    if (input.includes('appliance') || input.includes('aircon') || input.includes('refrigerator') || input.includes('washing') || input.includes('fan') || input.includes('tv')) {
      let response = "We service the following appliances:\n\n";
      applianceTypes.forEach(a => {
        response += `• ${a.name} (${a.category})\n`;
      });
      if (input.includes('trouble') || input.includes('problem') || input.includes('not working')) {
        response += "\nWould you like troubleshooting tips for a specific appliance?";
      }
      return response;
    }
    if (input.includes('troubleshoot') || input.includes('fix') || input.includes('repair') || input.includes('problem')) {
      for (const [appliance, problems] of Object.entries(commonProblems)) {
        if (input.includes(appliance.toLowerCase().replace(' ', ''))) {
          let response = `Here are common problems for ${appliance}:\n\n`;
          problems.forEach(p => {
            response += `• ${p.name}:\n`;
            p.tips.forEach(tip => response += `  - ${tip}\n`);
          });
          response += "\nWould you like to request a repair if these steps don't help?";
          return response;
        }
      }
      return "Which appliance are you having trouble with? We can help with Air Conditioner, Refrigerator, Washing Machine, Electric Fan, and Television.";
    }
    if (input.includes('technician') || input.includes('tech')) {
      let response = "Our available technicians:\n\n";
      technicians.filter(t => t.available).forEach(t => {
        response += `• ${t.name}\n  - Expertise: ${t.expertise.join(', ')}\n  - Rating: ${t.rating}★\n  - Completed jobs: ${t.completedJobs}\n  - Area: ${t.area}\n`;
      });
      return response;
    }
    if (input.includes('request') || input.includes('book') || input.includes('schedule')) {
      return "Great! You can request a repair by clicking the 'Request Repair' button at the top right, or I can guide you there. Would you like to proceed?";
    }
    if (input.includes('status') || input.includes('track') || input.includes('progress')) {
      if (repairRequests.length > 0) {
        let response = "Your repair requests:\n\n";
        repairRequests.forEach(r => {
          response += `• ${r.id}: ${r.appliance} - ${r.problem} (${r.status})\n`;
        });
        return response;
      }
      return "You don't have any active repair requests at the moment.";
    }
    if (input.includes('thank') || input.includes('thanks')) {
      return "You're welcome! Is there anything else I can help you with?";
    }
    if (input.includes('bye') || input.includes('goodbye')) {
      return "Goodbye! Feel free to reach out anytime you need assistance with your appliances.";
    }
    return "I'm here to help! You can ask me about appliance troubleshooting, service prices, our technicians, repair requests, or booking a service. What would you like to know?";
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-8rem)] flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Service Inquiry Chatbot</h1>
          <p className="text-slate-500 mt-2">Ask about our services, appliances, pricing, and more</p>
        </div>
        <button
          onClick={() => navigate('/request')}
          className="bg-primary-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-primary-200 hover:bg-primary-700 transition-all"
        >
          <PlusCircle className="h-5 w-5" />
          Request Repair
        </button>
      </div>
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-4 ${
                  message.role === 'user'
                    ? 'bg-primary-600 text-white'
                    : 'bg-slate-100 text-slate-900'
                }`}
              >
                <div className="whitespace-pre-line">{message.text}</div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-4 border-t border-slate-100">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message here..."
              className="flex-1 px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:border-primary-500"
            />
            <button
              onClick={handleSend}
              className="bg-primary-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-primary-700 transition-all"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TroubleshootingGuide;
