import React from 'react';
import {
  Users,
  Wrench,
  ClipboardList,
  CheckCircle2,
  TrendingUp,
  Star,
  DollarSign
} from 'lucide-react';

const SuperAdminDashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Platform Analytics</h1>
        <p className="text-slate-500 mt-2">Complete overview of your SparkServ's performance and metrics</p>
      </div>

      {/* Summary Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </div>
          <p className="text-sm font-medium text-slate-500">Total Customers</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">342</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-primary-50 rounded-xl">
              <Wrench className="h-6 w-6 text-primary-600" />
            </div>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </div>
          <p className="text-sm font-medium text-slate-500">Total Technicians</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">20</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-50 rounded-xl">
              <ClipboardList className="h-6 w-6 text-orange-600" />
            </div>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </div>
          <p className="text-sm font-medium text-slate-500">Total Bookings</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">258</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-50 rounded-xl">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </div>
          <p className="text-sm font-medium text-slate-500">Completed Repairs</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">196</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-50 rounded-xl">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </div>
          <p className="text-sm font-medium text-slate-500">Total Revenue</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">₱245,350</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-50 rounded-xl">
              <Star className="h-6 w-6 text-yellow-600" />
            </div>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </div>
          <p className="text-sm font-medium text-slate-500">Avg. Satisfaction</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">4.7/5</p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Recent Platform Activity</h2>
        <div className="space-y-4">
          {[
            { title: 'New customer registered', time: '10 mins ago', type: 'user' },
            { title: 'Technician John completed Job #SR-1024', time: '1 hour ago', type: 'job' },
            { title: 'Admin Peter approved booking #BR-1029', time: '2 hours ago', type: 'admin' },
            { title: 'Customer rating 5', time: '3 hours ago', type: 'rating' },
            { title: 'New admin account created', time: 'Yesterday', type: 'user' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className={`p-2 rounded-xl ${
              item.type === 'user' ? 'bg-blue-50' : item.type === 'job' ? 'bg-green-50' : item.type === 'admin' ? 'bg-orange-50' : 'bg-yellow-50'}`}>
                {item.type === 'user' ? <Users className="h-4 w-4 text-blue-600" :
                 item.type === 'job' ? <CheckCircle2 className="h-4 w-4 text-green-600" :
                 item.type === 'admin' ? <ClipboardList className="h-4 w-4 text-orange-600" :
                 <Star className="h-4 w-4 text-yellow-600"
                 />}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="text-xs text-slate-500">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
