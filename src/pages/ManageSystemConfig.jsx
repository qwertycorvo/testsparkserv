import React, { useState } from 'react';
import { Cog, Save } from 'lucide-react';

const ManageSystemConfig = () => {
  const [config, setConfig] = useState({
    companyName: 'SparkServ',
    businessHours: 'Mon-Sat: 8:00 AM - 6:00 PM',
    supportEmail: 'support@sparkserv.com',
    supportPhone: '+63 917 123 4567',
    serviceArea: 'Cagayan de Oro City',
    currency: 'PHP',
    timezone: 'Asia/Manila',
  });

  const handleSave = () => {
    alert('System configuration saved successfully!');
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
          <Cog className="h-8 w-8 text-purple-600" />
          Manage System Config
        </h1>
        <p className="text-slate-500 mt-2">Update system-wide settings and preferences</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-semibold text-slate-700 mb-2 block">Company Name</label>
          <input
            type="text"
            value={config.companyName}
            onChange={(e) => setConfig({ ...config, companyName: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-500"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-700 mb-2 block">Business Hours</label>
          <input
            type="text"
            value={config.businessHours}
            onChange={(e) => setConfig({ ...config, businessHours: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-500"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-700 mb-2 block">Support Email</label>
          <input
            type="email"
            value={config.supportEmail}
            onChange={(e) => setConfig({ ...config, supportEmail: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-500"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-700 mb-2 block">Support Phone</label>
          <input
            type="tel"
            value={config.supportPhone}
            onChange={(e) => setConfig({ ...config, supportPhone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-500"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-700 mb-2 block">Service Area</label>
          <input
            type="text"
            value={config.serviceArea}
            onChange={(e) => setConfig({ ...config, serviceArea: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-500"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-700 mb-2 block">Timezone</label>
          <select
            value={config.timezone}
            onChange={(e) => setConfig({ ...config, timezone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-500"
          >
            <option value="Asia/Manila">Asia/Manila</option>
            <option value="Asia/Singapore">Asia/Singapore</option>
            <option value="Asia/Tokyo">Asia/Tokyo</option>
          </select>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={handleSave}
          className="px-8 py-3 rounded-xl bg-primary-600 text-white font-bold flex items-center gap-2 hover:bg-primary-700 transition-all"
        >
          <Save className="h-5 w-5" />
          Save Configuration
        </button>
      </div>
    </div>
  );
};

export default ManageSystemConfig;
