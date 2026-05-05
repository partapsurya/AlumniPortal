"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function GivingPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="fadeIn">
            <h1 className="text-6xl font-serif font-bold text-slate-900 mb-8 leading-tight">
              Invest in the <br/>Next Generation.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-lg">
              Your generosity fuels scholarships, groundbreaking research, and community programs that empower the next wave of global leaders.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest shadow-xl hover:bg-primary/90 transition-all active:scale-95">
                Make a Gift Now
              </button>
              <button className="bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-white transition-all">
                Legacy Planning
              </button>
            </div>
          </AnimatedSection>
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop" 
              alt="Education impact" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="bg-slate-50 py-24 px-8 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <AnimatedSection animation="fadeUp">
              <div className="text-5xl font-serif font-bold text-primary mb-2">$4.2M</div>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Scholarships Awarded</p>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp">
              <div className="text-5xl font-serif font-bold text-primary mb-2">120+</div>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Research Grants</p>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp">
              <div className="text-5xl font-serif font-bold text-primary mb-2">850k</div>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Volunteer Hours</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Campaigns */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Current Campaigns</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Support specific initiatives that resonate with your personal journey and professional goals.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedSection animation="fadeUp">
            <div className="group cursor-pointer">
              <div className="h-64 rounded-2xl overflow-hidden mb-6 shadow-md">
                <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">The Diversity Fund</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">Providing full-ride scholarships for talented students from underrepresented backgrounds worldwide.</p>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-4">
                <div className="bg-primary h-full w-3/4"></div>
              </div>
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <span>75% Funded</span>
                <span>$1.5M / $2.0M</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp">
            <div className="group cursor-pointer">
              <div className="h-64 rounded-2xl overflow-hidden mb-6 shadow-md">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">Campus Modernization</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">Upgrading our digital infrastructure and laboratories to support cutting-edge AI and biotech research.</p>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-4">
                <div className="bg-primary h-full w-2/5"></div>
              </div>
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <span>40% Funded</span>
                <span>$400k / $1.0M</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
