import React, { useState } from 'react';
import { Shield, Lock, Check, X } from 'lucide-react';

const DefineAccessControl = () => {
  const [permissions, setPermissions] = useState([
    { id: 1, role: 'Customer', dashboard: true, bookings: false, users: false, settings: false },
    { id: 2, role: 'Technician', dashboard: true, bookings: true, users: false, settings: false },
    { id: 3, role: 'Admin', dashboard: true, bookings: true, users: true, settings: false },
    { id: 4, role: 'Superadmin', dashboard: true, bookings: true, users: true, settings: true },
  ]);

  const togglePermission = (roleId, permission) => {
    setPermissions(permissions.map(p => {
      if (p.id === roleId) {
        return { ...p, [permission]: !p[permission] };
      }
      return p;
    }));
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
          <Lock className="h-8 w-8 text-purple-600" />
          Define Access Control
        </h1>
        <p className="text-slate-500 mt-2">Configure permissions for each user role</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="text-left p-6 text-sm font-bold text-slate-700">Role</th>
                <th className="text-center p-6 text-sm font-bold text-slate-700">View Dashboard</th>
                <th className="text-center p-6 text-sm font-bold text-slate-700">Manage Bookings</th>
                <th className="text-center p-6 text-sm font-bold text-slate-700">Manage Users</th>
                <th className="text-center p-6 text-sm font-bold text-slate-700">System Settings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {permissions.map(perm => (
                <tr key={perm.id}>
                  <td className="p-6 font-bold text-slate-900">{perm.role}</td>
                  <td className="p-6 text-center">
                    <button
                      onClick={() => togglePermission(perm.id, 'dashboard')}
                      className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto ${perm.dashboard ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}
                    >
                      {perm.dashboard ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                    </button>
                  </td>
                  <td className="p-6 text-center">
                    <button
                      onClick={() => togglePermission(perm.id, 'bookings')}
                      className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto ${perm.bookings ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}
                    >
                      {perm.bookings ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                    </button>
                  </td>
                  <td className="p-6 text-center">
                    <button
                      onClick={() => togglePermission(perm.id, 'users')}
                      className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto ${perm.users ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}
                    >
                      {perm.users ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                    </button>
                  </td>
                  <td className="p-6 text-center">
                    <button
                      onClick={() => togglePermission(perm.id, 'settings')}
                      className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto ${perm.settings ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}
                    >
                      {perm.settings ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DefineAccessControl;
