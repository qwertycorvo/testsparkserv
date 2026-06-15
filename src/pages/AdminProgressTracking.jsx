import React, { useState } from 'react';
import { 
  Users, 
  TrendingUp, 
  FileText, 
  Plus, 
  User, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Calendar, 
  Download, 
  MapPin, 
  Wrench,
  Edit3,
  Eye
} from 'lucide-react';

const AdminProgressTracking = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [selectedJob, setSelectedJob] = useState(null);
  const [showAddVisit, setShowAddVisit] = useState(false);

  // Mock jobs data
  const jobs = [
    {
      id: 'SR-1025',
      customer: 'Alice Smith',
      appliance: 'Air Conditioner',
      issue: 'Not cooling properly',
      status: 'in_progress',
      progress: '66%',
      totalVisits: 3,
      completedVisits: 2,
      location: 'USTP Campus, CDO',
      visits: [
        { id: 'V001', number: 1, title: 'Inspection & Diagnosis', status: 'completed', tech: 'John T.', date: 'Jun 13', notes: 'Found faulty compressor.' },
        { id: 'V002', number: 2, title: 'Repair/Part Replacement', status: 'completed', tech: 'John T.', date: 'Jun 14', notes: 'Compressor replaced successfully.' },
        { id: 'V003', number: 3, title: 'Final Testing & Cleaning', status: 'upcoming', tech: 'Peter Lim', date: 'Jun 16', notes: '' }
      ]
    },
    {
      id: 'SR-1028',
      customer: 'Bob Wilson',
      appliance: 'Refrigerator',
      issue: 'Not freezing',
      status: 'in_progress',
      progress: '50%',
      totalVisits: 2,
      completedVisits: 1,
      location: 'Divisoria, CDO',
      visits: [
        { id: 'V004', number: 1, title: 'Inspection', status: 'completed', tech: 'Maria S.', date: 'Jun 15', notes: 'Needs defrost timer.' },
        { id: 'V005', number: 2, title: 'Part Replacement', status: 'pending', tech: 'Maria S.', date: 'Jun 17', notes: '' }
      ]
    },
    {
      id: 'SR-1022',
      customer: 'Carla Reyes',
      appliance: 'Washing Machine',
      issue: 'Not spinning',
      status: 'completed',
      progress: '100%',
      totalVisits: 2,
      completedVisits: 2,
      location: 'Macasandig, CDO',
      visits: [
        { id: 'V006', number: 1, title: 'Diagnosis', status: 'completed', tech: 'Maria S.', date: 'Jun 8', notes: 'Broken belt.' },
        { id: 'V007', number: 2, title: 'Repair', status: 'completed', tech: 'Maria S.', date: 'Jun 10', notes: 'Belt replaced.' }
      ]
    }
  ];

  // Mock technician performance data
  const technicians = [
    { name: 'John Technician', jobsCompleted: 48, avgRating: 4.8, onTimeRate: '96%', avgDuration: '2.1h' },
    { name: 'Maria Santos', jobsCompleted: 42, avgRating: 4.9, onTimeRate: '98%', avgDuration: '1.8h' },
    { name: 'Peter Lim', jobsCompleted: 35, avgRating: 4.6, onTimeRate: '94%', avgDuration: '2.3h' }
  ];

  // Statistics
  const stats = [
    { label: 'Active Jobs', value: 8, icon: Wrench, color: 'text-primary-600 bg-primary-50' },
    { label: 'Visits Today', value: 5, icon: Calendar, color: 'text-blue-600 bg-blue-50' },
    { label: 'Avg. Completion', value: '1.8 days', icon: Clock, color: 'text-green-600 bg-green-50' },
    { label: 'Customer Satisfaction', value: '4.7/5', icon: TrendingUp, color: 'text-orange-600 bg-orange-50' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Progress Management</h1>
          <p className="text-slate-500 mt-2">Monitor and manage all repair jobs and visits</p>
        </div>
        <div className="flex gap-2">
          <button className="px-6 py-3 rounded-xl bg-white text-slate-700 border border-slate-200 font-semibold flex items-center gap-2 hover:bg-slate-50 transition-all">
            <FileText className="h-5 w-5" />
            Reports
          </button>
          <button className="px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold flex items-center gap-2 hover:bg-primary-700 shadow-lg shadow-primary-200 transition-all">
            <Plus className="h-5 w-5" />
            Add Visit
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <p className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-slate-100 p-2 rounded-2xl">
        {[
          { id: 'jobs', label: 'Jobs & Visits', icon: Wrench },
          { id: 'technicians', label: 'Technicians', icon: Users },
          { id: 'reports', label: 'Reports', icon: FileText }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2">
          {/* Jobs Tab */}
          {activeTab === 'jobs' && (
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-100">
                    <tr>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Job</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Customer</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Progress</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Location</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {jobs.map((job) => (
                      <tr 
                        key={job.id} 
                        className="hover:bg-slate-50 transition-all cursor-pointer"
                        onClick={() => setSelectedJob(job)}
                      >
                        <td className="px-6 py-4">
                          <p className="text-sm font-bold text-slate-900">{job.appliance}</p>
                          <p className="text-xs text-slate-500">#{job.id}</p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm font-medium text-slate-700">{job.customer}</p>
                          <p className="text-xs text-slate-500">{job.issue}</p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary-600"
                                style={{ width: job.progress }}
                              />
                            </div>
                            <span className="text-sm font-bold text-slate-700">{job.progress}</span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1">
                            {job.completedVisits}/{job.totalVisits} visits
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm text-slate-600 flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-slate-400" />
                            {job.location}
                          </p>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 rounded-xl hover:bg-primary-50 text-primary-600 transition-all">
                              <Edit3 className="h-4 w-4" />
                            </button>
                            <button className="p-2 rounded-xl hover:bg-slate-100 text-slate-600 transition-all">
                              <Eye className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Technicians Tab */}
          {activeTab === 'technicians' && (
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Technician Performance</h3>
                <div className="space-y-4">
                  {technicians.map((tech, i) => (
                    <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-primary-700 font-bold text-lg">
                          {tech.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900">{tech.name}</h4>
                          <p className="text-sm text-slate-600">
                            {tech.jobsCompleted} jobs completed
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 text-center">
                        <div>
                          <p className="text-xs text-slate-400 uppercase tracking-widest">Rating</p>
                          <p className="text-xl font-bold text-yellow-600">{tech.avgRating}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase tracking-widest">On-Time</p>
                          <p className="text-xl font-bold text-green-600">{tech.onTimeRate}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase tracking-widest">Avg Time</p>
                          <p className="text-xl font-bold text-primary-600">{tech.avgDuration}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Reports Tab */}
          {activeTab === 'reports' && (
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Generate Reports</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'Monthly Job Summary', desc: 'Complete overview of all jobs in a month' },
                    { name: 'Technician Performance', desc: 'Detailed performance metrics for all techs' },
                    { name: 'Customer Satisfaction', desc: 'Feedback and ratings analysis' },
                    { name: 'Service Area Activity', desc: 'Location-based job statistics' }
                  ].map((report, i) => (
                    <button 
                      key={i}
                      className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-primary-50 hover:border-primary-200 transition-all text-left group"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 group-hover:text-primary-700 transition-colors">{report.name}</h4>
                          <p className="text-sm text-slate-600">{report.desc}</p>
                        </div>
                        <Download className="h-6 w-6 text-slate-400 group-hover:text-primary-600 transition-colors" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar: Selected Job Details */}
        {activeTab === 'jobs' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900">Job Details</h3>
              </div>
              <div className="p-6">
                {selectedJob ? (
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Job #{selectedJob.id}</p>
                      <h4 className="text-xl font-bold text-slate-900">{selectedJob.appliance}</h4>
                      <p className="text-slate-600 mt-1">{selectedJob.issue}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Customer</p>
                        <p className="text-sm font-semibold text-slate-900">{selectedJob.customer}</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Status</p>
                        <p className="text-sm font-semibold text-primary-600">
                          {selectedJob.status.charAt(0).toUpperCase() + selectedJob.status.slice(1).replace('_', ' ')}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <h5 className="text-sm font-bold text-slate-900 mb-4">Visits</h5>
                      <div className="space-y-3">
                        {selectedJob.visits.map((visit) => (
                          <div key={visit.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="flex items-center justify-between mb-2">
                              <span className="px-2 py-1 rounded-full bg-white text-xs font-bold text-slate-600 border border-slate-200">
                                Visit {visit.number}
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                                visit.status === 'completed' ? 'bg-green-100 text-green-700' :
                                visit.status === 'upcoming' ? 'bg-blue-100 text-blue-700' :
                                'bg-orange-100 text-orange-700'
                              }`}>
                                {visit.status}
                              </span>
                            </div>
                            <p className="text-sm font-semibold text-slate-900">{visit.title}</p>
                            <div className="flex items-center justify-between mt-2">
                              <p className="text-xs text-slate-600 flex items-center gap-1">
                                <User className="h-3 w-3" />
                                {visit.tech}
                              </p>
                              <p className="text-xs text-slate-600">{visit.date}</p>
                            </div>
                            {visit.notes && (
                              <p className="text-xs text-slate-600 mt-2 italic">"{visit.notes}"</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <button 
                        onClick={() => setShowAddVisit(true)}
                        className="w-full px-4 py-3 rounded-xl bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition-all"
                      >
                        Add Additional Visit
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-slate-400">
                    <Wrench className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p>Select a job to view details</p>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-6 rounded-3xl border border-primary-100">
              <h3 className="text-lg font-bold text-primary-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 rounded-xl bg-white text-primary-600 border border-primary-200 font-semibold hover:bg-primary-600 hover:text-white transition-all">
                  Reassign Technician
                </button>
                <button className="w-full px-4 py-3 rounded-xl bg-white text-orange-600 border border-orange-200 font-semibold hover:bg-orange-600 hover:text-white transition-all">
                  Approve Visit Request
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add Visit Modal */}
      {showAddVisit && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">Add Visit</h3>
              <button 
                onClick={() => setShowAddVisit(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                ×
              </button>
            </div>
            <p className="text-slate-600 mb-6">Add an additional visit to this repair job.</p>
            <div className="space-y-4 mb-6">
              <input 
                type="text"
                placeholder="Visit Title (e.g., Follow-up Check)"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:border-primary-500 transition-all"
              />
              <input 
                type="date"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:border-primary-500 transition-all"
              />
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:border-primary-500 transition-all">
                <option>Assign Technician...</option>
                <option>John Technician</option>
                <option>Maria Santos</option>
                <option>Peter Lim</option>
              </select>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setShowAddVisit(false)}
                className="flex-1 px-4 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-all"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowAddVisit(false)}
                className="flex-1 px-4 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all"
              >
                Add Visit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProgressTracking;
