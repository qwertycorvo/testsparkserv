import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Calendar, 
  User, 
  Image as ImageIcon, 
  FileText, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';

const ProgressTracking = () => {
  const [selectedJob, setSelectedJob] = useState(0);

  // Mock job data with multi-visit tracking
  const jobs = [
    {
      id: 'SR-1025',
      appliance: 'Air Conditioner',
      issue: 'Not cooling properly',
      customer: 'Alice Smith',
      location: 'USTP Campus, CDO',
      totalVisits: 3,
      completedVisits: 2,
      visits: [
        {
          number: 1,
          title: 'Inspection & Diagnosis',
          description: 'Technician inspects AC to find issue',
          status: 'completed',
          scheduledDate: 'June 13, 2026',
          scheduledTime: '10:00 AM - 11:30 AM',
          technician: 'John Technician',
          notes: 'Found faulty compressor. Needs replacement.',
          photos: ['/images/visit1-inspection.jpg', '/images/visit1-compressor.jpg'],
          customerSignature: 'Alice Smith',
          completedDate: 'June 13, 2026'
        },
        {
          number: 2,
          title: 'Repair & Part Replacement',
          description: 'Replace damaged compressor',
          status: 'completed',
          scheduledDate: 'June 14, 2026',
          scheduledTime: '2:00 PM - 4:00 PM',
          technician: 'John Technician',
          notes: 'Compressor replaced successfully. System tested.',
          photos: ['/images/visit2-new-compressor.jpg', '/images/visit2-testing.jpg'],
          customerSignature: 'Alice Smith',
          completedDate: 'June 14, 2026'
        },
        {
          number: 3,
          title: 'Final Testing & Cleaning',
          description: 'Final check, testing, and cleaning',
          status: 'upcoming',
          scheduledDate: 'June 16, 2026',
          scheduledTime: '9:00 AM - 10:30 AM',
          technician: 'Peter Lim',
          notes: '',
          photos: [],
          customerSignature: '',
          completedDate: null
        }
      ]
    },
    {
      id: 'SR-1022',
      appliance: 'Washing Machine',
      issue: 'Not spinning',
      customer: 'Bob Wilson',
      location: 'Divisoria, CDO',
      totalVisits: 2,
      completedVisits: 2,
      visits: [
        {
          number: 1,
          title: 'Inspection & Diagnosis',
          description: 'Check why machine won\'t spin',
          status: 'completed',
          scheduledDate: 'June 8, 2026',
          scheduledTime: '1:00 PM - 2:30 PM',
          technician: 'Maria Santos',
          notes: 'Broken drive belt. Needs replacement.',
          photos: ['/images/wash1-broken-belt.jpg'],
          customerSignature: 'Bob Wilson',
          completedDate: 'June 8, 2026'
        },
        {
          number: 2,
          title: 'Repair & Final Check',
          description: 'Replace belt and test',
          status: 'completed',
          scheduledDate: 'June 10, 2026',
          scheduledTime: '10:00 AM - 11:00 AM',
          technician: 'Maria Santos',
          notes: 'Belt replaced. Working perfectly now.',
          photos: ['/images/wash2-new-belt.jpg', '/images/wash2-testing.jpg'],
          customerSignature: 'Bob Wilson',
          completedDate: 'June 10, 2026'
        }
      ]
    }
  ];

  const job = jobs[selectedJob];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Progress Tracking</h1>
        <p className="text-slate-500 mt-2">Track your repair visits and progress</p>
      </div>

      {/* Job Selector */}
      {jobs.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {jobs.map((j, i) => (
            <button
              key={j.id}
              onClick={() => setSelectedJob(i)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 whitespace-nowrap transition-all ${
                selectedJob === i
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-200'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span className="text-xs font-bold text-slate-400 uppercase">#{j.id}</span>
              {j.appliance}
              <div className="h-2 w-2 rounded-full bg-slate-300 ml-1" />
              {j.completedVisits}/{j.totalVisits} Visits
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Summary & Timeline */}
        <div className="lg:col-span-2 space-y-6">
          {/* Job Summary Card */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                  Job #{job.id}
                </span>
                <h2 className="text-2xl font-bold text-slate-900">{job.appliance}</h2>
                <p className="text-slate-600 mt-1">{job.issue}</p>
                <div className="flex items-center gap-2 text-slate-500 mt-2">
                  <MapPin className="h-4 w-4" />
                  {job.location}
                </div>
              </div>
              <div className="bg-primary-50 p-4 rounded-2xl text-center">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Progress</p>
                <div className="text-4xl font-black text-primary-600">
                  {job.completedVisits}/{job.totalVisits}
                </div>
                <p className="text-sm text-slate-600 mt-1">Visits Completed</p>
              </div>
            </div>

            {/* Upcoming Visit */}
            {job.visits.some(v => v.status === 'upcoming') && (
              <div className="mb-6 p-6 bg-orange-50 rounded-2xl border border-orange-100">
                <h3 className="text-lg font-bold text-orange-900 mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Upcoming Visit
                </h3>
                {(() => {
                  const upcoming = job.visits.find(v => v.status === 'upcoming');
                  return upcoming ? (
                    <div className="space-y-3">
                      <p className="text-xl font-bold text-orange-800">{upcoming.title}</p>
                      <div className="flex items-center gap-2 text-sm text-orange-700">
                        <Calendar className="h-4 w-4" />
                        {upcoming.scheduledDate} • {upcoming.scheduledTime}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-orange-700">
                        <User className="h-4 w-4" />
                        Technician: {upcoming.technician}
                      </div>
                    </div>
                  ) : null;
                })()}
              </div>
            )}

            {/* Timeline */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900">Visit Timeline</h3>
              {job.visits.map((visit, index) => (
                <div 
                  key={visit.number}
                  className="relative pl-8 pb-8 border-l-2 border-slate-200"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[9px] top-0 h-4 w-4 rounded-full border-4 border-white shadow-sm ${
                    visit.status === 'completed' ? 'bg-green-500' : 'bg-slate-300'
                  }`} />

                  {/* Visit Content */}
                  <div className={`p-5 rounded-2xl border transition-all ${
                    visit.status === 'completed' 
                      ? 'bg-green-50 border-green-100' 
                      : 'bg-white border-slate-100 hover:border-slate-200'
                  }`}>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-white shadow-sm text-xs font-bold text-slate-600 border border-slate-200">
                          Visit {visit.number}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                          visit.status === 'completed' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {visit.status === 'completed' ? 'Completed' : 'Upcoming'}
                        </span>
                      </div>
                      {visit.status === 'completed' && visit.completedDate && (
                        <span className="text-sm text-slate-500 flex items-center gap-1">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          {visit.completedDate}
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 mb-1">{visit.title}</h4>
                    <p className="text-slate-600 mb-4">{visit.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-1">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Schedule</p>
                        <p className="text-sm text-slate-700">{visit.scheduledDate}</p>
                        <p className="text-sm text-slate-600">{visit.scheduledTime}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Technician</p>
                        <p className="text-sm text-slate-700 flex items-center gap-2">
                          <User className="h-4 w-4 text-primary-600" />
                          {visit.technician}
                        </p>
                      </div>
                    </div>

                    {visit.notes && (
                      <div className="mb-4 p-4 bg-white rounded-xl border border-slate-200">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          Notes
                        </p>
                        <p className="text-sm text-slate-700">{visit.notes}</p>
                      </div>
                    )}

                    {visit.photos.length > 0 && (
                      <div className="mb-4">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1">
                          <ImageIcon className="h-4 w-4" />
                          Photos ({visit.photos.length})
                        </p>
                        <div className="flex gap-2 overflow-x-auto pb-2">
                          {visit.photos.map((photo, i) => (
                            <div 
                              key={i}
                              className="flex-shrink-0 h-24 w-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl border border-slate-200 flex items-center justify-center"
                            >
                              <ImageIcon className="h-8 w-8 text-slate-400" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {visit.customerSignature && (
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="h-1 w-1 bg-slate-400 rounded-full" />
                        Signed by: <span className="font-semibold text-slate-700">{visit.customerSignature}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Info Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Important Info</h3>
            
            <div className="space-y-4 text-sm">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-1">What you can do</h4>
                <ul className="space-y-1 text-slate-600">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-green-600 flex-shrink-0" />
                    View completed visits
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-green-600 flex-shrink-0" />
                    Check upcoming schedule
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-green-600 flex-shrink-0" />
                    See technician assigned
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-green-600 flex-shrink-0" />
                    Read visit notes
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-green-600 flex-shrink-0" />
                    View photos/proof
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                <h4 className="font-bold text-orange-800 mb-1">What you can't do</h4>
                <ul className="space-y-1 text-orange-700">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    Create new visits
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    Edit visit details
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    Change job status
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white p-6 rounded-3xl shadow-xl">
            <h3 className="text-lg font-bold mb-3">How It Works</h3>
            <div className="space-y-3 text-sm">
              <p><span className="font-bold">Visit 1:</span> Inspection & diagnosis</p>
              <p><span className="font-bold">Visit 2:</span> Repair or part replacement</p>
              <p><span className="font-bold">Visit 3:</span> Final testing & check</p>
              <p className="pt-3 border-t border-white/20">
                Each visit is tracked with schedule, technician, notes, photos, and your signature!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking;
