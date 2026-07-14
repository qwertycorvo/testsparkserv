import React, { useState, useRef, useEffect } from 'react';
import { Send, PlusCircle, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useData } from '../context/DataContext';
import { useAuth } from '../context/AuthContext';

const LiveChat = () => {
  const { user } = useAuth();
  const { repairRequests, chatMessages, sendChatMessage, updateRepairProgress, repairProgress } = useData();
  const [selectedRequestId, setSelectedRequestId] = useState(repairRequests[0]?.id);
  const [input, setInput] = useState('');
  const [progressInput, setProgressInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const selectedRequest = repairRequests.find(req => req.id === selectedRequestId);
  const requestMessages = chatMessages.filter(msg => msg.repairRequestId === selectedRequestId);
  const requestProgress = repairProgress.filter(p => p.repairRequestId === selectedRequestId);

  const handleSend = () => {
    if (input.trim()) {
      sendChatMessage({
        repairRequestId: selectedRequestId,
        sender: user.name,
        role: user.role,
        text: input,
      });
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleUpdateProgress = () => {
    if (progressInput.trim()) {
      updateRepairProgress({
        repairRequestId: selectedRequestId,
        status: progressInput,
        updatedBy: user.name,
      });
      setProgressInput('');
    }
  };

  return (
    <div className="max-w-6xl mx-auto h-[calc(100vh-8rem)] flex gap-6">
      {/* Repair Requests List */}
      <div className="w-80 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary-600" />
            Repair Requests
          </h2>
        </div>
        <div className="p-4 flex-1 overflow-y-auto space-y-3">
          {repairRequests.map(req => (
            <div
              key={req.id}
              onClick={() => setSelectedRequestId(req.id)}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedRequestId === req.id ? 'border-primary-500 bg-primary-50' : 'border-slate-100 hover:border-slate-200'}`}
            >
              <div className="flex items-start justify-between mb-2">
                <p className="font-bold text-slate-900">{req.id}</p>
                <span className="text-xs px-2 py-1 rounded-full font-bold bg-blue-100 text-blue-600">
                  {req.status}
                </span>
              </div>
              <p className="text-sm text-slate-700 font-medium">{req.appliance}</p>
              <p className="text-xs text-slate-500 mt-1">{req.customer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chat and Progress Area */}
      <div className="flex-1 flex flex-col gap-4">
        {selectedRequest && (
          <>
            {/* Request Info */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{selectedRequest.id}</h2>
                  <p className="text-sm text-slate-500">
                    {selectedRequest.customer} • {selectedRequest.appliance} • {selectedRequest.problem}
                  </p>
                </div>
                {selectedRequest.technician && (
                  <div className="text-sm text-slate-700">
                    <span className="font-bold">Technician:</span> {selectedRequest.technician}
                  </div>
                )}
              </div>
            </div>

            {/* Progress Updates */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                Repair Progress
              </h3>
              <div className="space-y-3">
                {requestProgress.map(p => (
                  <div key={p.id} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900">{p.status}</p>
                      <p className="text-xs text-slate-500">
                        {p.updatedBy} • {new Date(p.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {(user.role === 'technician' || user.role === 'admin' || user.role === 'system_admin') && (
                <div className="mt-4 flex gap-3">
                  <input
                    type="text"
                    value={progressInput}
                    onChange={(e) => setProgressInput(e.target.value)}
                    placeholder="Update progress (e.g., 'Parts replaced, testing now')"
                    className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-500"
                  />
                  <button
                    onClick={handleUpdateProgress}
                    className="px-6 py-3 rounded-xl bg-primary-600 text-white font-bold hover:bg-primary-700 transition-all"
                  >
                    Update
                  </button>
                </div>
              )}
            </div>

            {/* Chat */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm flex-1 flex flex-col overflow-hidden">
              <div className="p-4 border-b border-slate-100">
                <h3 className="font-bold text-slate-900">Live Chat</h3>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {requestMessages.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-slate-500">No messages yet. Start the conversation!</p>
                  </div>
                ) : (
                  requestMessages.map(msg => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === user.name ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-2xl p-4 ${
                          msg.sender === user.name
                            ? 'bg-primary-600 text-white'
                            : msg.role === 'technician'
                            ? 'bg-orange-100 text-slate-900'
                            : msg.role === 'admin' || msg.role === 'system_admin'
                            ? 'bg-purple-100 text-slate-900'
                            : 'bg-slate-100 text-slate-900'
                        }`}
                      >
                        <div className="text-xs opacity-75 mb-1 font-semibold">
                          {msg.sender}
                        </div>
                        <p className="text-sm">{msg.text}</p>
                        <div className="text-xs opacity-50 mt-1">
                          {new Date(msg.timestamp).toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  ))
                )}
                <div ref={messagesEndRef} />
              </div>
              <div className="p-4 border-t border-slate-100">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-500"
                  />
                  <button
                    onClick={handleSend}
                    className="px-6 py-3 rounded-xl bg-primary-600 text-white font-bold flex items-center gap-2 hover:bg-primary-700 transition-all"
                  >
                    <Send className="h-4 w-4" />
                    Send
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LiveChat;
