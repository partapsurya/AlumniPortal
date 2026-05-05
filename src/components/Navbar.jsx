"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white/80 backdrop-blur-md text-primary font-sans tracking-tight border-b border-slate-200 flex justify-between items-center w-full px-8 py-4 max-w-full mx-auto fixed top-0 z-50">
      <div className="text-xl font-bold text-primary tracking-tight">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center text-white font-serif italic text-lg">A</div>
          Alumni Portal
        </Link>
      </div>
      <div className="hidden md:flex gap-8 items-center">
        <Link className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="/">Home</Link>
        <Link className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="/directory">Directory</Link>
        <Link className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="/events">Events</Link>
        <Link className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="/giving">Giving</Link>
        <Link className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="/magazine">Magazine</Link>
      </div>
      <div className="flex gap-4 items-center">
        {status === "authenticated" && (
          <Link href="/messages" className="relative p-2 text-slate-400 hover:text-primary transition-colors group">
            <span className="material-symbols-outlined text-[24px]">mail</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </Link>
        )}
        {status === "authenticated" ? (
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 group focus:outline-none"
            >
              <div className="w-9 h-9 bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center text-primary font-bold text-sm transition-colors group-hover:bg-slate-200">
                {session.user.firstName?.[0]}{session.user.lastName?.[0]}
              </div>
              <span className="material-symbols-outlined text-[18px] text-slate-400 transition-transform group-hover:text-primary">expand_more</span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-64 bg-white border border-slate-200 shadow-xl rounded-lg z-50 animate-fadeUp overflow-hidden">
                <div className="p-4 bg-slate-50 border-b border-slate-100">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Authenticated Account</p>
                  <p className="text-sm font-semibold text-primary">{session.user.firstName} {session.user.lastName}</p>
                  <p className="text-xs text-slate-500 truncate">{session.user.email}</p>
                </div>
                <div className="p-1">
                  <Link 
                    href="/profile" 
                    className="flex items-center gap-3 w-full p-3 text-slate-700 font-medium text-sm hover:bg-slate-50 rounded-md transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <span className="material-symbols-outlined text-lg">person</span> My Profile
                  </Link>
                  <Link 
                    href="/dashboard" 
                    className="flex items-center gap-3 w-full p-3 text-slate-700 font-medium text-sm hover:bg-slate-50 rounded-md transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <span className="material-symbols-outlined text-lg">dashboard</span> Dashboard
                  </Link>
                  <div className="border-t border-slate-100 my-1"></div>
                  <button 
                    onClick={() => signOut()}
                    className="flex items-center gap-3 w-full p-3 text-red-600 font-medium text-sm hover:bg-red-50 rounded-md transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">logout</span> Log Out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link href="/login" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">Log In</Link>
            <Link href="/signup" className="bg-primary text-white px-5 py-2 rounded-md hover:bg-primary/90 transition-all font-semibold text-sm shadow-sm">Join Now</Link>
          </>
        )}
      </div>
    </nav>
  );
}
