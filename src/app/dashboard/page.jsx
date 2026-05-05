import AnimatedSection from "@/components/AnimatedSection";

export const metadata = {
  title: "Dashboard | Alumni Portal",
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen px-8 md:px-12 max-w-[1600px] mx-auto pb-16 pt-12">
      {/* Welcome Header Band */}
      <AnimatedSection animation="fadeIn">
        <header className="py-12 border-b-4 border-black mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-2">
            <p className="font-label-bold uppercase text-primary tracking-[0.2em]">Dashboard / Overview</p>
            <h1 className="font-headline-xl text-on-surface uppercase">Welcome back, <br/>Director Vance.</h1>
          </div>
          <div className="flex flex-col items-end">
            <div className="bg-black text-white p-6 border-4 border-[#BDFF00] hard-offset-accent">
              <p className="font-label-sm uppercase text-[#BDFF00]">Current Tier</p>
              <p className="font-headline-md italic">Founding Fellow</p>
            </div>
          </div>
        </header>
      </AnimatedSection>

      {/* Bento Grid Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Network Pulse - Primary Stats */}
        <section className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-gutter">
          <AnimatedSection animation="fadeUp" delay={0.1} className="h-full">
            <div className="bg-white border-2 border-black p-6 hard-offset-primary flex flex-col justify-between aspect-square md:aspect-auto h-full min-h-[200px] hover:-translate-y-1 transition-transform">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-4xl">hub</span>
                <span className="font-label-bold text-green-600">+12%</span>
              </div>
              <div>
                <p className="text-5xl font-headline-lg font-black italic">4.2k</p>
                <p className="font-label-bold uppercase text-secondary">Network Pulse</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.2} className="h-full">
            <div className="bg-primary-container border-2 border-black p-6 hard-offset-primary flex flex-col justify-between h-full min-h-[200px] hover:-translate-y-1 transition-transform">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-4xl">history_edu</span>
                <span className="font-label-bold">NEW</span>
              </div>
              <div>
                <p className="text-5xl font-headline-lg font-black italic">28</p>
                <p className="font-label-bold uppercase text-black">Active Mentorships</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.3} className="h-full">
            <div className="bg-black text-white border-2 border-black p-6 hard-offset-accent flex flex-col justify-between h-full min-h-[200px] hover:-translate-y-1 transition-transform">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-4xl text-[#BDFF00]">stars</span>
              </div>
              <div>
                <p className="text-5xl font-headline-lg font-black italic text-[#BDFF00]">$1.4M</p>
                <p className="font-label-bold uppercase">Total Giving</p>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Upcoming Milestones */}
        <section className="md:col-span-4 h-full">
          <AnimatedSection animation="scaleIn" delay={0.4} className="h-full">
            <div className="bg-surface-container border-2 border-black p-8 hard-offset-primary h-full flex flex-col">
              <div className="flex justify-between items-center mb-6 border-b-2 border-black pb-2">
                <h2 className="font-headline-md uppercase italic">Milestones</h2>
                <span className="material-symbols-outlined">event_note</span>
              </div>
              <div className="space-y-6 flex-grow">
                {[
                  { date: "October 24, 2024", title: "Global Alumni Summit 2024", loc: "Main Hall, 09:00 AM", border: "border-primary" },
                  { date: "November 12, 2024", title: "Endowment Gala Night", loc: "Ritz Carlton Ballroom", border: "border-black" },
                  { date: "December 05, 2024", title: "Q4 Board Mentorship Review", loc: "Virtual Session", border: "border-black" }
                ].map((m, i) => (
                  <div key={i} className={`group border-l-4 ${m.border} pl-4 py-1 cursor-pointer`}>
                    <p className="font-label-sm text-secondary uppercase">{m.date}</p>
                    <p className="font-body-lg font-bold group-hover:text-primary transition-colors">{m.title}</p>
                    <p className="font-label-sm text-secondary italic">{m.loc}</p>
                  </div>
                ))}
              </div>
              <button className="mt-8 w-full py-4 border-2 border-black font-label-bold uppercase hover:bg-black hover:text-white transition-all hard-offset-primary hard-offset-interactive">View Full Calendar</button>
            </div>
          </AnimatedSection>
        </section>

        {/* Recent Activity - Wide Section */}
        <section className="md:col-span-12 lg:col-span-7 mt-8">
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div className="bg-white border-2 border-black hard-offset-primary overflow-hidden">
              <div className="p-8 border-b-2 border-black flex justify-between items-center bg-black text-white">
                <h2 className="font-headline-md uppercase italic">Recent Activity</h2>
                <button className="text-xs font-label-bold uppercase border border-white px-3 py-1 hover:bg-[#BDFF00] hover:text-black hover:border-black transition-colors">Export Log</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-surface-container border-b-2 border-black">
                      <th className="p-6 font-label-bold uppercase">Member</th>
                      <th className="p-6 font-label-bold uppercase">Action</th>
                      <th className="p-6 font-label-bold uppercase">Date</th>
                      <th className="p-6 font-label-bold uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-2 divide-surface-container">
                    {[
                      { name: "Arthur Sterling", action: "Donated $50k to Library Fund", time: "2h ago", status: "Verified", statusColor: "bg-primary-container", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO2uyg5blwQgKgFW_Z9VrwR8QcC07PDTFEmiKyhpcysgb9__w-KUT6BAWi4XZT0nau9kZu4QsqErDmWNS4BE7ZiEt5-aFxMF0ozGaKeUNBcsZaIY4OJC-6R1GpGDAHlMi1hsgMEM3lWAS8xGx3OyLOT33lFPqdL8O5t-kCZqV5z4XrX093C_qbPZOXadHhcLjOsh9cytzsju1OyoRx7tLhYuzBUbs0QrgBkJx1bTSgZ8iH6rCMQgWCpnSmXcwxxvE6j0_C4iUzisQ" },
                      { name: "Elena Vance", action: "Joined Mentorship Circle", time: "5h ago", status: "Pending", statusColor: "bg-tertiary-container text-secondary", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWdROQXC0-dS6SYDVx6Rnd7kd2hqrGaBpVz6QfY3GBo43osjKSRbl3Vr__OsBlTZc-Supi1m5aDBHM1Dw9JtMIwhrRWHfClLN3HuOhjonMnpliRF2YC7sE2E6GcJxt5p-ptU0k0ermW0sc9Sn4lvk0dUHCIKQ5Jdf3YI3tnFNRqIn6uzTOxJWuYaA0-ABM4jyJg-WvCqJ2SHgdMH4L7VgWBNvIOpd6cmZS0roWDX2_EZbK0JIohXAKnVdzxVD8Ga9Uc1fOuFazc5Q" },
                      { name: "Dr. Julian Reed", action: "Published in Alumni Magazine", time: "Yesterday", status: "Live", statusColor: "bg-primary-container", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDb9Z41LNvCtHybAiJePZt5zZO1tL14SnGUh9TkbLKDXTAoyGQwylI56ng-nRva7XzejPSdbyyZi8aYTLBxiQuGRhYr8ckPObTGSMvZLWP2tGIca11PR1nBSsisotO2hXe2Fi3CZQ-HNpu6P9u-_NRE-8n3eatJFxus49BSEPq79fY0egS96fHSkp9GcQTpW2C98MfS-xd9G72vnzmH24mwAe9Gqrg94aVzSLwur_A3dMIh6jlpMhlEV7_zIvWHBeNu4T8h4PcGzxg" }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-surface-container/50 transition-colors">
                        <td className="p-6 flex items-center gap-4">
                          <div className="w-10 h-10 bg-black border border-black overflow-hidden shrink-0">
                            <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" alt={row.name} src={row.img}/>
                          </div>
                          <span className="font-body-md font-bold whitespace-nowrap">{row.name}</span>
                        </td>
                        <td className="p-6 font-body-md">{row.action}</td>
                        <td className="p-6 text-secondary font-label-sm whitespace-nowrap">{row.time}</td>
                        <td className="p-6">
                          <span className={`${row.statusColor} px-3 py-1 border border-black font-label-sm uppercase whitespace-nowrap`}>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Member Benefits - Bento Grid Component */}
        <section className="md:col-span-12 lg:col-span-5 flex flex-col gap-gutter mt-8">
          <AnimatedSection animation="fadeUp" delay={0.4} className="flex-1">
            <div className="bg-white border-2 border-black p-8 hard-offset-primary h-full">
              <h2 className="font-headline-md uppercase italic mb-6">Exclusive Benefits</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "library_books", text: "Digital Archive Access" },
                  { icon: "travel_explore", text: "Travel & Concierge" },
                  { icon: "business_center", text: "Exec Recruitment" },
                  { icon: "stadium", text: "Premium Ticketing" }
                ].map((b, i) => (
                  <div key={i} className="border-2 border-black p-4 hover:bg-[#BDFF00] hover:-translate-y-1 transition-all group cursor-pointer">
                    <span className="material-symbols-outlined text-3xl mb-2">{b.icon}</span>
                    <p className="font-label-bold uppercase leading-tight group-hover:text-black">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Featured Magazine Module */}
          <AnimatedSection animation="scaleIn" delay={0.5}>
            <div className="relative bg-black h-[240px] border-2 border-black overflow-hidden hard-offset-accent group cursor-pointer">
              <img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700" alt="Magazine abstract" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJNj1SgLhw0QdwAPDl6EHDjBaRsrr6BqXYXYygddEYWDwP19lBo4Em4GmuPIg8QzBviB6K1ik2toPREtpm_1LregoER6jpjjmTUyDEIj182WyiUlT5-iv1uyjEsjIvZxygjs98g8zN_NqRaKI0FeadHZMISXDr8llx_6mANVntP2ESTjXZUDcOikKw-2hIMstUmKyuVT-JH8pzczy4gIEqCKWoteNiwwP9UDbsGbswaRp8oh6CDuDwVjy6JFyvl7BFVCTxVjHZECk"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-8 flex flex-col justify-end">
                <p className="font-label-sm text-[#BDFF00] uppercase tracking-widest mb-2">Magazine Feature</p>
                <h3 className="font-headline-md text-white uppercase italic leading-none">The Future of <br/>Legacy Institutions</h3>
                <span className="mt-4 flex items-center gap-2 text-white font-label-bold uppercase text-xs group-hover:gap-4 transition-all">
                  Read Now <span className="material-symbols-outlined">arrow_forward</span>
                </span>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </main>
  );
}
