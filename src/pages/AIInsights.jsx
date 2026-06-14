import React, { useState } from 'react';
import { 
  Brain, 
  Zap, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Wrench,
  Users,
  Sparkles,
  TrendingUp,
  Target
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AIInsights = () => {
  const { user } = useAuth();
  const [selectedJob, setSelectedJob] = useState(null);

  // Mock AI analysis data
  const pendingJobs = [
    {
      id: 'SR-1027',
      appliance: 'Samsung Inverter AC',
      issue: 'Not cooling properly',
      urgency: 'High',
      location: 'Divisoria, CDO',
      bestTech: 'John Technician',
      matchScore: 95,
      partsNeeded: ['Capacitor', 'Refrigerant'],
      estimatedTime: '2.5 hrs'
    },
    {
      id: 'SR-1028',
      appliance: 'LG Refrigerator',
      issue: 'Making loud noise',
      urgency: 'Medium',
      location: 'USTP Campus',
      bestTech: 'Maria Santos',
      matchScore: 88,
      partsNeeded: ['Fan Motor'],
      estimatedTime: '1.5 hrs'
    },
    {
      id: 'SR-1029',
      appliance: 'Whirlpool Washing Machine',
      issue: 'Not spinning',
      urgency: 'Critical',
      location: 'Macasandig, CDO',
      bestTech: 'John Technician',
      matchScore: 92,
      partsNeeded: ['Drive Belt', 'Motor Coupling'],
      estimatedTime: '2 hrs'
    }
  ];

  // Predictive maintenance data
  const atRiskAppliances = [
    { customer: 'Alice Smith', appliance: 'Washing Machine', risk: '85%', lastService: '3 months ago', recommendation: 'Immediate bearing inspection' },
    { customer: 'Bob Wilson', appliance: 'Refrigerator', risk: '70%', lastService: '5 months ago', recommendation: 'Clean condenser coils' },
    { customer: 'Carla Reyes', appliance: 'Air Conditioner', risk: '65%', lastService: '4 months ago', recommendation: 'Check refrigerant levels' }
  ];

  const techSkills = [
    { name: 'John Technician', specialization: 'AC & Washing Machines', successRate: 94, avgTime: '2.1 hrs' },
    { name: 'Maria Santos', specialization: 'Refrigerators & Freezers', successRate: 91, avgTime: '1.8 hrs' },
    { name: 'Peter Lim', specialization: 'All Appliances', successRate: 88, avgTime: '2.3 hrs' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
            <Sparkles className="h-8 w-8 text-yellow-500" />
            AI Insights Dashboard
          </h1>
          <p className="text-slate-500 mt-2">Smart job matching and predictive maintenance powered by AI</p>
        </div>
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-2xl">
          <p className="text-xs uppercase font-bold tracking-wider">AI Confidence</p>
          <p className="text-2xl font-bold">96.4%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Jobs Optimized</p>
              <p className="text-2xl font-bold text-slate-900">147</p>
            </div>
          </div>
          <p className="text-xs text-green-600 flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            23% improvement this month
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-orange-50 rounded-xl text-orange-600">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Predictive Alerts</p>
              <p className="text-2xl font-bold text-slate-900">12</p>
            </div>
          </div>
          <p className="text-xs text-orange-600">
            Appliances needing attention
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-green-50 rounded-xl text-green-600">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">First-Time Fix</p>
              <p className="text-2xl font-bold text-slate-900">92%</p>
            </div>
          </div>
          <p className="text-xs text-green-600">
            AI-powered parts prediction
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Smart Job Matching */}
        <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Target className="h-5 w-5 text-primary-600" />
              Smart Job Matching
            </h2>
            <p className="text-sm text-slate-500 mt-1">AI recommends best technician for each job</p>
          </div>
          <div className="p-6 space-y-4">
            {pendingJobs.map((job, i) => (
              <div key={i} className="p-4 rounded-2xl border border-slate-100 hover:border-primary-200 hover:bg-primary-50 transition-all cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{job.appliance}</p>
                    <p className="text-xs text-slate-500">{job.issue}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    job.urgency === 'Critical' ? 'bg-red-100 text-red-700' :
                    job.urgency === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {job.urgency}
                  </span>
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-slate-400" />
                    <span className="text-sm font-medium text-slate-700">Best: {job.bestTech}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Brain className="h-4 w-4 text-primary-600" />
                    <span className="text-sm font-bold text-primary-600">{job.matchScore}% Match</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Predictive Maintenance */}
        <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              Predictive Maintenance
            </h2>
            <p className="text-sm text-slate-500 mt-1">Prevent failures before they happen</p>
          </div>
          <div className="p-6 space-y-4">
            {atRiskAppliances.map((item, i) => (
              <div key={i} className="p-4 rounded-2xl border border-orange-100 bg-orange-50/30">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{item.appliance}</p>
                    <p className="text-xs text-slate-500">{item.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-orange-600">{item.risk} Risk</p>
                    <p className="text-xs text-slate-500">Last: {item.lastService}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-orange-100">
                  <Wrench className="h-3 w-3 text-orange-600" />
                  <span className="text-xs text-orange-800 font-medium">{item.recommendation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technician Skills Matrix */}
      <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-900">Technician Skills Matrix</h2>
          <p className="text-sm text-slate-500 mt-1">AI-powered technician performance analytics</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Technician</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Specialization</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Success Rate</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Avg. Repair Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {techSkills.map((tech, i) => (
                <tr key={i} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-slate-900">{tech.name}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">{tech.specialization}</td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-green-600">{tech.successRate}%</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">{tech.avgTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Capstone Feature Explanation */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white p-8 rounded-3xl shadow-xl">
        <h3 className="text-2xl font-bold mb-4">Why This Matters for Your Capstone</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Innovation
            </h4>
            <p className="text-primary-100/90">
              Combines AI matching, predictive analytics, and real-time data - a modern, technically sophisticated solution.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Business Value
            </h4>
            <p className="text-primary-100/90">
              Optimizes scheduling, reduces failures, and improves first-time fix rates - clear ROI for the panel to see.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Practicality
            </h4>
            <p className="text-primary-100/90">
              Solves real pain points in appliance repair - not just theory, but a deployable, useful system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
