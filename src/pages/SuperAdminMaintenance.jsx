import React, { useState } from 'react';
import { Database, RefreshCcw, MessageSquare, Activity, CheckCircle, AlertCircle } from 'lucide-react';

const SuperAdminMaintenance = () => {
  const [systemStatus, setSystemStatus] = useState('healthy');
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: 'System Update', text: 'New features coming soon!', active: true, date: 'Jun 15, 2026' },
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Platform Maintenance</h1>
        <p className="text-slate-500 mt-2">Backup, restore, monitor health, and manage announcements</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* System Health */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Activity className="h-6 w-6" />
              System Health
            </h3>
            <div className={`p-4 rounded-2xl border ${systemStatus === 'healthy' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <div className="flex items-center gap-3 mb-2">
                {systemStatus === 'healthy' ? (
                  <CheckCircle className="h-6 w-6 text-green-600" />
                ) : (
                  <AlertCircle className="h-6 w-6 text-red-600" />
                )}
                <span className={`font-bold ${systemStatus === 'healthy' ? 'text-green-700' : 'text-red-700'}`}>
                  {systemStatus.charAt(0).toUpperCase() + systemStatus.slice(1)}
                </span>
              </div>
              <p className="text-sm text-slate-600">All systems operational</p>
              <div className="mt-4 space-y-2 text-xs">
                <p className="flex justify-between"><span>API Server</span><span className="text-green-600 font-semibold">Online</span></p>
                <p className="flex justify-between"><span>Database</span><span className="text-green-600 font-semibold">Connected</span></p>
                <p className="flex justify-between"><span>Storage</span><span className="text-green-600 font-semibold">85% Free</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Database Actions */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Database className="h-6 w-6" />
              Database Operations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-primary-50 hover:border-primary-200 text-left transition-all group">
                <RefreshCcw className="h-8 w-8 text-primary-600 mb-2" />
                <h4 className="font-bold text-slate-900 mb-1">Backup Database</h4>
                <p className="text-sm text-slate-500">Create a complete backup of the entire system</p>
              </button>
              <button className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-orange-50 hover:border-orange-200 text-left transition-all group">
                <Database className="h-8 w-8 text-orange-600 mb-2" />
                <h4 className="font-bold text-slate-900 mb-1">Restore Database</h4>
                <p className="text-sm text-slate-500">Restore from the latest backup file</p>
              </button>
            </div>
          </div>
        </div>

        {/* Announcements */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <MessageSquare className="h-6 w-6" />
                Platform Announcements
              </h3>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all">
                + New Announcement
              </button>
            </div>
            <div className="space-y-4">
              {announcements.map((item) => (
                <div key={item.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`h-3 w-3 rounded-full ${item.active ? 'bg-green-500' : 'bg-slate-400'}`} />
                    <div>
                      <p className="font-bold text-slate-900">{item.title}</p>
                      <p className="text-sm text-slate-600">{item.text}</p>
                      <p className="text-xs text-slate-400 mt-1">{item.date}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${item.active ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-600'}`}>
                    {item.active ? 'Active' : 'Inactive'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminMaintenance;
