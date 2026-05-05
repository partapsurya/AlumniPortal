"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError(res.error);
      } else {
        setSuccess("Login successful! Redirecting...");
        setTimeout(() => {
          router.push("/directory");
        }, 1500);
      }
    } catch (err) {
      setError("Unable to connect to the server. Please check the database connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 py-24 px-8">
      <AnimatedSection animation="scaleIn" className="w-full max-w-md">
        <div className="bg-white border border-slate-200 p-8 shadow-2xl rounded-2xl md:p-12">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-serif font-bold text-slate-900 mb-3">Welcome Back</h1>
            <p className="text-slate-500 font-medium">Access your professional network.</p>
          </div>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-sm font-semibold rounded-lg animate-shake flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">error</span>
              {error}
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm font-semibold rounded-lg animate-fadeUp flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">check_circle</span>
              {success}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-slate-200 rounded-lg p-3 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all" 
                placeholder="name@example.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-slate-200 rounded-lg p-3 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all" 
                placeholder="••••••••"
                required
              />
              <div className="text-right mt-2">
                <a href="#" className="text-xs font-bold text-slate-400 hover:text-slate-600 hover:underline">Forgot Password?</a>
              </div>
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-slate-900 text-white py-4 rounded-lg font-bold uppercase tracking-widest shadow-lg hover:bg-slate-800 transition-all active:scale-[0.98] disabled:opacity-50"
            >
              {loading ? "Authenticating..." : "Sign In"}
            </button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-500 text-sm">
              Don't have an account?{" "}
              <Link href="/signup" className="text-slate-900 font-bold hover:underline">
                Join Now
              </Link>
            </p>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
