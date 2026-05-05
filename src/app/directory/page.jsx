"use client";

import { useState, useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";

export default function DirectoryPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    domain: "",
    year: "",
    search: "",
  });

  useEffect(() => {
    fetchUsers();
  }, [filters]);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams(filters).toString();
      const res = await fetch(`/api/users?${query}`);
      if (res.ok) {
        const data = await res.json();
        setUsers(data);
      }
    } catch (err) {
      console.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fadeIn">
          <div className="mb-12">
            <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Alumni Directory</h1>
            <p className="text-slate-500 font-medium max-w-2xl">Connect with thousands of alumni across the globe. Use the filters below to find specific expertise or local chapters.</p>
          </div>

          {/* Filters Bar */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-12 flex flex-wrap gap-6 items-end">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Search Members</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input 
                  type="text" 
                  value={filters.search}
                  onChange={(e) => setFilters({...filters, search: e.target.value})}
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                  placeholder="Name or email..."
                />
              </div>
            </div>
            <div className="w-full md:w-48">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Work Domain</label>
              <select 
                value={filters.domain}
                onChange={(e) => setFilters({...filters, domain: e.target.value})}
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none"
              >
                <option value="">All Domains</option>
                <option value="Technology">Technology</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Legal">Legal</option>
                <option value="Arts & Media">Arts & Media</option>
                <option value="Entrepreneurship">Entrepreneurship</option>
              </select>
            </div>
            <div className="w-full md:w-32">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Grad Year</label>
              <input 
                type="number" 
                value={filters.year}
                onChange={(e) => setFilters({...filters, year: e.target.value})}
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none"
                placeholder="2024"
              />
            </div>
            <button 
              onClick={() => setFilters({ domain: "", year: "", search: "" })}
              className="text-xs font-bold text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest py-2"
            >
              Reset
            </button>
          </div>
        </AnimatedSection>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            [...Array(6)].map((_, i) => (
              <div key={i} className="bg-white h-64 rounded-2xl border border-slate-100 animate-pulse"></div>
            ))
          ) : users.length > 0 ? (
            users.map((user) => (
              <AnimatedSection key={user._id || user.id} animation="fadeUp">
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl border border-slate-100 overflow-hidden bg-slate-50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        {user.profileImage ? (
                          <img src={user.profileImage} alt={user.firstName} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-slate-900 flex items-center justify-center text-white font-serif font-bold text-xl italic">
                            {user.firstName[0]}{user.lastName[0]}
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-slate-900 text-lg leading-tight">{user.firstName} {user.lastName}</h3>
                        <p className="text-xs font-bold text-primary uppercase tracking-widest mt-1">Class of {user.graduationYear}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mt-6">
                    {user.workDomain && (
                      <div className="flex items-center gap-2 text-slate-600">
                        <span className="material-symbols-outlined text-[18px] opacity-60">business_center</span>
                        <span className="text-sm font-medium">{user.workDomain}</span>
                      </div>
                    )}
                    {user.location && (
                      <div className="flex items-center gap-2 text-slate-600">
                        <span className="material-symbols-outlined text-[18px] opacity-60">location_on</span>
                        <span className="text-sm font-medium">{user.location}</span>
                      </div>
                    )}
                  </div>

                  {user.interests && user.interests.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-6">
                      {user.interests.slice(0, 3).map((interest, idx) => (
                        <span key={idx} className="bg-slate-50 text-slate-500 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                          {interest}
                        </span>
                      ))}
                      {user.interests.length > 3 && (
                        <span className="text-[10px] font-bold text-slate-300">+{user.interests.length - 3} MORE</span>
                      )}
                    </div>
                  )}

                  <button className="w-full mt-8 pt-6 border-t border-slate-50 flex items-center justify-center gap-2 text-xs font-bold text-slate-400 group-hover:text-slate-900 transition-all uppercase tracking-widest">
                    View Professional Profile <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>
                </div>
              </AnimatedSection>
            ))
          ) : (
            <div className="col-span-full py-24 text-center">
              <span className="material-symbols-outlined text-6xl text-slate-200 mb-4">search_off</span>
              <p className="text-slate-400 font-medium">No alumni found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
