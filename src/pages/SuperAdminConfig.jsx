import React, { useState } from 'react';
import { Plus, Trash2, Check } from 'lucide-react';

const SuperAdminConfig = () => {
  const [serviceCategories, setServiceCategories] = useState(['AC Repair', 'Refrigerator', 'Washing Machine', 'Electric Fan']);
  const [applianceBrands, setApplianceBrands] = useState(['Samsung', 'LG', 'Panasonic', 'Carrier']);
  const [fees, setFees] = useState({ inspection: '300', diagnostic: '500' });
  const [commission, setCommission] = useState(20);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true
  });

  const addCategory = () => {
    const newCat = prompt('Enter new service category');
    if (newCat) setServiceCategories([...serviceCategories, newCat]);
  };
  const addBrand = () => {
    const newBrand = prompt('Enter new appliance brand');
    if (newBrand) setApplianceBrands([...applianceBrands, newBrand]);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">System Configuration</h1>
        <p className="text-slate-500 mt-2">Manage platform settings, categories, and fees</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Service Categories */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900">Service Categories</h3>
            <button
              onClick={addCategory}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all"
            >
              <Plus className="h-4 w-4" />
              Add Category
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {serviceCategories.map((cat, i) => (
              <span key={i} className="px-4 py-2 rounded-xl bg-primary-50 text-primary-700 border border-primary-100 font-medium">
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Appliance Brands */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900">Appliance Brands</h3>
            <button
              onClick={addBrand}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all"
            >
              <Plus className="h-4 w-4" />
              Add Brand
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {applianceBrands.map((brand, i) => (
              <span key={i} className="px-4 py-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 font-medium">
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Repair Fees */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Repair Fees (₱)</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 block">Inspection Fee</label>
              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-semibold">₱</span>
                <input
                  type="number"
                  value={fees.inspection}
                  onChange={(e) => setFees({ ...fees, inspection: e.target.value })}
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:border-primary-500 transition-all"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 block">Diagnostic Fee</label>
              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-semibold">₱</span>
                <input
                  type="number"
                  value={fees.diagnostic}
                  onChange={(e) => setFees({ ...fees, diagnostic: e.target.value })}
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:border-primary-500 transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Commission Rate */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Technician Commission Rate</h3>
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2 block">Commission (%)</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={commission}
                onChange={(e) => setCommission(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:border-primary-500 transition-all"
                min="0"
                max="100"
              />
              <span className="text-slate-500 font-semibold">%</span>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8 lg:col-span-2">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Notification Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="font-semibold text-slate-700">Email Notifications</span>
              <button
                onClick={() => setNotifications({ ...notifications, email: !notifications.email })}
                className={`w-12 h-6 rounded-full p-1 transition-all ${notifications.email ? 'bg-primary-600' : 'bg-slate-300'}`}
              >
                <div className={`w-4 h-4 bg-white rounded-full shadow transition-all ${notifications.email ? 'translate-x-6' : ''}`} />
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="font-semibold text-slate-700">SMS Notifications</span>
              <button
                onClick={() => setNotifications({ ...notifications, sms: !notifications.sms })}
                className={`w-12 h-6 rounded-full p-1 transition-all ${notifications.sms ? 'bg-primary-600' : 'bg-slate-300'}`}
              >
                <div className={`w-4 h-4 bg-white rounded-full shadow transition-all ${notifications.sms ? 'translate-x-6' : ''}`} />
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="font-semibold text-slate-700">Push Notifications</span>
              <button
                onClick={() => setNotifications({ ...notifications, push: !notifications.push })}
                className={`w-12 h-6 rounded-full p-1 transition-all ${notifications.push ? 'bg-primary-600' : 'bg-slate-300'}`}
              >
                <div className={`w-4 h-4 bg-white rounded-full shadow transition-all ${notifications.push ? 'translate-x-6' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="px-8 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 shadow-lg shadow-primary-200 transition-all flex items-center gap-2">
          <Check className="h-5 w-5" />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SuperAdminConfig;
