"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import AnimatedSection from "@/components/AnimatedSection";
import { useRouter } from "next/navigation";

export default function EventsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(null); // ID of event being reserved
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await fetch(`/api/events?t=${Date.now()}`);
      if (res.ok) {
        const data = await res.json();
        setEvents(data);
      }
    } catch (err) {
      console.error("Failed to fetch events");
    } finally {
      setLoading(false);
    }
  };

  const handleReserve = async (eventId) => {
    if (status !== "authenticated") {
      router.push("/login");
      return;
    }

    setProcessing(eventId);
    setMessage({ type: "", text: "" });

    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventId }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: data.message });
        await fetchEvents(); // Refresh counts
      } else {
        setMessage({ type: "error", text: data.message });
      }
    } catch (err) {
      setMessage({ type: "error", text: "An error occurred. Please try again." });
    } finally {
      setProcessing(null);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-8 pt-32">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fadeIn">
          <div className="mb-16">
            <h1 className="text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">Summits & Gatherings</h1>
            <p className="text-slate-500 font-medium max-w-2xl leading-relaxed">Join our curated series of professional summits and networking circles. Secure your seat today as capacity is strictly limited.</p>
          </div>
        </AnimatedSection>

        {message.text && (
          <div className={`mb-12 p-4 rounded-xl flex items-center gap-2 text-sm font-bold animate-fadeUp ${
            message.type === "success" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-red-50 text-red-600 border border-red-100"
          }`}>
            <span className="material-symbols-outlined">{message.type === "success" ? "check_circle" : "error"}</span>
            {message.text}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            [...Array(3)].map((_, i) => (
              <div key={i} className="bg-white aspect-[3/4] rounded-2xl border border-slate-100 animate-pulse"></div>
            ))
          ) : (
            events.map((event) => {
              const eventId = event._id || event.id;
              const attendees = event.attendees || [];
              const isReserved = attendees.includes(session?.user?.email);
              const isFull = attendees.length >= event.capacity;
              
              return (
                <AnimatedSection key={eventId} animation="fadeUp">
                  <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col h-full">
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                      />
                      <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded text-[10px] font-bold tracking-widest text-white uppercase">
                        {event.category}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <div className="text-slate-900 font-bold text-base">{event.date}</div>
                        <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{event.location}</div>
                      </div>

                      <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 line-clamp-1">{event.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">{event.description}</p>

                      <div className="mt-auto">
                        <div className="flex items-center justify-between mb-6 pt-4 border-t border-slate-50">
                          <div className="flex -space-x-2">
                            {[...Array(3)].map((_, i) => (
                              <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[9px] font-bold text-slate-400">
                                {i === 2 ? `+${attendees.length}` : ""}
                              </div>
                            ))}
                          </div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                            {event.capacity - attendees.length} Seats Available
                          </div>
                        </div>

                        <button 
                          onClick={() => handleReserve(eventId)}
                          disabled={processing === eventId || isFull}
                          className={`w-full py-3.5 rounded-lg font-bold text-[11px] uppercase tracking-widest transition-all ${
                            isReserved 
                              ? "bg-emerald-50 text-emerald-600 border border-emerald-100 cursor-default" 
                              : isFull
                              ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                              : "bg-slate-900 text-white shadow-lg hover:bg-slate-800 active:scale-[0.98]"
                          }`}
                        >
                          {processing === eventId ? "Processing..." : isReserved ? "Confirmed ✓" : isFull ? "Fully Booked" : "Reserve Ticket"}
                        </button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })
          )}
        </div>
      </div>
    </main>
  );
}
