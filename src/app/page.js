import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <AnimatedSection animation="fadeIn">
        <section className="pt-32 pb-24 px-8 md:px-12 bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4 block">Legacy & Leadership</span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-[1.1] mb-8">
                The Global Network for <span className="text-slate-500 italic underline decoration-slate-200 underline-offset-8">Excellence</span>.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed font-sans">
                Connect with over 450,000 global leaders, innovators, and changemakers. Our alumni portal is the bridge between your academic legacy and professional future.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/directory" className="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold text-sm tracking-widest uppercase shadow-xl hover:bg-slate-800 transition-all flex items-center gap-2">
                  Explore Directory <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
                <Link href="/signup" className="bg-white text-slate-900 px-8 py-4 rounded-lg font-bold text-sm tracking-widest uppercase border border-slate-200 shadow-sm hover:bg-slate-50 transition-all">
                  Join The Network
                </Link>
              </div>
            </div>
            <div className="md:col-span-4 border-l border-slate-200 pl-12 hidden md:block">
              <div className="flex flex-col gap-10">
                <div className="group">
                  <div className="text-4xl font-serif font-bold text-slate-900 group-hover:text-slate-500 transition-colors">450k+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Active Members</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-serif font-bold text-slate-900 group-hover:text-slate-500 transition-colors">120</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Global Chapters</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-serif font-bold text-slate-900 group-hover:text-slate-500 transition-colors">$2.4B</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Capital Raised</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* The Network (Refined Bento) */}
      <AnimatedSection animation="fadeUp">
        <section className="py-24 px-8 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
              <div>
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">The Network</h2>
                <p className="text-slate-500 font-medium">Curated access to elite professional circles.</p>
              </div>
              <Link className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-slate-500 hover:border-slate-500 transition-all" href="#">View All Circles</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2 md:row-span-2 bg-slate-50 border border-slate-100 p-10 rounded-2xl flex flex-col justify-between hover:shadow-2xl transition-all duration-500 group">
                <div>
                  <div className="bg-slate-900 text-white w-fit px-3 py-1 rounded text-[10px] font-bold tracking-[0.2em] mb-8">FEATURED</div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Elite Mentorship Circle</h3>
                  <p className="text-slate-600 leading-relaxed">Direct access to C-suite executives and founders across 15 industries. Application required for 2024 cohort.</p>
                </div>
                <div className="mt-12">
                  <div className="relative overflow-hidden rounded-xl mb-6 shadow-lg">
                    <img className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" alt="Professional mentors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgMG2BUCMAIDxZteCznKBUCYvujutvliu3sVXTYrpYea-KOF2wseoEy2DTcXVkqWXzw5erMDvv7QEonqyxdPDnHMhx6UJtzR8GiKCwH-J4AZn2kezx6345AK0L6T6bCh2qE-aXWPB1qJiLckmLn4vF-vzQ1NBWqbad3cka7PExd1WR7WQXI1NDiL9DACLnrVmpRlrwYmTbU82r5oLlBvOxa8EHP4qMTkdSV1GtehUhPVXhWIvHiuajCijNgbNmvdhD4csrUZXd_hw"/>
                  </div>
                  <button className="text-sm font-bold uppercase tracking-widest text-slate-900 flex items-center gap-2 group-hover:gap-4 transition-all">Apply For Mentorship <span className="material-symbols-outlined text-lg">arrow_forward</span></button>
                </div>
              </div>
              <div className="bg-slate-900 text-white p-10 rounded-2xl hover:shadow-2xl transition-all duration-500">
                <span className="material-symbols-outlined text-slate-400 text-4xl mb-6">work_outline</span>
                <h3 className="text-xl font-serif font-bold mb-4 text-white">Career Vault</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Access exclusive roles at Fortune 500 companies before they go public.</p>
              </div>
              <div className="bg-white border border-slate-100 p-10 rounded-2xl hover:shadow-2xl transition-all duration-500 shadow-sm">
                <span className="material-symbols-outlined text-slate-900 text-4xl mb-6">public</span>
                <h3 className="text-xl font-serif font-bold mb-4 text-slate-900">Global Chapters</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Find your local community in over 60 countries and 120 cities.</p>
              </div>
              <div className="md:col-span-2 bg-slate-100 p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-2xl transition-all duration-500">
                <div className="max-w-xs">
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">The 1895 Society</h3>
                  <p className="text-slate-600 text-sm">A prestigious collective of lifetime donors and supporters.</p>
                </div>
                <button className="bg-white text-slate-900 px-6 py-3 rounded-lg border border-slate-200 font-bold text-xs uppercase tracking-widest shadow-sm hover:bg-slate-50 transition-all">Join Society</button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Latest News (Formalized) */}
      <AnimatedSection animation="fadeUp">
        <section className="py-24 px-8 md:px-12 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-16 text-center">In The Press</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "Dr. Elena Rostova Awarded Nobel for Economic Transitions",
                  date: "October 24, 2024",
                  tag: "ECONOMY",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxKI_baN86Vek6bkRnu_NEXeOk-vTK1He7ME5mTHnvuvOFMB8AsaR4Ttz4qoRISC8p_NPFkCC9v7HGZNcKaQXWTcv6EUlgALPFxoQvJI0QiLqBVtP3C2oFKgQODPQsGFuQkWazdbnZC2yRdlSAEAQ4ri_WLbyjfYVMXXypZ77LegwkdKTj4zgKUnVo9MW1WZoqlIlm5XWMP77v02YY-S0ZeBe7YCvioaD4ENpJ8ia7vzAYJHVO0WnUCtJnyA5it1_GHdZjMyJYPbY"
                },
                {
                  title: "New Innovation Hub Breaks Ground in South Wing",
                  date: "October 18, 2024",
                  tag: "CAMPUS",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb8_2V-tTbpArOBENHiRlq49cia6uq2Q4bJilwy6tGUPdy493j0batOyEyCBg807ujVlQDWw8uxHmSLmLLHFv30mzC7IVLJ-utwJlN4BlTlE4F0X-9L-osicYtnGVA6HMbZbcFNB9Z_Tst3Zh4q1P6OBYyWyMUmNSoWcTesfX2zQs8adZVjYWCkABc9WbKGrJDQLvE213s00O7COqlERRzhBUeuqFcHK0auVdnNNISl4QXMMf__KiZ5LxDRg_YmGU-Z5tT6N9kJeI"
                },
                {
                  title: "The Future of Ethical Artificial Intelligence",
                  date: "October 12, 2024",
                  tag: "OPINION",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAK5NCHoU2EcAEj3LKY56D7OlAu6oxjjq1yttzGgcYHHAQN31Jbgm9i3C2vTAnCDhuPmMGjPyywm-x3ibaAWUvbNOhuspr_hzW9D7MOS8G8jm2QKeDBeM1ZAT9MVeUrJ4wugj0uPd7djFrfauiLLfD8TVf5yA2omS8VnJxVzLIwGXXvraFruGhf4g6M9BMgKpNUthbAJ75uJtw9BPddUGDYLGE_2EZ-eZdAmoXfWVFh04vo5gEAjapMVkPb-oIlIQVqGE3d7dmSfA"
                }
              ].map((article, i) => (
                <article key={i} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl mb-6 shadow-sm">
                    <img className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" alt={article.title} src={article.image}/>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1 rounded text-[10px] font-bold tracking-widest">{article.tag}</div>
                  </div>
                  <time className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-3">{article.date}</time>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{article.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Upcoming Events (Professional List) */}
      <AnimatedSection animation="fadeUp">
        <section className="py-24 px-8 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6 leading-tight">Engage With<br/>The Community</h2>
              <p className="text-slate-500 mb-10 leading-relaxed font-sans font-medium">Where ideas collide. Join our curated series of summits, dinners, and panel discussions designed for intellectual exchange.</p>
              <button className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-slate-500 hover:border-slate-500 transition-all">Full Calendar View</button>
            </div>
            <div className="md:w-2/3 flex flex-col">
              {[
                { date: "NOV 14", title: "Global Leaders Summit 2024", location: "London • Royal Hall" },
                { date: "DEC 02", title: "The Winter Gala & Giving Night", location: "New York • Met Museum" },
                { date: "JAN 15", title: "Venture Pitch: Alumni Edition", location: "San Francisco • Hub 71" }
              ].map((event, i) => (
                <div key={i} className="group flex items-center justify-between py-8 border-b border-slate-100 hover:px-4 transition-all cursor-pointer">
                  <div className="flex items-center gap-12">
                    <div className="text-xl font-serif font-bold text-slate-300 group-hover:text-slate-900 transition-colors w-20">{event.date}</div>
                    <div>
                      <h4 className="text-xl font-serif font-bold text-slate-900 group-hover:text-primary transition-colors">{event.title}</h4>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">{event.location}</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-slate-900 group-hover:translate-x-2 transition-all">arrow_forward</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}
