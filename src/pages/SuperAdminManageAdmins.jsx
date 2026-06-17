import React, { useState } from 'react';
import { Plus, Edit3, Ban, Key, User, Mail, Search } from 'lucide-react';

const SuperAdminManageAdmins = () => {
  const [admins, setAdmins] = useState([
    { id: 1, name: 'Maria Santos', email: 'maria@sparkserv.com', status: 'active', lastLogin: 'Jun 16, 2026' },
    { id: 2, name: 'Peter Lim', email: 'peter@sparkserv.com', status: 'active', lastLogin: 'Jun 15, 2026' },
    { id: 3, name: 'Anna Cruz', email: 'anna@sparkserv.com', status: 'disabled', lastLogin: 'May 20, 2026' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Manage Admin Accounts</h1>
          <p className="text-slate-500 mt-2">Create, edit, and manage all SparkServ admin accounts</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 shadow-lg shadow-primary-200 transition-all"
        >
          <Plus className="h-5 w-5" />
          New Admin
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search admin name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:border-primary-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Admin List */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Admin</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Last Login</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {admins.map((admin) => (
                <tr key={admin.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                        {admin.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{admin.name}</p>
                        <p className="text-xs text-slate-500 flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {admin.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      admin.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {admin.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-slate-600">{admin.lastLogin}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-xl hover:bg-blue-50 text-blue-600 transition-all" title="Edit">
                        <Edit3 className="h-4 w-4" />
                      </button>
                      <button className="p-2 rounded-xl hover:bg-yellow-50 text-yellow-600 transition-all" title="Reset Password">
                        <Key className="h-4 w-4" />
                      </button>
                      <button className="p-2 rounded-xl hover:bg-red-50 text-red-600 transition-all" title={admin.status === 'active' ? 'Disable' : 'Enable'}>
                        <Ban className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Admin Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">Create Admin Account</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-1 block">Full Name</label>
                <input
                  type="text"
                  placeholder="Juan Dela Cruz"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:border-primary-500 transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-1 block">Email Address</label>
                <input
                  type="email"
                  placeholder="juan@sparkserv.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:border-primary-500 transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-1 block">Temporary Password</label>
                <input
                  type="text"
                  placeholder="Set a temporary password"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:border-primary-500 transition-all"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuperAdminManageAdmins;
