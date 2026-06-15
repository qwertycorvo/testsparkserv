import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Calendar, 
  User, 
  FileText, 
  Plus,
  Wrench,
  Upload,
  MessageSquare
} from 'lucide-react';

const TechnicianProgressTracking = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showRequestVisit, setShowRequestVisit] = useState(false);
  const [showUploadPhotos, setShowUploadPhotos] = useState(false);

  const assignedJobs = [
    {
      id: 'SR-1025',
      customer: 'Alice Smith',
      appliance: 'Air Conditioner',
      issue: 'Not cooling properly',
      location: 'USTP Campus, CDO',
      landmark: 'Near Engineering Building',
      status: 'in-progress',
      progress: '66%',
      totalVisits: 3,
      completedVisits: 2,
      visits: [
        {
          id: 'V001',
          number: 1,
          title: 'Inspection & Diagnosis',
          status: 'completed',
          date: 'Jun 13',
          time: '10:00 AM',
          technician: 'John Technician',
          notes: 'Found faulty compressor. Parts needed.',
          photos: ['inspection.jpg', 'compressor.jpg']
        },
        {
          id: 'V002',
          number: 2,
          title: 'Repair & Part Replacement',
          status: 'completed',
          date: 'Jun 14',
          time: '2:00 PM',
          technician: 'John Technician',
          notes: 'Compressor replaced successfully. System tested.',
          photos: ['new_compressor.jpg', 'testing.jpg']
        },
        {
          id: 'V003',
          number: 3,
          title: 'Final Testing & Cleaning',
          status: 'pending',
          date: 'Jun 16',
          time: '9:00 AM',
          technician: 'John Technician',
          notes: '',
          photos: []
        }
      ]
    },
    {
      id: 'SR-1028',
      customer: 'Bob Wilson',
      appliance: 'Refrigerator',
      issue: 'Not freezing',
      location: 'Divisoria, CDO',
      landmark: 'Golden Friendship Park',
      status: 'pending',
      progress: '0%',
      totalVisits: 2,
      completedVisits: 0,
      visits: [
        {
          id: 'V004',
          number: 1,
          title: 'Inspection & Diagnosis',
          status: 'pending',
          date: 'Jun 17',
          time: '10:00 AM',
          technician: 'John Technician',
          notes: '',
          photos: []
        }
      ]
    }
  ];

  const completedJobs = [
    {
      id: 'SR-1022',
      customer: 'Carla Reyes',
      appliance: 'Washing Machine',
      issue: 'Not spinning',
      location: 'Macasandig, CDO',
      date: 'Jun 10',
      status: 'completed',
      totalVisits: 2
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">My Jobs</h1>
          <p className="text-slate-500 mt-2">Track and update your assigned repair jobs</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Job List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100">
              <h2 className="text-xl font-bold text-slate-900">Active Jobs</h2>
            </div>
            <div className="divide-y divide-slate-100">
              {assignedJobs.map((job) => (
                <div
                  key={job.id}
                  className={`p-6 hover:bg-slate-50 transition-all cursor-pointer ${selectedJob?.id === job.id ? 'bg-primary-50 border-l-4 border-primary-600' : ''}`}
                  onClick={() => setSelectedJob(job)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-bold uppercase">
                          #{job.id}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${job.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'}`}>
                          {job.status}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{job.appliance}</h3>
                      <p className="text-slate-600">{job.issue}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <User className="h-4 w-4" />
                      <span className="text-sm">{job.customer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary-600" style={{ width: job.progress }} />
                    </div>
                    <span className="text-sm font-bold text-slate-700">
                      {job.completedVisits}/{job.totalVisits}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {completedJobs.length > 0 && (
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-900">Completed Jobs</h2>
              </div>
              <div className="divide-y divide-slate-100">
                {completedJobs.map((job) => (
                  <div
                    key={job.id}
                    className="p-6 hover:bg-slate-50 transition-all cursor-pointer"
                    onClick={() => setSelectedJob(job)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase">
                            #{job.id}
                          </span>
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">{job.appliance}</h3>
                        <p className="text-slate-600">{job.customer} • {job.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Selected Job Details */}
        {selectedJob && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-900">Job Details</h2>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Customer</p>
                  <p className="text-lg font-semibold text-slate-900">{selectedJob.customer}</p>
                  <p className="text-sm text-slate-600">{selectedJob.location}</p>
                  <p className="text-xs text-primary-600">{selectedJob.landmark}</p>
                </div>
                
                <div className="pt-6 border-t border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900 mb-4">Visits</h3>
                  <div className="space-y-4">
                    {selectedJob.visits.map((visit) => (
                      <div key={visit.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 rounded-full bg-white text-xs font-bold text-slate-700 border border-slate-200">
                              Visit {visit.number}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase ${
                              visit.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {visit.status}
                            </span>
                          </div>
                          {visit.status === 'completed' ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          ) : (
                            <Clock className="h-4 w-4 text-yellow-600" />
                          )}
                        </div>
                        
                        <h4 className="font-semibold text-slate-900 mb-1">{visit.title}</h4>
                        <p className="text-sm text-slate-600 mb-3">
                          {visit.date} • {visit.time}
                        </p>
                        
                        {visit.notes && (
                          <div className="mb-3 p-3 bg-white rounded-xl border border-slate-200">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Notes</p>
                            <p className="text-sm text-slate-700">{visit.notes}</p>
                          </div>
                        )}
                        
                        {visit.photos.length > 0 && (
                          <div className="mb-3">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Photos</p>
                            <div className="flex gap-2 overflow-x-auto pb-2">
                              {visit.photos.map((photo, idx) => (
                                <div
                                  key={idx}
                                  className="flex-shrink-0 h-16 w-20 bg-slate-200 rounded-lg flex items-center justify-center border border-slate-300"
                                >
                                  <span className="text-xs text-slate-500">{photo}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {visit.status === 'pending' && (
                          <div className="space-y-3 pt-3 border-t border-slate-200">
                            <div className="flex gap-2">
                              <button
                                className="flex-1 px-4 py-2 rounded-xl bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition-all"
                              >
                                Mark Complete
                              </button>
                              <button
                                className="flex-1 px-4 py-2 rounded-xl bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition-all"
                              >
                                Update Status
                              </button>
                            </div>
                            <div className="space-y-2">
                              <textarea
                                placeholder="Add notes..."
                                className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-white text-sm outline-none focus:border-primary-500 transition-all"
                              />
                              <div className="flex gap-2">
                                <button
                                  className="flex-1 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                                  onClick={() => setShowUploadPhotos(true)}
                                >
                                  <Upload className="h-4 w-4" />
                                  Upload Photos
                                </button>
                                <button className="flex-1 px-4 py-2 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold hover:bg-blue-200 transition-all">
                                  Save Notes
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-6 border-t border-slate-100">
                  <button
                    className="w-full px-4 py-3 rounded-xl bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-all"
                    onClick={() => setShowRequestVisit(true)}
                  >
                    Request Another Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Request Visit Modal */}
      {showRequestVisit && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">Request Visit</h3>
              <button
                onClick={() => setShowRequestVisit(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            </div>
            <p className="text-slate-600 mb-6">Request an additional visit for this repair job.</p>
            <div className="space-y-4 mb-6">
              <textarea
                placeholder="Reason for additional visit..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:border-primary-500 transition-all"
              />
              <input
                type="date"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:border-primary-500 transition-all"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowRequestVisit(false)}
                className="flex-1 px-4 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowRequestVisit(false)}
                className="flex-1 px-4 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload Photos Modal */}
      {showUploadPhotos && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">Upload Photos</h3>
              <button
                onClick={() => setShowUploadPhotos(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            </div>
            <p className="text-slate-600 mb-6">Add photos for this repair visit.</p>
            <div className="space-y-4 mb-6">
              <div className="p-8 border-2 border-dashed border-slate-300 rounded-2xl bg-slate-50 text-center hover:border-primary-400 hover:bg-primary-50 transition-all cursor-pointer">
                <Upload className="h-12 w-12 text-slate-400 mx-auto mb-3" />
                <p className="text-sm font-semibold text-slate-600">Click to upload photos</p>
                <p className="text-xs text-slate-400">or drag and drop</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowUploadPhotos(false)}
                className="flex-1 px-4 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowUploadPhotos(false)}
                className="flex-1 px-4 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnicianProgressTracking;
