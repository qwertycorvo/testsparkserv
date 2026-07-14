import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login('customer'); // default to customer role for demo
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8fafc] p-4 font-sans text-slate-900">
      <div className="flex w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-blue-100/50 lg:flex-row">
        
        {/* Left Side: Branding & Illustration */}
        <div className="relative hidden w-1/2 flex-col bg-gradient-to-br from-primary-600 to-primary-800 p-12 text-white lg:flex">
          <div className="absolute top-0 left-0 h-full w-full opacity-10 overflow-hidden">
             <Cpu className="absolute -top-10 -left-10 h-64 w-64 rotate-12" />
             <Wrench className="absolute -bottom-20 -right-10 h-80 w-80 -rotate-12" />
          </div>

          <div className="relative z-10 flex items-center gap-2 mb-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary-600 shadow-xl shadow-primary-900/20">
              <Wrench className="h-7 w-7" />
            </div>
            <div>
              <span className="text-3xl font-black tracking-tighter italic block leading-none">SPARKSERV</span>
              <span className="text-lg font-bold tracking-[0.2em] text-accent-400 uppercase">Hanap Usap Fix</span>
            </div>
          </div>

          <div className="relative z-10 mt-auto">
              <h1 
                className="text-4xl font-extrabold leading-tight"
              >
                Smart Management for <br />
                <span className="text-accent-400">Appliance Repair</span>
              </h1>
              <p 
                className="mt-6 text-lg text-primary-100/90"
              >
                Streamline your repair inquiry and technician matching process with our rule-based matching system.
              </p>
            
            <div className="mt-12 flex gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold">20</span>
                <span className="text-sm text-primary-200/60 uppercase tracking-wider">Technicians</span>
              </div>
              <div className="h-12 w-px bg-white/10"></div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold">196</span>
                <span className="text-sm text-primary-200/60 uppercase tracking-wider">Repairs Done</span>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-12 right-12 z-10">
            <ShieldCheck className="h-16 w-16 text-accent-500 opacity-50" />
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full p-8 sm:p-12 lg:w-1/2">
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white shadow-lg shadow-primary-200">
              <Wrench className="h-6 w-6" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tighter italic text-primary-900 block leading-none">SPARKSERV</span>
              <span className="text-sm font-bold tracking-[0.2em] text-accent-600 uppercase">Hanap Usap Fix</span>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Welcome Back!</h2>
            <p className="mt-2 text-slate-500">Please login to continue to your dashboard.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary-600 py-4 text-white font-bold shadow-lg shadow-primary-200 hover:bg-primary-700 transition-all"
            >
              Login to Dashboard
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
