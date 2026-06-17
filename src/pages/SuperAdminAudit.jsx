import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SuperAdminAudit = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const logs = [
    { id: 1, date: 'June 16, 2026', time: '10:30 AM', user: 'Super Admin', action: 'Create Admin Account', details: 'Created new admin: Juan Dela Cruz' },
    { id: 2, date: 'June 16, 2026', time: '9:15 AM', user: 'Admin Maria', action: 'Approve Booking', details: 'Approved booking #BR-1029' },
    { id: 3, date: 'June 16, 2026', time: '8:00 AM', user: 'Admin Peter', action: 'Update Job', details: 'Updated Job #SR-1025 to In-Progress' },
    { id: 4, date: 'June 15, 2026', time: '3:45 PM', user: 'Admin Maria', action: 'Approve Technician', details: 'Approved technician John application' },
    { id: 5, date: 'June 15, 2026', time: '11:20 AM', user: 'Admin Peter', action: 'Assign Technician', details: 'Assigned Maria to job #SR-1027' },
    { id: 6, date: 'June 14, 2026', time: '2:00 PM', user: 'Super Admin', action: 'System Update', details: 'Updated service fees configuration' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Audit Logs</h1>
        <p className="text-slate-500 mt-2">Complete history of all important system actions</p>
      </div>

      {/* Search */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search logs by user, action, or details..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:border-primary-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Logs List */}
      <div className="space-y-4">
        {logs.map((log, i) => (
          <div key={log.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <p className="text-sm font-bold text-slate-500">{log.date} • {log.time}</p>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider">
                {log.user}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">{log.action}</h3>
            <p className="text-slate-600">{log.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuperAdminAudit;
