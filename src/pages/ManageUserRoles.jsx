import React, { useState } from 'react';
import { Shield, User, Edit2, Trash2, PlusCircle } from 'lucide-react';

const ManageUserRoles = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Customer', access: ['View Dashboard', 'Request Repair'] },
    { id: 2, name: 'Technician', access: ['View Jobs', 'Update Progress'] },
    { id: 3, name: 'Admin', access: ['View All', 'Manage Bookings'] },
    { id: 4, name: 'Superadmin', access: ['Full Access'] },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [roleName, setRoleName] = useState('');

  const handleSaveRole = () => {
    if (selectedRole) {
      setRoles(roles.map(r => r.id === selectedRole.id ? { ...r, name: roleName } : r));
    } else {
      setRoles([...roles, { id: Date.now(), name: roleName, access: [] }]);
    }
    setIsModalOpen(false);
    setRoleName('');
  };

  const handleDeleteRole = (id) => {
    setRoles(roles.filter(r => r.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
            <Shield className="h-8 w-8 text-purple-600" />
            Manage User Roles
          </h1>
          <p className="text-slate-500 mt-2">Create, modify, and deactivate user roles</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary-600 text-white font-bold hover:bg-primary-700 transition-all"
        >
          <PlusCircle className="h-5 w-5" />
          Create New Role
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map(role => (
          <div key={role.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-2">{role.name}</h3>
            <p className="text-sm text-slate-500 mb-4">Permissions: {role.access.length}</p>
            <div className="flex gap-2">
              <button
                onClick={() => { setSelectedRole(role); setRoleName(role.name); setIsModalOpen(true); }}
                className="flex-1 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-medium flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
              >
                <Edit2 className="h-4 w-4" />
                Modify
              </button>
              <button
                onClick={() => handleDeleteRole(role.id)}
                className="px-4 py-2 rounded-xl border border-red-200 text-red-600 font-medium flex items-center justify-center gap-2 hover:bg-red-50 transition-all"
              >
                <Trash2 className="h-4 w-4" />
                Deactivate
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {selectedRole ? 'Modify User Role' : 'Create User Role'}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">Role Name</label>
                <input
                  type="text"
                  value={roleName}
                  onChange={(e) => setRoleName(e.target.value)}
                  placeholder="Enter role name..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-500"
                />
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 px-6 py-3 rounded-xl border border-slate-200 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveRole}
                className="flex-1 px-6 py-3 rounded-xl bg-primary-600 text-white font-bold"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUserRoles;
