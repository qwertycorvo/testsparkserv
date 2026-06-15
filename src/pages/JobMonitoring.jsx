import React, { useState } from 'react';
import { 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Wrench, 
  MapPin, 
  Users,
  Star,
  MessageSquare,
  Camera,
  TrendingUp
} from 'lucide-react';

const JobMonitoring = () => {
  const [filter, setFilter] = useState('all');

  // Mock real-time job data
  const jobs = [
    {
      id: 'SR-1025',
      customer: 'Alice Smith',
      appliance: 'Washing Machine (LG)',
      issue: 'Heavy vibration',
      technician: 'John Technician',
      status: 'in-progress',
      timeElapsed: '1hr 22 mins',
      eta: '40 mins',
      location: 'USTP Campus, CDO',
      photos: 3,
      messages: 5,
      priority: 'medium'
    },
    {
      id: 'SR-1026',
      customer: 'Bob Wilson',
      appliance: 'Refrigerator (Samsung)',
      issue: 'Not cooling',
      technician: 'Maria Santos',
      status: 'assigned',
      timeElapsed: '-',
      eta: 'Arriving in 15 mins',
      location: 'Divisoria, CDO',
      photos: 0,
      messages: 2,
      priority: 'high'
    },
    {
      id: 'SR-1024',
      customer: 'Carla Reyes',
      appliance: 'Air Conditioner (Carrier)',
      issue: 'Leaking water',
      technician: 'Peter Lim',
      status: 'completed',
      timeElapsed: '1hr 45 mins',
      eta: 'Completed',
      location: 'Macasandig, CDO',
      photos: 6,
      messages: 4,
      priority: 'low',
      rating: 5
    },
    {
      id: 'SR-1023',
      customer: 'David Lim',
      appliance: 'Electric Fan',
      issue: 'Not spinning',
      technician: 'John Technician',
      status: 'completed',
      timeElapsed: '45 mins',
      eta: 'Completed',
      location: 'Limketkai, CDO',
      photos: 4,
      messages: 1,
      priority: 'low',
      rating: 4
    }
  ];

  const filteredJobs = filter === 'all' ? jobs : jobs.filter(j => j.status === filter);

  const statusColors = {
    'assigned': 'bg-blue-100 text-blue-700',
    'in-progress': 'bg-yellow-100 text-yellow-700',
    'completed': 'bg-green-100 text-green-700'
  };

  const priorityColors = {
    'low': 'bg-slate-100 text-slate-700',
    'medium': 'bg-orange-100 text-orange-700',
    'high': 'bg-red-100 text-red-700'
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Job Monitoring & QA</h1>
          <p className="text-slate-500 mt-2">Real-time tracking and quality assurance for all repair jobs</p>
        </div>
        <div className="flex gap-3">
          {['all', 'assigned', 'in-progress', 'completed'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === f ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Clock className="h-6 w-6 text-slate-400" />
            <TrendingUp className="h-4 w-4 text-green-600" />
          </div>
          <p className="text-sm font-medium text-slate-500">Active Jobs</p>
          <p className="text-2xl font-bold text-slate-900">2</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <CheckCircle2 className="h-6 w-6 text-green-500" />
            <TrendingUp className="h-4 w-4 text-green-600" />
          </div>
          <p className="text-sm font-medium text-slate-500">Completed Today</p>
          <p className="text-2xl font-bold text-slate-900">2</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Star className="h-6 w-6 text-yellow-500" />
            <TrendingUp className="h-4 w-4 text-green-600" />
          </div>
          <p className="text-sm font-medium text-slate-500">Avg. Customer Rating</p>
          <p className="text-2xl font-bold text-slate-900">4.5/5</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Wrench className="h-6 w-6 text-primary-600" />
            <TrendingUp className="h-4 w-4 text-green-600" />
          </div>
          <p className="text-sm font-medium text-slate-500">First-Time Fix Rate</p>
          <p className="text-2xl font-bold text-slate-900">92%</p>
        </div>
      </div>

      {/* Job List */}
      <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Job ID</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Customer</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Appliance</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Technician</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Location</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">QA Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredJobs.map((job, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-primary-600">#{job.id}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-slate-900">{job.customer}</p>
                    <p className="text-xs text-slate-500">{job.issue}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-slate-700">{job.appliance}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-xs font-bold">
                        {job.technician.charAt(0)}
                      </div>
                      <span className="text-sm text-slate-700">{job.technician}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${statusColors[job.status]}`}>
                      {job.status.charAt(0).toUpperCase() + job.status.slice(1).replace('-', ' ')}
                    </span>
                    {job.eta && (
                      <p className="text-xs text-slate-500 mt-1">{job.eta}</p>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      <span className="text-sm text-slate-600">{job.location}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Camera className="h-4 w-4 text-slate-400" />
                        <span className="text-xs text-slate-600">{job.photos}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4 text-slate-400" />
                        <span className="text-xs text-slate-600">{job.messages}</span>
                      </div>
                      {job.rating && (
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <span className="text-xs font-bold text-slate-700">{job.rating}/5</span>
                        </div>
                      )}
                    </div>
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

export default JobMonitoring;
