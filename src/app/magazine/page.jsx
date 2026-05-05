"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function MagazinePage() {
  const articles = [
    {
      title: "The Future of AI in Modern Leadership",
      category: "TECHNOLOGY",
      author: "Dr. Sarah Chen",
      date: "Oct 24, 2024",
      excerpt: "How alumni leaders are integrating neural networks into corporate strategy and operations.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Sustainability: More Than a Buzzword",
      category: "ENVIRONMENT",
      author: "Marcus Thorne",
      date: "Oct 15, 2024",
      excerpt: "Inside the push for carbon neutrality across our global alumni network's diverse industries.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Venture Capital in the New Era",
      category: "FINANCE",
      author: "Elena Rodriguez",
      date: "Oct 02, 2024",
      excerpt: "Why alumni-led funds are shifting focus towards deep-tech and hardware startups.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-8">
        <AnimatedSection animation="fadeIn">
          <div className="mb-16 border-b border-slate-200 pb-12 flex justify-between items-end">
            <div>
              <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4 italic">Alumni Monthly • Issue 42</p>
              <h1 className="text-6xl font-serif font-bold text-slate-900 leading-tight">Insight & Excellence</h1>
            </div>
            <div className="hidden lg:block text-right">
              <p className="text-sm font-bold text-slate-400">AUTUMN EDITION</p>
              <p className="text-sm font-medium text-slate-500">NOVEMBER 2024</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Featured Story */}
        <AnimatedSection animation="fadeUp">
          <div className="relative h-[600px] rounded-3xl overflow-hidden mb-16 group cursor-pointer shadow-2xl">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1500&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-12 max-w-3xl">
              <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest mb-6 inline-block">Featured Story</span>
              <h2 className="text-5xl font-serif font-bold text-white mb-6 leading-tight group-hover:underline decoration-white/30 underline-offset-8">The Global Impact of Alumni-Led Social Enterprise</h2>
              <p className="text-slate-300 text-lg leading-relaxed">Meet the visionaries who are using their professional mastery to solve the world's most pressing humanitarian challenges.</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {articles.map((article, idx) => (
            <AnimatedSection key={idx} animation="fadeUp">
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-sm">
                  <img src={article.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{article.category}</span>
                  <span className="text-[10px] font-bold text-slate-400">{article.date}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight">{article.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{article.excerpt}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-tight">By {article.author}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </main>
  );
}
