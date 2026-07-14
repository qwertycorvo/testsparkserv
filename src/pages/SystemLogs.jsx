import React from 'react';
import { FileTextIcon, Clock, User, AlertCircle, CheckCircle } from 'lucide-react';

const SystemLogs = () => {
  const logs = [
    { id: 1, timestamp: new Date(Date.now() - 300000), user: 'John Technician', action: 'Updated repair progress', type: 'info' },
    { id: 2, timestamp: new Date(Date.now() - 600000), user: 'Jane Customer', action: 'Submitted repair request', type: 'info' },
    { id: 3, timestamp: new Date(Date.now() - 900000), user: 'Admin User', action: 'Approved booking', type: 'success' },
    { id: 4, timestamp: new Date(Date.now() - 1200000), user: 'System', action: 'User logged in', type: 'warning' },
    { id: 5, timestamp: new Date(Date.now() - 1500000), user: 'Superadmin', action: 'Changed system config', type: 'info' },
  ];

  const getLogIcon = (type) => {
    if (type === 'success') return <CheckCircle className="h-5 w-5 text-green-600" />;
    if (type === 'warning') return <AlertCircle className="h-5 w-5 text-yellow-600" />;
    return <Clock className="h-5 w-5 text-slate-400" />;
  };

  const getLogBg = (type) => {
    if (type === 'success') return 'bg-green-50 border-green-100';
    if (type === 'warning') return 'bg-yellow-50 border-yellow-100';
    return 'bg-white border-slate-100';
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
          <FileTextIcon className="h-8 w-8 text-purple-600" />
          View System Logs
        </h1>
        <p className="text-slate-500 mt-2">Audit trail of all system activities and changes</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-lg font-bold text-slate-900">Recent Activity</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {logs.map(log => (
            <div key={log.id} className={`p-6 flex items-start gap-4 ${getLogBg(log.type)}`}>
              {getLogIcon(log.type)}
              <div className="flex-1">
                <p className="font-semibold text-slate-900">{log.action}</p>
                <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                  <User className="h-3 w-3" />
                  <span>by {log.user}</span>
                  <span>•</span>
                  <Clock className="h-3 w-3" />
                  <span>{log.timestamp.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemLogs;
