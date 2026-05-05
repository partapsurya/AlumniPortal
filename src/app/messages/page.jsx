"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";

export default function MessagesPage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

  if (status === "loading") return null;

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-12 px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fadeUp">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row h-[700px]">
            {/* Sidebar */}
            <div className="w-full md:w-80 border-r border-slate-100 flex flex-col">
              <div className="p-6 border-b border-slate-100">
                <h1 className="text-xl font-serif font-bold text-slate-900">Messages</h1>
              </div>
              <div className="flex-1 overflow-y-auto">
                <div className="p-4 flex items-center gap-4 hover:bg-slate-50 cursor-pointer transition-colors border-l-4 border-slate-900 bg-slate-50/50">
                  <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-sm">SJ</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm text-slate-900">Sarah Jenkins</span>
                      <span className="text-[10px] text-slate-400">2m ago</span>
                    </div>
                    <p className="text-xs text-slate-500 truncate font-medium">Thanks for the advice on the AI project!</p>
                  </div>
                </div>
                <div className="p-4 flex items-center gap-4 hover:bg-slate-50 cursor-pointer transition-colors border-l-4 border-transparent">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-bold text-sm">MC</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm text-slate-900">Marcus Chen</span>
                      <span className="text-[10px] text-slate-400">1h ago</span>
                    </div>
                    <p className="text-xs text-slate-500 truncate">Are you attending the Gala next month?</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col bg-slate-50/30">
              <div className="p-6 border-b border-slate-100 bg-white flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xs">SJ</div>
                  <div>
                    <h2 className="font-bold text-slate-900 text-sm">Sarah Jenkins</h2>
                    <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">Online</p>
                  </div>
                </div>
                <button className="text-slate-400 hover:text-slate-900 transition-colors">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>

              <div className="flex-1 p-6 overflow-y-auto space-y-6">
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none max-w-md shadow-sm">
                    <p className="text-sm text-slate-700 leading-relaxed">Hi! I saw your profile in the directory. Your work in AI ethics is really inspiring.</p>
                    <span className="text-[10px] text-slate-400 mt-2 block">10:42 AM</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-slate-900 text-white p-4 rounded-2xl rounded-tr-none max-w-md shadow-lg">
                    <p className="text-sm leading-relaxed">Thank you, Sarah! I'm glad we connected. I'd love to chat more about your SaaS project.</p>
                    <span className="text-[10px] text-slate-300 mt-2 block">10:45 AM</span>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none max-w-md shadow-sm">
                    <p className="text-sm text-slate-700 leading-relaxed">Thanks for the advice on the AI project! It really helped our team clarify our roadmap.</p>
                    <span className="text-[10px] text-slate-400 mt-2 block">2m ago</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border-t border-slate-100">
                <div className="flex gap-4">
                  <input 
                    type="text" 
                    placeholder="Type your message..."
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-all"
                  />
                  <button className="bg-slate-900 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg hover:bg-slate-800 transition-all">
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
