import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const SystemSettings = () => {
  const { user, setUser } = useAuth();
  const [settings, setSettings] = useState({
    companyName: 'SPARKSERV',
    businessHours: 'Mon-Sat: 8:00 AM - 6:00 PM',
    supportEmail: 'support@sparkserv.com',
    supportPhone: '+63 917 123 4567',
    autoAssignTech: true,
    requirePayment: true,
    defaultPaymentMethod: 'gcash',
  });

  const handleRoleChange = (newRole) => {
    setUser({ ...user, role: newRole });
  };

  const handleSettingChange = (key, value) => {
    setSettings({ ...settings, [key]: value });
  };

  const roleOptions = [
    { id: 'customer', name: 'Customer' },
    { id: 'technician', name: 'Technician' },
    { id: 'admin', name: 'Admin' },
    { id: 'system_admin', name: 'System Administrator' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">System Settings</h1>
        <p className="text-slate-500 mt-2">Configure your system preferences and settings</p>
      </div>

      {/* Role Switcher */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Role Switcher (Demo)</h2>
        <p className="text-slate-600 mb-6">Quickly switch between different user roles for testing purposes</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {roleOptions.map(role => (
            <button
              key={role.id}
              onClick={() => handleRoleChange(role.id)}
              className={`p-6 rounded-2xl border-2 text-left transition-all ${
                user?.role === role.id
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-slate-100 hover:border-slate-200'
              }`}
            >
              <p className="font-bold text-slate-900">{role.name}</p>
              <p className="text-xs text-slate-500 mt-1">
                {role.id === 'customer' && 'Request repairs and track progress'}
                {role.id === 'technician' && 'Manage assigned jobs'}
                {role.id === 'admin' && 'Review bookings and confirm payments'}
                {role.id === 'system_admin' && 'Full system control'}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Company Settings */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Company Settings</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
            <input
              type="text"
              value={settings.companyName}
              onChange={(e) => handleSettingChange('companyName', e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Business Hours</label>
            <input
              type="text"
              value={settings.businessHours}
              onChange={(e) => handleSettingChange('businessHours', e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-500"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Support Email</label>
              <input
                type="email"
                value={settings.supportEmail}
                onChange={(e) => handleSettingChange('supportEmail', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Support Phone</label>
              <input
                type="tel"
                value={settings.supportPhone}
                onChange={(e) => handleSettingChange('supportPhone', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* System Features */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6">System Features</h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-slate-900">Auto-assign Technicians</p>
              <p className="text-sm text-slate-500">Automatically assign technicians to new requests</p>
            </div>
            <button
              onClick={() => handleSettingChange('autoAssignTech', !settings.autoAssignTech)}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.autoAssignTech ? 'bg-primary-600' : 'bg-slate-300'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                settings.autoAssignTech ? 'ml-7' : 'ml-0.5'
              }`} />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-slate-900">Require Payment Confirmation</p>
              <p className="text-sm text-slate-500">Require customers to confirm payment before booking</p>
            </div>
            <button
              onClick={() => handleSettingChange('requirePayment', !settings.requirePayment)}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.requirePayment ? 'bg-primary-600' : 'bg-slate-300'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                settings.requirePayment ? 'ml-7' : 'ml-0.5'
              }`} />
            </button>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Default Payment Method</label>
            <select
              value={settings.defaultPaymentMethod}
              onChange={(e) => handleSettingChange('defaultPaymentMethod', e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-500"
            >
              <option value="gcash">GCash</option>
              <option value="cash">Cash on Hand</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </div>
        </div>
      </div>

      <button
        onClick={() => alert('Settings saved successfully!')}
        className="w-full bg-primary-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary-200 hover:bg-primary-700 transition-all"
      >
        Save Settings
      </button>
    </div>
  );
};

export default SystemSettings;
